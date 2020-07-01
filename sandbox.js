const before = new Date('February 1 2019 7:30:59');
const now = new Date();

console.log(now, before);
console.log(typeof now);

// year, months, day, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

// timestamps
console.log('timestamp:', now.getTime()); // this gets the number of milliseconds since 12AM 1ST, January 1970
console.log('timestamp:', before.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

// difference between feb 1 and today
const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log(mins, hours, days);

console.log(`the blog was written ${days} ago`);

// converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));