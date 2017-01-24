const password = require('./password');
const R = require('ramda');

const authError = 'username or password invalid';
const authReject = () => Promise.reject({authError});


module.exports = (user, pass) => {
  console.log('runnig authentication');
  if (!user) {
    console.log('user not found');
    return authReject();
  } else {
    let compare = password.compare(pass, user.password);
    if (compare) {
      return Promise.resolve({
        msg: 'Login successful',
        user: R.dissoc('password', user)
      });
    } else {
      return authReject();
    }
  }
}
