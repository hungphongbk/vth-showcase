export function toCapitalize(s: string) {
  return s
    .split(" ")
    .map((ss) => ss[0].toUpperCase() + ss.substr(1))
    .join(" ");
}
