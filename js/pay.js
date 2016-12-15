var a=document.getElementById('content_ul').getElementsByTagName('li');

a[0].className='z_nav';
for(var i=0; i<a.length; i++) {
	a[i].onmouseover=function(){
		for (var i=0; i<a.length; i++) {
			a[i].className='';
		};
		this.className='z_nav';
	};
}