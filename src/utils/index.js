/* eslint-disable linebreak-style */
import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy/MM/dd  HH:mm');
}

export function translateErrors(code) {
  const error = { title: 'errrror', description: 'please try again a bit later' };
  switch (code) {
    case 'auth/invalid-email':
      // error.title = 'email' if you want put in every title name
      error.description = 'your email aint right..';
      break;
    case 'auth/user-disabled':
      error.description = 'this acount is unusable.. did you do something?';
      break;
    case 'auth/user-not-found':
      error.description = 'i dont think i know you yet..';
      break;
    case 'auth/wrong-password':
      error.description = 'the right password please';
      break;
    case 'auth/email-already-in-use':
      error.description = 'i already know this email!';
      break;
    case 'auth/operation-not-allowed':
      error.description = 'please contact the operator';
      break;
    case 'auth/weak-password':
      error.description = 'you need to think of a better password';
      break;
    default:
  }
  return error;
}
