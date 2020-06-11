const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  res.render('users/user', {title: 'Profile',user:{name:'Yovani',lastn:'Pahuara'}});
});

module.exports = router;