// ==UserScript==
// @name         fuck csdn
// @namespace    http://tampermonkey.net/
// @version      2025-07-01
// @description  try to take over the world!
// @author       You
// @match        https://blog.csdn.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $("#article_content").removeAttr("style");
    $(".hide-article-box").remove()
})();
