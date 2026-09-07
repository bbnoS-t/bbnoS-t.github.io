const places = [
    {
        name: "Мемориальный комплекс Коркыт ата",
        category: "history",
        duration: "1day",
        budget: "medium",
        companions: ["alone", "friends", "family"],
        description: "Мемориальный комплекс, посвящённый Коркыту ата. Здесь находятся музей, амфитеатр и знаменитая стела в форме кобызы.",
        emoji: "🎶"
    },

    {
        name: "Городище Сыганак",
        category: "history",
        duration: "1day",
        budget: "medium",
        companions: ["alone", "friends", "family"],
        description: "Древний город и важный исторический памятник Кызылординской области. Сыганак был связан с кыпчакской державой, Ак-Ордой и Казахским ханством.",
        emoji: "🏛️"
    },

    {
        name: "Городище Жанкент",
        category: "history",
        duration: "1day",
        budget: "medium",
        companions: ["alone", "friends", "family"],
        description: "Древнее городище на территории Кызылординской области, связанное с историей Огызского государства.",
        emoji: "🏺"
    },

    {
        name: "Озеро Камыстыбас",
        category: "nature",
        duration: "1day",
        budget: "cheap",
        companions: ["friends", "family"],
        description: "Большая система озёр в Аральском районе. Подходит для отдыха на природе и поездки с друзьями или семьёй.",
        emoji: "🌊"
    },

    {
        name: "Озеро Ханқожа",
        category: "nature",
        duration: "1day",
        budget: "cheap",
        companions: ["friends", "family"],
        description: "Природное место регионального значения, которое можно включить в путешествие по Кызылординской области.",
        emoji: "🌿"
    },

    {
        name: "Арал",
        category: "nature",
        duration: "3days",
        budget: "medium",
        companions: ["friends", "family"],
        description: "Поездка в Приаралье с возможностью познакомиться с природой и историей Аральского региона.",
        emoji: "🌅"
    },

    {
        name: "Сауысқандық",
        category: "adventure",
        duration: "1day",
        budget: "medium",
        companions: ["friends"],
        description: "Ущелье с древними петроглифами. Подойдёт тем, кто хочет совместить природу и необычную историю.",
        emoji: "⛰️"
    },

    {
        name: "Байконур",
        category: "adventure",
        duration: "3days",
        budget: "rich",
        companions: ["friends", "family"],
        description: "Один из самых известных объектов Кызылординской области — космодром Байконур.",
        emoji: "🚀"
    }
];

const userChoices = {
    category: null,
    duration: null,
    budget: null,
    companions: null
};


function startQuiz() {
    document.getElementById("quiz").scrollIntoView({
        behavior: "smooth"
    });
}


function selectOption(button, value) {

    // Определяем, к какому вопросу относится кнопка
    const question = button.closest(".question");

    // Убираем выбор с других кнопок этого вопроса
    question.querySelectorAll(".option").forEach(option => {
        option.classList.remove("selected");
    });

    // Выбираем нажатую кнопку
    button.classList.add("selected");

    // Определяем номер вопроса
    const questionNumber = question.querySelector("h3").textContent.substring(0, 2);

    if (questionNumber === "01") {
        userChoices.category = value;
    }

    if (questionNumber === "02") {
        userChoices.duration = value;
    }

    if (questionNumber === "03") {
        userChoices.budget = value;
    }

    if (questionNumber === "04") {
        userChoices.companions = value;
    }

    console.log("Выбор:", userChoices);
}


function findTrip() {

    const result = document.getElementById("result");

    // Ищем подходящие места
    let matches = places.map(place => {

        let score = 0;

        if (place.category === userChoices.category) {
            score += 40;
        }

        if (place.duration === userChoices.duration) {
            score += 25;
        }

        if (place.budget === userChoices.budget) {
            score += 20;
        }

        if (
            place.companions &&
            place.companions.includes(userChoices.companions)
        ) {
            score += 15;
        }

        return {
            ...place,
            score: score
        };

    });

    // Сортируем от лучшего варианта к худшему
    matches.sort((a, b) => b.score - a.score);

    const best = matches[0];

    // Если пользователь ничего не выбрал
    if (!userChoices.category) {
        alert("Сначала выбери хотя бы, что тебе нравится ❤️");
        return;
    }

    // Показываем результат
    result.style.display = "block";

    result.innerHTML = `
        <p class="small-title">SAFAR AI</p>

        <h2>Мы нашли кое-что для тебя ✨</h2>

        <div class="result-card">

            <div class="result-image">
                ${best.emoji}
            </div>

            <div class="result-info">

                <p>🏆 ЛУЧШИЙ ВАРИАНТ</p>

                <h3>${best.name}</h3>

                <div class="score">
                    ${best.score}% подходит тебе
                </div>

                <p>
                    ${best.description}
                </p>

                <button onclick="alert('Подробная страница места появится следующим этапом!')">
                    📍 Подробнее
                </button>

            </div>

        </div>
    `;

    result.scrollIntoView({
        behavior: "smooth"
    });

    console.log("Лучший вариант:", best);
}
