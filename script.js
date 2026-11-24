const goalInput = document.querySelector("#user-goal");
const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", function() {

  document.querySelector("#goal-section").scrollIntoView({
    behavior: "smooth"
  });

});
const continueButton = document.querySelector(".continue-button");

const result = document.querySelector("#goal-result");


continueButton.addEventListener("click", function() {

  const userGoal = goalInput.value.trim();
const normalizedGoal = userGoal.toLowerCase();
const dailyTime = document.querySelector("#daily-time");

const selectedTime = dailyTime.value;
  console.log(selectedTime);
  if (userGoal === "") {

    result.textContent = "Please enter your goal first.";

  } else {

    result.textContent = "Your goal: " + userGoal;
    if (
  normalizedGoal.includes("web") ||
  normalizedGoal.includes("html") ||
  normalizedGoal.includes("website")
) {

  result.textContent = "Let's build your web design skills step by step.";

} else if (
  normalizedGoal.includes("german") ||
  normalizedGoal.includes("deutsch")
) {

  result.textContent = "Your German learning journey starts here.";

} else if (normalizedGoal.includes("drawing")) {

  result.textContent = "Let's develop your drawing skills.";

} else {

  result.textContent = "Every journey starts with one small step.";

}
    let steps = [
  "Step 1: Write down your goal.",
  "Step 2: Find 10 minutes for it.",
  "Step 3: Take your first small action."
] ;
if (
  normalizedGoal.includes("web") ||
  normalizedGoal.includes("html") ||
  normalizedGoal.includes("website")
) {

  steps = [
    "Step 1: Learn what HTML is.",
    "Step 2: Create your first HTML page.",
    "Step 3: Learn basic CSS.",
    "Step 4: Style your website."
  ];

}
    else if (normalizedGoal.includes("german") ||
normalizedGoal.includes("deutsch")) {

  steps = [
    "Step 1: Learn 10 new German words.",
    "Step 2: Study basic German grammar.",
    "Step 3: Listen to 10 minutes of German.",
    "Step 4: Write 5 sentences in German."
  ];
if (selectedTime === "10") {

  steps = [
    "Step 1: Learn 3 new German words.",
    "Step 2: Listen to 5 minutes of German."
  ];

}
      else if (selectedTime === "30") {

  steps = [
    "Step 1: Learn 10 new German words.",
    "Step 2: Study German grammar for 10 minutes.",
    "Step 3: Listen to German for 10 minutes."
  ];

}
      else if (selectedTime === "20") {

  steps = [
    "Step 1: Learn 5 new German words.",
    "Step 2: Study German grammar for 5 minutes.",
    "Step 3: Listen to German for 10 minutes."
  ];

}
      else if (selectedTime === "60") {

  steps = [
    "Step 1: Learn 15 new German words.",
    "Step 2: Study German grammar for 15 minutes.",
    "Step 3: Listen to German for 15 minutes.",
    "Step 4: Write a short text in German.",
    "Step 5: Review everything you learned."
  ];

}
}else if (normalizedGoal.includes("drawing")) {

  steps = [
    "Step 1: Practice drawing basic shapes.",
    "Step 2: Draw simple everyday objects.",
    "Step 3: Study light and shadows.",
    "Step 4: Create your first small drawing."
  ];

}
const stepsList = document.querySelector("#steps-list");
    stepsList.innerHTML = steps.map(step => `
  <li>
    <label>
      <input type="checkbox">
      <span>${step}<span>
    </label>
  </li>
`).join("");
    stepsList.scrollIntoView({
  behavior: "smooth",
  block: "start"
});
const checkboxes = stepsList.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {

  checkbox.addEventListener("change", function() {

    const taskText = this.nextElementSibling;

    if (this.checked) {
      taskText.classList.add("completed");
    } else {
      taskText.classList.remove("completed");
    }
const completedTasks = stepsList.querySelectorAll("input:checked").length;

const totalTasks = stepsList.querySelectorAll('input[type="checkbox"]').length;

const progress = Math.round((completedTasks / totalTasks) * 100);

document.querySelector("#progress-text").textContent =
  progress + "% completed";
    document.querySelector("#progress-fill").style.width =
  progress + "%";
    const completionMessage = document.querySelector("#completion-message");

if (progress === 100) {

  completionMessage.textContent =
    "You did it! Every big achievement starts with small steps.";

} else {

  completionMessage.textContent = "";

}
  });

});
  }

});
