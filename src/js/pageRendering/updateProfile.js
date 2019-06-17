import $ from 'cash-dom';

export const activateProfile = (active) => {
  if (active) $('.profile-container').removeClass('is-hidden');
  else $('.profile-container').addClass('is-hidden');
}

export const updateProfile = (profile) => {
  $('.profile-container').replaceWith(
 `<div class="profile-container column is-one-third is-hidden">
    <h2 class="subtitle is-4">Profile</h2>
    <div class="profile">
      <div class="media">
        <div class="media-left">
          <figure class="media-left image is-64x64">
            <img src="${profile.avatar_url}" id="profile-image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-5" id="profile-name">${profile.name}</p>
          <p class="subtitle is-6"><a href="${profile.html_url}" id="profile-url">@${profile.login}</a></p>
        </div>
      </div>
      <div class="content" id="profile-bio">
        <p>${(profile.bio || '(no information)')}</p>
      </div>
    </div>
  </div>`);
}
