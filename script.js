const userChoices = [];

function startQuiz() {
    document.getElementById("quiz").scrollIntoView({
        behavior: "smooth"
    });
}


function selectOption(button, value) {

    button.classList.toggle("selected");

    if (button.classList.contains("selected")) {
        userChoices.push(value);
    } else {
        const index = userChoices.indexOf(value);

        if (index !== -1) {
            userChoices.splice(index, 1);
        }
    }

    console.log("Выбор пользователя:", userChoices);
}


function findTrip() {

    const result = document.getElementById("result");

    result.style.display = "block";

    result.scrollIntoView({
        behavior: "smooth"
    });

    console.log("Готовим путешествие...");
    console.log("Выбор пользователя:", userChoices);
}
