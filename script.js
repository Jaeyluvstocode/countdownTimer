const giveawayDate = new Date('2024-03-09').getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = giveawayDate - now ;

    const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const Seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = ` The Giveaway Ends In ${Days}d ${Hours}h ${Minutes}m ${Seconds}s`
     document.getElementById("Days").innerHTML=Days+"<br/>"+"Days";
     document.getElementById("Hours").innerHTML=Hours+"<br/>"+"Hours";
     document.getElementById("Minutes").innerHTML=Minutes+"<br/>"+"Minutes";
     document.getElementById("Seconds").innerHTML=Seconds+"<br/>"+"Seconds";


    
    
    
    if(distance < 100000000){
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'The Giveaway Has Ended'
    }
}, 1000)