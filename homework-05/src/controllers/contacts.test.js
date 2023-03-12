const contact = require('./contacts');
const { HttpCode } = require('../helpers/constants');
const { ContactsService } = require('../services');
jest.mock('../services');

describe('Unit tests', () => {
  let req, res, next;
  beforeEach(() => {
    req = { user: { id: 1 } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(data => data),
    };
    next = jest.fn();
  });
  test('should get contacts', async () => {
    const result = await contact.listContacts(req, res, next);
    expect(ContactsService).toHaveBeenCalled();
  });
});
