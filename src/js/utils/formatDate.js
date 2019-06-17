export default function formatDate(date) {
  const convertedToDate = new Date(date);
  const monthNumber = convertedToDate.getMonth() + 1, dayNumber = convertedToDate.getDate();
  const monthString = monthNumber < 10 ? "0" + monthNumber : monthNumber;
  const dayString = dayNumber < 10 ? "0" + dayNumber : dayNumber;
  return convertedToDate.getFullYear() + "-" + monthString + "-" + dayString;
}
