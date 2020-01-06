const Sequelize = require('sequelize');
const db = require('../../config/database');


const userModel =  db.define('Users',{
	username:{
		type:Sequelize.STRING
	},
	email:{
		type:Sequelize.STRING
	},
	hoby:{
		type:Sequelize.STRING
	},
})


module.exports = userModel;