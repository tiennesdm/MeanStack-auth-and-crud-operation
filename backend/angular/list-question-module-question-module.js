(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-question-module-question-module"],{

/***/ "./src/app/list/question/component/create/question.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/list/question/component/create/question.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field,\ntextarea {\n  width: 100%;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\nbutton{\n  align-self: auto;\n  margin: auto;\n\n}\n\n.errors{\n  padding-top: 10px;\n  margin-top: 10px;\n  margin: auto;\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9xdWVzdGlvbi9jb21wb25lbnQvY3JlYXRlL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7O0FBRWQ7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9saXN0L3F1ZXN0aW9uL2NvbXBvbmVudC9jcmVhdGUvcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLFxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5idXR0b257XG4gIGFsaWduLXNlbGY6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcblxufVxuLmVycm9yc3tcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/list/question/component/create/question.component.html":
/*!************************************************************************!*\
  !*** ./src/app/list/question/component/create/question.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form  #f=\"ngForm\" (ngSubmit)=\"onAddQuestion(f)\" *ngIf=\"!isLoading\">\n      <mat-form-field>\n          <input matInput  placeholder=\"Enter the Question\"\n          name=\"question\"\n          question\n          ngModel\n          #question=\"ngModel\"\n\n          name=\"question\" required>\n\n       </mat-form-field>\n\n       <section>\n      <mat-checkbox [(ngModel)]=\"answerA\" name=\"answerA\">\n    <mat-form-field>\n       <input matInput  placeholder=\"Option A\" required name=\"optionA\"\n       [(ngModel)]=\"optionA\">\n\n    </mat-form-field>\n\n  </mat-checkbox>\n  <mat-checkbox [(ngModel)]=\"answerB\" name=\"answerB\">\n    <mat-form-field >\n      <input matInput  placeholder=\"Option B\"  [(ngModel)]=\"optionB\" name=\"optionB\" required>\n\n    </mat-form-field>\n  </mat-checkbox>\n  <mat-checkbox [(ngModel)]=\"answerC\" name=\"answerC\">\n      <mat-form-field >\n        <input matInput  placeholder=\"Option C\"  [(ngModel)]=\"optionC\" name=\"optionC\"required>\n\n      </mat-form-field>\n    </mat-checkbox>\n    <mat-checkbox [(ngModel)]=\"answerD\" name=\"answerD\">\n        <mat-form-field >\n          <input matInput  placeholder=\"Option D\" [(ngModel)]=\"optionD\" name=\"optionD\" required>\n\n        </mat-form-field>\n      </mat-checkbox>\n    </section>\n    <mat-form-field>\n      <input matInput name=\"email\" ngModel type=\"email\" placeholder=\"E-Mail (optional)\" #emailInput=\"ngModel\"  email>\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email.</mat-error>\n    </mat-form-field>\n\n    <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"!f.valid\" >Add Question</button>\n  </form>\n  <b class=\"errors\" *ngIf=\"answerArray.length<=0\">{{message}}</b>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/list/question/component/create/question.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/list/question/component/create/question.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyErrorStateMatcher, QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/question.service */ "./src/app/list/question/services/question.service.ts");





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(route, authService, questionService) {
        this.route = route;
        this.authService = authService;
        this.questionService = questionService;
        this.optionA = '';
        this.optionB = '';
        this.optionC = '';
        this.optionD = '';
        this.questionArray = [];
        this.message = '';
        this.answerArray = [];
        this.isLoading = false;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (authStatus) {
            _this.isLoading = false;
        });
    };
    QuestionComponent.prototype.onAddQuestion = function (f) {
        var _this = this;
        if (f.invalid) {
            return null;
        }
        console.log('form value', f.value);
        if (f.value.answerA === true) {
            this.answerArray.push(this.optionA);
        }
        else if (f.value.answerB === true) {
            this.answerArray.push(this.optionB);
        }
        else if (f.value.answerC === true) {
            this.answerArray.push(this.optionC);
        }
        else if (f.value.answerD === true) {
            this.answerArray.push(this.optionD);
        }
        if (this.answerArray.length == 0) {
            this.message = 'Please select the answer';
            console.log('this lenth', this.answerArray.length);
            console.log('Please a answer for that question');
            this.questionArray = [];
        }
        else {
            this.isLoading = true;
            this.questionArray.push(f.value.optionA, f.value.optionB, f.value.optionC, f.value.optionD);
            this.questionService.addQuestion(f.value.question, this.questionArray, this.answerArray, f.value.email);
            console.log(this.questionArray);
            this.message = '';
            this.answerArray = [];
            this.questionArray = [];
            f.reset();
            f.resetForm();
            setTimeout(function () { _this.isLoading = false; }, 3000);
        }
    };
    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/list/question/component/create/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/list/question/component/create/question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/list/question/component/listquestion/listquestion.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/list/question/component/listquestion/listquestion.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\nmat-spinner {\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9xdWVzdGlvbi9jb21wb25lbnQvbGlzdHF1ZXN0aW9uL2xpc3RxdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9saXN0L3F1ZXN0aW9uL2NvbXBvbmVudC9saXN0cXVlc3Rpb24vbGlzdHF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/list/question/component/listquestion/listquestion.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/list/question/component/listquestion/listquestion.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        <!-- Question Column -->\n        <ng-container matColumnDef=\"Question\">\n          <th mat-header-cell *matHeaderCellDef> Question </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element}} </td>\n        </ng-container>\n        <!-- Option A Column -->\n        <ng-container matColumnDef=\"Option A\">\n          <th mat-header-cell *matHeaderCellDef> Option A </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.optionId.option[0]}} </td>\n        </ng-container>\n           <!-- Option B Column -->\n        <ng-container matColumnDef=\"Option B\">\n          <th mat-header-cell *matHeaderCellDef> Option B</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.optionId.option[1]}} </td>\n        </ng-container>\n          <!-- Option C Column -->\n        <ng-container matColumnDef=\"Option C\">\n          <th mat-header-cell *matHeaderCellDef> Option C</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.optionId.option[2]}} </td>\n        </ng-container>\n            <!-- Option D Column -->\n        <ng-container matColumnDef=\"Option D\">\n          <th mat-header-cell *matHeaderCellDef> Option D</th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.optionId.option[3]}} </td>\n        </ng-container>\n        <!-- Answer Column -->\n        <ng-container matColumnDef=\"Answer\">\n          <th mat-header-cell *matHeaderCellDef> Answer </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.answerId.answer}} </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n\n\n"

/***/ }),

