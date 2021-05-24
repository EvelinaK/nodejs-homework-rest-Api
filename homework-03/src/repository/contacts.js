const Contact = require('../shemas/contacts');
class ContactsRepository {
  constructor() {
    this.model = Contact;
  }
  async listContacts() {
    const results = await this.model.find({});
    return results;
  }
  async getById(id) {
    try {
      const result = await this.model.findOne({ _id: id });
      return result;
    } catch (e) {
      e.status = 400;
      e.data = 'bad request';
      throw e;
    }
  }

  async create(body) {
    const result = await this.model.create(body);
    return result;
  }

  async update(id, body) {
    const result = await this.model.findByIdAndUpdate({ _id: id }, { ...body }, { new: true });
    return result;
  }

  async remove(id) {
    const result = await this.model.findByIdAndDelete({ _id: id });
    return result;
  }
}

module.exports = ContactsRepository;
