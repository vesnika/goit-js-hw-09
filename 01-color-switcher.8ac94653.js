!function(){refs={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};var t=null;refs.startBtn.addEventListener("click",(function(){t=setInterval((function(){return document.getElementsByTagName("body")[0].style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),refs.startBtn.disabled=!0})),refs.stopBtn.addEventListener("click",(function(){clearInterval(t),refs.startBtn.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.8ac94653.js.map
