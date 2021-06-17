const express = require('express');
const sourceController = require('../controllers/sourceController');

const router = express.Router();

router
  .route('/')
  .get(sourceController.getAllSources)
  .post(sourceController.createSource);
router
  .route('/:id')
  .get(sourceController.getSource)
  .patch(sourceController.updateSource)
  .delete(sourceController.deleteSource);

module.exports = router;
