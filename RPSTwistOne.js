    var roundCounter = -1;
    var pointKeeper = 0;

$(document).ready(function(){
    
    var userPoints = 0;
    var computerPoints = 0;
    var cChoice = "";
    var cChoiceTwo = "";
    setTimeout(myFunction, 30000);
    
    $("select").imagepicker({
        //Image Picker settings
        hide_select: true,
        show_label: true,

        selected: function(option){
            var values = this.val();
            
            //Game Beginning
            if (roundCounter > -1) {
                
                //Twisted RPS
                if (cChoice == "rock"){
                    if(cChoiceTwo == "win"){
                        if(values == "2"){
                            pointKeeper++;
                        }
                        else if (values == "3"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                        else if (values == "1"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                    }
                    else if(cChoiceTwo == "lose"){
                        if(values == "3"){
                            pointKeeper++;
                        }
                        else if (values == "2"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                        else if (values == "1"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                    }
                    else if(cChoiceTwo == "tie"){
                        if(values == "1"){
                            pointKeeper++;
                        }
                        else if (values == "2"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                        else if (values == "3"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                    }
                }
                
                else if (cChoice == "paper"){
                    if(cChoiceTwo == "win"){
                        if(values == "3"){
                            pointKeeper++;
                        }
                        else if (values == "2"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                        else if (values == "1"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                    }
                    else if(cChoiceTwo == "lose"){
                        if(values == "1"){
                            pointKeeper++;
                        }
                        else if (values == "2"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                        else if (values == "3"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                    }
                    else if(cChoiceTwo == "tie"){
                        if(values == "2"){
                            pointKeeper++;
                        }
                        else if (values == "1"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                        else if (values == "3"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                    }
                }
                
                else if (cChoice == "scissors"){
                    if(cChoiceTwo == "win"){
                        if(values == "1"){
                            pointKeeper++;
                        }
                        else if (values == "2"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                        else if (values == "3"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                    }
                    else if(cChoiceTwo == "lose"){
                        if(values == "2"){
                            pointKeeper++;
                        }
                        else if (values == "1"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                        else if (values == "3"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                    }
                    else if(cChoiceTwo == "tie"){
                        if(values == "3"){
                            pointKeeper++;
                        }
                        else if (values == "2"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                        else if (values == "1"){
                            pointKeeper--;
                            pointKeeper--;
                        }
                    }
                }
        }
            
            var x = Math.random();
            var y = Math.random();
            //Computing Computer's Choice
            if (x < 0.34) {
                cChoice = "rock";
                document.getElementById("computerPick").innerHTML = "<img src=\"images/rock.jpg\" alt=\"rock\" width=\"168\" height=\"115\">";                
            } 

            else if(x <= 0.67) {
                cChoice = "paper";
                document.getElementById("computerPick").innerHTML = "<img src=\"images/paper.jpg\" alt=\"paper\" width=\"172\" height=\"115\">";                
            } 

            else if (x > 0.67) {
                cChoice = "scissors";
                document.getElementById("computerPick").innerHTML = "<img src=\"images/scissors.jpg\" alt=\"scissors\" width=\"90\" height=\"115\">";                
            }
            //Computer Choice #2
            if (y < 0.34) {
                cChoiceTwo = "win";
                document.getElementById("computerPickTwo").innerHTML = "<h2><font color=\"green\">WIN</font></h2>";                
            } 

            else if(y <= 0.67) {
                cChoiceTwo = "lose";
                document.getElementById("computerPickTwo").innerHTML = "<h2><font color=\"red\">LOSE</font></h2>";                
            } 

            else if(y > 0.67){
                cChoiceTwo = "tie";
                document.getElementById("computerPickTwo").innerHTML = "<h2><font color=\"blue\">TIE</font></h2>";                
            }
            
        document.getElementById("scores").innerHTML = "<p><font color=\"blue\">User Points: " + pointKeeper + "</font></p>"; 
        roundCounter++;
    }
    });
});

function myFunction() {
    document.getElementById("Done").innerHTML = "<h1><font color=\"blue\">User's Score:</font></h1><br>" + "<h1><font color=\"blue\">" + pointKeeper + "</font></h1><br>" + "<h1><font color=\"blue\">You Lasted " + roundCounter + " Rounds!</font></h1>";
}

