var seconds = 0;
var minutes = 0;
var hour = 0;
var interval;

function start(){
    timer()
    interval = setInterval(timer, 1000);
    document.getElementById('start-btn').style.backgroundColor = 'lightgreen';
    document.getElementById('start-btn').style.boxShadow = 'none';
    document.getElementById('start-btn').style.transform = 'scale(.98)';
    
    document.getElementById('pause-btn').style.backgroundColor = 'white';
    document.getElementById('pause-btn').style.boxShadow = '10px 10px 20px black';
    document.getElementById('pause-btn').style.transform = 'none';
    
    document.getElementById('stop-btn').style.backgroundColor = 'white';
    document.getElementById('stop-btn').style.boxShadow = '10px 10px 20px black';
    document.getElementById('stot-btn').style.transform = 'none';

}

function pause(){
    clearInterval(interval);
    document.getElementById('start-btn').style.backgroundColor = 'white';
    document.getElementById('start-btn').style.boxShadow = '10px 10px 20px black';
    document.getElementById('start-btn').style.transform = 'none';
    
    document.getElementById('pause-btn').style.backgroundColor = 'yellow';
    document.getElementById('pause-btn').style.boxShadow = 'none';
    document.getElementById('pause-btn').style.transform = 'scale(.98)';
    
    document.getElementById('stop-btn').style.backgroundColor = 'white';
    document.getElementById('stop-btn').style.boxShadow = '10px 10px 20px black';
    document.getElementById('stot-btn').style.transform = 'none';
    
}

function stop(){
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    document.getElementById('timer').innerText = '00:00:00'

    document.getElementById('start-btn').style.backgroundColor = 'white';
    document.getElementById('start-btn').style.boxShadow = '10px 10px 20px black';
    document.getElementById('start-btn').style.transform = 'none';
    
    document.getElementById('pause-btn').style.backgroundColor = 'white';
    document.getElementById('pause-btn').style.boxShadow = '10px 10px 20px black';
    document.getElementById('pause-btn').style.transform = 'none';
    
    document.getElementById('stop-btn').style.backgroundColor = 'red';
    document.getElementById('stop-btn').style.boxShadow = 'none';
    document.getElementById('stot-btn').style.transform = 'scale(.98)';
}

function timer(){
    seconds++
    if (seconds == 60){
        minutes++
        seconds = 0
        if(minutes == 60){
            hour++
            minutes = 0
        }
    }
    document.getElementById('timer').innerText = twoDigits(hour) + ':' + twoDigits(minutes) + ':' + twoDigits (seconds);
}

function twoDigits(digit){
    if(digit < 10){
        return ('0' + digit)
    }else{
        return digit
    }
}