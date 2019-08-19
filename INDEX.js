// Create a main function for all of your code. Keep asking the user to press 1, 2, or 3 until they press 'q' to quit.
//
//     If they press 1, alert "Challenge goes here".
//     If they press 2, alert "2".
//     If they press 3, alert "Hello World".
//     Challenge
//
// If they press 1, ask them to press a, b, or c in a different function. If they press a, alert "A", if they press b, alert "B", if they press c, alert "C".
//     Challenge 2
//
// Return the values of a, b, or c to use in the main function.

function main() {
    while (0===0){
        var userInput = prompt("Enter 1, 2, or 3.\n Enter to 'q' Quit.");
        if (parseInt(userInput) === 1){
            var userPut = prompt("Enter 'A', 'B', or 'C'.");
            if (userPut.toUpperCase() === "A"){
                alert("A");
                return userPut;
            }
            else if (userPut.toUpperCase() === "B"){
                alert("B");
                return userPut;
            }
            else if (userPut.toUpperCase() === "C"){
                alert("C");
                return userPut;
            }
        }
        else if (parseInt(userInput) === 2){
            alert(2)
        }
        else if (parseInt(userInput) === 3){
            alert('Hello World')
        }
        else if (userInput.toUpperCase() === "Q"){
            break;
        }
        else{
            alert("INVALID ANSWER")
        }

    }
}

main();