"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { hello } from './hello';
var hello_1 = require("../hello");
var App = /** @class */ (function () {
    function App() {
    }
    /** Entry point of our app */
    App.start = function () {
        console.log((0, hello_1.hello)('world'));
    };
    return App;
}());
App.start();
//# sourceMappingURL=app.js.map