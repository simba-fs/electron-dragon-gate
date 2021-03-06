let cardNum = [0, 0, 0];
let number = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function getNum(){
	return number[Math.floor(Math.random() * 13)];
}

function parseNum(n){
	if(n === 'A') return 1;
	if(n === 'J') return 11;
	if(n === 'Q') return 12;
	if(n === 'K') return 13;
	return parseInt(n);
}

function setCard(n){
	console.log(n);
	let cards = $('.card');
	for(let i in n){
		cards.eq(i).children().eq(0).text(n[i]);
		cardNum[i] = parseNum(n[i]);
	}
}

function newCards(){
	$('#card2').addClass('card-hide');
	let n = [getNum(), getNum(), getNum()];
	setCard(n)
}

function newGame(){
	newCards();
	$('#allMoney').val(100);
	$('#money').val(50);
	$('#fund').val(10);
}

function isHide(){
	return $('#card2').hasClass('card-hide');
}

function shot(){
	if(!isHide()) return newCards();
	$('#card2').removeClass('card-hide');

	function earn(n=1){
		$('#money').val($('#money').val() - -$('#fund').val() * n);
		$('#allMoney').val($('#allMoney').val() - $('#fund').val() * n);
	}

	if(cardNum[0] == cardNum[1] == cardNum[2]){
		earn(-3);
	}else if(cardNum[0] == cardNum[1] || cardNum[1] == cardNum[2]){
		earn(-2);
	}else if( cardNum[0] > cardNum[1] && cardNum[1] > cardNum[2] ||
		cardNum[0] < cardNum[1] && cardNum[1] < cardNum[2]){
		earn(1);
	}else{
		earn(-1);
	}
}

newGame();

$('#shot').click(shot);
$('#giveUp').click(newCards);

// ensure input value
function notNegative(){
	if(this.value < 0){
		this.value = 0;
	}
}

$('#fund').change(notNegative);
