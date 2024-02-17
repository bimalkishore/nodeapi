const express = require('express');
const { createUser, getAllUser, getUserById, updateUser,deleteUser } = require('../controlles/userController')
const router = express.Router()

//Post Method
router.post('/create', createUser);

//Get all Method
router.get('/getAll', getAllUser);

//Get by ID Method
router.get('/getOne/:id', getUserById);

//Update by ID Method
router.patch('/update/:id', updateUser);

//Delete by ID Method
router.delete('/delete/:id', deleteUser);

module.exports = router;