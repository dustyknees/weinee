// Initial player and enemy stats
let player = {
  hp: 20,
  attack: 5,
};

let enemy = {
  hp: 15,
  attack: 4,
};

// DOM elements
const playerHp = document.getElementById("player-hp");
const enemyHp = document.getElementById("enemy-hp");
const message = document.getElementById("message");
const attackButton = document.getElementById("attack-button");

// Update stats on the screen
function updateStats() {
  playerHp.textContent = player.hp;
  enemyHp.textContent = enemy.hp;
}

// Player attacks enemy
function playerAttack() {
  enemy.hp -= player.attack;
  message.textContent = `You attack the enemy for ${player.attack} damage!`;
  updateStats();
  checkGameOver();
}

// Enemy attacks player
function enemyAttack() {
  player.hp -= enemy.attack;
  message.textContent += ` The enemy attacks you for ${enemy.attack} damage!`;
  updateStats();
  checkGameOver();
}

// Check if the game is over
function checkGameOver() {
  if (enemy.hp <= 0) {
    message.textContent = "You defeated the enemy!";
    attackButton.disabled = true;
  } else if (player.hp <= 0) {
    message.textContent = "You have been defeated.";
    attackButton.disabled = true;
  }
}

// Handle turn-based attacks
attackButton.addEventListener("click", () => {
  if (enemy.hp > 0 && player.hp > 0) {
    playerAttack();
    if (enemy.hp > 0) {
      setTimeout(enemyAttack, 1000);
    }
  }
});

// Initialize the game
updateStats();
