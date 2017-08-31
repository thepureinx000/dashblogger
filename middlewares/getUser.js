import * as UserService from '../services/UserService';

export default async function (req, res, next) {
  const { token } = req;

  try {
    var user = await UserService.getUserByToken(token);
  } catch ({ message }) {
    return next({
      status: 500,
      message
    });
  }

  req.user = user;
  next();
}