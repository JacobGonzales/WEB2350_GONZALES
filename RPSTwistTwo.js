var lossChecker = 0;
var roundCounter = 0;
var computerTurn = 0;
var userTurn = 0;
var youLose = 0;
var arrayOne = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var arrayTwo = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

$(document).ready(function(){
    
    var userPoints = 0;
    var computerPoints = 0;

    $("select").imagepicker({
        //Image Picker settings
        hide_select: true,
        show_label: true,

        selected: function(option){
            var values = this.val();
                
            if (computerTurn == 0){
                //Computing Computer's Choice
                for (i = 0; i <= roundCounter; i++){
                    var cChoice = Math.random();
                    if (cChoice < 0.34) {
                        arrayOne[i] = "rock";
                        document.getElementById("computerPick").innerHTML = "<img src=\"images/rock.jpg\" alt=\"rock\" width=\"168\" height=\"115\">";
                        setTimeout(myFunction, 3000);
                    } 

                    else if(cChoice <= 0.67) {
                        arrayOne[i] = "paper";
                        document.getElementById("computerPick").innerHTML = "<img src=\"images/paper.jpg\" alt=\"paper\" width=\"172\" height=\"115\">";                
                    } 
                    else if(cChoice > 0.67){
                        arrayOne[i] = "scissors";
                        document.getElementById("computerPick").innerHTML = "<img src=\"images/scissors.jpg\" alt=\"scissors\" width=\"90\" height=\"115\">";                
                    }
                }
                computerTurn++;
            }
            else if(userTurn == 1){
                //Displaying User's Choice
                if (values == 1){
                    document.getElementById("userPick").innerHTML = "<img src=\"images/rock.jpg\" alt=\"rock\" width=\"168\" height=\"115\">";    
                }
                if (values == 2){
                    document.getElementById("userPick").innerHTML = "<img src=\"images/paper.jpg\" alt=\"paper\" width=\"172\" height=\"115\">";    
                }
                if (values == 3){
                    document.getElementById("userPick").innerHTML = "<img src=\"images/scissors.jpg\" alt=\"scissors\" width=\"90\" height=\"115\">";                

                }
                if (youLose == 0){
                    whoseTurn--;
                }
            }
            else if (youLose == 1){
                document.getElementById("Done").innerHTML = "<h1><font color=\"blue\">User's Score:</font></h1><br>"+ "<h1><font color=\"blue\">You Lasted " + roundCounter + " Rounds!</font></h1>";
                clearInterval(myVar);
            }
            
            roundCounter++;
            userTurn = computerTurn;
            
            
            

            

            
            //The Game RPS
            if (values == "2") {

                if (cChoice == "rock") {
                    alert("You Win!");
                    userPoints++;

                } 
                else if (cChoice == "paper"){
                    alert("Tie!");
                }
                else {
                    if (cChoice == "scissors") {
                        alert("Computer Wins!");
                        computerPoints++;
                    }
                }
            }
            
            if (values == "1") {

                if (cChoice == "scissors") {
                    alert("You Win!");
                    userPoints++;

                } 
                else if (cChoice == "rock"){
                    alert("Tie!");
                }
                else {
                    if (cChoice == "paper") {
                        alert("Computer Wins!");
                        computerPoints++;
                    }
                }
            }
            
            if (values == "3") {

                if (cChoice == "paper") {
                    alert("You Win!");
                    userPoints++;

                } 
                else if (cChoice == "scissors"){
                    alert("Tie!");
                }
                else {
                    if (cChoice == "rock") {
                        alert("Computer Wins!");
                        computerPoints++;
                    }
                }
            }
            
            
        }
    });
});




function myTimer() {
    var i = 0;
    
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    
    i++;
}