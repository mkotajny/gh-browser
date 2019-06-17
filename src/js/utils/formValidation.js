import $ from 'cash-dom';

export default function validField(value, fieldClassName, regularExpression) {
  if (!value.match(regularExpression)) {
    $(`.${fieldClassName}`).addClass('is-danger');
    return false;
  }
  $(`.${fieldClassName}`).removeClass('is-danger');
  return true;
}
