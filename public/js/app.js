/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ function(module, exports) {

eval("tl = new TimelineMax({paused: true});\ntl.to('.btn-primary', .9,{y:'-50', opacity: 0, ease:Power4.easeOut})\ntl.to('.section', .5,{backgroundColor:'#31BF86'})\ntl.from('#bowl', 1, {x:'-50', opacity: 0, ease: Power4.easeOut});\ntl.from('#Path_7', 1,{opacity: 0}, '-=.7' )\ntl.from('#sushi_1', 1, {y: '-200', rotation: 100, transformOrigin:\"50% 50%\", opacity: 0, ease: Bounce.easeOut}, '-=.4');\ntl.from('#sushi_2', 1, {y: '-200', rotation: -200, transformOrigin:\"50% 50%\", opacity: 0, ease: Bounce.easeOut}, '-=.7');\ntl.from('#chopstick_1', .4, {y: '-500%', rotation: 20, transformOrigin:\"50% 50%\", opacity: 0, ease: Power1.easeOut}, '-=.7');\ntl.from('#chopstick_2', .4, {y: '-400%', rotation: -60, transformOrigin:\"50% 50%\", opacity: 0, ease: Power1.easeOut}, '-=.6');\ntl.from('#bg1', 1, {x: 500, opacity: 0, ease: Power1.easeOut}, '-=.7');\ntl.from('#bg2', 1, {x: 450, opacity: 0, ease: Power4.easeOut}, '-=.7');\ntl.from('.hidden-text', 1, {y:'100%', ease:Power4.easeOut}, '-=.9')\n\n\nvar buttonPlay = document.getElementsByClassName('btn-primary')\nbuttonPlay[0].addEventListener(\"click\", function(){ \n    tl.play();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbInRsID0gbmV3IFRpbWVsaW5lTWF4KHtwYXVzZWQ6IHRydWV9KTtcbnRsLnRvKCcuYnRuLXByaW1hcnknLCAuOSx7eTonLTUwJywgb3BhY2l0eTogMCwgZWFzZTpQb3dlcjQuZWFzZU91dH0pXG50bC50bygnLnNlY3Rpb24nLCAuNSx7YmFja2dyb3VuZENvbG9yOicjMzFCRjg2J30pXG50bC5mcm9tKCcjYm93bCcsIDEsIHt4OictNTAnLCBvcGFjaXR5OiAwLCBlYXNlOiBQb3dlcjQuZWFzZU91dH0pO1xudGwuZnJvbSgnI1BhdGhfNycsIDEse29wYWNpdHk6IDB9LCAnLT0uNycgKVxudGwuZnJvbSgnI3N1c2hpXzEnLCAxLCB7eTogJy0yMDAnLCByb3RhdGlvbjogMTAwLCB0cmFuc2Zvcm1PcmlnaW46XCI1MCUgNTAlXCIsIG9wYWNpdHk6IDAsIGVhc2U6IEJvdW5jZS5lYXNlT3V0fSwgJy09LjQnKTtcbnRsLmZyb20oJyNzdXNoaV8yJywgMSwge3k6ICctMjAwJywgcm90YXRpb246IC0yMDAsIHRyYW5zZm9ybU9yaWdpbjpcIjUwJSA1MCVcIiwgb3BhY2l0eTogMCwgZWFzZTogQm91bmNlLmVhc2VPdXR9LCAnLT0uNycpO1xudGwuZnJvbSgnI2Nob3BzdGlja18xJywgLjQsIHt5OiAnLTUwMCUnLCByb3RhdGlvbjogMjAsIHRyYW5zZm9ybU9yaWdpbjpcIjUwJSA1MCVcIiwgb3BhY2l0eTogMCwgZWFzZTogUG93ZXIxLmVhc2VPdXR9LCAnLT0uNycpO1xudGwuZnJvbSgnI2Nob3BzdGlja18yJywgLjQsIHt5OiAnLTQwMCUnLCByb3RhdGlvbjogLTYwLCB0cmFuc2Zvcm1PcmlnaW46XCI1MCUgNTAlXCIsIG9wYWNpdHk6IDAsIGVhc2U6IFBvd2VyMS5lYXNlT3V0fSwgJy09LjYnKTtcbnRsLmZyb20oJyNiZzEnLCAxLCB7eDogNTAwLCBvcGFjaXR5OiAwLCBlYXNlOiBQb3dlcjEuZWFzZU91dH0sICctPS43Jyk7XG50bC5mcm9tKCcjYmcyJywgMSwge3g6IDQ1MCwgb3BhY2l0eTogMCwgZWFzZTogUG93ZXI0LmVhc2VPdXR9LCAnLT0uNycpO1xudGwuZnJvbSgnLmhpZGRlbi10ZXh0JywgMSwge3k6JzEwMCUnLCBlYXNlOlBvd2VyNC5lYXNlT3V0fSwgJy09LjknKVxuXG5cbnZhciBidXR0b25QbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuLXByaW1hcnknKVxuYnV0dG9uUGxheVswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXsgXG4gICAgdGwucGxheSgpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });