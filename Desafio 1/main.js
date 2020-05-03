const turnText = document.getElementById('text');
let isTurnHappening = false;

const player = new Player(turn, turnText);
let opponent = new Squirtle(0, turnText);

function gameOver () {
	setTimeout(() => {
		alert(`I'm sorry, you lost! Close this alert to play again`);
		window.location.reload();
	}, 1000);
}

function turn(attack) {
	if (isTurnHappening) return;
	else isTurnHappening = true;

	player.attack(attack, opponent);
	if (opponent.health === 0) {
		setTimeout(() => {
			opponent = new Squirtle(opponent.level + 1, turnText);
			turnText.innerText = 'but ' + opponent.name + ' is mysteriously ressurected!';
			player.updateHealth(player.maxHealth);
			setTimeout(() => {
				isTurnHappening = false;
				player.paralysedTurns = 0;
				turnText.innerText = 'Please choose an attack';
			}, 2000);
		}, 2000);
		turnText.innerText += ', and KILLED ' + opponent.name + '!';
		return;
	}

	setTimeout(() => {
		opponent.attack(opponent.getRandomAttack(), player);

		if (player.health === 0) gameOver();
		setTimeout(() => {
			isTurnHappening = false;
			if (player.paralysedTurns) turn(attack);
			else turnText.innerText = 'Please choose an attack';
		}, 2000);
	}, 2000);
}
