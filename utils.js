import * as data from "./data.js"

export const createDiv = cls => {
	const Div = document.createElement("div");
	Div.classList.add(cls);
	return Div;
}

export const getHeadPos = () => data.snake["parts"][0];
export const getTailPos = () => data.snake["parts"][data.snake["parts"].length - 1];
export const getPartPos = index => data.snake["parts"][index];
export const getPartElement = index =>
	document.getElementById(`${getPartPos(index)}`);
export const getHeadElement = () => 
	document.getElementById(`${getHeadPos()}`);
export const getTailElement = () => 
 	document.getElementById(`${getTailPos()}`);