const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0始まり
const day = today.getDate();

const dateString = `${year}/${month}/${day}`;

console.log(dateString);