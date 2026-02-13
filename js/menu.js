//MENU 下拉選單動畫
let nav = document.querySelectorAll("nav")[0];
let menu = document.querySelectorAll("menu")[0];
let menuH = menu.scrollHeight;
let boolNav = true;
console.log(menuH);
nav.addEventListener("click", function () {
    // menu.classList.toggle("none");
    if (boolNav) {
        menu.style.height = menuH + "px";
    } else {
        menu.style.height = 0 + "px";
    }
    boolNav = !boolNav;

    for (const bar of nav.children) {
        bar.classList.toggle("none");
    }
});
for (const li of menu.children[0].children) {
    li.addEventListener("click", function () {
        // menu.classList.toggle("none");
        if (boolNav) {
            menu.style.height = menuH + "px";
        } else {
            menu.style.height = 0 + "px";
        }
        boolNav = !boolNav;
        for (const bar of nav.children) {
            bar.classList.toggle("none");
        }
    });
}
//YEAR 函數自動換年份
document.getElementById("year").textContent = new Date().getFullYear();
