
const dayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');

function getCurrentDayOfTheWeek() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  return daysOfWeek[dayIndex];
}

dayOfTheWeekElement.textContent = getCurrentDayOfTheWeek();



const currentTimeElement = document.querySelector('[data-testid="currentUTCTime"]');


function getCurrentUTCTime() {
  const currentDate = new Date();

  const hours = currentDate.getUTCHours();
  const minutes = currentDate.getUTCMinutes();
  const seconds = currentDate.getUTCSeconds();

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return formattedTime;
}


currentTimeElement.textContent = getCurrentUTCTime();



