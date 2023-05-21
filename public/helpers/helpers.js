//Helper Function tocalculate changes in pipeline from week 1 to week 2
export function calculateChanges(array1, array2) {
    const changesArray = [];
    const excludedFields = ["id", "segment", "week", "product", "week_id"];
  
    array1.forEach((obj1, i) => {
      const obj2 = array2[i];
      const diff = {};
  
      Object.keys(obj1).forEach((key) => {
        if (!excludedFields.includes(key)) {
          const value1 = obj1[key];
          const value2 = obj2[key];
          const difference = value1 - value2;
  
          diff[`${key}_diff`] = difference;
          diff[`${key}_percent`] =
            value1 !== 0
              ? parseFloat(((difference / value1) * 100).toFixed(1))
              : 0; // add percentage change rounded to 1 decimal place
        }
      });
  
      if (Object.keys(diff).length !== 0) {
        diff.id = obj1.id;
        diff.segment = obj1.segment;
        diff.week = obj1.week;
        diff.product = obj1.id;
        changesArray.push(diff);
      }
    });
  
    return changesArray;
  }

  export const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  export const columns = [
    "Prospecting",
    "Needs Analysis",
    "Meeting/Demo",
    "Proposal/Quote",
    "Negotiation/Review",
    "Pipeline Total",
    "Closed Won",
    "Closed Lost",
  ];

 export function formatDate(input) {
    const formattedDate = new Date(
      input.getUTCFullYear(),
      input.getUTCMonth(),
      input.getUTCDate()
    ).toLocaleDateString("en-US", { month: "long", day: "numeric" });
    return formattedDate;
  }
  //helper function can be moved.
  export function updateWeekObject(weekInput, weeksArray) {
    return weekInput.map((item) => {
      const matchingWeek = weeksArray.find((week) => week.id === item.week_id);
      const weekDate = matchingWeek ? matchingWeek.date : null;
  
      return {
        ...item,
        week: formatDate(weekDate),
      };
    });
  }

  export const formatCurrency = (value) => {
    const formattedValue = Number(value).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formattedValue;
  };

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

  export function getCurrentMonth() {
    const months = [
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
  
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
  
    return months[currentMonthIndex];
  }

  export function calculateTotals(newData){
    //Sum the values of both current and forecast for segments contract, non_contract, and indirect. set the values of mips_total to the results. 
    const newMipsTotalCurrent = newData[0].current + newData[1].current + newData[2].current
    const newMipsTotalForecast = newData[0].forecast + newData[1].forecast + newData[2].forecast
    newData[3].current = newMipsTotalCurrent
    newData[3].forecast = newMipsTotalForecast
    //sum the values of both current and forecast for indexes 3 & 4 and set to index 5
    const newTotalCurrent = newData[3].current + newData[4].current
    const newTotalForecast = newData[3].forecast + newData[4].forecast
    newData[5].current = newTotalCurrent
    newData[5].forecast = newTotalForecast
}