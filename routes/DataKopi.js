const router = require('express').Router()
const controller = require('../controller/DataKopi')
const multer = require('multer')

const gambar = multer.diskStorage({
    filename: async function (req, file, cb) {
        let ext = file.originalname.substring(
            file.originalname.lastIndexOf("."),
            file.originalname.length
        )
        cb(null, Date.now() + ext)
    },
    destination: async function (req, file, cb) {
        cb(null, './public/img')
    }
    
})
const uploadImg = multer({ storage: gambar}).single("gambar")

router.post('/input', uploadImg, controller.inputDataKopi)
router.get('/get-data', controller.getDataKopi)
router.get('/get-data/:id', controller.getDataById)
router.delete('/delete-kopi/:id', controller.hapusDataKopi)
router.put('/update-kopi/:id', uploadImg, controller.updateKopi)

module.exports = router