const express = require('express');
const router = express.Router();

const {userTableController} = require('../controllers/controller');

// module.exports =(app)=>{
//     app.get('/', articleController.createArticle)
// };

router.get('/createTable', userTableController);

module.exports = router;