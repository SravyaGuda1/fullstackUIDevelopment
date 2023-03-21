/* Gives one audio for any button 
document.querySelector("button").addEventListener("click", function (){
    alert("Hello!");
}
); */

document.addEventListener("keydown", function(){
    console.log(event);
    var audioPath = getAudiopath(event.key);
    playAudio(audioPath);

});


const buttons = document.querySelectorAll(".drum");

for(var i=0; i<buttons.length;i++){
buttons[i].addEventListener("click", function(){
    console.log("hi");
    // console.log(this.innerHTML);
    // var audioPath = getAudiopath(this.innerHTML);
    // playAudio(audioPath);
    // var highlight = "."+(this.innerHTML);
    // console.log(highlight);
    // document.querySelector(highlight).classList.add("highlightClass");
    // setTimeout(function(){
    //     document.querySelector(highlight).classList.remove("highlightClass");
    // }, 400);    
});
}


function playAudio(audioPath){
    var audio = new Audio(audioPath);
    audio.play();
}

function getAudiopath(key){
    switch(key){
        case "w":
            audioPath = "sounds/crash.mp3";
            break;
        case "a":
            audioPath = "sounds/kick-bass.mp3";
            break;
        case "s":
            audioPath = "sounds/snare.mp3";
            break;
        case "d":
            audioPath = "sounds/tom-1.mp3";
            break;  
        case "j":
            audioPath = "sounds/tom-2.mp3";
            break
        case "k":
            audioPath = "sounds/tom-3.mp3";
            break;
        case "l":
            audioPath = "sounds/tom-4.mp3";
            break;     
        default:
            audioPath = "";
    }
    return audioPath;
}