/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("function init() {\r\n    const menuToggle = document.getElementById('menu-toggle');\r\n    const menu = document.getElementById('menu');\r\n\r\n    if (menuToggle && menu) {\r\n        menuToggle.addEventListener('click', function() {\r\n            if (menu.style.left === '0px') {\r\n                menu.style.left = '-250px';\r\n            } else {\r\n                menu.style.left = '0px';\r\n            }\r\n        });\r\n    } else {\r\n        console.error('Menu toggle or menu element not found');\r\n    }\r\n}\r\n\r\nfunction handleSubmit(event) {\r\n    event.preventDefault(); // Empêche le comportement par défaut du formulaire\r\n\r\n    const formData = new FormData(document.getElementById('contact-form'));\r\n    const data = {};\r\n    formData.forEach((value, key) => {\r\n        data[key] = value;\r\n    });\r\n\r\n    fetch('/send_email', {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        },\r\n        body: JSON.stringify(data)\r\n    })\r\n    .then(response => response.text())\r\n    .then(result => {\r\n        alert('Bien Reçus !');\r\n    })\r\n    .catch(error => {\r\n        console.error('Erreur:', error);\r\n        alert('Erreur lors de l\\'envoi du message.');\r\n    });\r\n}\r\n\r\n// Initialisation du script lorsque le DOM est complètement chargé\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    init();\r\n    const form = document.getElementById('contact-form');\r\n    if (form) {\r\n        form.addEventListener('submit', handleSubmit);\r\n    } else {\r\n        console.error('Form element not found');\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://portfolio-bilaltaoufik/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;