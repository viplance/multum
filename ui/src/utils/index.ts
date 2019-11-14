export function transformDate(date: Date = new Date()): string {
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${(mm > 9 ? '' : '0') + mm}.${(dd > 9 ? '' : '0') + dd}.${date.getFullYear()}. ${hrs}:${min}:${sec}`;
}
