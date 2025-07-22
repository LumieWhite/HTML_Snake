import * as data from "./data.js"
import * as utils from "./utils.js"

export const update = () => {
	draw();
	requestAnimationFrame(update)

}

const draw = () => {
	for (const part of data.snake["parts"]) {
		const cell = document.getElementById(`${part}`);
		cell.classList.add("occupied");
	}
	const head = utils.getHeadElement();
}

export const updateMovement = kc => {
	
	for (let i = data.snake["parts"].length - 1; i > 0; i--) {
		aconst partElement = utils.getPartElement(i);
		partElement.classList.remove("occupied");
		data.snake["parts"][i] = [...data.snake["parts"][i-1]];
	}
	if (["A", "D"].includes(kc)) {
		const dir = (kc == "A") ? -1 : 1;
		data.snake["parts"][0][1] += dir;
	} else {
		const dir = (kc == "W") ? -1 : 1;
		data.snake["parts"][0][0] += dir;
	}
}

export const start = () => {
	update();
}