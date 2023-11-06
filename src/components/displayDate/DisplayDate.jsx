import DateStyleWrapper from "./DisplayDate.style";
import { getUtcDate } from "../../../src/lib/projectLoader";

const DisplayDate = ({ timestamp }) => {
  // const timestampInInt = +timestamp;
  // const timestampInMs = timestampInInt * 1000;
  // const date = new Date(timestampInMs);
  // const utcDateString = date.toUTCString();
  const utcDateString = getUtcDate(timestamp);

  return <DateStyleWrapper>{utcDateString}</DateStyleWrapper>;
};

export default DisplayDate;
