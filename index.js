// ==UserScript==
// @name         Medium Redirect to Scribe
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Redirect Medium Article to scribe.rip alternative frontend
// @author       Thomas Harr
// @license      MIT
// @match        https://*.medium.com/*
// @run-at       document-start
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var redirectUrl = location.href.replace(location.host, 'scribe.rip');
    return location.replace(redirectUrl);
})();
