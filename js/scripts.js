// scripts.js

function drawTree(h) {
	for (i = 1, k = h; i <= h; i++, k--) {
		var star = '';
		var space = '';
		for (j = 0; j < i; j++) {
				star += '*';
		}
		for (m = 1; m < k/2; m++) {
			space += ' ';
		}
		console.log(space+star);
	}
}

drawTree(9);