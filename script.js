







function alert(message){
    $('#alert').html = message
    $('#alert').fadeIn('slow')
    setTimeout(()=>{
        $('#alert').fadeOut('slow')
    },5000)
}





const timeMinutes = JSON.stringify(new Date().getMinutes())

const timeHour = JSON.stringify(new Date().getHours())

const minutes = document.getElementById('minutes')

const hour = document.getElementById('hour')

if(timeHour.length == 2){
    hour.innerText = timeHour
}

else if(timeHour.length == 1){
    hour.innerText = 0 + timeHour
}

else{
    alert('clock has stopped')
}



if(timeMinutes.length == 2){
    minutes.innerText = timeMinutes
}

else if(timeMinutes.length == 1){
    minutes.innerText = 0 + timeMinutes
}

else{
    alert('clock has stopped')
}





