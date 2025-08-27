// let inputs = document.querySelectorAll('input')
// let dicebtn = document.querySelectorAll('button')
// let result = document.querySelectorAll('.result')



// // object to store user name and 
// let userDetails = {};


// // loop to travers on each button
// for (let i = 0; i < dicebtn.length; i++) {
//     dicebtn[i].addEventListener("click", (e) => {

//         // preventing default behaviour 
//         e.preventDefault()

//         //giving random number to each user
//         let RandomV = parseInt(Math.random() * 4);
//         result[i].innerHTML = RandomV



//         // store the details
//         userDetails[inputs[i].value] = RandomV


//         // disable The button to not get click again
//         dicebtn[i].disabled = true


//         // calling the function so find the winner
//         if (i == dicebtn.length-1) {
//             // winner()

//         }

//     })
// }


// function winner(arr) {

// }





let inputs = document.querySelectorAll('input');
let dicebtn = document.querySelectorAll('button');
let result = document.querySelectorAll('.result');

// object to store user name and number
let userDetails = {};

// prepare an array for unique random numbers
let array = [];
let max = 0;

for (let i = 0; i <= inputs.length; i++) {
    let num = parseInt(Math.random() * 10);
    if (!array.includes(num)) {
        array.push(num);
    }
}


for (let i = 0; i < dicebtn.length; i++) {
    dicebtn[i].addEventListener("click", (e) => {
        e.preventDefault();

        // give each user a unique random number from array
        let RandomV = array[i];
        result[i].innerHTML = RandomV;

        // store the details
        userDetails[inputs[i].value] = RandomV;

        // disable button
        dicebtn[i].disabled = true;

        // calling the function so find the winner
        if (i == dicebtn.length - 1) {
            Winner()
        }


    });
}

function Winner(arr) {
    // empty as per your original code
    max = Math.max(...array)
    let winner = Object.entries(userDetails).find(([key, val]) => val === max)

    let winnerKey = winner[0];
    document.querySelector('h1').innerHTML = `Winner is ${winnerKey}`;

}
