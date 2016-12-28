var totop = document.getElementById('to_top');
totop.style.display = "none";
totop.onclick = function(){
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	var timer = setInterval(function(){
		var now = scroll;
		var speed = (0-now)/10;
		speed = Math.floor(speed);
		scroll =now + speed;
		if(scroll==0){
			clearInterval(timer);
		}
		scrollTo(0,scroll);
	},24);
}
onscroll = function(){
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	totop.style.display = scroll>0?"block":"none";
}
