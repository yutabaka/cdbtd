
// grab HTML elements 

const form = document.getElementById('form')
const daysHtml = document.getElementById('days');
const hoursHtml = document.getElementById('hours');
const minutesHtml = document.getElementById('minutes');
const secondsHtml =document.getElementById('seconds');


form.addEventListener('submit', (e) =>  {
    e.preventDefault();
   
    const day = document.getElementById('day').value
    const month = document.getElementById('month').value
    const year = document.getElementById('year').value
    const form = document.getElementById('form')

    form.remove()
    
    const birthday = day
    const birthmonth = month 
    const birthyear = year

    const currentDate = new Date();
    let nextYear;

    if (currentDate.getMonth() + 1 > birthmonth || (currentDate.getMonth() + 1 == birthmonth && currentDate.getDate() + 1 >  birthday)) {
        nextYear = new Date().getFullYear() + 1;
      }
      else {
        nextYear = new Date().getFullYear();
      }
      const countDown = () => {

        const miliseconds = new Date(`${nextYear}-${birthmonth}-${birthday} 00:00:00`) - new Date();
        
        //  const age = (currentDate.getFullYear() - birthyear) 
        // console.log(age)
        
        const days = Math.floor(miliseconds / (1000 * 60 * 60 * 24));
        const hours = Math.floor(miliseconds / (1000 * 60 * 60)) % 24;
        const minutes = Math.floor(miliseconds / (1000 * 60)) % 60;
        const seconds = Math.floor(miliseconds/ 1000) % 60;
        // console.log(days, hours, minutes, seconds)
            daysHtml.innerHTML = days
            hoursHtml.innerHTML = hours
            minutesHtml.innerHTML = minutes
            secondsHtml.innerHTML = seconds
         }
        countDown();
        setInterval(countDown,1000)

})



  

