import './assets/scss/app.scss';
import $ from 'cash-dom';
import getGithubApiData from './js/githubApi/getGithubData';


export class App {
  initializeApp() {
    $('.load-username').on('click', function (e) {
      let userName = $('.username.input').val();
      getGithubApiData('https://api.github.com/users/' + userName);
    })
  }
}
