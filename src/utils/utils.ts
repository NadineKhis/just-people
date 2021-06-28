export const getDate = (date: string) => {
  let d = new Date(date);
  let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
  let month =
    d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
  let year = d.getFullYear();
  return `${day}.${month}.${year}`;
};
