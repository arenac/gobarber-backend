import User from './app/models/User';

const { Router } = require('express');

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Nilo Neregato',
    email: 'neregato.nilo@gmail.com',
    password_hash: '123456',
  });

  return res.json(user);
});

export default routes;
