(function(){
var BP=768;
var d=document.getElementById('mob-drawer'),o=document.getElementById('overlay'),b=document.getElementById('hamburger'),c=document.getElementById('mob-close');
function open(){if(!d)return;d.classList.add('open');o.classList.add('open');b.setAttribute('aria-expanded','true');d.setAttribute('aria-hidden','false');}
function close(){if(!d)return;d.classList.remove('open');o.classList.remove('open');b.setAttribute('aria-expanded','false');d.setAttribute('aria-hidden','true');}
if(b){b.addEventListener('click',function(){d.classList.contains('open')?close():open();});}
if(c)c.addEventListener('click',close);
if(o)o.addEventListener('click',close);
document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
window.addEventListener('resize',function(){if(window.innerWidth>BP)close();});
var f=document.querySelectorAll('.faq details');
for(var i=0;i<f.length;i++){f[i].addEventListener('toggle',function(){if(this.open){for(var j=0;j<f.length;j++){if(f[j]!==this)f[j].open=false;}}});}
})();
