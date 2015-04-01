var dict = {
	Salt: {url: 'url/ant', Display: 'Salt', unit: '1'},
	Salad: {url:'url/Bug', Display: 'Salad', unit: '2'},
	Saint: {url:'url/cat', Display: 'Saint', unit: '3'},
	Simple: {url:'url/cat', Display: 'Simple', unit: '3'},
	Screwdriver: {url:'url/cat', Display: 'Screwdriver', unit: '2'},
};

var current_user = 'Joe';
var logged_in = false;

var user_words = {
	Salt: {url:'url/Bug', thumbnail:'', Display: 'Salt', username: 'Joe'},
	Salad: {url:'url/cat', thumbnail:'',  Display: 'Salad', username: 'Joe'},
	Saint: {url: 'url/ant', thumbnail:'',  Display: 'Saint', username: 'Joe'},
	Simple: {url: 'url/ant', thumbnail:'',  Display: 'Simple', username: 'Joe'},
	Screwdriver: {url: 'url/ant', thumbnail:'',  Display: 'Screwdriver', username: 'Joe'},
};

var finger_spell = {
	A: '/letter_images/A.GIF',
	B: '/letter_images/B.GIF',
	C: '/letter_images/C.GIF',
	D: '/letter_images/D.GIF',
	E: '/letter_images/E.GIF',
	F: '/letter_images/F.GIF',
	G: '/letter_images/G.GIF',
	H: '/letter_images/H.GIF',
	I: '/letter_images/I.GIF',
	J: '/letter_images/J.GIF',
	K: '/letter_images/K.GIF',
	L: '/letter_images/L.GIF',
	M: '/letter_images/M.GIF',
	N: '/letter_images/N.GIF',
	O: '/letter_images/O.GIF',
	P: '/letter_images/P.GIF',
	Q: '/letter_images/Q.GIF',
	R: '/letter_images/R.GIF',
	S: '/letter_images/S.GIF',
	T: '/letter_images/T.GIF',
	U: '/letter_images/U.GIF',
	V: '/letter_images/V.GIF',
	W: '/letter_images/W.GIF',
	X: '/letter_images/X.GIF',
	Y: '/letter_images/Y.GIF',
	Z: '/letter_images/Z.GIF'
};


var requested_words= {
	//EXAMPLE REQUESTS
	Chair: {word: 'chair', num_requests: 8},
	Giraffe: {word: 'giraffe', num_requests: 3},
	Pineapple: {word: 'pineapple', num_requests: 2}
};
