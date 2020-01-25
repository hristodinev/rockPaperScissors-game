const game= ()=>
{
    let playerScore = 0;
    let computerScore = 0;

    //start the game 

    const gameStart= ()=>{
        
        const playButton = document.querySelector(".introBtn");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        //add event listeners

        playButton.addEventListener('click', ()=>{

            introScreen.classList.add("fadeOut");

        });

        //call all inner functions

        gameStart();

    }
};

//start the game

game();