// 1 пункт задания 
let dayWeek = document.querySelectorAll('.dot'),
  date = new Date();
console.log(date.getDay());
const week = ['воскресенье', 'понедельник', 'вторник','среда','четверг','пятница','суббота'];
for (let i = 0; i < week.length; i++) {
  dayWeek[i].textContent =  week[i];
  if (dayWeek[i].classList.contains('dot-7') || dayWeek[i].classList.contains('dot-1')){
    dayWeek[i].style.fontStyle = "italic";
  }
  if ((date.getDay() )=== i) {
    console.log(dayWeek[i]);
    dayWeek[i].style.fontWeight = "bold"     
  }
}