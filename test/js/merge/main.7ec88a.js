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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleNotFoundError: Module not found: Error: Can't resolve 'file' in '/Users/yangyi/github/map-webpack-plugin/test/cases/merge'\nBREAKING CHANGE: It's no longer allowed to omit the '-loader' suffix when using loaders.\n                 You need to specify 'file-loader' instead of 'file',\n                 see https://webpack.js.org/guides/migrating/#automatic-loader-module-name-extension-removed\n    at factoryCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/webpack/lib/Compilation.js:260:39)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/webpack/lib/NormalModuleFactory.js:243:19\n    at onDoneResolving (/Users/yangyi/github/map-webpack-plugin/node_modules/webpack/lib/NormalModuleFactory.js:59:20)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/webpack/lib/NormalModuleFactory.js:191:21\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/async/dist/async.js:3824:9\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/async/dist/async.js:460:16\n    at iteratorCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/async/dist/async.js:1032:13)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/async/dist/async.js:944:16\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/async/dist/async.js:3821:13\n    at apply (/Users/yangyi/github/map-webpack-plugin/node_modules/async/dist/async.js:21:25)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/async/dist/async.js:56:12\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/async/dist/async.js:1110:9\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/async/dist/async.js:460:16\n    at iteratorCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/async/dist/async.js:1032:13)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/async/dist/async.js:944:16\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/async/dist/async.js:1107:13\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/webpack/lib/NormalModuleFactory.js:269:6\n    at onResolved (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:72:10)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at innerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:122:22)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:283:15\n    at Resolver.<anonymous> (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:33:11)\n    at Resolver.applyPluginsParallelBailResult1 (/Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:288:14)\n    at beforeInnerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:112:19)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (/Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:181:46)\n    at Resolver.doResolve (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:100:11)\n    at Resolver.resolve (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:74:14)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/webpack/lib/NormalModuleFactory.js:262:21\n    at onResolved (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:70:11)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:138:10)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (/Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:181:46)\n    at innerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:125:19)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:283:15\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:38:4\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:138:10)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (/Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:181:46)\n    at innerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:125:19)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:283:15\n    at innerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:123:11)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:283:15\n    at resolver.doResolve.createInnerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:136:11)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:185:35)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/ModuleKindPlugin.js:23:4\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:138:10)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (/Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:181:46)\n    at innerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:125:19)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:283:15\n    at afterInnerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:138:10)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (/Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:181:46)\n    at innerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:125:19)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:283:15\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/forEachBail.js:29:14\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:138:10)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (/Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:181:46)\n    at innerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:125:19)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:283:15\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:38:4\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:138:10)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (/Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:181:46)\n    at innerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:125:19)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:283:15\n    at innerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:123:11)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:283:15\n    at resolver.doResolve.createInnerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:138:10)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:188:11)\n    at innerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:123:11)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:283:15\n    at resolver.doResolve.createInnerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:138:10)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (/Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:181:46)\n    at innerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:125:19)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:283:15\n    at afterInnerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:138:10)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (/Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:181:46)\n    at innerCallback (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/Resolver.js:125:19)\n    at loggingCallbackWrapper (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/tapable/lib/Tapable.js:283:15\n    at Resolver.<anonymous> (/Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/DirectoryExistsPlugin.js:20:12)\n    at /Users/yangyi/github/map-webpack-plugin/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:62:14\n    at _combinedTickCallback (internal/process/next_tick.js:73:7)\n    at process._tickCallback (internal/process/next_tick.js:104:9)");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);


/***/ })
/******/ ]);