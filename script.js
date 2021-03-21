 function learningInProcess() {
    let learning = prompt("Laura is currently learning, please be patient? Yes or No?");
    learning = learning.toLowerCase();
    if (learning === "yes") {
         alert("That is great! Thank you for being so patient 😃")
    } else {
         alert("All good things come to those who wait 😉");
    }
    }

    let learningButton = document.querySelector("button");

    learningButton.addEventListener("click", learningInProcess);