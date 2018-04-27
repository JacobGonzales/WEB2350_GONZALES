$(document).ready(function(){
    
    var userPoints = 0;
    var computerPoints = 0;

    $("select").imagepicker({
        //Image Picker settings
        hide_select: true,
        show_label: true,

        selected: function(option){
            var values = this.val();
            var cChoice = "";
            
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
            
            //Computing Computer's Choice
            var cChoice = Math.random();
            if (cChoice < 0.34) {
                cChoice = "rock";
                document.getElementById("computerPick").innerHTML = "<img src=\"images/rock.jpg\" alt=\"rock\" width=\"168\" height=\"115\">";                
            } 

            else if(cChoice <= 0.67) {
                cChoice = "paper";
                document.getElementById("computerPick").innerHTML = "<img src=\"images/paper.jpg\" alt=\"paper\" width=\"172\" height=\"115\">";                

            } 

            else {
                cChoice = "scissors";
                document.getElementById("computerPick").innerHTML = "<img src=\"images/scissors.jpg\" alt=\"scissors\" width=\"90\" height=\"115\">";                

            }
            
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
            
            document.getElementById("scores").innerHTML = "<p><font color=\"red\">Computer Points: " + computerPoints + "</font></p><br><p><font color=\"blue\">User Points: " + userPoints + "</font></p>";    
            
            if (userPoints == 2 ){
                    document.getElementById("Done").innerHTML = "<h1>User Wins!!!</h1><br>" + "<h1>Score: " + userPoints + " VS " + computerPoints + "</h1>";
            }
            if (computerPoints == 2){
                document.getElementById("Done").innerHTML = "<h1>Computer Wins!!!</h1><br>" + "<h1>Score: " + computerPoints + " VS " + userPoints + "</h1>";
            }
            
        }
    });
});

