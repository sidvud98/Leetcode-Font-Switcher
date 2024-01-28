// ==UserScript==
// @name         Leetcode Editor Font Modifier
// @namespace    https://github.com/sidvud98/Leetcode-Font-Switcher
// @version      1
// @description  Sets Leetcode Editor Font as Cascadia Code
// @author       Siddharth VS
// @updateURL    https://raw.githubusercontent.com/YukiDayDreamer/LeetCode-Timer/master/LeetCode-Timer.meta.js
// @downloadURL  https://raw.githubusercontent.com/YukiDayDreamer/LeetCode-Timer/master/LeetCode-Timer.user.js
// @match        https://leetcode.com/problems/*
// @grant        none
// ==/UserScript==



(function () {
    setTimeout(() => {
        var elem = document.querySelector(".view-lines.monaco-mouse-cursor-text");
        if (elem) {
            elem.style.fontFamily = "Cascadia code"
        };
    }, 2000)
})();