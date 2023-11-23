const { BolaBio, User, Profile, Position } = require('../models');
const bcrypt = require('bcryptjs');

class Controller {
    static home(req, res) {
        res.render('home');
    }

    static home1(req, res) {
        if (req.session.user) {
            const userName = req.session.user.name || 'Unknown User';
            res.render('home1', { userName });
        } else {
            res.redirect('/login');
        }
    }

    static async login(req, res) {
        const { email, password } = req.body;

        try {
            if (!email || !password) {
                throw new Error('Email and password are required');
            }

            const user = await User.findOne({
                where: { email },
                include: Profile,
            });

            if (!user) {
                throw new Error('User not found');
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                req.session.user = {
                    id: user.id,
                    name: user.Profile.name || 'Unknown User',
                    role: user.role,
                };

                if (user.role === 'Admin') {
                    res.redirect('/user');
                } else {
                    res.redirect('/home1');
                }
            } else {
                throw new Error('Invalid password');
            }
        } catch (error) {
            console.error(error);
            req.flash('error', error.message);
            return res.render('login');
        }
    }

    static async register(req, res) {
        const { email, password, name, birthDate } = req.body;

        try {
            if (!email || !password) {
                throw new Error('Username, email, and password are required');
            }

            const profile = await Profile.create({
                name,
                birthDate,
            });

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
                email,
                password: hashedPassword,
                ProfileId: profile.id,
                role: 'User',
            });

            req.session.user = {
                id: user.id,
                name: profile.name || 'Unknown User',
            };

            return res.redirect('/home1');
        } catch (error) {
            console.error(error);
            req.flash('error', error.message);
            return res.render('register');
        }
    }

    static logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
            }
            res.redirect('/login');
        });
    }

    static async showAllBio(req, res) {
        try {
            const data = await BolaBio.findAll({
                include: {
                    model: Position,
                    attributes: ['name'],
                },
            });
    
            const isAdmin = req.session.user && req.session.user.role === 'Admin';
    
            res.render('showBioBola', { data, isAdmin });
        } catch (error) {
            res.send(error.message);
        }
    }
    



    static async delete(req, res) {
        try {
            let id = req.params.id;
            await BolaBio.destroy({
                where: { id: id },
            });
            res.redirect('/');
        } catch (error) {
            res.send(error);
        }
    }

    static async addBio(req, res) {
        try {
            res.render('formBioBola');
        } catch (error) {
            res.send(error);
        }
    }

    static async postAddBio(req, res) {
        try {
            await BolaBio.create({
                name: req.body.name,
                birthDate: req.body.birthDate,
                nationality: req.body.nationality,
                description: req.body.description,
                club: req.body.club,
                shortDescription: req.body.shortDescription,
                PositionId: req.body.PositionId,
            });
            res.redirect('/bio');
        } catch (error) {
            res.send(error);
        }
    }

    static async editBio(req, res) {
        try {
            res.render('editBioBola');
        } catch (error) {
            res.send(error);
        }
    }

    static async postEditBio(req, res) {
        try {
            await BolaBio.update(
                {
                    name: req.body.name,
                    birthDate: req.body.birthDate,
                    nationality: req.body.nationality,
                    description: req.body.description,
                    club: req.body.club,
                    shortDescription: req.body.shortDescription,
                    PositionId: req.body.PositionId,
                },
                { where: { id: req.params.id } }
            );
            res.redirect('/');
        } catch (error) {
            res.send(error);
        }
    }
    static async updateUserRole(req, res) {
        const { userId, newRole } = req.body;

        try {
            if (!userId || !newRole) {
                throw new Error('User ID and new role are required');
            }

            const user = await User.findByPk(userId);

            if (!user) {
                throw new Error('User not found');
            }

            user.role = newRole;
            await user.save();

            res.redirect('/user');
        } catch (error) {
            console.error(error);
            req.flash('error', error.message);
            res.redirect('/user');
        }
    }

    static async showAllUsers(req, res) {
        try {
            if (req.session.user && req.session.user.role === 'Admin') {
                const users = await User.findAll();
                res.render('showAllUsers', { users });
            } else {
                req.flash('error', 'You do not have permission to view this page');
                res.redirect('/home1');
            }
        } catch (error) {
            console.error(error);
            req.flash('error', error.message);
            res.redirect('/home1');
        }
    }
}

module.exports = Controller;
