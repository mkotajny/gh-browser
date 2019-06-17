import updateProfile from '../pageRendering/updateProfile';

export default function getGithubData(url) 
{
  fetch(url)
    .then((response)=> response.json())
    .then(function (body) {
      updateProfile(body);         
  }).catch(error => console.error('Error:', error));
}
