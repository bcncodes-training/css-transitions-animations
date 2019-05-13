function initHour(){
    let actHour=new Date();
    let seconds=document.getElementsByClassName('secBar');
    let seconds2=document.getElementsByClassName('secBar2');
    seconds[0].style.transform=`rotate(${actHour.getSeconds()*6}deg)`;
    seconds2[0].style.transform=`rotate(${actHour.getSeconds()*6}deg)`;
    let minutes=document.getElementsByClassName('minBar');
    let minSec=actHour.getMinutes()+actHour.getSeconds()/60;
    minutes[0].style.transform=(`rotate(${minSec*6}deg)`); 
    minutes[1].style.transform=(`rotate(${minSec*6}deg)`); 
    let hours=document.getElementsByClassName('hBar');
    hours[0].style.transform=(`rotate(${(actHour.getHours()+minSec/60)*30}deg)`);
    hours[1].style.transform=(`rotate(${(actHour.getHours()+minSec/60)*30}deg)`);
}
initHour();