import { lazy } from "react";
const TodaysHighlights = lazy(() => import("./WeekPage/TodaysHighlights"));
const Weekdays = lazy(() => import("./WeekPage/Weekdays"));

const Week = () => {
  return (
    <>
      <Weekdays />
      <TodaysHighlights />
    </>
  );
};

export default Week;
