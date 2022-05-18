window.onload= function(){
 const btns = document.getElementById("forButtons");
 console.log("I run at first open")
 let roundCount=0;
 let playerScore=0;
 let compScore=0;
 btns.addEventListener('click',(e)=>{
     const isButton = e.target.nodeName=='BUTTON';
     if(!isButton){
         return;
     }

    console.log("I run after click")
    let compValue=computerPlay();
    let playerValue= e.target.id;
     if(compValue==playerValue){
        console.log("draw");
     }
     else if(compValue=="rock"&&playerValue=="paper"){
        playerScore++;
        console.log(`player score: ${playerScore} played:${playerValue}|computer score: ${compScore} played:${compValue}`);
     }
     else if(compValue=="rock"&&playerValue=="scissors"){
        compScore++;
        console.log(`player: ${playerScore} played:${playerValue}|computer: ${compScore} played:${compValue}`);
     }
     else if(playerValue=="rock"&&compValue=="paper"){
        compScore++;
        console.log(`player: ${playerScore} played:${playerValue}|computer: ${compScore} played:${compValue}`);
     }
     else if(playerValue=="rock"&&compValue=="scissors"){
        playerScore++;
        console.log(`player: ${playerScore} played:${playerValue}|computer: ${compScore} played:${compValue}`);
     }



 })
 
 function computerPlay(){
     let randomNumber = Math.floor(Math.random()*3);
     if (randomNumber==0){
         return "rock"
     }

     if(randomNumber==1){
         return "paper"
     }

     if(randomNumber==2){
         return "scissors"
     }
 }

 
}
