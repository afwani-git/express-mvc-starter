const router = require('express').Router();
const userModel = require('../models/userModel');
const tesMiddleware = require('../middleware/tes');

router.get('/tesdb',(req,res) => {
	//tes db 
	userModel.findAll().then((data) => {
		res.status(200).json({
			status:200,
			length:data.length,
			data:data
		});
	}).catch(err => err)
})

router.get('/',tesMiddleware,(req,res) => {
	//tes view engine
	const msg = req.name;
	res.status(200).render('index',{
		name:msg
	})

})


module.exports = router;