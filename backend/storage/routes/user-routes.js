// private routes go here
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { currentUser } = require('../controllers/private-controller');

const checkAccessToken = (req, res, next) => {
  const { token } = req.headers;
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send('incorrect token');
    } else {
      // you have access to decoded here
      req.user = decoded
      next()
    }
  })
}

router.use(checkAccessToken)

router.get('/current-user', currentUser);

module.exports = router;