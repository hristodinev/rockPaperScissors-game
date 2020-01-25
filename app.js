

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
            match.classList.add('fade-in');

        });

        //play match function

        const playMatch = ()=>{

            const options = document.querySelectorAll(".options button");

            const playerHand = document.querySelector(".player-hand");

            const computerHand = document.querySelector(".computer-hand");
        }

    };
    //call all inner functions in the arrow function

    gameStart();
};

//the game function

game();
