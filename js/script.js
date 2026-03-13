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
