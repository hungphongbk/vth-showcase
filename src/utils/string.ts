import currency from "currency.js";

export function toCapitalize(s: string) {
  return s
    .split(" ")
    .map((ss) => ss[0].toUpperCase() + ss.substr(1))
    .join(" ");
}

export function vndCurrency(s: string | number) {
  return currency(s, {
    symbol: "đ",
    pattern: "#!",
    precision: 0,
    separator: ".",
  }).format();
}
