const mainAmountDiv = document.getElementById('mainAmount');
const generateBtn = document.getElementById('generateBtn');
const messageDiv = document.getElementById('message');
const secondMessageDiv = document.getElementById('secondMessage');
const countdownDiv = document.getElementById('countdown');

generateBtn.addEventListener('click', startCountdown);

function startCountdown() {
  // Clear previous messages
  mainAmountDiv.textContent = '';
  messageDiv.textContent = '';
  secondMessageDiv.textContent = '';
  
  let count = 5;
  countdownDiv.textContent = count;

  const interval = setInterval(() => {
    count--;
    if (count > 0) {
      countdownDiv.textContent = count;
    } else {
      clearInterval(interval);
      countdownDiv.textContent = ''; // hide countdown
      generatePamasko();
    }
  }, 1000);
}

function generatePamasko() {
  const amounts = [0,10,20,30,40,50,60,70,80,90,100];
  const mainAmount = amounts[Math.floor(Math.random() * amounts.length)];

  // Display messages
  messageDiv.textContent = "Eto na ang pamasko mo, inaanak!";
  mainAmountDiv.textContent = `₱${mainAmount}`;

  if (mainAmount === 0) {
    secondMessageDiv.textContent = "Bumawi ka nalang next year 😄";
  } else {
    secondMessageDiv.textContent = "";
  }

  launchConfetti();
}

function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.backgroundColor = `hsl(${Math.random()*360}, 80%, 60%)`;
    confetti.style.width = confetti.style.height = (Math.random() * 8 + 6) + 'px';
    confetti.style.animationDuration = (Math.random()*2 + 1) + 's';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2000);
  }
}
