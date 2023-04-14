export function formatIsoDateString(dateString: string) {
  const date = new Date(dateString);
  date.setMonth(date.getMonth() + 1); // add 1 month from the date to correct offset

  const monthYearFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    timeZone: 'America/Santo_Domingo'
  });
  
  return monthYearFormatter.format(date);
}