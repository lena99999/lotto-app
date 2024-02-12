/**
 * formats a number as currency with points for thousands, comma for decimal, euro sign
 * @cents number in cents
 * @returns formatted number in euro
 */
export function formatStringAsCurrency(cents: string = "0"): string {
  const formattedEuro = (Number(cents) / 100).toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  return formattedEuro;
}

/**
 * format a number with points for thousands
 * @number number to format
 * @returns formatted number
 */
export function formatNumber(number: string = "0"): string {
  const formattedNumber = new Intl.NumberFormat("de-DE").format(Number(number));
  return formattedNumber;
}

/**
 * format a date as long string
 * @date any date string
 * @returns date in format "Freitag, 9. Februar 2024"
 */
export function formatDateString(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString("de-DE", options);
  return formattedDate;
}

/**
 * format date as ISO string
 * used for route param
 * @date in long date format ('Feb 09 2024')
 * @returns date in ISO string format ('2024-02-09')
 */
export function dateToISOString(date: string): string {
  const convertedDate = new Date(date + "UTC").toISOString().slice(0, 10);
  return convertedDate;
}

/**
 * format date in long date format
 * used to convert route param to api
 *@date in ISO string format ('2024-02-09')
 *@returns date in long format ('Fri Feb 09 2024')
 */
export function dateToLongString(date: string): string {
  const convertedDate = new Date(date).toDateString();
  return convertedDate;
}
