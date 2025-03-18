const express = require('express');
const router = express.Router();

//Routes
router.get('/', (req, res) => {
    res.render('login');
})
router.get('/register', (req, res) => {
    res.render('register');
})
router.get('/general_leave', (req, res) => {
    res.render('gen_leave');
})
router.get('/emergency_leave', (req, res) => {
    res.render('emer_leave');
})
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
})
router.get('/dashboard_admin', (req, res) => {
    res.render('dashboard_admin');
})
router.get('/admin_login', (req, res) => {
    res.render('admin_login');
})

module.exports = router;