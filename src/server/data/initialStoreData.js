// @flow

var fetch = require('node-fetch');
const url = 'http://58b2874a78d2121200bfa8dd.mockapi.io/api/quotes'


/*
export default () => {
  return new Promise((resolve, reject) => {
    resolve({ data: 'This is some async startup data we absolutely need' });
  });
};
*/

export default () => {
  return fetch(url)
  .then(res => res.json())
  .then(jsonResponse => {
     return ({data: JSON.stringify(jsonResponse)});
  })
  .catch(err => {
      console.log('fetch error initial data: ', err);
  });
};
