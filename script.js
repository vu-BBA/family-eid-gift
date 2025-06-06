// Flip open the envelope
const letterCard = document.getElementById('letterCard');
const giftLink = document.getElementById('giftLink');

letterCard.addEventListener('click', function(e) {
  if (!letterCard.classList.contains('flipped')) {
    letterCard.classList.add('flipped');
    partyPop('pop1');
  }
});

// Keyboard accessibility for letter card (Enter/Space)
letterCard.addEventListener('keydown', function(e) {
  if ((e.key === 'Enter' || e.key === ' ') && !letterCard.classList.contains('flipped')) {
    letterCard.classList.add('flipped');
    partyPop('pop1');
  }
});

// Prevent flipping when clicking inside the open page
document.getElementById('page1').addEventListener('click', e => e.stopPropagation());
document.getElementById('page2').addEventListener('click', e => e.stopPropagation());

// Move to second page when gift is clicked
giftLink.addEventListener('click', function(e) {
  e.preventDefault();
  if (!letterCard.classList.contains('double-flipped')) {
    letterCard.classList.add('double-flipped');
    partyPop('pop2');
  }
});

// Keyboard access for gift (Enter/Space)
giftLink.addEventListener('keydown', function(e) {
  if ((e.key === 'Enter' || e.key === ' ') && !letterCard.classList.contains('double-flipped')) {
    e.preventDefault();
    letterCard.classList.add('double-flipped');
    partyPop('pop2');
  }
});

// Fun confetti/party popper effect with more shapes/colors
function partyPop(popId) {
  const pop = document.getElementById(popId);
  pop.innerHTML = ''; // Clear previous
  const colors = ['#FFD700','#FF69B4','#7CFC00','#40E0D0','#FF6347','#9370DB','#00BFFF','#FA8072','#E67E22','#F1C40F','#a100d7','#21e6e6'];
  const shapes = ['circle','star','heart'];
  for(let i=0;i<28;i++) {
    const type = shapes[Math.floor(Math.random()*shapes.length)];
    let c;
    if (type === 'circle') {
      c = document.createElement('div');
      c.className = 'confetti';
      c.style.borderRadius = '50%';
      c.style.background = colors[Math.floor(Math.random()*colors.length)];
    } else if (type === 'star') {
      c = document.createElement('div');
      c.className = 'confetti-shape confetti-star';
      c.innerHTML = `<svg viewBox="0 0 20 20"><polygon points="10,1 12,7 18,7.3 13.7,11.1 15.5,17 10,13.9 4.5,17 6.3,11.1 2,7.3 8,7" fill="${colors[Math.floor(Math.random()*colors.length)]}" /></svg>`;
    } else {
      c = document.createElement('div');
      c.className = 'confetti-shape confetti-heart';
      c.innerHTML = `<svg viewBox="0 0 20 20"><path d="M10 18s-5.2-4.7-7.1-7.1C.7 8.2.9 5.3 3.1 3.9c1.6-1 3.6-.4 4.8 1.1C9.3 2.9 11.3 2.4 13 3.9c2.2 1.4 2.4 4.3.2 7C15.2 13.3 10 18 10 18z" fill="${colors[Math.floor(Math.random()*colors.length)]}" /></svg>`;
    }
    // Random position, rotation, and delay
    c.style.left = (10 + Math.random() * 80) + '%';
    c.style.animationDelay = (Math.random() * 0.5) + 's';
    c.style.transform += ` rotate(${Math.floor(Math.random()*360)}deg)`;
    pop.appendChild(c);
  }
  setTimeout(()=>{ pop.innerHTML=''; }, 1800);
}