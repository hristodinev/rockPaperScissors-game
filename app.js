

const game= ()=>
{
    //player score
    let playerScore = 0;
    //computer score
    let computerScore = 0;

    //start the game 

    const gameStart= ()=>{
        
        const playButton = document.querySelector(".playBtn");
        const introScreen = document.querySelector(".greeting");
        const match = document.querySelector(".match");

        //add event listeners

        playButton.addEventListener("click", ()=>{

            introScreen.classList.add('fade-out');

        });

    };
    //call all inner functions in the arrow function

    gameStart();
};
game();
