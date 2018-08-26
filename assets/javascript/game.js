
$(document).ready(function() {
    var Random = Math.floor(Math.random()*101+19)

    $("#compChoice").text(Random);

    var cryValueOne = Math.floor(Math.random()*11+1)
    var cryValueTwo = Math.floor(Math.random()*11+1)
    var cryValueThree = Math.floor(Math.random()*11+1)
    var cryValueFour = Math.floor(Math.random()*11+1)


    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#wins").append(wins);
    $("#losses").append(losses);

function winner(){
    wins++;
    $("#wins").text(wins);
    alert("You Win!");
    reset();
}

function loser(){
    losses++;
    $("#losses").text(losses);
    alert("You lose!");
    reset();
}

function reset(){
    Random=Math.floor(Math.random()*101+19);

    $("#compChoice").text(Random);
    cryValueOne = Math.floor(Math.random()*11+1)
    cryValueTwo = Math.floor(Math.random()*11+1)
    cryValueThree = Math.floor(Math.random()*11+1)
    cryValueFour = Math.floor(Math.random()*11+1)
    playerTotal = 0;
    $("#collected").text(playerTotal);
}

    $("#crystalOne").click(function() {
        playerTotal = playerTotal + cryValueOne;
        $("#collected").text(playerTotal);
        
        if (playerTotal == Random){
            winner();
        }
        else if (playerTotal > Random){
            loser();
        }
    })

    $("#crystalTwo").click(function() {
        playerTotal = playerTotal + cryValueTwo;
        $("#collected").text(playerTotal);
        
        if (playerTotal == Random){
            winner();
        }
        else if (playerTotal > Random){
            loser();
        }
    })

    $("#crystalThree").click(function() {
        playerTotal = playerTotal + cryValueThree;
        $("#collected").text(playerTotal);
        
        if (playerTotal == Random){
            winner();
        }
        else if (playerTotal > Random){
            loser();
        }
    })

    $("#crystalFour").click(function() {
        playerTotal = playerTotal + cryValueFour;
        $("#collected").text(playerTotal);
        
        if (playerTotal == Random){
            winner();
        }
        else if (playerTotal > Random){
            loser();
        }
    });
});
