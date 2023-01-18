document.getElementById("dark-mode-btn").addEventListener("click", function () {
    let darkModeBtn = document.getElementById("dark-mode-btn");

    if (darkMode) {
        darkModeBtn.style.left = "55%";
        darkModeOff();

        darkModeBtn.style.backgroundColor = "white";
        darkModeBtn.innerText = "☀️";
        darkModeBtn.style.borderColor = "black";
        darkModeBtn.style.boxShadow = "black 2px 2px 10px";

        darkMode = false;
    }
    else {
        darkModeBtn.style.left = "0%";
        darkModeOn();

        darkModeBtn.style.backgroundColor = "black";
        darkModeBtn.innerText = "🌕";
        darkModeBtn.style.borderColor = "white";
        darkModeBtn.style.boxShadow = "white 2px 2px 10px";

        darkMode = true;
    }
})

function darkModeOn() {
    document.body.style.backgroundColor = "black";

    boxes.forEach(function (box) {
        box.style.borderColor = "white";
    })

    document.querySelectorAll(".container-light").forEach(function (container) {
        container.classList.remove("container-light");
        container.classList.add("container-dark");
    })

    document.querySelectorAll(".btn-dark").forEach(function (btn) {
        btn.classList.remove("btn-dark");
        btn.classList.add("btn-light");
    })
}

function darkModeOff() {
    document.body.style.backgroundColor = "white";

    boxes.forEach(function (box) {
        box.style.borderColor = "black";
    })

    document.querySelectorAll(".container-dark").forEach(function (container) {
        container.classList.remove("container-dark");
        container.classList.add("container-light");
    })

    document.querySelectorAll(".btn-light").forEach(function (btn) {
        btn.classList.remove("btn-light");
        btn.classList.add("btn-dark");
    })
}