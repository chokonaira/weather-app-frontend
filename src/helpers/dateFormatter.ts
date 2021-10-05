import { MonthFormat } from "../constants/types";

const addZero = (i: number | string) => {
  if (i < 10) {
    i = `0${i}`;
  }
  return i;
};

export const dateFormatter = (d: string): string => {
  const MONTH_FORMAT: MonthFormat = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const date = new Date(d),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear(),
    hour = addZero(date.getHours()),
    minute = addZero(date.getMinutes());
    
  return `${day} ${MONTH_FORMAT[month + 1]}, ${year}. ${hour}:${minute}`;
};
