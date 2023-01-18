window.addEventListener("load", function () {
    let mainMenu = document.getElementById("main-menu");
    let gameBoard = document.getElementById("gameboard");
    let intro = document.getElementById("introduction");
    let modeOptions = document.getElementById("mode-options");

    let mainMenuAppears = mainMenu.animate([{opacity: 0, easing: 'ease-in'}, {opacity: 1}], 2500);

    mainMenuAppears.addEventListener("finish", function () {
        mainMenu.style.opacity = 1;
        let introDisappears = intro.animate([{opacity: 1, easing: 'ease-in'}, {opacity: 0}], 2500);

        introDisappears.addEventListener("finish", function() {
            intro.classList.remove("main-menu-displayed");
            intro.classList.add("main-menu-hidden");
            
            modeOptions.classList.remove("main-menu-hidden");
            modeOptions.classList.add("main-menu-displayed");

            let modeOptionsAppears = modeOptions.animate([{opacity: 0, easing: 'ease-in'}, {opacity: 1}], 2000);
        })
    });
})