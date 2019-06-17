import $ from 'cash-dom';

export default function updateProfile(profile) {
  $('#profile-name').text($('.username.input').val())
  $('#profile-image').attr('src', profile.avatar_url)
  $('#profile-url').attr('href', profile.html_url).text(profile.login)
  $('#profile-bio').text(profile.bio || '(no information)')
}