const express = require('express')
const router = express.Router()
const {GetMascot, HomeRoute, CreateMascot, GetOneMascot, DeleteMascot, UpdateMascot} = require('../controllers/mascots.controller')

router.get('/', HomeRoute)
router.get('/mascots', GetMascot)
router.get('/mascots/:id', GetOneMascot)
router.post('/mascots', CreateMascot)
router.put('/mascots/:id', UpdateMascot)
router.delete('/mascots/:id', DeleteMascot)





module.exports = router