const express = require('express')
const Companion = require('./companions-model')
const router = express.Router()

router.get('/companions', (req, res, next) => {
    try {
        const companions = Companion.getAll()
        res.status(200).json(companions)
    } catch (err) {
        next(err)
    }
})
router.get('/companions/:id', (req,res,next) => {
res.end()
    })
router.post('/companions', (req, res, next) => {
    try {
        if(!req.body.name) return res.status(422).end()
        res.status(201).json(Companion.insert(req.body))
    } catch (err) {
        next(err)
    }
})
router.delete('/companions/:id', (req,res,next)=>{
    res.end()
})

//***********************500 error middleware***********//
//eslint-disable-next-line
router.use((err, req, res, next) => {
    console.log(err.message); // delete after
    res.status(err.status || 500).json({
        message: err.message,
        devMessage: 'Something bad inside the companions router!'
    });
});

module.exports = router