const { HttpCode } = require('../helpers/constants');
const { ContactsService } = require('../services');
const ContactService = new ContactsService();

const listContacts = (req, res, next) => {
  try {
    const contacts = ContactService.listContacts();
    res.status(HttpCode.OK).json({
      status: 'success',
      code: HttpCode.OK,
      data: {
        contacts,
      },
    });
  } catch (e) {
    next(e);
  }
};
const getById = (req, res, next) => {
  try {
    const contact = ContactService.getById(req.params);
    if (contact) {
      return res.status(HttpCode.OK).json({
        status: 'success',
        code: HttpCode.OK,
        data: {
          contact,
        },
      });
    } else {
      return next({
        status: HttpCode.NOT_FOUND,
        message: 'Not Found contact',
        data: 'Not Found',
      });
    }
  } catch (e) {
    next(e);
  }
};
const create = (req, res, next) => {
  try {
    const contact = ContactService.create(req.body);
    res.status(HttpCode.CREATED).json({
      status: 'success',
      code: HttpCode.CREATED,
      data: {
        contact,
      },
    });
  } catch (e) {
    next(e);
  }
};
const update = (req, res, next) => {
  try {
    const contact = ContactService.update(req.params, req.body);
    if (contact) {
      return res.status(HttpCode.OK).json({
        status: 'success',
        code: HttpCode.OK,
        data: {
          contact,
        },
      });
    } else {
      return next({
        status: HttpCode.NOT_FOUND,
        message: 'Not Found contact',
      });
    }
  } catch (e) {
    next(e);
  }
};

const remove = (req, res, next) => {
  try {
    const contact = ContactService.remove(req.params);
    if (contact) {
      return res.status(HttpCode.OK).json({
        status: 'success',
        code: HttpCode.OK,
        data: {
          contact,
        },
      });
    } else {
      return next({
        status: HttpCode.NOT_FOUND,
        message: 'Not Found contact',
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  listContacts,
  getById,
  create,
  update,
  remove,
};
