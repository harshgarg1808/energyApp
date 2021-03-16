(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" >\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">\n      <img src=\"../../assets/icon/logo-white.svg\" class=\"w-17\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg-color\">\n  \n  <ion-row class=\" p-3 ion-padding header-section\">\n    <ion-row class=\" body-section\"><span class=\"heading\">Have a Query?</span><span class=\"footer\">We'll be happy to help!</span></ion-row>\n  </ion-row>\n\n\n    <ion-row class=\"p-3\">\n      <ion-col size=\"3\" class= \"ion-justify-content-center ion-align-items-center\">\n        <a href=\"tel:8130065725\"><ion-icon class=\"contact-icons\" name=\"call-sharp\"></ion-icon></a> \n      </ion-col>\n\n      <ion-col size=\"9\"> \n        <div class=\"body mb-1\"> <span class=\"callUs\">Call Us<ion-badge class=\"badge-size ion-margin-start\" color=\"primary\" style=\"vertical-align: baseline;\">New</ion-badge></span></div>\n        <div class=\" phoneNo\"> +91 7303422689 </div>\n      </ion-col>\n\n    </ion-row>\n    \n    <ion-row class=\"p-3\">\n      <ion-col size=\"3\" class= \"ion-justify-content-center ion-align-items-center\">\n        <ion-icon class=\"contact-icons\" name=\"mail-open-sharp\"></ion-icon>\n      </ion-col>\n\n      <ion-col size=\"9\"> \n        <div class=\" body callUs\">Email us</div>\n        <div class=\" phoneNo\"> harshgarg1808@gmail.com</div>\n      </ion-col>\n\n    </ion-row>\n\n\n</ion-content>\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".h-95 {\n  height: 95%;\n}\n\n.w-17 {\n  width: 17%;\n}\n\n.p-3 {\n  padding: 2rem;\n}\n\nbody {\n  font-family: \"Karla\" !important;\n}\n\n/* Contact Us */\n\n.bg-color {\n  background-color: #f7f7f7e0;\n}\n\n.header-section {\n  height: 20vh;\n}\n\n.body-section {\n  height: 15vh;\n}\n\n.heading {\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.footer {\n  font-size: 1.25rem;\n  color: #201f1f87;\n}\n\n.contact-icons {\n  font-size: 2rem;\n}\n\n.callUs {\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n\n.phoneNo {\n  font-size: 0.9rem;\n  color: #3867c1;\n}\n\n.badge-size {\n  font-size: 0.7rem;\n  vertical-align: text-bottom;\n}\n\na {\n  background-color: transparent;\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQSxlQUFBOztBQUNBO0VBQ0ksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLDJCQUFBO0FBREo7O0FBSUE7RUFDSSw2QkFBQTtFQUNBLGNBQUE7QUFESiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oLTk1e1xuICAgIGhlaWdodDogOTUlO1xufVxuXG4udy0xN3tcbiAgICB3aWR0aDogMTclO1xufVxuXG4ucC0ze1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnS2FybGEnICFpbXBvcnRhbnQ7XG59XG5cbi8qIENvbnRhY3QgVXMgKi9cbi5iZy1jb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3ZTA7XG59XG5cbi5oZWFkZXItc2VjdGlvbntcbiAgICBoZWlnaHQ6IDIwdmg7XG59XG5cbi5ib2R5LXNlY3Rpb257XG4gICAgaGVpZ2h0OiAxNXZoO1xufVxuXG4uaGVhZGluZ3tcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxufVxuXG4uZm9vdGVye1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBjb2xvcjogIzIwMWYxZjg3O1xufVxuXG4uY29udGFjdC1pY29uc3tcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5jYWxsVXN7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5waG9uZU5ve1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGNvbG9yOiAjMzg2N2MxO1xufVxuXG5cbi5iYWRnZS1zaXple1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cblxuYXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn0iXX0= */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");
/* harmony import */ var _components_circle_graph_circle_graph_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/circle-graph/circle-graph.component */ "yIia");









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"],
        ],
        exports: [_components_circle_graph_circle_graph_component__WEBPACK_IMPORTED_MODULE_8__["CircleGraphComponent"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"], _components_circle_graph_circle_graph_component__WEBPACK_IMPORTED_MODULE_8__["CircleGraphComponent"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map