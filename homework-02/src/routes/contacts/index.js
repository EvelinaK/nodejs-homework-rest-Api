const express = require('express');
const router = express.Router();
const { validateCreateCotact, validateUpdateCotact } = require('../../validation/contactsValid');
const controllerContacts = require('../../controllers/contacts');

router
  .get('/', controllerContacts.listContacts)
  .get('/:id', controllerContacts.getById)
  .post('/', validateCreateCotact, controllerContacts.create)
  .put('/:id', validateUpdateCotact, controllerContacts.update)
  .delete('/:id', controllerContacts.remove);

module.exports = router;
