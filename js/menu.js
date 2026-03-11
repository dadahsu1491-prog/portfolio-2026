//MENU 下拉選單動畫
let nav = document.querySelectorAll('nav')[0];
let menu = document.querySelectorAll('menu')[0];
let menuH = menu.scrollHeight;
let boolNav = true;
nav.addEventListener('click', function () {
    // menu.classList.toggle("none");
    if (boolNav) {
        menu.style.height = menuH + 'px';
    } else {
        menu.style.height = 0 + 'px';
    }
    boolNav = !boolNav;

    for (const bar of nav.children) {
        bar.classList.toggle('none');
    }
});
for (const li of menu.children[0].children) {
    li.addEventListener('click', function () {
        // menu.classList.toggle("none");
        if (boolNav) {
            menu.style.height = menuH + 'px';
        } else {
            menu.style.height = 0 + 'px';
        }
        boolNav = !boolNav;
        for (const bar of nav.children) {
            bar.classList.toggle('none');
        }
    });
}
//YEAR 函數自動換年份
document.getElementById('year').textContent = new Date().getFullYear();
//gotop

// scrollTopCircleSimple.js
(function(){

  const config = window.ScrollTopConfig || {};
  const size = config.size || 60;             
  const strokeWidth = config.strokeWidth || 6; 
  const right = config.right || 40;           
  const bottom = config.bottom || 40;
  const color = config.color || "#1E90FF";    
  const gradient = config.gradient || ["#1E90FF","#00BFFF"];
  const arrow = config.arrow || "↑";

  // ===== 注入 CSS =====
  const style = document.createElement("style");
  style.innerHTML = `
    .scroll-top-circle{
      position: fixed;
      right: ${right}px;
      bottom: ${bottom}px;
      width: ${size}px;
      height: ${size}px;
      cursor: pointer;
      opacity:0;
      visibility:hidden;
      transition:0.3s, transform 0.2s;
      z-index:9999;
    }
    .scroll-top-circle.show{ opacity:1; visibility:visible; }
    .scroll-top-circle:hover{ transform: translateY(-2px); }
    .scroll-top-circle svg{ width:100%; height:100%; transform: rotate(-90deg); }
    .scroll-top-circle circle{ fill:none; stroke-width:${strokeWidth}; stroke-linecap:round; }
    .scroll-top-circle .bg{ stroke:#eee; }
    .scroll-top-circle .progress{ stroke: url(#grad); stroke-dasharray: ${2 * Math.PI * (size/2 - strokeWidth)}; stroke-dashoffset: ${2 * Math.PI * (size/2 - strokeWidth)}; transition: stroke-dashoffset 0.1s linear; }
    .scroll-top-circle span{
      position:absolute; left:50%; top:50%;
      transform:translate(-50%,-50%);
      font-size:${size/2.7}px;
      color:${color};
      pointer-events:none;
      display:inline-block;
    }
  `;
  document.head.appendChild(style);

  // ===== 建立按鈕 =====
  const btn = document.createElement("div");
  btn.className = "scroll-top-circle";
  btn.innerHTML = `
    <svg>
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${gradient[0]}" />
          <stop offset="100%" stop-color="${gradient[1]}" />
        </linearGradient>
      </defs>
      <circle class="bg" cx="${size/2}" cy="${size/2}" r="${size/2 - strokeWidth}"></circle>
      <circle class="progress" cx="${size/2}" cy="${size/2}" r="${size/2 - strokeWidth}"></circle>
    </svg>
    <span>${arrow}</span>
  `;
  document.body.appendChild(btn);

  const progressCircle = btn.querySelector(".progress");
  const circumference = 2 * Math.PI * (size/2 - strokeWidth);

  // ===== 滾動監聽 =====
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percent = scrollTop / docHeight;
    const offset = circumference - percent * circumference;
    progressCircle.style.strokeDashoffset = offset;

    if(scrollTop > 200){
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  // ===== 點擊回頂部 =====
  btn.addEventListener("click", () => {
    window.scrollTo({top:0, behavior:"smooth"});
  });

})();

const resumeBtns = document.querySelectorAll('.resume-btn');
const resumePanels = document.querySelectorAll('.resume-panel');
const tabLine = document.querySelector('.tab-line');

// 初始線位置
if (resumeBtns.length) {
    const activeBtn = document.querySelector('.resume-btn.active');
    tabLine.style.width = activeBtn.offsetWidth + 'px';
    tabLine.style.left = activeBtn.offsetLeft + 'px';
}

resumeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        resumeBtns.forEach((b) => b.classList.remove('active'));
        resumePanels.forEach((p) => p.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(target).classList.add('active');

        // 滑動底線
        tabLine.style.width = btn.offsetWidth + 'px';
        tabLine.style.left = btn.offsetLeft + 'px';
    });
});

//tabs
document.addEventListener("DOMContentLoaded", function(){
    const resumeBtns = document.querySelectorAll(".resume-btn");
    const resumePanels = document.querySelectorAll(".resume-panel");
    const tabLine = document.querySelector(".tab-line");

    if(resumeBtns.length){
        const activeBtn = document.querySelector(".resume-btn.active");
        tabLine.style.width = activeBtn.offsetWidth + "px";
        tabLine.style.left = activeBtn.offsetLeft + "px";
    }

    resumeBtns.forEach(btn=>{
        btn.addEventListener("click", ()=>{
            const target = btn.dataset.tab;

            resumeBtns.forEach(b => b.classList.remove("active"));
            resumePanels.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(target).classList.add("active");

            tabLine.style.width = btn.offsetWidth + "px";
            tabLine.style.left = btn.offsetLeft + "px";
        });
    });

    window.addEventListener("resize", ()=>{
        const activeBtn = document.querySelector(".resume-btn.active");
        tabLine.style.width = activeBtn.offsetWidth + "px";
        tabLine.style.left = activeBtn.offsetLeft + "px";
    });
});