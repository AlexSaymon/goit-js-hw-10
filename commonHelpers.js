import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m}from"./assets/vendor-77e16229.js";const t={input:document.querySelector('input[type="text"]'),startBtn:document.querySelector("button[data-start]"),days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};t.startBtn.disabled=!0;let a;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),a=e[0],a<new Date?window.alert("Please choose a date in the future"):t.startBtn.disabled=!1}};m(t.input,p);function f(e){const n=o(e),{days:r,hours:d,minutes:u,seconds:s}=n;t.days.textContent=String(r).padStart(2,"0"),t.hours.textContent=String(d).padStart(2,"0"),t.minutes.textContent=String(u).padStart(2,"0"),t.seconds.textContent=String(s).padStart(2,"0")}t.startBtn.addEventListener("click",()=>{t.input.disabled=!0,t.startBtn.disabled=!0;const e=setInterval(()=>{const n=a-Date.now();if(n<=0){clearInterval(e),t.input.disabled=!1,t.startBtn.disabled=!1;return}f(n)})});function o(e){const s=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:c,minutes:i,seconds:l}}console.log(o(2e3));console.log(o(14e4));console.log(o(2414e4));
//# sourceMappingURL=commonHelpers.js.map
