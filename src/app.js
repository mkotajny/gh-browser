import './assets/scss/app.scss';
import $ from 'cash-dom';
import validField from './js/utils/formValidation';
import getGithubApiData from './js/githubApi/getGithubData';

export class App {
  initializeApp() {
    $('.load-username').on('click', function (e) {
      let userName = $('.username.input').val();

      if (!validField(userName
        , 'username'
        , /^[a-z0-9]*([a-z0-9](_|-|)[a-z0-9])*[a-z0-9]+$/
        ))
      return;

      getGithubApiData('https://api.github.com/users/' + userName);
    })
  }
}
