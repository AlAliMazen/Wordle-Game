function showInstructions(){
    let controllers = document.getElementById('controllers');
    controllers.style.display='none';
    let howToPlaySection = document.getElementById('game-instructions');
    howToPlaySection.style.display='block';
}

function hideInstructions(){
    let controllers = document.getElementById('controllers');
    controllers.style.display='flex';
    controllers.style.justifyContent='space-around';
    controllers.style.alignItems='center';

    let howToPlaySection = document.getElementById('game-instructions');
    howToPlaySection.style.display='none';
}

