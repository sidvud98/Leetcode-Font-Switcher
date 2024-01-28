// ==UserScript==
// @name         Leetcode Editor Font Modifier
// @namespace    none
// @version      1
// @description  Sets Leetcode Editor Font as Cascadia Code
// @author       Siddharth VS
// @updateURL    none
// @downloadURL  none
// @match        https://leetcode.com/problems/*
// @grant        none
// ==/UserScript==




(function() {
    setTimeout(() => {
        var elem = document.querySelector(".view-lines.monaco-mouse-cursor-text");
        if(elem){
            elem.style.fontFamily = "Cascadia code"
        };
    },2000)
})();