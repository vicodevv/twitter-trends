const router = require('express').Router();
const twitter = require('twitter')

// To get trending topics
router.get('/trends', async (req, res, next) => {
  const id = req.query.woeid;
  res.send({ message: 'Ok api is working 🚀' });
});

// To get the WOE-ID for a particular location
router.get('/near-me', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

module.exports = router;
