const questions = [
    {
      question: "¿Qué tiene cuatro patas y un solo brazo?",
      answer: "mesa",
      hints: [
        "Es un objeto común en la mayoría de los hogares.",
        "Se utiliza para colocar cosas encima.",
        "Es un mueble.",
        "¡Tiene una superficie plana!"
      ]
    },
    {
      question: "¿Qué animal tiene la lengua azul?",
      answer: "jirafa",
      hints: [
        "Es un mamífero de cuello largo.",
        "Vive en las regiones africanas.",
        "Tiene manchas en su piel.",
        "¡Tiene una lengua azul!"
      ]
    },
    {
      question: "¿Cuál es el ave más grande del mundo?",
      answer: "avestruz",
      hints: [
        "Es un ave no voladora.",
        "Tiene patas largas y fuertes.",
        "Es originaria de África.",
        "¡Tiene el tamaño más grande entre todas las aves!"
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  let currentHintIndex = 0;
  let attemptCount = 0;
  
  function setQuestion() {
    const questionElement = document.getElementById("question");
    const hintElement = document.getElementById("hint");
    const attemptCountElement = document.getElementById("attemptCount");
  
    questionElement.textContent = questions[currentQuestionIndex].question;
    hintElement.textContent = "";
    attemptCount = 0;
    attemptCountElement.textContent = attemptCount;
  }
  
  function checkAnswer() {
    const answer = document.getElementById("answerInput").value.toLowerCase();
    const resultElement = document.getElementById("result");
    const hintElement = document.getElementById("hint");
    const attemptCountElement = document.getElementById("attemptCount");
  
    attemptCount++;
  
    if (answer === questions[currentQuestionIndex].answer) {
      resultElement.style.color = "green";
      resultElement.textContent = "¡Correcto! La respuesta es " + questions[currentQuestionIndex].answer + ".";
      hintElement.textContent = "";
      currentQuestionIndex++;
      if (currentQuestionIndex === questions.length) {
        currentQuestionIndex = 0;
      }
      setQuestion();
    } else {
      resultElement.style.color = "red";
      resultElement.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
      if (currentHintIndex < questions[currentQuestionIndex].hints.length) {
        hintElement.textContent = "Pista: " + questions[currentQuestionIndex].hints[currentHintIndex];
        currentHintIndex++;
      } else {
        hintElement.textContent = "Lo siento, has agotado todas las pistas.";
      }
      if (attemptCount === 3) {
        resultElement.style.color = "red";
        resultElement.textContent = "¡Lo siento! Has agotado los intentos. La respuesta correcta era " + questions[currentQuestionIndex].answer + ".";
        currentQuestionIndex++;
        if (currentQuestionIndex === questions.length) {
          currentQuestionIndex = 0;
        }
        setQuestion();
      }
    }
  
    attemptCountElement.textContent = attemptCount;
  }
  
  setQuestion();
  
