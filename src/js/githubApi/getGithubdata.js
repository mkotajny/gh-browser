import $ from 'cash-dom';
import { updateProfile, activateProfile } from '../pageRendering/updateProfile';
import { updateEvents, activateEvents } from '../pageRendering/updateEvents';

let loaded = {
  profile: false,
  events: false
}

const checkAllDataLoaded = () => {
  if (loaded.profile && loaded.events)
  {
    $('.loader').addClass('is-hidden');
    activateProfile(true);
    activateEvents(true);
  }
}

const runApiRequest = (type, url, deactivateSectionFunc
  , updateSectionFunc, extraParams = []) => 
{
  deactivateSectionFunc(false);
  fetch(url)
    .then((response)=> response.json())
    .then(function (body) {
      updateSectionFunc(body, ...extraParams);         
      loaded[type] = true;
      checkAllDataLoaded();
  }).catch(error => console.error('Error:', error));
}

export default function getGithubData(userName) {
  $('.loader').removeClass('is-hidden');

  runApiRequest("profile", 'https://api.github.com/users/' + userName, 
    activateProfile, updateProfile);
    
  runApiRequest("events", 'https://api.github.com/users/' + userName + '/events/public', 
    activateEvents, updateEvents, [["PullRequestEvent", "PullRequestReviewCommentEvent"]]);
}
