import ajax from './ajax';

export const reqLogin = (username, password) => ajax('/sw/login2',{username,password}, 'POST');