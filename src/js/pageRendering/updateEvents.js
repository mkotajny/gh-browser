import $ from 'cash-dom';
import formatDate from '../utils/formatDate'

const eventDescription = (event) => {
  switch (true) {
    case event.type === "PullRequestEvent" 
      && event.payload.action ==="opened":
      return "opened";
    case event.type === "PullRequestEvent" 
      && event.payload.action ==="closed":
      return "closed";
    case event.type === "PullRequestReviewCommentEvent":
      return `created <a href="${event.payload.comment.html_url}">comment</a> to`;
    default:
      return "performed unidentified event for ";
  }
}

export const activateEvents = (active) => {
  if (active) $('.events-container').removeClass('is-hidden');
  else $('.events-container').addClass('is-hidden');
}

export const updateEvents = (publicEvents, eventTypes) => {
  const filteredEvents = publicEvents.filter(val => eventTypes.includes(val.type));
  let firstElement = 'is-primary';
  let domContent;
  
  domContent = `<div class="events-container column is-hidden">
                  <h2 class="subtitle is-4">History</h2>
                  <div class="timeline" id="user-timeline">`;

  filteredEvents.forEach(element => {
    domContent += 
   `<div class="timeline-item ${firstElement}">
      <div class="timeline-marker ${firstElement}"></div>
      <div class="timeline-content">
        <p class="heading">${formatDate(element.created_at)}</p>
        <div class="media">
          <figure class="media-left image is-32x32">
            <img src="${element.actor.avatar_url}"/>
          </figure>
          <div class="media-content">
            <a href="https://github.com/${element.actor.login}">${element.actor.login}</a>  
            ${eventDescription(element)}
            <a href="${element.payload.pull_request.html_url}">pull request</a> 
            <p class="repo-name">
              <a href="https://github.com/${element.repo.name}">${element.repo.name}</a>
            </p>
          </div>
        </div>
      </div>
    </div>`;
    if (firstElement) firstElement = null;
  });
  domContent += '</div></div>';
  $('.events-container').replaceWith(domContent);
}
