import jwt from 'jsonwebtoken';

import User from '../models/user';
import config from '../config';

export async function getUserByToken(token) {
  const { _id } = token;

  try {
    var user = await User.findOne({ _id }, { password: 0 });
  } catch (e) {
    throw e;
  }

  return user;
}