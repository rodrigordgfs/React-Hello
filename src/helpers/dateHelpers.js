import moment from "moment";

export function getAgeFrom(birthdate) {
  return birthdate ? moment().diff(birthdate, "years") : 0;
}
