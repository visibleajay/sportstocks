import { compose, join, reject, isBoolean, isNil, flatten } from 'lodash/fp'

export const toTitleCase = (str: string) => {
  return str
    .split(" ")
    .map((q) => q.substring(0, 1).toUpperCase() + q.substr(1))
    .join(" ");
};

export const toInitialCase = (str: string = " ") => {
  const fullName: string[] = str.split(" ");
  const initials = (fullName.shift() || "").charAt(0) + (fullName.pop() || "").charAt(0);
  return initials.toUpperCase();
};


export const cx = (...args: unknown[]) =>
  compose(join(' '), reject(isBoolean), reject(isNil), flatten)(args)
