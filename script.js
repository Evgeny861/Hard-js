const optionA = document.getElementById('option-a'),
    optionB = document.getElementById('option-b');

// Вывод a 
const a = () => {
let data = new Date();
let year =  data.getFullYear();

function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
        day = 7;
    }
    return day;
}

const dayOfWeek = () => {
    if (getLocalDay(data) === 1) {
        return 'Понедельник'
    } else if (getLocalDay(data) === 2) {
        return 'Вторник'
    } else if (getLocalDay(data) === 3) {
        return 'Среда'
    } else if (getLocalDay(data) === 4) {
        return 'Черверг'
    } else if (getLocalDay(data) === 5) {
        return 'Пятница'
    }else if (getLocalDay(data) === 6) {
        return 'Суббота'
    }else if (getLocalDay(data) === 7) {
        return 'Воскресенье'
    }
}

const getMonthOfData = () => {
    if ((data.getMonth() + 1) === 1) {
        return 'Января'
    } else if  ((data.getMonth() + 1) === 2) {
        return 'Февраля'
    } else if  ((data.getMonth() + 1) === 3) {
        return 'Марта'
    } else if  ((data.getMonth() + 1) === 4) {
        return 'Апреля'
    } else if  ((data.getMonth() + 1) === 5) {
        return 'Мая'
    } else if  ((data.getMonth() + 1) === 6) {
        return 'Июня'
    } else if  ((data.getMonth() + 1) === 7) {
        return 'Июля'
    } else if  ((data.getMonth() + 1) === 8) {
        return 'Августа'
    } else if  ((data.getMonth() + 1) === 9) {
        return 'Сентября'
    } else if  ((data.getMonth() + 1) === 10) {
        return 'Октября'
    } else if  ((data.getMonth() + 1) === 11) {
        return 'Ноября'
    } else if  ((data.getMonth() + 1) === 12) {
        return 'Декабря'
    } 
}

const declension = () => {
    if (data.getHours() === 1 || data.getHours() === 21) {
        return 'час'
    } else if (data.getHours() === 2 || data.getHours() === 3 || data.getHours() === 4
    || data.getHours() === 22 || data.getHours() === 23) {
        return 'часа'
    } else if (data.getHours() === 5 || data.getHours() === 6 || data.getHours() === 7
    || data.getHours() === 8 || data.getHours() === 9 || data.getHours() === 10 || data.getHours() === 11 || 
    data.getHours() === 12 || data.getHours() === 13 || data.getHours() === 14 || data.getHours() === 15 ||
    data.getHours() === 16 || data.getHours() === 17 || data.getHours() === 18 || data.getHours() === 19 ||
    data.getHours() === 20 || data.getHours() === 00) {
        return 'часов'
    }
}

var decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];
function decOfNum(number, titles)
{
    if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
}



optionA.textContent = `Сегодня ${dayOfWeek()}, ${data.getDate()} ${getMonthOfData()} ${data.getFullYear()} года, 
${data.getHours()} ${declension()} ${data.getMinutes()} минут ${data.getSeconds()} ${decOfNum((data.getSeconds()), ['секундa', 'секунды', 'секунд'])} `
}

setInterval(() => {a()}, 1000);

// вывод И

const b = () => {
    let data = new Date();
    optionB.textContent = `${data.toLocaleDateString('ru')} - ${data.toLocaleTimeString('ru')} `
}
setInterval(() => {b()}, 1000);

