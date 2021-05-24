const express = require('express');
const router = express.Router();
const {
  validateCreateCotact,
  validateUpdateCotact,
  validateUpdateStatusCotact,
} = require('../../validation/contactsValid');
const controllerContacts = require('../../controllers/contacts');

router
  .get('/', controllerContacts.listContacts)
  .get('/:id', controllerContacts.getById)
  .post('/', validateCreateCotact, controllerContacts.create)
  .put('/:id', validateUpdateCotact, controllerContacts.update)
  .patch('/:id/favorite', validateUpdateStatusCotact, controllerContacts.updateStatus)
  .delete('/:id', controllerContacts.remove);

module.exports = router;
