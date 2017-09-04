import Page from '../models/page';
import User from '../models/user';

export async function create(req, res, next) {
  const pageData = req.body;
  const userId = req.user._id;

  pageData.userId = userId;

  try {
    var page = await Page.create(pageData);
  } catch ({ message }) {
    return next({
      status: 400,
      message
    });
  }

  res.json(page);
}

export async function getAll(req, res, next) {
  try {
    var pages = await Page.find({});
  } catch ({ message }) {
    return next({
      status: 500,
      message
    });
  }

  res.json({ pages });
}

export async function getPagesByUserLogin(req, res, next) {
  const { login } = req.params;

  try {
    var user = await User.findOne({ login });
  } catch ({ message }) {
    return next({
      status: 500,
      message
    });
  }

  if (!user) {
    return next({
      status: 404,
      message: 'User not fond'
    });
  }

  try {
    var pages = await Page.find({ userId: user._id });
  } catch ({ message }) {
    return next({
      status: 500,
      message
    });
  }

  res.json({ pages });
}

export async function deletePage(req, res, next) {
  const _id = req.params.id;
  const userId = req.user._id;

  try {
    var page = await Page.findOne({ _id });
  } catch ({ message }) {
    return next({
      status: 500,
      message
    });
  }

  if (!page) {
    return next({
      status: 404,
      message: 'Page not fond'
    });
  }

  if (userId.toString() !== page.userId.toString()) {
    return next({
      status: 403,
      message: 'Permission denied'
    });
  }

  try {
    page.remove();
  } catch ({ message }) {
    return next({
      status: 500,
      message
    });
  }

  return res.json({ message: 'success' });
}