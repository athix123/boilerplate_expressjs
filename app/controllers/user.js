const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const saltRounds = 10;
const bcrypt = require('bcryptjs');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/users', (req, res, next) => {
	res.status(200).json({
		message: 'Ready!',
	})
});

router.get('/user/:id', (req, res) => {
	res.status(200).json({
		message: 'Ready!',
	})
});

router.post('/user', (req, res, next) => {
	res.status(200).json({
		message: 'Ready!',
	})
});

router.delete('/user/:id', (req,res,next)=>{
	res.status(200).json({
		message: 'Ready!',
	})
})