
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
          youtubeApiSection.style.display = 'none';
        });
      
        // JavaScript for changing styles with color input
document.getElementById('changeBorderColor').addEventListener('input', function() {
  document.querySelector('.parent_nav').style.border = '2px solid ' + this.value;
});

document.getElementById('changeTextColor').addEventListener('input', function() {
  document.querySelector('.child_nav').style.color = this.value;
});

document.getElementById('changeBackgroundColor').addEventListener('input', function() {
  document.body.style.backgroundColor = this.value;
});