
const todaysDate = () => {
  const today = new Date();
  const [dd, mm, yyyy] = [String(today.getDate()).padStart(2, '0'), String(today.getMonth() + 1).padStart(2, '0'), String(today.getFullYear())];
  return `${yyyy}-${mm}-${dd}`;
}


const randomDate = () => {
  const randomYr = String(Math.floor(Math.random() * 10) + 2012);
  const randomMn = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const randomDy = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
  return `${randomYr}-${randomMn}-${randomDy}`;
}

module.exports = { todaysDate, randomDate };