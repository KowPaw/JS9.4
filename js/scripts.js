// scripts.js

// half Chrismas tree
function drawTree(h) {
	for (var i = 1; i <= h; i++) {
		var star = '';
		for (var j = 0; j < i; j++) {
			star += '*';
		}
		console.log(star);
	}
}

drawTree(9);

// full Christmas tree
function drawTree2(h) {
	for (var i = 0, k = h; i < h; i = i+2, k = k-2) {
		var star = '*';
		var space = '';
		for (var j = 0; j < i; j = j+2) {
				star += '**';
		}
		for (var m = 1; m < k/2 + 0.5; m++) {
			space += ' ';
		}
		console.log(space+star);
	}
}

drawTree2(17);

// nautural Christmas tree (not so pretty but original)
function drawTree3(h) {
	for (var i = 1, k = h; i <= h; i++, k--) {
		var star = '';
		var space = '';
		for (var j = 0; j < i; j++) {
				star += '*';
		}
		for (var m = 1; m < k/2; m++) {
			space += ' ';
		}
		console.log(space+star);
	}
}

drawTree3(9);