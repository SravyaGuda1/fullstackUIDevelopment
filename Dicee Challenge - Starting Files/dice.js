function diceview(className1, className2){
    var viewNum = [];
    for (var i=1; i<=2;i++){        
        viewNum[i] = Math.floor(Math.random()*6)+1;
        console.log("Number on dice " +i+" is " +viewNum[i]);      
        if (i==1) {
            className = className1;
        } else {
            className = className2;
        }
        var diceImagepath;
        diceImagepath= "Images/dice"+viewNum[i]+".png";
        document.querySelector(className).setAttribute("src", diceImagepath);
    }
    if (viewNum[1] > viewNum[2]) {
        document.querySelector("h1").innerHTML="⛳️ Player1 wins";
    } else if (viewNum[1] < viewNum[2]){
        document.querySelector("h1").innerHTML="Player2 wins ⛳️";
    } else if (viewNum[1] === viewNum[2]){
        document.querySelector("h1").innerHTML="Draw";
    }

}
diceview(".img1", ".img2");
