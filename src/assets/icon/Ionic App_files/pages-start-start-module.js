(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-start-start-module"],{

/***/ "Ryxb":
/*!*****************************************************!*\
  !*** ./src/app/pages/start/start-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageRoutingModule", function() { return StartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start.page */ "x2OB");




const routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_3__["StartPage"]
    }
];
let StartPageRoutingModule = class StartPageRoutingModule {
};
StartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StartPageRoutingModule);



/***/ }),

/***/ "TXlj":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start/start.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content fullscreen class=\"ion-padding \" scroll-y=\"false\">\n  <ion-slides  pager=\"true\" [options]=\"slideOpts\">\n\n    <ion-slide>\n      <div class=\"slide mt-10\">\n        <img src=\"../../../assets/icon/factory.jpg\"/>\n        <h1>Monitor Your Factory</h1>\n      </div>\n    </ion-slide>\n    \n    <ion-slide>\n      <div class=\"slide mt-12\">\n        <img src=\"../../../assets/icon/factory1.jpg\"/>\n        <h1>Conserve Energy</h1>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <div class=\"slide \">\n        <img src=\"../../../assets/icon/factory2.jpg\"/>\n        <h1>Be Smart</h1>\n      </div>\n      <ion-button class= \"mt-14\" expand=\"full\" (click)= \"navigate()\"> Get Started <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\n\n    </ion-slide>\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "f9I+":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n\n.mt-14 {\n  margin-top: 14rem;\n}\n\n.mt-12 {\n  margin-top: 12rem;\n}\n\n.mt-10 {\n  margin-top: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0YXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFRTtFQUNFLHFDQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3RhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnN3aXBlci1zbGlkZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIGgyIHtcbiAgICBtYXJnaW4tdG9wOiAyLjhyZW07XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIGltZyB7XG4gICAgbWF4LWhlaWdodDogNTAlO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIG1hcmdpbjogNjBweCAwIDQwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICBiIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgcCB7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xuICB9XG5cbiAgcCBiIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDAwMDApO1xuICB9XG5cbiAgLm10LTE0e1xuICAgIG1hcmdpbi10b3A6IDE0cmVtO1xuICB9XG5cbiAgLm10LTEye1xuICAgIG1hcmdpbi10b3A6IDEycmVtO1xuICB9XG5cbiAgLm10LTEwe1xuICAgIG1hcmdpbi10b3A6IDEwcmVtO1xuICB9Il19 */");

/***/ }),

/***/ "ulMc":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.module.ts ***!
  \*********************************************/
/*! exports provided: StartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-routing.module */ "Ryxb");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start.page */ "x2OB");







let StartPageModule = class StartPageModule {
};
StartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _start_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartPageRoutingModule"]
        ],
        declarations: [_start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]]
    })
], StartPageModule);



/***/ }),

/***/ "x2OB":
/*!*******************************************!*\
  !*** ./src/app/pages/start/start.page.ts ***!
  \*******************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return StartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./start.page.html */ "TXlj");
/* harmony import */ var _start_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start.page.scss */ "f9I+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let StartPage = class StartPage {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
    navigate() {
        setTimeout(() => {
            this._router.navigate(['./login']);
        }, 1000);
    }
};
StartPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
StartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-start',
        template: _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_start_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StartPage);



/***/ })

}]);
//# sourceMappingURL=pages-start-start-module.js.map