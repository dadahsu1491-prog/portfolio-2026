//MENU 下拉選單動畫
let nav = document.querySelectorAll("nav")[0];
let menu = document.querySelectorAll("menu")[0];
let menuH = menu.scrollHeight;
let boolNav = true;
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
})
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
    })
}
//YEAR 函數自動換年份
document.getElementById("year").textContent = new Date().getFullYear();
//gotop
let goTop = document.createElement("a");
goTop.id = "gotop";
goTop.textContent = "TOP";
goTop.href = "#";
goTop.style.position = "fixed";
goTop.style.width = "3em";
goTop.style.hight = "3em";
goTop.style.backgroundColor = "#264a9d94";
goTop.style.color = "#fff";
goTop.style.fontWeight = "700";
goTop.style.textAlign = "center";
goTop.style.lineHeight = "3em";
goTop.style.fontSize = "0.9em";
goTop.style.bottom = "1em";
goTop.style.right = "1em";
goTop.style.borderRadius = "50%";
goTop.style.textDecoration = "none";
goTop.style.zIndex = "200";

document.getElementsByTagName("body")[0].appendChild(goTop);