/***/ "./src/app/list/question/component/listquestion/listquestion.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/list/question/component/listquestion/listquestion.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListquestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListquestionComponent", function() { return ListquestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/question.service */ "./src/app/list/question/services/question.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ListquestionComponent = /** @class */ (function () {
    // dataSource = ELEMENT_DATA;
    function ListquestionComponent(questionService) {
        this.questionService = questionService;
        this.isLoading = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.question = [];
        this.displayedColumns = ['Question', 'Option A', 'Option B', 'Option C', 'Option D', 'Answer'];
    }
    ListquestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.getQuestions().subscribe(function (result) {
            _this.isLoading = true;
            // let data2 = data.i
            _this.dataSource.data = result;
            _this.isLoading = false;
            //  console.log(dataSource);
            console.log(_this.dataSource.data);
            //  this.dataSource = data;
            console.log(_this.dataSource);
        });
    };
    ListquestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listquestion',
            template: __webpack_require__(/*! ./listquestion.component.html */ "./src/app/list/question/component/listquestion/listquestion.component.html"),
            styles: [__webpack_require__(/*! ./listquestion.component.css */ "./src/app/list/question/component/listquestion/listquestion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]])
    ], ListquestionComponent);
    return ListquestionComponent;
}());



/***/ }),

/***/ "./src/app/list/question/module/question.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/list/question/module/question.module.ts ***!
  \*********************************************************/
/*! exports provided: QuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModule", function() { return QuestionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_create_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/create/question.component */ "./src/app/list/question/component/create/question.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../.../../../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _component_listquestion_listquestion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/listquestion/listquestion.component */ "./src/app/list/question/component/listquestion/listquestion.component.ts");









var routes = [
    { path: '', component: _component_create_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'list', component: _component_listquestion_listquestion_component__WEBPACK_IMPORTED_MODULE_8__["ListquestionComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] }
];
var QuestionModule = /** @class */ (function () {
    function QuestionModule() {
    }
    QuestionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _component_create_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"],
                _component_listquestion_listquestion_component__WEBPACK_IMPORTED_MODULE_8__["ListquestionComponent"],
            ],
            exports: [
                _component_create_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"],
                _component_listquestion_listquestion_component__WEBPACK_IMPORTED_MODULE_8__["ListquestionComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialForm"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ]
        })
    ], QuestionModule);
    return QuestionModule;
}());



/***/ }),

/***/ "./src/app/list/question/services/question.service.ts":
/*!************************************************************!*\
  !*** ./src/app/list/question/services/question.service.ts ***!
  \************************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
var QuestionService = /** @class */ (function () {
    function QuestionService(http, router) {
        this.http = http;
        this.router = router;
    }
    QuestionService.prototype.addQuestion = function (question, option, answer, email) {
        var _this = this;
        var postData = { id: null, question: question, option: option, answer: answer, creator: null, email: email };
        console.log('serviceData', postData);
        this.http
            .post(BACKEND_URL + '/addquestion/', postData)
            .subscribe(function (responseData) {
            alert(responseData.message);
            _this.router.navigate(['/']);
        });
    };
    QuestionService.prototype.getQuestions = function () {
        return this.http.get(BACKEND_URL + '/addquestion/getQuestion');
    };
    QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ })

}]);
//# sourceMappingURL=list-question-module-question-module.js.map