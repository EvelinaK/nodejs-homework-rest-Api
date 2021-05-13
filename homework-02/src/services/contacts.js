const { ContactsRepository } = require('../repository');
class ContactService {
  constructor() {
    this.repositories = {
      contacts: new ContactsRepository(),
    };
  }
  listContacts() {
    return this.repositories.contacts.listContacts();
  }

  getById({ id }) {
    return this.repositories.contacts.getById(id);
  }
  create(body) {
    return this.repositories.contacts.create(body);
  }

  update({ id }, body) {
    return this.repositories.contacts.update(id, body);
  }

  remove({ id }) {
    return this.repositories.contacts.remove(id);
  }
}

module.exports = ContactService;
