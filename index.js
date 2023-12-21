const accordion = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building",
  },

  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },

  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },

  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const container = document.querySelector(".container");

const header = document.createElement("div");

header.innerHTML = `<div class = "faqHeader">
<img src="./images/icon-star.svg" />
<h1>FAQs</h1>
</div>`;
container.appendChild(header);

accordion.forEach((item) => {
  const faqElement = document.createElement("div");
  const questImage = document.createElement("div");
  const horizontalLine = document.createElement("hr");
  const faqQuestion = document.createElement("h4");
  const faqImage = document.createElement("img");
  faqImage.src = "./images/icon-plus.svg";
  const faqImageMinus = document.createElement("img");
  const faqResponse = document.createElement("p");

  faqQuestion.textContent = `${item.question}`;
  faqResponse.textContent = `${item.answer}`;

  container.appendChild(faqElement);
  faqElement.appendChild(questImage);
  faqElement.style.marginBottom = "13px";
  faqElement.style.marginTop = "35px";
  questImage.appendChild(faqQuestion);
  questImage.appendChild(faqImage);
  questImage.style.cursor = "pointer";
  faqImage.style.width = "22px";
  questImage.appendChild(faqImageMinus);
  faqImageMinus.style.width = "22px";
  faqImageMinus.style.display = "none";
  questImage.style.display = "flex";
  questImage.style.justifyContent = "space-between";
  questImage.style.alignItems = "center";
  faqElement.appendChild(faqResponse);
  faqResponse.style.display = "none";
  faqElement.appendChild(horizontalLine);

  questImage.addEventListener("click", () => {
    if (faqResponse.style.display === "none") {
      faqResponse.style.display = "block";
    } else {
      faqResponse.style.display = "none";
    }

    if (faqImageMinus.style.display === "none") {
      faqImage.style.display = "none";
      faqImageMinus.style.display = "block";
      faqImageMinus.src = "./images/icon-minus.svg";
    } else {
      faqImage.style.display = "block";
      faqImageMinus.style.display = "none";
      faqImage.src === "./images/icon-plus.svg";
    }
  });
});
