function formatDate(date) {
  const newDate = new Date(date);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = newDate.getDate();
  const month = monthNames[newDate.getMonth()];
  const year = newDate.getFullYear();

  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    newDate.getDay()
  ];

  const formattedDate = `${dayOfWeek} ${month} ${day} ${year}`;

  return formattedDate;
}

module.exports = formatDate
