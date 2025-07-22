import * as data from "./data.js"
import * as utils from "./utils.js"
import * as logic from "./logic.js"

export const init = () => {
	initGameBoard();
	initController();
	initSnake(1);
}

const initGameBoard = () => {
	for (let r = 1; r <= data.ROWS; r++) {
		for (let c = 1; c <= data.COLS; c++) {
			const cell = utils.createDiv("game-cell");
			cell.id = r + "," + c;
			data.gameContainer.appendChild(cell);
		}
	}
}

const initController = () => {
	document.addEventListener("keyup", e => {
		if (["KeyA", "KeyW", "KeyS", "KeyD"].includes(e.code)) logic.updateMovement(e.code.slice(3));
		else if (["Space"].includes(e.code)) console.log(data.snake["parts"])
		else if (["Enter"].includes(e.code)) data.snake["parts"][0][0] += 1
	})
}

const initSnake = len => {	
	data.snake["parts"] = [
		[5, 2], [4, 2], [3, 2]
	];
} 
