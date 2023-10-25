/* This randomly picks a number between 1 and 15 for the player.
Math.random alone only generates a random numbers between 0 and 1.
So that's why it has "*15" because it multiplies that random number by 15 to make it 1-15. */
let playerNumber = Math.random()*15;
/* This rounds the randomly generated number up to an actual number.
Otherwise it'll look something like 4.978002567782528 */
playerNumber = Math.ceil(playerNumber);

/* This randomly picks a number between 1 and 15 for the cpu. */
let cpuNumber = Math.random()*15;

/* This rounds the randomly generated number up to an actual number.
Otherwise it'll look something like 4.978002567782528 */
cpuNumber = Math.ceil(cpuNumber);

/* This is an array featuring the different texts that will display depending if you win, lose, or tie. */
const outcome = [
    "You win! Congratulations!",
    "I'm sorry, it looks like I win this one. Better luck next time!",
    "Well nobody can win with a tie, thanks for wasting both of our time!"
]

/* This is the function for the button called Higher. */
function higher() {
    if(playerNumber > cpuNumber) {
        /* This prints the player's number. */
        document.getElementById("playerResults").innerHTML = "Your number is: " + playerNumber
        /* This prints the CPU's number. */
        document.getElementById("cpuResults").innerHTML = "My number is: " + cpuNumber
        /* If the player's number is indeed higher than the CPU's, it prints this. */
        document.getElementById("outcome").innerHTML = outcome[0]
    }
    else if(playerNumber < cpuNumber) {
        /* This prints the player's number. */
        document.getElementById("playerResults").innerHTML = "Your number is: " + playerNumber
        /* This prints the CPU's number. */
        document.getElementById("cpuResults").innerHTML = "My number is: " + cpuNumber
        /* If the CPU's number is higher than the player's, it prints this. */
        document.getElementById("outcome").innerHTML = outcome[1]
        /* I wanted to make it where this video plays in another tab if you lose. */
        fetch("https://www.youtube.com/watch?v=H47ow4_Cmk0", {
            credentials: "omit",
        });
    }
    else if(playerNumber == cpuNumber) {
        /* This prints the player's number. */
        document.getElementById("playerResults").innerHTML = "Your number is: " + playerNumber
        /* This prints the CPU's number. */
        document.getElementById("cpuResults").innerHTML = "My number is: " + cpuNumber
                /* If the CPU's number is higher than the player's, it prints this. */
        document.getElementById("outcome").innerHTML = outcome[2]
    }
}

/* This is the function for the button called Lower. */
function lower() {
    if(playerNumber < cpuNumber) {
        /* This prints the player's number. */
        document.getElementById("playerResults").innerHTML = "Your number is: " + playerNumber
        /* This prints the CPU's number. */
        document.getElementById("cpuResults").innerHTML = "My number is: " + cpuNumber
        /* If the player's number is indeed lower than the CPU's, it prints this. */
        document.getElementById("outcome").innerHTML = outcome[0]
    }
    else if(playerNumber > cpuNumber) {
        /* This prints the player's number. */
        document.getElementById("playerResults").innerHTML = "Your number is: " + playerNumber
        /* This prints the CPU's number. */
        document.getElementById("cpuResults").innerHTML = "My number is: " + cpuNumber
        /* If the CPU's number is lower than the player's, it prints this. */
        document.getElementById("outcome").innerHTML = outcome[1]
    }
    else if(playerNumber == cpuNumber) {
        /* This prints the player's number. */
        document.getElementById("playerResults").innerHTML = "Your number is: " + playerNumber
        /* This prints the CPU's number. */
        document.getElementById("cpuResults").innerHTML = "My number is: " + cpuNumber
        /* If the CPU's number is higher than the player's, it prints this. */
        document.getElementById("outcome").innerHTML = outcome[2]
    }
}

/* This function is for the reset button incase the player wants to Play Again. */
function reset() {
    window.location.reload();
}