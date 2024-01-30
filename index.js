
        var accueilLink = document.getElementById('accueil-link');
        var linktreeLink = document.getElementById('linktree-link');
        var accueilSection = document.querySelector('.accueil');
        var linktreeSection = document.querySelector('.linktree');
        
        accueilLink.addEventListener('click', function() {
          accueilSection.style.display = 'block';
          linktreeSection.style.display = 'none';
          
        });
    
        linktreeLink.addEventListener('click', function() {
          accueilSection.style.display = 'none';
          linktreeSection.style.display = 'block';
          
        });
      

let canvas = document.querySelector('canvas');

let ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let str= "A+jk js:2 @dfs 17 tr YY ufds M5r P87 #18 $!& ^dfs $Ew er JH # $ * . (! ;)";
let matrix = str.split("");
let font = 12;
let col = width / font;
let arr = []; 
for(let i = 0; i< col; i++){
  arr[i] = 1;
}
const draw = () => {
  ctx.fillStyle = 'rgba(0,0,0,.05)';
  ctx.fillRect(0,0,width,height);
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.font = `${font}px system-ui`;
  for(let i=0; i < arr.length; i++){
    let txt = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(txt, i*font, arr[i] * font);
    if(arr[i] * font > height && Math.random() > 0.975){
      arr[i] = 0;
    }
    arr[i]++;
  }

}
setInterval(draw,20)

window.addEventListener('resize', () => location.reload());