!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")},e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((function(){return document.getElementsByTagName("body")[0].style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.startBtn.disabled=!0})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.d9787537.js.map
