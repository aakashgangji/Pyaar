const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

const cuteMessages = [
  "Are you sure? 🥺",
  "Really really sure? 💔",
  "Think again! 💕",
  "You don't mean that! 😢",
  "Please say yes! 🙏",
  "I'll be so sad! 😭",
  "Don't break my heart! 💔",
  "Just kidding, right? 😅",
  "You're teasing me! 😤",
  "I know you miss me! 💖"
];

let messageIndex = 0;

noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
  
  noBtn.textContent = cuteMessages[messageIndex % cuteMessages.length];
  messageIndex++;
  
  noBtn.style.animation = "shake 0.5s ease-in-out";
  setTimeout(() => {
    noBtn.style.animation = "";
  }, 500);
});

const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0) scale(1.05); }
    25% { transform: translateX(-5px) scale(1.05); }
    75% { transform: translateX(5px) scale(1.05); }
  }
`;
document.head.appendChild(style);

yesBtn.addEventListener("click", () => {
  yesBtn.style.transform = "scale(0.95)";
  setTimeout(() => {
    yesBtn.style.transform = "scale(1.05)";
  }, 100);
  
  questionContainer.style.opacity = "0";
  questionContainer.style.transform = "translate(-50%, -50%) scale(0.9)";
  
  setTimeout(() => {
    questionContainer.style.display = "none";
    heartLoader.style.display = "inherit";
  }, 300);

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    resultContainer.style.opacity = "0";
    resultContainer.style.transform = "translate(-50%, -50%) scale(0.8)";
    
    setTimeout(() => {
      resultContainer.style.opacity = "1";
      resultContainer.style.transform = "translate(-50%, -50%) scale(1)";
      resultContainer.style.transition = "all 0.5s ease";
    }, 100);
    
    gifResult.play();
  }, 3000);
});

function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = '💕';
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = window.innerHeight + 'px';
  heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
  heart.style.opacity = '0.6';
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = '-1';
  heart.style.animation = `floatUp ${Math.random() * 3 + 4}s linear`;
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 7000);
}

const floatStyle = document.createElement('style');
floatStyle.textContent = `
  @keyframes floatUp {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.6;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(floatStyle);

setInterval(createFloatingHeart, 2000);