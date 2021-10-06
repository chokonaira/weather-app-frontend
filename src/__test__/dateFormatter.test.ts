import { dateFormatter, isSameDay, getTime } from '../helpers/dateFormatter';

describe("dateFormatter", () => {

  it("Formats date string to the right format", () => {
    const dateString = '2021-10-06 18:00:00';
    expect(dateFormatter(dateString)).toEqual("6 October, 2021. 18:00");
  });

  it("Checks that two different times are within the same day", () => {
    const timeOne = '2021-10-06 18:00:00';
    const timeTwo = '2021-10-06 21:00:00';
    expect(isSameDay(timeOne, timeTwo)).toBeTruthy();
  });

  it("Checks that two different times are not within the same day", () => {
    const timeOne = '2021-10-06 18:00:00';
    const timeTwo = '2021-10-07 21:00:00';
    expect(isSameDay(timeOne, timeTwo)).toBeFalsy();
  });

  it("Gets only the time from a date string", () => {
    const timeOne = '2021-10-06 18:00:00';
    expect(getTime(timeOne)).toEqual("18:00");
  });
});
