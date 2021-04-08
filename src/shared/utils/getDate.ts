export function getDate(date: Date) {
  var monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var getMonth = date.getMonth();
  var getDate = date.getDate();
  var addSuffix = dateSuffix(getDate);

  var getFullYear = date.getFullYear();

  var formattedDate =
    getDate + addSuffix + ' ' + monthNames[getMonth] + ' ' + getFullYear;

  return formattedDate;
}

function dateSuffix(i) {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return 'st';
  }
  if (j == 2 && k != 12) {
    return 'nd';
  }
  if (j == 3 && k != 13) {
    return 'rd';
  }
  return 'th';
}
