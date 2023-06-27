var listitems = document.querySelectorAll('li');
for(var i=0;i<listitems.length;i++){
  listitems[i].addEventListener('click',(e)=>{var li=e.target;
  var file=li.getAttribute('data-file');
  var audio=document.querySelector('audio');
  audio.setAttribute('src',file);
  audio.play();

  var activeli=document.querySelector('.active');
  activeli.className='';
  li.className='active';
})
}
