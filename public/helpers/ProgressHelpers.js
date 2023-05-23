import moment from "moment";
export const calculateYtdData = (targets, results) => {
  const currentMonth = moment().month();
  const currentDayOfMonth = moment().date();
  const daysInCurrentMonth = moment().daysInMonth();

  const sumYtd = (data, month) => {
    let sum = 0;
    for (let i = 0; i <= month; i++) {
      const monthName = moment().month(i).format("MMM").toLowerCase();
      sum += data[monthName];
    }
    return sum;
  };

  const segments = [
    "contract",
    "non_contract",
    "indirect",
    "apm_solutions",
    "grand_total",
  ];
  const ytdData = {};

  for (const segment of segments) {
    const targetData = targets.find((target) => target.segment === segment);
    const resultData = results.find((result) => result.segment === segment);

    const ytdTarget =
      sumYtd(targetData, currentMonth - 1) +
      (currentDayOfMonth / daysInCurrentMonth) *
        targetData[moment().format("MMM").toLowerCase()];
    const ytdProgress = sumYtd(resultData, currentMonth);
    const ytdPercent = (ytdProgress / ytdTarget) * 100;

    ytdData[segment] = {
      progress: ytdProgress,
      target: ytdTarget,
      percent: ytdPercent,
    };
  }

  return ytdData;
}

export function getCurrentMonthAndRatio() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const monthAbbreviations = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const currentMonth = monthAbbreviations[currentDate.getMonth()]; // Get the month abbreviation
  const daysInCurrentMonth = new Date(
    currentYear,
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const daysPassedInCurrentMonth = currentDate.getDate();
  const currentMonthRatio = daysPassedInCurrentMonth / daysInCurrentMonth;

  return { currentMonth, currentMonthRatio };
}


export const options = {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
};

export function MonthName(monthNum) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthNum - 1];
}

const { currentMonth } = getCurrentMonthAndRatio();
export const Month = MonthName(currentMonth);
