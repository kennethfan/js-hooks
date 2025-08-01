// ==UserScript==
// @name         chinatax.gov.cn
// @namespace    http://tampermonkey.net/
// @version      2025-08-01
// @description  try to take over the world!
// @author       You
// @match        https://*.com
// @match        https://*.cn
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var AAA = Function.prototype.constructor;

Function.prototype.constructor = function (a) {
	if(a == "debugger") {
		return function (){};
	}

	return AAA(a);
}
})();
