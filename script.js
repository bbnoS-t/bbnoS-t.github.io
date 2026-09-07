const places = [
  {
    name: "🚀 Космодром Байконур",
    category: "adventure",
    duration: "3days",
    budget: "rich",
    companions: ["friends", "family"],
    description: "Легендарный космодром и одно из самых известных мест Кызылординской области."
  },
  {
    name: "🎶 Мемориальный комплекс Коркыт ата",
    category: "culture",
    duration: "1day",
    budget: "medium",
    companions: ["alone", "friends", "family"],
    description: "Место, связанное с историей и культурным наследием Коркыта ата."
  },
  {
    name: "🏛️ Городище Сыганак",
    category: "history",
    duration: "1day",
    budget: "medium",
    companions: ["alone", "friends", "family"],
    description: "Древнее городище с богатой историей Великого Шёлкового пути."
  },
  {
    name: "🏺 Городище Жанкент",
    category: "history",
    duration: "1day",
    budget: "medium",
    companions: ["alone", "friends", "family"],
    description: "Древний исторический памятник Кызылординской области."
  },
  {
    name: "🏺 Городище Чирик-Рабат",
    category: "history",
    duration: "3days",
    budget: "medium",
    companions: ["friends", "family"],
    description: "Археологический памятник среди древних ландшафтов Приаралья."
  },
  {
    name: "🏺 Дженд",
    category: "history",
    duration: "1day",
    budget: "medium",
    companions: ["friends", "family"],
    description: "Древнее городище, связанное с историей средневекового региона."
  },
  {
    name: "🏺 Городище Асанас",
    category: "history",
    duration: "1day",
    budget: "medium",
    companions: ["alone", "friends", "family"],
    description: "Историко-археологический объект Кызылординской области."
  },
  {
    name: "🏺 Городище Кышкала",
    category: "history",
    duration: "1day",
    budget: "medium",
    companions: ["friends", "family"],
    description: "Древнее городище, представляющее историческую ценность региона."
  },
  {
    name: "🏺 Городище Бабиш-Мола",
    category: "history",
    duration: "3days",
    budget: "medium",
    companions: ["friends", "family"],
    description: "Крупный археологический объект древнего Приаралья."
  },
  {
    name: "🕌 Мечеть Актас",
    category: "culture",
    duration: "1day",
    budget: "cheap",
    companions: ["alone", "friends", "family"],
    description: "Исторический и культурный объект Кызылординской области."
  },
  {
    name: "🕌 Мавзолей Хорасан ата",
    category: "culture",
    duration: "1day",
    budget: "medium",
    companions: ["alone", "friends", "family"],
    description: "Известный объект духовного и исторического наследия региона."
  },
  {
    name: "🕌 Мавзолей Окшы ата",
    category: "culture",
    duration: "1day",
    budget: "medium",
    companions: ["alone", "friends", "family"],
    description: "Историко-культурный памятник, связанный с духовным наследием края."
  },
  {
    name: "🕌 Мавзолей Марал ишан",
    category: "culture",
    duration: "1day",
    budget: "medium",
    companions: ["alone", "friends", "family"],
    description: "Историческое место, связанное с духовным наследием региона."
  },
  {
    name: "🪨 Петроглифы Сауысқандық",
    category: "adventure",
    duration: "1day",
    budget: "medium",
    companions: ["friends", "family"],
    description: "Древние наскальные изображения и интересное место для любителей истории и приключений."
  },
  {
    name: "🌊 Озеро Камыстыбас",
    category: "nature",
    duration: "1day",
    budget: "cheap",
    companions: ["friends", "family"],
    description: "Пресноводное озеро в дельте Сырдарьи — вариант для отдыха на природе."
  },
  {
    name: "🌊 Озеро Ханқожа",
    category: "nature",
    duration: "1day",
    budget: "cheap",
    companions: ["friends", "family"],
    description: "Природное место для отдыха у воды."
  },
  {
    name: "🌅 Аральское море / Geopark Aral",
    category: "nature",
    duration: "3days",
    budget: "rich",
    companions: ["friends", "family"],
    description: "Уникальный регион Приаралья с необычными природными и историческими ландшафтами."
  },
  {
    name: "🦌 Заповедник Барсакельмес",
    category: "nature",
    duration: "3days",
    budget: "rich",
    companions: ["friends", "family"],
    description: "Особо охраняемая природная территория и интересный вариант для знакомства с природой региона."
  },
  {
    name: "🌿 Река Сырдарья",
    category: "nature",
    duration: "1day",
    budget: "cheap",
    companions: ["alone", "friends", "family"],
    description: "Главная река региона и хороший вариант для спокойного отдыха на природе."
  },
  {
    name: "🏛️ Кызылординский областной историко-краеведческий музей",
    category: "history",
    duration: "1day",
    budget: "cheap",
    companions: ["alone", "friends", "family"],
    description: "Музей, где можно познакомиться с историей и культурой Кызылординской области."
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
  const question = button.closest(".question");

  question
    .querySelectorAll(".option")
    .forEach(option => option.classList.remove("selected"));

  button.classList.add("selected");

  const questionNumber = question
    .querySelector("h3")
    .textContent
    .substring(0, 2);

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
}

function getReason(place) {
  const reasons = [];

  if (place.category === userChoices.category) {
    reasons.push("совпадает с твоими интересами");
  }

  if (place.duration === userChoices.duration) {
    reasons.push("подходит по продолжительности поездки");
  }

  if (place.budget === userChoices.budget) {
    reasons.push("соответствует выбранному бюджету");
  }

  if (place.companions.includes(userChoices.companions)) {
    reasons.push("подходит для выбранной компании");
  }

  if (reasons.length === 0) {
    return "Это один из интересных вариантов для путешествия по Кызылординской области.";
  }

  if (reasons.length === 1) {
    return "Этот вариант " + reasons[0] + ".";
  }

  return "Этот вариант " + reasons.slice(0, -1).join(", ") +
    " и " + reasons[reasons.length - 1] + ".";
}

function findTrip() {
  if (!userChoices.category ||
      !userChoices.duration ||
      !userChoices.budget ||
      !userChoices.companions) {

    alert("Ответь на все вопросы ❤️");
    return;
  }

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

    if (place.companions.includes(userChoices.companions)) {
      score += 15;
    }

    return {
      ...place,
      score
    };
  });

  matches.sort((a, b) => b.score - a.score);

  const bestPlaces = matches.slice(0, 3);

  const result = document.getElementById("result");

  result.style.display = "block";

  result.innerHTML = `
    <p class="small-title">SAFAR AI</p>

    <h2>Мы нашли кое-что для тебя ✨</h2>

    <p>
      На основе твоих ответов мы подобрали
      самые подходящие места в Кызылординской области.
    </p>

    <div class="results-container">

      ${bestPlaces.map((place, index) => `

        <div class="result-card">

          <div class="result-image">
            ${place.name.substring(0, 2)}
          </div>

          <div class="result-info">

            <p>
              ${index === 0
                ? "🏆 ЛУЧШИЙ ВАРИАНТ"
                : "✨ ЕЩЁ ВАРИАНТ"}
            </p>

            <h3>${place.name}</h3>

            <div class="score">
              ${place.score}% подходит тебе
            </div>

            <p>
              ${place.description}
            </p>

            <p>
              💡 <strong>Почему:</strong>
              ${getReason(place)}
            </p>

          </div>

        </div>

      `).join("")}

    </div>
  `;

  result.scrollIntoView({
    behavior: "smooth"
  });
}
