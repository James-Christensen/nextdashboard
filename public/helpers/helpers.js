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

  