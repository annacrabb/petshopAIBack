const express = require('express');
const {
    createPet,
    createSponsor,
    getPet,
    getPetsOne,
    getPetsTwo,
    getPetsThree,
    getSponsors,
    updatePet
} = require('../controllers/petController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();


//GET all sponsors
router.get('/acknowledgements', getSponsors)



//require authorization for getting a single pet or adding a new pet
//router.use(requireAuth)

//GET pets by tier
router.get('/sponsor/tierOne', getPetsOne)
router.get('/sponsor/tierTwo', getPetsTwo)
router.get('/sponsor/tierThree', getPetsThree)

//GET a single pet
router.get('/sponsor/:id', getPet)

//POST a new pet
router.post('/sponsor', createPet)

//POST a new sponsor
router.post('/acknowledgements', createSponsor)

//UPDATE an animal
router.patch('/sponsor/:id', updatePet)


module.exports = router;