const R = require('ramda');

const messenger = (error) => {
  if (error.authError) {
    return {
      error: error.authError
    }
  }
  if (error.table === 'user') {
    return formatUserError(error);
  } else if (error.table === 'marker') {
    return formatMarkerError(error);
  }
}

module.exports = R.curry(function(res, error) {
  return res.status(500).json(messenger(error));
});


function formatUserError(error) {
  let message = '';
  if (error.column === 'password') {
    message = 'Password is required';
  } else if (error.constraint === 'user_email_unique') {
    message = 'Email is taken!';
  }
  return {
    error: message
  };
}

function formatMarkerError(error) {
  return {
    error: 'Could not make marker'
  };
}
