var a = document.getElementById('aa').getElementsByTagName('li');
a[0].className='bb';
for(var i = 0; i < a.length; i++){
	a[i].onclick=function(){
		for(var i = 0; i < a.length; i++){
			a[i].className='';
		};
		this.className='bb';
	};
}
