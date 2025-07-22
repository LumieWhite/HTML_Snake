export const ROWS = 10;
export const COLS = 10;
export const gameContainer = document.querySelector(".game-container");
export const gameDirections = {
	0: "Up",
	1: "Down",
	2: "Left",
	3: "Right"
}
export let snake = {
	"parts": []
}