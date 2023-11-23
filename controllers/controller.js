const { BolaBio } = require('../models')
const { Op } = require('sequelize')

class Controller{
    static async showAllBio(){
        try {
            let data = await BolaBio.findAll()
            res.render('showBioBola',{data})
        } catch (error) {
            res.send(error)
        }
    }

    static async delete(req, res){
        try {
            let id = req.params.id
            await BolaBio.destroy({
                where:{id: id}
            })
            res.redirect('/')
        } catch (error) {
            res.send(error)
        }
    }

    static async addBio(req, res){
        try {
            res.render('formBioBola')
        } catch (error) {
            res.send(error)
        }
    }

    static async postAddBio(req, res){
        try {
            // console.log(req.body)
            await BolaBio.create({
                name: req.body.name,
                birthDate: req.body.birthDate,
                nationality: req.body.nationality,
                description: req.body.description,
                club: req.body.club,
                shortDescription: req.body.shortDescription,
                PositionId: req.body.PositionId,
            })
            res.redirect('/')
        } catch (error) {
            res.send(error)
        }
    }

    static async editBio(req, res){
        try {
            res.render('')
        } catch (error) {
            res.send(error)
        }
    }

    static async postEditBio(req, res){
        try {
            // console.log(req.body)
            await BolaBio.update({
                name: req.body.name,
                birthDate: req.body.birthDate,
                nationality: req.body.nationality,
                description: req.body.description,
                club: req.body.club,
                shortDescription: req.body.shortDescription,
                PositionId: req.body.PositionId,
            }, {where: {id: req.params.id}})
            res.redirect('')
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = Controller