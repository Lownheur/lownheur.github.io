
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
      
