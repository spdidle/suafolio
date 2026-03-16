document.addEventListener("DOMContentLoaded", () => {

    // open external links in new tab (site links stay in same tab)
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    });

    const generateBtn = document.getElementById('generate');
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            const thoughtElement = document.getElementById('thought');
            thoughtElement.innerHTML = getRandomThought();
        });
    }

    // click sfx
    const clickSound = document.createElement("audio");
    clickSound.id = "clickSound";
    clickSound.src = "images/ui/click.mp3";
    clickSound.preload = "auto";
    document.body.appendChild(clickSound);

    document.addEventListener("mousedown", () => {
        clickSound.currentTime = 0;
        clickSound.play().catch(()=>{});
    });

});

// glitter cursor!

var lastStar = 0;
window.addEventListener('mousemove', function(e) {
  var now = Date.now();
  if (now - lastStar < 60) return;
  lastStar = now;

  var arr = [1, 0.8, 0.5, 0.2];

  arr.forEach(function(i) {
    var x = (1 - i) * 75;
    var star = document.createElement('div');

    star.className = 'star';
    star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
    star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';

    document.body.appendChild(star);

    window.setTimeout(function() {
      document.body.removeChild(star);
    }, Math.round(Math.random() * i * 600));
  });
}, false);