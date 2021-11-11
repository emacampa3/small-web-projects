/* 
const textHour = document.getElementById('text-hour'),
    textMinutes = document.getElementById('text-minutes'),
    dateWeek = document.getElementById('date-day-week'),
    dateDay = document.getElementById('date-day'),
    dateMonth = document.getElementById('date-month'),
    dateYear = document.getElementById('date-year')

const clockText = () =>{
    let date = new Date()

    let hh = date.getHours(),
        mm = date.getMinutes(),
        day = date.getDate(),
        dayweek = date.getDay(),
        month = date.getMonth()


    if(hh < 10) {hh = `0${hh}`}


    textHour.innerHTML = `${hh}:`
    

    if(mm < 10) {mm = `0${mm}`}
    
  
    textMinutes.innerHTML = mm

  
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  
    dateDayweek.innerHTML = dayweek
    dateDay.innerHTML = day
    dateMonth.innerHTML = `${months[month]},`
}
setInterval(clockText, 1000)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun' */

let span = document.getElementById('span');

function time() {
  let date = new Date();
  let month = date.getMonth()
  let minutes = date.getMinutes();
  let hours = date.getHours();
  span.textContent = 
  ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2);

}

setInterval(time, 1000);