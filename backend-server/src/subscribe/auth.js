import User from '../model/user.js';

// expect payload to be a user token
const LOGIN = socket => payload => {
  User.fromToken(payload)
    .then(user => {
      socket.username = user.username;

      let result = {
        username: socket.username,
        content: 'joined chat',
        meta: true,
      };

      socket.broadcast.emit('USER_CONNECTED', result);
    });
};

const LOGOUT = socket => payload => {
  let result = {
    username: socket.username,
    content: 'left chat',
    meta: true,
  };

  socket.broadcast.emit('USER_DISCONNECTED', result);
  delete socket.username;
};

/*
{
  LOGIN: LOGIN(socket)(payload),
  LOGOUT: LOGOUT(socket)(payload)
}
*/

export default { LOGIN, LOGOUT };