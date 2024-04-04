const {Router}=require('express');
const express=require('express');
const router=express.Router();
const Authcontroller =require('../controllers/appController');

router.get('/login',Authcontroller.login);

router.get('/getemp',Authcontroller.getempdetails);

router.post('/register',Authcontroller.register);
router.post('/EmpDelete',Authcontroller.EmpDelete);


module.exports=router;