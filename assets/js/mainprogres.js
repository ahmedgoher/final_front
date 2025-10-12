// Overall
var semiContainerOverall = new ProgressBar.SemiCircle("#semiContainer", {
  strokeWidth: 10,
  color: "#092c4c",
  trailColor: "#eee",
  trailWidth: 10,
  easing: "easeInOut",
  duration: 1400,
  svgStyle: null,
  text: {
    value: "",
    alignToBottom: false,
  },
  from: { color: "#eb5757" },
  to: { color: "#092c4c" },
  step: function (state, bar) {
    bar.path.setAttribute("stroke", state.color);
    var value = Math.round(bar.value() * 100);
    bar.setText(value + "%");
  },
});

semiContainerOverall.text.style.fontFamily = "DIN Next LT Arabic";
// semiContainerOverall.text.style.fontSize = "1.5rem";
semiContainerOverall.animate(0.85); // 85%

// Exam
var semiContainerExam = new ProgressBar.SemiCircle("#semiContainerEXAM", {
  strokeWidth: 10,
  color: "#f2994a",
  trailColor: "#eee",
  trailWidth: 10,
  easing: "easeInOut",
  duration: 1400,
  svgStyle: null,
  text: {
    value: "",
    alignToBottom: false,
  },
  from: { color: "#eb5757" },
  to: { color: "#f2994a" },
  step: function (state, bar) {
    bar.path.setAttribute("stroke", state.color);
    var value = Math.round(bar.value() * 100);
    bar.setText(value + "%");
  },
});

semiContainerExam.text.style.fontFamily = "DIN Next LT Arabic";
// semiContainerExam.text.style.fontSize = "1rem";
semiContainerExam.animate(0.7); // 70%

// Task
var semiContainerTask = new ProgressBar.SemiCircle("#semiContainerTASK", {
  strokeWidth: 10,
  color: "#27AE60",
  trailColor: "#eee",
  trailWidth: 10,
  easing: "easeInOut",
  duration: 1400,
  svgStyle: null,
  text: {
    value: "",
    alignToBottom: false,
  },
  from: { color: "#eb5757" },
  to: { color: "#27AE60" },
  step: function (state, bar) {
    bar.path.setAttribute("stroke", state.color);
    var value = Math.round(bar.value() * 100);
    bar.setText(value + "%");
  },
});

semiContainerTask.text.style.fontFamily = "DIN Next LT Arabic";
// semiContainerTask.text.style.fontSize = "1rem";
semiContainerTask.animate(0.9); // 90%

// document.addEventListener("DOMContentLoaded", () => {
//   const cards = document.querySelectorAll(".card-courses");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("show");
//         }
//       });
//     },
//     {
//       threshold: 0.2,
//     }
//   );

//   cards.forEach((card) => {
//     observer.observe(card);
//   });
// });
