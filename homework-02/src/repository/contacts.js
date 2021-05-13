const { v4: uuid } = require('uuid');
const db = require('../db');
class ContactsRepository {
  listContacts() {
    return db.get('contacts').value();
  }
  getById(id) {
    return db.get('contacts').find({ id }).value();
  }

  create({ name, email, phone }) {
    const id = uuid();
    const record = {
      id,
      name,
      email,
      phone,
    };
    db.get('contacts').push(record).write();
    return record;
  }

  update(id, body) {
    const record = db.get('contacts').find({ id }).assign(body).value();
    db.write();
    return record.id ? record : null;
  }

  remove(id) {
    const [record] = db.get('contacts').remove({ id }).write();
    return record;
  }
}

module.exports = ContactsRepository;
