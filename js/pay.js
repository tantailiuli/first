var li = document.getElementById('content_ul').getElementsByTagName('li'),
	Len = li.length;
li[0].className='z_nav';
for(var i=0; i<Len; i++) {
	li[i].onmouseover=function(){
		for (var i=0; i<Len; i++) {
			li[i].className='';
		};
		this.className='z_nav';
	};
}