const validPassword = 'terrível';
const noUsernameLoginBody = { username: '', password: validPassword };

const validUsername = 'Hagar';
const noPasswordLoginBody = { username: validUsername, password: '' };

const notExistingUserBody = { username: 'notfound', password: validPassword };

const existingUserWithWrongPasswordBody = { username: validUsername, password: 'wrong_password' };
const hashedPassword = '$2a$12$R23eVdP1hwFciYx6dTrR.eN93cxKYXodVaKDwBpESISePMBJrH3HO';
const existingUser = { 
  id: 1, 
  username: validUsername,
  password: hashedPassword,
  vocation: 'Guerreiro',
  level: 10,
};

const validLoginBody = { username: validUsername, password: validPassword };

export default {
  noUsernameLoginBody,
  noPasswordLoginBody,
  notExistingUserBody,
  existingUserWithWrongPasswordBody,
  existingUser,
  validLoginBody,
};