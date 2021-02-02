const date = require('date-fns');

function lengthOfVideo(duration) {
    if (duration >= 3600) {
        const hour = duration / 3600;
        const hourFloor = Math.floor(hour);
        const minutes = hourFloor * 60;
        const remainder = duration - (hourFloor * 3600);
        const remainderMinutes = remainder / 60;
        const remainderFloor = Math.floor(remainderMinutes);
        const seconds = remainder - (remainderFloor * 60);
        let realTime = `${minutes + remainderFloor}:${seconds}`;
        if (seconds < 10) {
          realTime = `${minutes + remainderFloor}:0${seconds}`;
        }
        return realTime;
      }
      return date.format(date.addSeconds(new Date(0), duration), 'mm:ss');
}

function videoCreated(created) {
    const timeCalc = date.differenceInHours(new Date(), created);
    const HourYear = 8760;
    const HourMonths = 730;
    const hourWeeks = 168;
    const hourDays = 24;
    if (timeCalc >= HourYear) {
      if (Math.floor(timeCalc / HourYear) === 1) {
        return `Fyrir ${Math.floor(timeCalc / HourYear)} ári síðan`;
      }
      return `Fyrir ${Math.floor(timeCalc / HourYear)} árum síðan`;
    }
    if (timeCalc >= HourMonths) {
      if (Math.floor(timeCalc / HourMonths) === 1) {
        return `Fyrir ${Math.floor(timeCalc / HourMonths)} mánuði síðan`;
      }
      return `Fyrir ${Math.floor(timeCalc / HourMonths)} mánuðum síðan`;
    }
  
    if (timeCalc >= hourWeeks) {
      if (Math.floor(timeCalc / hourWeeks) === 1) {
        return `Fyrir ${Math.floor(timeCalc / hourWeeks)} viku síðan`;
      }
      return `Fyrir ${Math.floor(timeCalc / hourWeeks)} vikum síðan`;
    }
  
    if (timeCalc >= hourDays) {
      if (Math.floor(timeCalc / hourWeeks) === 1) {
        return `Fyrir ${Math.floor(timeCalc / hourDays)} degi síðan`;
      }
      return `Fyrir ${Math.floor(timeCalc / hourDays)} dögum síðan`;
    }
    return timeCalc;
  }

module.exports = {
    lengthOfVideo,
    videoCreated
}