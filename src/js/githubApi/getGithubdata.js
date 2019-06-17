import {updateProfile} from '../pageRendering/updateProfile';
import {updateEvents} from '../pageRendering/updateEvents';

const runApiRequest = (type, url, updateSectionFunc, extraParams = []) => 
{
  fetch(url)
    .then((response)=> response.json())
    .then(function (body) {
      updateSectionFunc(body, ...extraParams);         
  }).catch(error => console.error('Error:', error));
}

export default function getGithubData(userName) 
{
  runApiRequest("profile", 'https://api.github.com/users/' + userName, updateProfile);
    
  runApiRequest("events", 'https://api.github.com/users/' + userName + '/events/public', 
    updateEvents, [["PullRequestEvent", "PullRequestReviewCommentEvent"]]);
}
