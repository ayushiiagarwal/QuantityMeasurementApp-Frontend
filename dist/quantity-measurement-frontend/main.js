"use strict";
(self["webpackChunkquantity_measurement_frontend"] = self["webpackChunkquantity_measurement_frontend"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_toast_host_toast_host_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/toast-host/toast-host.component */ 5383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class AppComponent {
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet")(1, "app-toast-host");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_components_toast_host_toast_host_component__WEBPACK_IMPORTED_MODULE_0__.ToastHostComponent],
    encapsulation: 2
  });
}

/***/ }),

/***/ 289:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2181);



const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_1__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.routes), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.withInterceptorsFromDi)())]
};

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _features_auth_auth_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/auth/auth-page.component */ 8900);
/* harmony import */ var _features_auth_google_callback_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/auth/google-callback.component */ 351);
/* harmony import */ var _features_dashboard_dashboard_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/dashboard/dashboard-page.component */ 7446);



const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'auth'
}, {
  path: 'auth',
  component: _features_auth_auth_page_component__WEBPACK_IMPORTED_MODULE_0__.AuthPageComponent
}, {
  path: 'auth/callback',
  component: _features_auth_google_callback_component__WEBPACK_IMPORTED_MODULE_1__.GoogleCallbackComponent
}, {
  path: 'dashboard',
  component: _features_dashboard_dashboard_page_component__WEBPACK_IMPORTED_MODULE_2__.DashboardPageComponent
}, {
  path: '**',
  redirectTo: 'auth'
}];

/***/ }),

/***/ 2954:
/*!************************************!*\
  !*** ./src/app/core/data/units.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CATEGORY_LABELS: () => (/* binding */ CATEGORY_LABELS),
/* harmony export */   OPERATION_LABELS: () => (/* binding */ OPERATION_LABELS),
/* harmony export */   UNIT_OPTIONS: () => (/* binding */ UNIT_OPTIONS)
/* harmony export */ });
const UNIT_OPTIONS = {
  length: [{
    code: 'FEET',
    label: 'Feet',
    symbol: 'ft'
  }, {
    code: 'INCH',
    label: 'Inch',
    symbol: 'in'
  }, {
    code: 'YARDS',
    label: 'Yards',
    symbol: 'yd'
  }, {
    code: 'CENTIMETER',
    label: 'Centimeter',
    symbol: 'cm'
  }],
  weight: [{
    code: 'KILOGRAM',
    label: 'Kilogram',
    symbol: 'kg'
  }, {
    code: 'GRAM',
    label: 'Gram',
    symbol: 'g'
  }, {
    code: 'POUND',
    label: 'Pound',
    symbol: 'lb'
  }],
  volume: [{
    code: 'LITRE',
    label: 'Litre',
    symbol: 'L'
  }, {
    code: 'MILLILITRE',
    label: 'Millilitre',
    symbol: 'mL'
  }, {
    code: 'GALLON',
    label: 'Gallon',
    symbol: 'gal'
  }],
  temperature: [{
    code: 'CELSIUS',
    label: 'Celsius',
    symbol: '°C'
  }, {
    code: 'FAHRENHEIT',
    label: 'Fahrenheit',
    symbol: '°F'
  }]
};
const CATEGORY_LABELS = {
  length: 'Length',
  weight: 'Weight',
  volume: 'Volume',
  temperature: 'Temperature'
};
const OPERATION_LABELS = {
  compare: 'Compare',
  convert: 'Convert',
  add: 'Add',
  subtract: 'Subtract',
  divide: 'Divide'
};

/***/ }),

/***/ 4723:
/*!***************************************************!*\
  !*** ./src/app/core/services/auth-api.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthApiService: () => (/* binding */ AuthApiService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class AuthApiService {
  http;
  constructor(http) {
    this.http = http;
  }
  login(payload) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/auth/login`, payload, {
      responseType: 'text'
    });
  }
  register(payload) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/auth/register`, payload, {
      responseType: 'text'
    });
  }
  static ɵfac = function AuthApiService_Factory(t) {
    return new (t || AuthApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthApiService,
    factory: AuthApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5200:
/*!**************************************************!*\
  !*** ./src/app/core/services/history.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryService: () => (/* binding */ HistoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HistoryService {
  mergeHistory(session, remote) {
    if (session.kind === 'guest') {
      return [];
    }
    return remote.slice().sort((a, b) => {
      const aTime = a.createdAt ? Date.parse(a.createdAt) : 0;
      const bTime = b.createdAt ? Date.parse(b.createdAt) : 0;
      return bTime - aTime;
    });
  }
  static ɵfac = function HistoryService_Factory(t) {
    return new (t || HistoryService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: HistoryService,
    factory: HistoryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6469:
/*!**********************************************************!*\
  !*** ./src/app/core/services/measurement-api.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeasurementApiService: () => (/* binding */ MeasurementApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class MeasurementApiService {
  http;
  constructor(http) {
    this.http = http;
  }
  headers(session) {
    const token = session.token;
    if (!token) {
      return {};
    }
    return {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }
  compare(input, session) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/api/quantities/compare`, input, this.headers(session));
  }
  convert(input, session) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/api/quantities/convert`, input, this.headers(session));
  }
  add(input, session) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/api/quantities/add`, input, this.headers(session));
  }
  subtract(input, session) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/api/quantities/subtract`, input, this.headers(session));
  }
  divide(input, session) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/api/quantities/divide`, input, this.headers(session));
  }
  fetchHistory(session) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/api/quantities/history`, this.headers(session));
  }
  importGuestHistory(entries, session) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/api/quantities/history/import`, entries, this.headers(session));
  }
  clearHistory(session) {
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/api/quantities/history`, this.headers(session));
  }
  static ɵfac = function MeasurementApiService_Factory(t) {
    return new (t || MeasurementApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MeasurementApiService,
    factory: MeasurementApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7988:
/*!**************************************************!*\
  !*** ./src/app/core/services/session.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionService: () => (/* binding */ SessionService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



const SESSION_KEY = 'qma_session';
const LEGACY_GUEST_HISTORY_KEY = 'qma_guest_history';
class SessionService {
  router;
  constructor(router) {
    this.router = router;
  }
  readRaw() {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) {
      return {
        kind: 'guest'
      };
    }
    try {
      return JSON.parse(raw);
    } catch {
      return {
        kind: 'guest'
      };
    }
  }
  getSession() {
    return this.readRaw();
  }
  isAuthenticated() {
    return this.readRaw().kind === 'authenticated' && !!this.readRaw().token;
  }
  isGuest() {
    return !this.isAuthenticated();
  }
  get token() {
    return this.readRaw().token ?? null;
  }
  get email() {
    return this.readRaw().email ?? null;
  }
  get displayName() {
    const session = this.readRaw();
    return session.name || session.email || 'Guest';
  }
  get avatarLetter() {
    return (this.displayName || 'G').charAt(0).toUpperCase();
  }
  get authHeader() {
    const token = this.token;
    return token ? {
      Authorization: `Bearer ${token}`
    } : {};
  }
  get googleLoginUrl() {
    return `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/oauth2/authorization/google`;
  }
  storeAuthenticatedSession(session) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({
      kind: 'authenticated',
      ...session
    }));
  }
  storeGuestSession() {
    localStorage.removeItem(LEGACY_GUEST_HISTORY_KEY);
    localStorage.setItem(SESSION_KEY, JSON.stringify({
      kind: 'guest'
    }));
  }
  logout() {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(LEGACY_GUEST_HISTORY_KEY);
    void this.router.navigateByUrl('/auth');
  }
  static ɵfac = function SessionService_Factory(t) {
    return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SessionService,
    factory: SessionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5423:
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastService: () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class ToastService {
  messagesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  messages$ = this.messagesSubject.asObservable();
  success(text) {
    this.messagesSubject.next({
      text,
      variant: 'success'
    });
  }
  error(text) {
    this.messagesSubject.next({
      text,
      variant: 'error'
    });
  }
  info(text) {
    this.messagesSubject.next({
      text,
      variant: 'info'
    });
  }
  static ɵfac = function ToastService_Factory(t) {
    return new (t || ToastService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ToastService,
    factory: ToastService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8900:
/*!******************************************************!*\
  !*** ./src/app/features/auth/auth-page.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthPageComponent: () => (/* binding */ AuthPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var _core_services_auth_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/auth-api.service */ 4723);
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/session.service */ 7988);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/toast.service */ 5423);












function AuthPageComponent_div_17_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.loginError);
  }
}
function AuthPageComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuthPageComponent_div_17_p_1_Template, 2, 1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthPageComponent_div_17_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.signInWithGoogle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Continue with Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 16)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "or sign in with email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 17)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 17)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthPageComponent_div_17_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthPageComponent_div_17_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.continueAsGuest());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Continue as Guest");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.loginError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r1.loginForm.controls.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r1.loginForm.controls.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.submitting ? "Signing in..." : "Sign In", " ");
  }
}
function AuthPageComponent_div_18_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.signupError);
  }
}
function AuthPageComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AuthPageComponent_div_18_p_1_Template, 2, 1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthPageComponent_div_18_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.signInWithGoogle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "G");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Sign up with Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 16)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "or sign up with email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 17)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 17)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 17)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthPageComponent_div_18_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.signup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.signupError);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r1.signupForm.controls.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r1.signupForm.controls.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r1.signupForm.controls.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.submitting ? "Creating..." : "Create Account", " ");
  }
}
class AuthPageComponent {
  activeTab = 'login';
  submitting = false;
  loginError = '';
  signupError = '';
  fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder);
  authApi = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_services_auth_api_service__WEBPACK_IMPORTED_MODULE_0__.AuthApiService);
  session = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService);
  router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
  route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute);
  toast = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService);
  loginForm = this.fb.group({
    email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
    password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
  });
  signupForm = this.fb.group({
    name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
    email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
    password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]]
  });
  constructor() {}
  ngOnInit() {
    const oauth = this.route.snapshot.queryParamMap.get('oauth');
    const message = this.route.snapshot.queryParamMap.get('message');
    if (oauth === 'failed') {
      this.loginError = message || 'Google sign-in failed. Please try again.';
    }
  }
  switchTab(tab) {
    this.activeTab = tab;
    this.loginError = '';
    this.signupError = '';
  }
  signInWithGoogle() {
    window.location.href = this.session.googleLoginUrl;
  }
  continueAsGuest() {
    this.session.storeGuestSession();
    this.toast.info('You are continuing as a guest. History stays on this device until sign-in.');
    void this.router.navigateByUrl('/dashboard');
  }
  login() {
    this.loginError = '';
    if (this.loginForm.invalid) {
      this.loginError = 'Please enter a valid email and password.';
      return;
    }
    this.submitting = true;
    const {
      email,
      password
    } = this.loginForm.getRawValue();
    this.authApi.login({
      email: email ?? '',
      password: password ?? ''
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
      this.submitting = false;
    })).subscribe({
      next: token => {
        this.session.storeAuthenticatedSession({
          token,
          email: email ?? '',
          name: email?.split('@')[0] ?? 'User'
        });
        this.toast.success('Signed in successfully.');
        void this.router.navigateByUrl('/dashboard');
      },
      error: () => {
        this.loginError = 'Login failed. Please check your credentials.';
        this.toast.error('Login failed. Please check your credentials.');
      }
    });
  }
  signup() {
    this.signupError = '';
    if (this.signupForm.invalid) {
      this.signupError = 'Please complete all signup fields.';
      return;
    }
    this.submitting = true;
    const {
      name,
      email,
      password
    } = this.signupForm.getRawValue();
    this.authApi.register({
      name: name ?? '',
      email: email ?? '',
      password: password ?? ''
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.finalize)(() => {
      this.submitting = false;
    })).subscribe({
      next: () => {
        this.toast.success('Account created. You can sign in now.');
        this.switchTab('login');
        this.loginForm.patchValue({
          email: email ?? '',
          password: password ?? ''
        });
      },
      error: () => {
        this.signupError = 'Signup failed. Try a different email address.';
        this.toast.error('Signup failed. Try a different email address.');
      }
    });
  }
  static ɵfac = function AuthPageComponent_Factory(t) {
    return new (t || AuthPageComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AuthPageComponent,
    selectors: [["app-auth-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 19,
    vars: 6,
    consts: [[1, "auth-shell"], [1, "orb", "orb--one"], [1, "orb", "orb--two"], [1, "orb", "orb--three"], [1, "auth-card"], [1, "auth-brand"], [1, "auth-brand__icon"], [1, "auth-brand__name"], [1, "auth-brand__sub"], ["role", "tablist", 1, "auth-tabs"], ["type", "button", 1, "auth-tab", 3, "click"], ["class", "auth-panel", 4, "ngIf"], [1, "auth-panel"], ["class", "auth-error", 4, "ngIf"], ["type", "button", 1, "google-btn", 3, "click"], [1, "google-btn__mark"], [1, "divider"], [1, "field"], ["type", "email", "placeholder", "you@example.com", 3, "formControl"], ["type", "password", "placeholder", "Your password", 3, "formControl"], ["type", "button", 1, "primary-btn", 3, "click", "disabled"], ["type", "button", 1, "ghost-btn", 3, "click"], [1, "auth-error"], ["type", "text", "placeholder", "Your name", 3, "formControl"], ["type", "password", "placeholder", "At least 6 characters", 3, "formControl"]],
    template: function AuthPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u2696");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Measurement App");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthPageComponent_Template_button_click_13_listener() {
          return ctx.switchTab("login");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthPageComponent_Template_button_click_15_listener() {
          return ctx.switchTab("signup");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AuthPageComponent_div_17_Template, 21, 5, "div", 11)(18, AuthPageComponent_div_18_Template, 23, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.activeTab === "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.activeTab === "signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === "signup");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective],
    styles: [".auth-shell[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  padding: 28px 16px;\n  overflow: hidden;\n}\n\n.orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  pointer-events: none;\n}\n\n.orb--one[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 420px;\n  background: rgba(122, 176, 255, 0.14);\n  top: -120px;\n  right: -110px;\n}\n\n.orb--two[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 320px;\n  background: rgba(188, 163, 255, 0.12);\n  bottom: -100px;\n  left: -90px;\n}\n\n.orb--three[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  background: rgba(180, 224, 194, 0.10);\n  top: 45%;\n  left: 10%;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  width: min(100%, 470px);\n  position: relative;\n  z-index: 1;\n  padding: 32px;\n  border-radius: var(--radius-xl);\n  border: 1px solid var(--border);\n  background: color-mix(in srgb, var(--card) 96%, var(--bg));\n  box-shadow: 0 28px 72px rgba(0, 0, 0, 0.42);\n  backdrop-filter: blur(18px);\n}\n\n.auth-brand[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n\n.auth-brand__icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  margin: 0 auto 14px;\n  display: grid;\n  place-items: center;\n  border-radius: 20px;\n  font-size: 34px;\n  color: #00151a;\n  background: linear-gradient(135deg, var(--cyan), #b8c7ff);\n  box-shadow: 0 0 0 1px rgba(122, 176, 255, 0.20), 0 0 40px rgba(122, 176, 255, 0.22);\n}\n\n.auth-brand__name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: 'Space Grotesk', sans-serif;\n  font-size: 40px;\n  font-weight: 700;\n  letter-spacing: -0.06em;\n  line-height: 1;\n  background: linear-gradient(130deg, var(--cyan) 0%, #b8c7ff 45%, #ffffff 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.auth-brand__sub[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: var(--muted);\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.35em;\n}\n\n.auth-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 4px;\n  padding: 4px;\n  border-radius: var(--radius-md);\n  background: color-mix(in srgb, var(--surface) 80%, var(--bg));\n}\n\n.auth-tab[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  color: var(--muted);\n  font-weight: 700;\n  padding: 11px 12px;\n  cursor: pointer;\n}\n\n.auth-tab.active[_ngcontent-%COMP%] {\n  background: var(--card);\n  color: var(--cyan);\n  border-color: var(--border-hi);\n}\n\n.auth-panel[_ngcontent-%COMP%] {\n  margin-top: 22px;\n}\n\n.auth-error[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  padding: 10px 12px;\n  border-radius: var(--radius-sm);\n  border: 1px solid rgba(232, 112, 128, 0.25);\n  color: var(--red);\n  background: rgba(232, 112, 128, 0.08);\n}\n\n.google-btn[_ngcontent-%COMP%], .primary-btn[_ngcontent-%COMP%], .ghost-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: var(--radius-sm);\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n}\n\n.google-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  background: color-mix(in srgb, var(--surface) 96%, var(--bg));\n  color: var(--text);\n  border: 1.5px solid var(--border);\n  font-weight: 700;\n}\n\n.google-btn__mark[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #7aaeff, #9a86e8);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 800;\n}\n\n.divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 18px 0;\n  color: var(--muted);\n  font-size: 10px;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n}\n\n.divider[_ngcontent-%COMP%]::before, .divider[_ngcontent-%COMP%]::after {\n  content: '';\n  height: 1px;\n  flex: 1;\n  background: var(--border);\n}\n\n.field[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 14px;\n}\n\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 8px;\n  font-size: 10px;\n  letter-spacing: 0.22em;\n  text-transform: uppercase;\n  color: var(--muted);\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px 14px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: color-mix(in srgb, var(--surface) 94%, var(--bg));\n  color: var(--text);\n  outline: none;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--cyan);\n  box-shadow: 0 0 0 3px var(--glow);\n}\n\n.primary-btn[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  border: 0;\n  background: linear-gradient(135deg, var(--cyan), #8cb5ff);\n  color: #000;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n\n.ghost-btn[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border: 1px solid var(--border);\n  background: transparent;\n  color: var(--muted);\n}\n\n.google-btn[_ngcontent-%COMP%]:hover, .primary-btn[_ngcontent-%COMP%]:hover, .ghost-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.primary-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.75;\n  cursor: progress;\n}\n\n@media (max-width: 520px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 22px 16px;\n  }\n\n  .auth-brand__name[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9hdXRoLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsMERBQTBEO0VBQzFELDJDQUEyQztFQUMzQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCx5REFBeUQ7RUFDekQsbUZBQW1GO0FBQ3JGOztBQUVBO0VBQ0UsU0FBUztFQUNULHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsOEVBQThFO0VBQzlFLDZCQUE2QjtFQUM3QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxRQUFRO0VBQ1IsWUFBWTtFQUNaLCtCQUErQjtFQUMvQiw2REFBNkQ7QUFDL0Q7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQiwyQ0FBMkM7RUFDM0MsaUJBQWlCO0VBQ2pCLHFDQUFxQztBQUN2Qzs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDZFQUE2RTtBQUMvRTs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCw2REFBNkQ7RUFDN0Qsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFEQUFxRDtFQUNyRCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFdBQVc7RUFDWCxPQUFPO0VBQ1AseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLDZEQUE2RDtFQUM3RCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QseURBQXlEO0VBQ3pELFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtc2hlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyOHB4IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5vcmIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmlsdGVyOiBibHVyKDgwcHgpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm9yYi0tb25lIHtcbiAgd2lkdGg6IDQyMHB4O1xuICBoZWlnaHQ6IDQyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyMiwgMTc2LCAyNTUsIDAuMTQpO1xuICB0b3A6IC0xMjBweDtcbiAgcmlnaHQ6IC0xMTBweDtcbn1cblxuLm9yYi0tdHdvIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDMyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4OCwgMTYzLCAyNTUsIDAuMTIpO1xuICBib3R0b206IC0xMDBweDtcbiAgbGVmdDogLTkwcHg7XG59XG5cbi5vcmItLXRocmVlIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDIyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4MCwgMjI0LCAxOTQsIDAuMTApO1xuICB0b3A6IDQ1JTtcbiAgbGVmdDogMTAlO1xufVxuXG4uYXV0aC1jYXJkIHtcbiAgd2lkdGg6IG1pbigxMDAlLCA0NzBweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNhcmQpIDk2JSwgdmFyKC0tYmcpKTtcbiAgYm94LXNoYWRvdzogMCAyOHB4IDcycHggcmdiYSgwLCAwLCAwLCAwLjQyKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE4cHgpO1xufVxuXG4uYXV0aC1icmFuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cblxuLmF1dGgtYnJhbmRfX2ljb24ge1xuICB3aWR0aDogNzJweDtcbiAgaGVpZ2h0OiA3MnB4O1xuICBtYXJnaW46IDAgYXV0byAxNHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDM0cHg7XG4gIGNvbG9yOiAjMDAxNTFhO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1jeWFuKSwgI2I4YzdmZik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDEyMiwgMTc2LCAyNTUsIDAuMjApLCAwIDAgNDBweCByZ2JhKDEyMiwgMTc2LCAyNTUsIDAuMjIpO1xufVxuXG4uYXV0aC1icmFuZF9fbmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBHcm90ZXNrJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDZlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsIHZhcigtLWN5YW4pIDAlLCAjYjhjN2ZmIDQ1JSwgI2ZmZmZmZiAxMDAlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmF1dGgtYnJhbmRfX3N1YiB7XG4gIG1hcmdpbjogOHB4IDAgMDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4zNWVtO1xufVxuXG4uYXV0aC10YWJzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXN1cmZhY2UpIDgwJSwgdmFyKC0tYmcpKTtcbn1cblxuLmF1dGgtdGFiIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAxMXB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmF1dGgtdGFiLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQpO1xuICBjb2xvcjogdmFyKC0tY3lhbik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWhpKTtcbn1cblxuLmF1dGgtcGFuZWwge1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuXG4uYXV0aC1lcnJvciB7XG4gIG1hcmdpbjogMCAwIDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzIsIDExMiwgMTI4LCAwLjI1KTtcbiAgY29sb3I6IHZhcigtLXJlZCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMyLCAxMTIsIDEyOCwgMC4wOCk7XG59XG5cbi5nb29nbGUtYnRuLFxuLnByaW1hcnktYnRuLFxuLmdob3N0LWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2UsIGJvcmRlci1jb2xvciAwLjJzIGVhc2U7XG59XG5cbi5nb29nbGUtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zdXJmYWNlKSA5NiUsIHZhcigtLWJnKSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZ29vZ2xlLWJ0bl9fbWFyayB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzdhYWVmZiwgIzlhODZlOCk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5kaXZpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW46IDE4cHggMDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5kaXZpZGVyOjpiZWZvcmUsXG4uZGl2aWRlcjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiAxcHg7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlcik7XG59XG5cbi5maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4uZmllbGQgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjIyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi5maWVsZCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxM3B4IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zdXJmYWNlKSA5NCUsIHZhcigtLWJnKSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZpZWxkIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jeWFuKTtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWdsb3cpO1xufVxuXG4ucHJpbWFyeS1idG4ge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tY3lhbiksICM4Y2I1ZmYpO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcbn1cblxuLmdob3N0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4uZ29vZ2xlLWJ0bjpob3Zlcixcbi5wcmltYXJ5LWJ0bjpob3Zlcixcbi5naG9zdC1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5wcmltYXJ5LWJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGN1cnNvcjogcHJvZ3Jlc3M7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xuICAuYXV0aC1jYXJkIHtcbiAgICBwYWRkaW5nOiAyMnB4IDE2cHg7XG4gIH1cblxuICAuYXV0aC1icmFuZF9fbmFtZSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 351:
/*!************************************************************!*\
  !*** ./src/app/features/auth/google-callback.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleCallbackComponent: () => (/* binding */ GoogleCallbackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/session.service */ 7988);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/toast.service */ 5423);




class GoogleCallbackComponent {
  route;
  router;
  session;
  toast;
  message = 'Please wait while we finish the secure login flow.';
  constructor(route, router, session, toast) {
    this.route = route;
    this.router = router;
    this.session = session;
    this.toast = toast;
  }
  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');
    const email = this.route.snapshot.queryParamMap.get('email');
    const name = this.route.snapshot.queryParamMap.get('name') || undefined;
    if (!token || !email) {
      this.message = 'Google sign-in did not return the expected session data.';
      this.toast.error('Google sign-in could not be completed.');
      void this.router.navigateByUrl('/auth');
      return;
    }
    this.session.storeAuthenticatedSession({
      token,
      email,
      name: name || email.split('@')[0]
    });
    this.message = 'Login complete. Redirecting to your dashboard.';
    this.finishLogin(email);
  }
  finishLogin(email) {
    this.toast.success(`Welcome back, ${email}.`);
    void this.router.navigateByUrl('/dashboard');
  }
  static ɵfac = function GoogleCallbackComponent_Factory(t) {
    return new (t || GoogleCallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: GoogleCallbackComponent,
    selectors: [["app-google-callback"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 1,
    consts: [[1, "callback-shell"], [1, "callback-card"], [1, "callback-kicker"]],
    template: function GoogleCallbackComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0)(1, "section", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Signing you in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Connecting your Google account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.message);
      }
    },
    styles: [".callback-shell[_ngcontent-%COMP%] {\n      min-height: 100vh;\n      display: grid;\n      place-items: center;\n      padding: 24px;\n    }\n\n    .callback-card[_ngcontent-%COMP%] {\n      width: min(100%, 540px);\n      padding: 28px;\n      border-radius: var(--radius-xl);\n      border: 1px solid var(--border);\n      background: rgba(21, 21, 30, 0.92);\n      box-shadow: 0 28px 72px rgba(0, 0, 0, 0.45);\n    }\n\n    .callback-kicker[_ngcontent-%COMP%] {\n      margin: 0 0 10px;\n      text-transform: uppercase;\n      letter-spacing: 0.22em;\n      color: var(--muted);\n      font-size: 10px;\n    }\n\n    h1[_ngcontent-%COMP%] {\n      margin: 0 0 12px;\n      font-family: 'Space Grotesk', sans-serif;\n    }\n\n    p[_ngcontent-%COMP%] {\n      margin: 0;\n      color: var(--muted);\n      line-height: 1.6;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9nb29nbGUtY2FsbGJhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGlCQUFpQjtNQUNqQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGFBQWE7SUFDZjs7SUFFQTtNQUNFLHVCQUF1QjtNQUN2QixhQUFhO01BQ2IsK0JBQStCO01BQy9CLCtCQUErQjtNQUMvQixrQ0FBa0M7TUFDbEMsMkNBQTJDO0lBQzdDOztJQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsd0NBQXdDO0lBQzFDOztJQUVBO01BQ0UsU0FBUztNQUNULG1CQUFtQjtNQUNuQixnQkFBZ0I7SUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuY2FsbGJhY2stc2hlbGwge1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgfVxuXG4gICAgLmNhbGxiYWNrLWNhcmQge1xuICAgICAgd2lkdGg6IG1pbigxMDAlLCA1NDBweCk7XG4gICAgICBwYWRkaW5nOiAyOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxLCAyMSwgMzAsIDAuOTIpO1xuICAgICAgYm94LXNoYWRvdzogMCAyOHB4IDcycHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgICB9XG5cbiAgICAuY2FsbGJhY2sta2lja2VyIHtcbiAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgR3JvdGVzaycsIHNhbnMtc2VyaWY7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7446:
/*!****************************************************************!*\
  !*** ./src/app/features/dashboard/dashboard-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPageComponent: () => (/* binding */ DashboardPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var _core_data_units__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/data/units */ 2954);
/* harmony import */ var _core_services_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/history.service */ 5200);
/* harmony import */ var _core_services_measurement_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/measurement-api.service */ 6469);
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/session.service */ 7988);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/toast.service */ 5423);
/* harmony import */ var _shared_components_section_card_section_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/section-card/section-card.component */ 9983);













function DashboardPageComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardPageComponent_button_25_Template_button_click_0_listener() {
      const panel_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.openPanel(panel_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const panel_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.activePanel === panel_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, panel_r2), " ");
  }
}
function DashboardPageComponent_section_26_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", category_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.categoryLabels[category_r5], " ");
  }
}
function DashboardPageComponent_section_26_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", unit_r6.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", unit_r6.label, " (", unit_r6.symbol, ") ");
  }
}
function DashboardPageComponent_section_26_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", unit_r7.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", unit_r7.label, " (", unit_r7.symbol, ") ");
  }
}
function DashboardPageComponent_section_26_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29)(1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.convertResult.error ? "Calculation error" : ctx_r2.convertResult.result);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.convertResult.error || ctx_r2.convertResult.operand1 + " \u2192 " + ctx_r2.convertResult.result);
  }
}
function DashboardPageComponent_section_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 18)(1, "app-section-card", 19)(2, "div", 20)(3, "label", 21)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DashboardPageComponent_section_26_option_7_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 24)(9, "label", 21)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label", 21)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, DashboardPageComponent_section_26_option_17_Template, 2, 3, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "label", 21)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, DashboardPageComponent_section_26_option_22_Template, 2, 3, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardPageComponent_section_26_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.submitConvert());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Convert");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, DashboardPageComponent_section_26_div_25_Template, 7, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.convertForm.controls.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.categoryKeys);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.convertForm.controls.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.convertForm.controls.fromUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.unitOptions[(tmp_5_0 = ctx_r2.convertForm.controls.category.value) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "length"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.convertForm.controls.toUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.unitOptions[(tmp_7_0 = ctx_r2.convertForm.controls.category.value) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "length"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.convertResult);
  }
}
function DashboardPageComponent_section_27_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", category_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.categoryLabels[category_r9], " ");
  }
}
function DashboardPageComponent_section_27_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", unit_r10.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", unit_r10.label, " (", unit_r10.symbol, ") ");
  }
}
function DashboardPageComponent_section_27_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", unit_r11.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", unit_r11.label, " (", unit_r11.symbol, ") ");
  }
}
function DashboardPageComponent_section_27_div_29_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.verdictLabel, " ");
  }
}
function DashboardPageComponent_section_27_div_29_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function DashboardPageComponent_section_27_div_29_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.compareResult.error);
  }
}
function DashboardPageComponent_section_27_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 38)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, DashboardPageComponent_section_27_div_29_div_8_Template, 2, 1, "div", 39)(9, DashboardPageComponent_section_27_div_29_ng_template_9_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"])(11, DashboardPageComponent_section_27_div_29_p_11_Template, 2, 1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const compareError_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r2.compareForm.controls.leftValue.value, " ", ctx_r2.getUnitSymbol((tmp_3_0 = ctx_r2.compareForm.controls.category.value) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "length", (tmp_3_0 = ctx_r2.compareForm.controls.leftUnit.value) !== null && tmp_3_0 !== undefined ? tmp_3_0 : ""), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r2.compareForm.controls.rightValue.value, " ", ctx_r2.getUnitSymbol((tmp_4_0 = ctx_r2.compareForm.controls.category.value) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "length", (tmp_4_0 = ctx_r2.compareForm.controls.rightUnit.value) !== null && tmp_4_0 !== undefined ? tmp_4_0 : ""), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.compareResult.error)("ngIfElse", compareError_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.compareResult.error);
  }
}
function DashboardPageComponent_section_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 18)(1, "app-section-card", 31)(2, "div", 20)(3, "label", 21)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DashboardPageComponent_section_27_option_7_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 32)(9, "label", 21)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Left value");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label", 21)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Left unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, DashboardPageComponent_section_27_option_17_Template, 2, 3, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "label", 21)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Right value");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "label", 21)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Right unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, DashboardPageComponent_section_27_option_26_Template, 2, 3, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardPageComponent_section_27_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.submitCompare());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Compare");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, DashboardPageComponent_section_27_div_29_Template, 12, 7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_8_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.compareForm.controls.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.categoryKeys);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.compareForm.controls.leftValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.compareForm.controls.leftUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.unitOptions[(tmp_5_0 = ctx_r2.compareForm.controls.category.value) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "length"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.compareForm.controls.rightValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.compareForm.controls.rightUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.unitOptions[(tmp_8_0 = ctx_r2.compareForm.controls.category.value) !== null && tmp_8_0 !== undefined ? tmp_8_0 : "length"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.compareResult);
  }
}
function DashboardPageComponent_section_28_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardPageComponent_section_28_button_3_Template_button_click_0_listener() {
      const op_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.arithmeticForm.controls.operation.setValue(op_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const op_r15 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active", ctx_r2.arithmeticForm.controls.operation.value === op_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.operationLabels[op_r15], " ");
  }
}
function DashboardPageComponent_section_28_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r16 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", category_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.categoryLabels[category_r16], " ");
  }
}
function DashboardPageComponent_section_28_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", unit_r17.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", unit_r17.label, " (", unit_r17.symbol, ") ");
  }
}
function DashboardPageComponent_section_28_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", unit_r18.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", unit_r18.label, " (", unit_r18.symbol, ") ");
  }
}
function DashboardPageComponent_section_28_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", unit_r19.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", unit_r19.label, " (", unit_r19.symbol, ") ");
  }
}
function DashboardPageComponent_section_28_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29)(1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.arithmeticResult.error ? "Calculation error" : ctx_r2.arithmeticResult.result);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.arithmeticResult.error || ctx_r2.arithmeticResult.operand1 + " " + ctx_r2.arithmeticResult.operation + " " + ctx_r2.arithmeticResult.operand2 + " = " + ctx_r2.arithmeticResult.result);
  }
}
function DashboardPageComponent_section_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 18)(1, "app-section-card", 44)(2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, DashboardPageComponent_section_28_button_3_Template, 2, 3, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 20)(5, "label", 21)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, DashboardPageComponent_section_28_option_9_Template, 2, 2, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 47)(11, "label", 21)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Value 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "label", 21)(16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Unit 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, DashboardPageComponent_section_28_option_19_Template, 2, 3, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "label", 21)(21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Value 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "label", 21)(25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Unit 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, DashboardPageComponent_section_28_option_28_Template, 2, 3, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "label", 21)(30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Result unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, DashboardPageComponent_section_28_option_33_Template, 2, 3, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardPageComponent_section_28_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.submitArithmetic());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Calculate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, DashboardPageComponent_section_28_div_36_Template, 7, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_9_0;
    let tmp_11_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.arithmeticOps);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.arithmeticForm.controls.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.categoryKeys);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.arithmeticForm.controls.leftValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.arithmeticForm.controls.leftUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.unitOptions[(tmp_6_0 = ctx_r2.arithmeticForm.controls.category.value) !== null && tmp_6_0 !== undefined ? tmp_6_0 : "length"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.arithmeticForm.controls.rightValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.arithmeticForm.controls.rightUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.unitOptions[(tmp_9_0 = ctx_r2.arithmeticForm.controls.category.value) !== null && tmp_9_0 !== undefined ? tmp_9_0 : "length"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.arithmeticForm.controls.resultUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.unitOptions[(tmp_11_0 = ctx_r2.arithmeticForm.controls.category.value) !== null && tmp_11_0 !== undefined ? tmp_11_0 : "length"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.submitting);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.arithmeticResult);
  }
}
function DashboardPageComponent_section_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 18)(1, "app-section-card", 51)(2, "div", 52)(3, "div", 53)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Length");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "1 FEET = 12 INCH");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "1 YARDS = 3 FEET");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "1 CENTIMETER = 0.03280839895 FEET");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 53)(13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "1 KILOGRAM = 1000 GRAM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "1 POUND = 0.453592 KILOGRAM");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 53)(20, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "1 LITRE = 1000 MILLILITRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "1 GALLON = 3.78541 LITRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 53)(27, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Temperature");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "\u00B0F = \u00B0C \u00D7 9/5 + 32");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "\u00B0C = (\u00B0F - 32) \u00D7 5/9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
}
function DashboardPageComponent_section_30_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 60)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r21 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formatRecord(record_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formatTime(record_r21));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("history-status--error", !!record_r21.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](record_r21.error ? "Error" : "Done");
  }
}
function DashboardPageComponent_section_30_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardPageComponent_section_30_ul_7_li_1_Template, 8, 5, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.currentHistory);
  }
}
function DashboardPageComponent_section_30_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.isGuest ? "Guest mode does not store history. Sign in to keep your operations." : "No operations yet. Run a conversion, comparison, or calculation to populate history.");
  }
}
function DashboardPageComponent_section_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 18)(1, "app-section-card", 54)(2, "div", 55)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardPageComponent_section_30_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.clearHistory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Clear History");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DashboardPageComponent_section_30_ul_7_Template, 2, 1, "ul", 57)(8, DashboardPageComponent_section_30_ng_template_8_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const emptyHistory_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](9);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.loadingHistory ? "Loading history..." : ctx_r2.isGuest ? "Sign in to save history." : "Stored for your authenticated account.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.isGuest && ctx_r2.currentHistory.length)("ngIfElse", emptyHistory_r22);
  }
}
class DashboardPageComponent {
  categoryLabels = _core_data_units__WEBPACK_IMPORTED_MODULE_0__.CATEGORY_LABELS;
  unitOptions = _core_data_units__WEBPACK_IMPORTED_MODULE_0__.UNIT_OPTIONS;
  operationLabels = _core_data_units__WEBPACK_IMPORTED_MODULE_0__.OPERATION_LABELS;
  panels = ['convert', 'compare', 'arithmetic', 'reference', 'history'];
  arithmeticOps = ['add', 'subtract', 'divide'];
  categoryKeys = ['length', 'weight', 'volume', 'temperature'];
  themeIcons = {
    dark: '☀',
    light: '☾'
  };
  fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder);
  api = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_core_services_measurement_api_service__WEBPACK_IMPORTED_MODULE_2__.MeasurementApiService);
  history = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_core_services_history_service__WEBPACK_IMPORTED_MODULE_1__.HistoryService);
  sessionService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_core_services_session_service__WEBPACK_IMPORTED_MODULE_3__.SessionService);
  toast = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService);
  activePanel = 'convert';
  session = this.sessionService.getSession();
  loadingHistory = false;
  submitting = false;
  theme = 'dark';
  historyRecords = [];
  convertResult = null;
  compareResult = null;
  arithmeticResult = null;
  convertForm = this.fb.group({
    category: ['length', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
    value: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
    fromUnit: ['FEET', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
    toUnit: ['INCH', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
  });
  compareForm = this.fb.group({
    category: ['length', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
    leftValue: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
    leftUnit: ['FEET', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
    rightValue: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
    rightUnit: ['INCH', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
  });
  arithmeticForm = this.fb.group({
    category: ['length', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
    operation: ['add', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
    leftValue: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
    leftUnit: ['FEET', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
    rightValue: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
    rightUnit: ['INCH', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
    resultUnit: ['FEET', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
  });
  constructor() {}
  ngOnInit() {
    this.initTheme();
    this.setupCategoryDefaults('length');
    this.refreshSession();
    this.loadHistory();
    this.convertForm.controls.category.valueChanges.subscribe(category => {
      if (category) {
        this.setupCategoryDefaults(category);
      }
    });
    this.compareForm.controls.category.valueChanges.subscribe(category => {
      if (category) {
        this.setupCompareDefaults(category);
      }
    });
    this.arithmeticForm.controls.category.valueChanges.subscribe(category => {
      if (category) {
        this.setupArithmeticDefaults(category);
      }
    });
  }
  refreshSession() {
    this.session = this.sessionService.getSession();
  }
  openPanel(panel) {
    this.activePanel = panel;
  }
  signOut() {
    this.sessionService.logout();
  }
  loginWithGoogle() {
    window.location.href = this.sessionService.googleLoginUrl;
  }
  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme();
  }
  get currentHistory() {
    return this.historyRecords;
  }
  get isGuest() {
    return this.session.kind === 'guest';
  }
  get displayName() {
    return this.session.name || this.session.email || 'Guest';
  }
  get avatarLetter() {
    return this.displayName.charAt(0).toUpperCase();
  }
  get convertUnits() {
    return this.unitOptions[this.convertForm.controls.category.value ?? 'length'].map(u => u.code);
  }
  get compareUnits() {
    return this.unitOptions[this.compareForm.controls.category.value ?? 'length'].map(u => u.code);
  }
  get arithmeticUnits() {
    return this.unitOptions[this.arithmeticForm.controls.category.value ?? 'length'].map(u => u.code);
  }
  getUnitLabel(category, code) {
    return this.unitOptions[category].find(unit => unit.code === code)?.label || code;
  }
  getUnitSymbol(category, code) {
    return this.unitOptions[category].find(unit => unit.code === code)?.symbol || code;
  }
  submitConvert() {
    if (this.convertForm.invalid) {
      this.toast.error('Please fill all converter fields.');
      return;
    }
    const {
      value,
      fromUnit,
      toUnit
    } = this.convertForm.getRawValue();
    const payload = this.buildInputPayload(value ?? 0, fromUnit ?? 'FEET', 1, toUnit ?? 'INCH');
    this.submitting = true;
    this.api.convert(payload, this.session).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.submitting = false)).subscribe({
      next: response => {
        this.convertResult = response;
        this.captureHistory(response);
        if (response.error) {
          this.toast.error(response.error);
          return;
        }
        this.toast.success('Conversion complete.');
      },
      error: () => this.toast.error('Conversion failed. Please check the selected units.')
    });
  }
  submitCompare() {
    if (this.compareForm.invalid) {
      this.toast.error('Please fill both quantities before comparing.');
      return;
    }
    const {
      leftValue,
      leftUnit,
      rightValue,
      rightUnit
    } = this.compareForm.getRawValue();
    const payload = this.buildInputPayload(leftValue ?? 0, leftUnit ?? 'FEET', rightValue ?? 0, rightUnit ?? 'INCH');
    this.submitting = true;
    this.api.compare(payload, this.session).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.submitting = false)).subscribe({
      next: response => {
        this.compareResult = response;
        this.captureHistory(response);
        if (response.error) {
          this.toast.error(response.error);
          return;
        }
        this.toast.success('Comparison complete.');
      },
      error: () => this.toast.error('Comparison failed. Please verify the input units.')
    });
  }
  submitArithmetic() {
    if (this.arithmeticForm.invalid) {
      this.toast.error('Please fill all arithmetic fields.');
      return;
    }
    const {
      leftValue,
      leftUnit,
      rightValue,
      rightUnit,
      operation
    } = this.arithmeticForm.getRawValue();
    const payload = this.buildInputPayload(leftValue ?? 0, leftUnit ?? 'FEET', rightValue ?? 0, rightUnit ?? 'INCH');
    this.submitting = true;
    const request$ = operation === 'add' ? this.api.add(payload, this.session) : operation === 'subtract' ? this.api.subtract(payload, this.session) : this.api.divide(payload, this.session);
    request$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.submitting = false)).subscribe({
      next: response => {
        this.arithmeticResult = response;
        this.captureHistory(response);
        if (response.error) {
          this.toast.error(response.error);
          return;
        }
        this.toast.success('Calculation complete.');
      },
      error: () => this.toast.error('Calculation failed. Please review the selected units.')
    });
  }
  clearHistory() {
    if (this.isGuest) {
      this.historyRecords = [];
      this.toast.info('Guest sessions do not store history.');
      return;
    }
    this.api.clearHistory(this.session).subscribe({
      next: () => {
        this.toast.success('History cleared.');
        this.loadHistory();
      },
      error: () => this.toast.error('Could not clear remote history.')
    });
  }
  loadHistory() {
    if (this.session.kind === 'guest') {
      this.historyRecords = [];
      return;
    }
    this.fetchRemoteHistory();
  }
  fetchRemoteHistory() {
    this.loadingHistory = true;
    this.api.fetchHistory(this.session).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => this.loadingHistory = false)).subscribe({
      next: records => {
        this.historyRecords = this.history.mergeHistory(this.session, records);
      },
      error: () => {
        this.historyRecords = [];
        this.toast.error('Unable to load history right now.');
      }
    });
  }
  captureHistory(record) {
    if (this.session.kind === 'guest') {
      return;
    }
    this.historyRecords = [record, ...this.historyRecords].slice(0, 40);
  }
  initTheme() {
    const stored = localStorage.getItem('qma_theme');
    this.theme = stored === 'light' ? 'light' : 'dark';
    this.applyTheme();
  }
  applyTheme() {
    document.body.classList.toggle('light-theme', this.theme === 'light');
    localStorage.setItem('qma_theme', this.theme);
  }
  setupCategoryDefaults(category) {
    const units = this.unitOptions[category];
    this.convertForm.patchValue({
      fromUnit: units[0]?.code,
      toUnit: units[1]?.code ?? units[0]?.code
    }, {
      emitEvent: false
    });
  }
  setupCompareDefaults(category) {
    const units = this.unitOptions[category];
    this.compareForm.patchValue({
      leftUnit: units[0]?.code,
      rightUnit: units[1]?.code ?? units[0]?.code
    }, {
      emitEvent: false
    });
  }
  setupArithmeticDefaults(category) {
    const units = this.unitOptions[category];
    this.arithmeticForm.patchValue({
      leftUnit: units[0]?.code,
      rightUnit: units[1]?.code ?? units[0]?.code,
      resultUnit: units[0]?.code
    }, {
      emitEvent: false
    });
  }
  buildInputPayload(leftValue, leftUnit, rightValue, rightUnit) {
    return {
      thisQuantityDTO: {
        value: Number(leftValue),
        unit: leftUnit
      },
      thatQuantityDTO: {
        value: Number(rightValue),
        unit: rightUnit
      }
    };
  }
  formatRecord(record) {
    if (record.error) {
      return record.error;
    }
    const left = record.operand1 || '';
    const right = record.operand2 ? ` and ${record.operand2}` : '';
    const result = record.result || '';
    return `${record.operation || 'OP'}: ${left}${right} = ${result}`;
  }
  formatTime(record) {
    if (!record.createdAt) {
      return 'Saved locally';
    }
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      month: 'short',
      day: 'numeric'
    }).format(new Date(record.createdAt));
  }
  get verdictLabel() {
    const value = this.compareResult?.result?.toLowerCase();
    if (value === 'true') {
      return 'Equal';
    }
    if (value === 'false') {
      return 'Not Equal';
    }
    return 'Ready to compare';
  }
  static ɵfac = function DashboardPageComponent_Factory(t) {
    return new (t || DashboardPageComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DashboardPageComponent,
    selectors: [["app-dashboard-page"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
    decls: 31,
    vars: 12,
    consts: [["compareError", ""], ["emptyHistory", ""], [1, "dashboard-shell"], [1, "dashboard-header"], [1, "brand-lockup"], [1, "brand-mark"], [1, "brand-name"], [1, "brand-sub"], [1, "user-strip"], ["type", "button", 1, "icon-btn", "theme-btn", 3, "click"], [1, "theme-icon"], [1, "user-chip"], [1, "user-avatar"], ["type", "button", 1, "outline-btn", 3, "click"], ["aria-label", "Measurement areas", 1, "tab-bar"], ["type", "button", "class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "panel-grid", 4, "ngIf"], ["type", "button", 1, "tab-btn", 3, "click"], [1, "panel-grid"], ["title", "Unit Converter"], [1, "form-grid", "form-grid--stacked"], [1, "field"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [1, "measure-row", "measure-row--convert"], ["type", "number", "placeholder", "Enter value", 3, "formControl"], ["type", "button", 1, "action-btn", 3, "click", "disabled"], ["class", "result-card", 4, "ngIf"], [3, "value"], [1, "result-card"], [1, "result-label"], ["title", "Quantity Comparator"], [1, "measure-row"], ["type", "number", "placeholder", "100", 3, "formControl"], ["type", "number", "placeholder", "50", 3, "formControl"], ["class", "compare-result", 4, "ngIf"], [1, "compare-result"], [1, "compare-bars"], [1, "bar"], ["class", "verdict-chip", 4, "ngIf", "ngIfElse"], ["class", "compare-copy", 4, "ngIf"], [1, "verdict-chip"], [1, "verdict-chip", 2, "background", "rgba(255, 107, 107, 0.12)", "color", "var(--red)"], [1, "compare-copy"], ["title", "Quantity Arithmetic"], [1, "op-row"], ["type", "button", "class", "op-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "measure-row", "measure-row--three"], ["type", "number", "placeholder", "10", 3, "formControl"], ["type", "number", "placeholder", "5", 3, "formControl"], ["type", "button", 1, "op-btn", 3, "click"], ["title", "Reference Tables"], [1, "reference-grid"], [1, "reference-block"], ["title", "Operation History"], [1, "history-toolbar"], ["type", "button", 1, "ghost-btn", 3, "click"], ["class", "history-list", 4, "ngIf", "ngIfElse"], [1, "history-list"], ["class", "history-item", 4, "ngFor", "ngForOf"], [1, "history-item"], [1, "history-status"], [1, "empty-state"]],
    template: function DashboardPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 2)(1, "header", 3)(2, "div", 4)(3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2696");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div")(6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Quantity Measurement App");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Perform conversions, comparisons, and arithmetic operations");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardPageComponent_Template_button_click_11_listener() {
          return ctx.toggleTheme();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11)(15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div")(18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardPageComponent_Template_button_click_22_listener() {
          return ctx.signOut();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "nav", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, DashboardPageComponent_button_25_Template, 3, 5, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, DashboardPageComponent_section_26_Template, 26, 9, "section", 16)(27, DashboardPageComponent_section_27_Template, 30, 10, "section", 16)(28, DashboardPageComponent_section_28_Template, 37, 13, "section", 16)(29, DashboardPageComponent_section_29_Template, 33, 0, "section", 16)(30, DashboardPageComponent_section_30_Template, 10, 3, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", ctx.theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.theme === "dark" ? ctx.themeIcons.dark : ctx.themeIcons.light);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.avatarLetter);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.isGuest ? "Guest mode" : ctx.session.email || "Signed in");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.isGuest ? "Exit" : "Log out", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.panels);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activePanel === "convert");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activePanel === "compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activePanel === "arithmetic");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activePanel === "reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activePanel === "history");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _shared_components_section_card_section_card_component__WEBPACK_IMPORTED_MODULE_5__.SectionCardComponent],
    styles: [".dashboard-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 22px;\n  position: relative;\n  z-index: 1;\n}\n\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 16px 20px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-xl);\n  background: var(--card);\n  backdrop-filter: blur(18px);\n  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.16);\n}\n\n.theme-btn[_ngcontent-%COMP%] {\n  border-radius: var(--radius-xl);\n  width: 42px;\n  height: 42px;\n  display: inline-grid;\n  place-items: center;\n  border: 1px solid var(--border);\n  background: var(--surface);\n  color: var(--cyan);\n  padding: 0;\n}\n\n.theme-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1;\n}\n\n.brand-lockup[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.brand-mark[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  display: grid;\n  place-items: center;\n  border-radius: 16px;\n  background: linear-gradient(135deg, var(--cyan), #8cb5ff);\n  color: #00151a;\n  font-size: 24px;\n  font-weight: 800;\n}\n\n.brand-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: 'Space Grotesk', sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.brand-sub[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n\n.user-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 14px 7px 7px;\n  border-radius: 999px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n}\n\n.user-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n}\n\n.user-chip[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 11px;\n  color: var(--muted);\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--cyan), #8cb5ff);\n  color: #00151a;\n  font-weight: 800;\n}\n\n.outline-btn[_ngcontent-%COMP%], .ghost-btn[_ngcontent-%COMP%], .action-btn[_ngcontent-%COMP%], .tab-btn[_ngcontent-%COMP%], .op-btn[_ngcontent-%COMP%] {\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease, background 0.2s ease;\n}\n\n.outline-btn[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid var(--border);\n  background: var(--surface);\n  color: var(--text);\n}\n\n.tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin: 18px 0;\n  overflow-x: auto;\n}\n\n.tab-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  background: var(--card);\n  color: var(--muted);\n  padding: 11px 16px;\n  white-space: nowrap;\n}\n\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: var(--cyan);\n  border-color: var(--border-hi);\n  background: rgba(76, 207, 255, 0.10);\n}\n\n.panel-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.form-grid--stacked[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n\n.pair-field[_ngcontent-%COMP%], .measure-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.measure-row[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.measure-row--three[_ngcontent-%COMP%] {\n  grid-template-columns: 1.2fr 1fr 1.2fr 1fr 1fr;\n}\n\n.measure-row--convert[_ngcontent-%COMP%] {\n  grid-template-columns: 1.2fr 1fr 1fr;\n}\n\n.field[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 8px;\n  font-size: 10px;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 46px;\n  padding: 11px 13px;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-sm);\n  background: color-mix(in srgb, var(--surface) 94%, var(--bg));\n  color: var(--text);\n  outline: none;\n}\n\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--cyan);\n  box-shadow: 0 0 0 3px var(--glow);\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 18px;\n  border: 0;\n  background: linear-gradient(135deg, var(--cyan), #8cb5ff);\n  color: #000;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n\n.ghost-btn[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid var(--border);\n  background: transparent;\n  color: var(--muted);\n}\n\n.result-card[_ngcontent-%COMP%], .compare-result[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  padding: 18px;\n  border-radius: var(--radius-md);\n  background: color-mix(in srgb, var(--surface) 96%, var(--bg));\n  border: 1px solid rgba(76, 207, 255, 0.16);\n}\n\n.result-label[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 10px;\n  color: var(--muted);\n  text-transform: uppercase;\n  letter-spacing: 0.22em;\n}\n\n.result-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-family: 'Space Grotesk', sans-serif;\n  font-size: clamp(24px, 4vw, 36px);\n  color: var(--cyan);\n}\n\n.result-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .compare-copy[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--muted);\n}\n\n.compare-bars[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n\n.bar[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-radius: var(--radius-sm);\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid var(--border);\n  color: var(--text);\n}\n\n.verdict-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  margin-top: 14px;\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(76, 207, 255, 0.12);\n  color: var(--cyan);\n  font-weight: 700;\n}\n\n.op-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\n.op-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  background: var(--surface);\n  color: var(--text);\n  padding: 10px 14px;\n}\n\n.op-btn.active[_ngcontent-%COMP%] {\n  border-color: var(--border-hi);\n  color: var(--cyan);\n  background: rgba(76, 207, 255, 0.10);\n}\n\n.reference-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.reference-block[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border);\n  background: color-mix(in srgb, var(--surface) 92%, var(--bg));\n}\n\n.reference-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: var(--text);\n  font-family: 'Space Grotesk', sans-serif;\n}\n\n.reference-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: var(--muted);\n}\n\n.history-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.history-toolbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--muted);\n}\n\n.history-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  gap: 10px;\n}\n\n.history-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 14px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--border);\n  background: color-mix(in srgb, var(--surface) 94%, var(--bg));\n}\n\n.history-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  font-size: 13px;\n}\n\n.history-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--muted);\n  font-size: 11px;\n}\n\n.history-status[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: rgba(116, 184, 143, 0.14);\n  color: var(--green);\n  white-space: nowrap;\n}\n\n.history-status--error[_ngcontent-%COMP%] {\n  background: rgba(232, 112, 128, 0.14);\n  color: var(--red);\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 18px 0 4px;\n  text-align: center;\n  color: var(--muted);\n}\n\n@media (max-width: 920px) {\n  .dashboard-header[_ngcontent-%COMP%], .history-toolbar[_ngcontent-%COMP%], .user-strip[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .form-grid[_ngcontent-%COMP%], .reference-grid[_ngcontent-%COMP%], .measure-row[_ngcontent-%COMP%], .measure-row--three[_ngcontent-%COMP%], .measure-row--convert[_ngcontent-%COMP%], .pair-field[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 560px) {\n  .dashboard-shell[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n\n  .history-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .outline-btn[_ngcontent-%COMP%], .ghost-btn[_ngcontent-%COMP%], .action-btn[_ngcontent-%COMP%], .theme-btn[_ngcontent-%COMP%], .tab-btn[_ngcontent-%COMP%], .op-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlEQUF5RDtFQUN6RCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCx3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseURBQXlEO0VBQ3pELGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7O0VBS0UsK0JBQStCO0VBQy9CLGVBQWU7RUFDZiw4RkFBOEY7QUFDaEc7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdEQUFnRDtFQUNoRCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGdEQUFnRDtFQUNoRCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQiw2REFBNkQ7RUFDN0Qsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QseURBQXlEO0VBQ3pELFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLCtCQUErQjtFQUMvQiw2REFBNkQ7RUFDN0QsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3Q0FBd0M7RUFDeEMsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7OztJQUdFLHNCQUFzQjtJQUN0QixvQkFBb0I7RUFDdEI7O0VBRUE7Ozs7OztJQU1FLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7Ozs7OztJQU1FLFdBQVc7RUFDYjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1zaGVsbCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAyMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kYXNoYm9hcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2FyZCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxOHB4KTtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDQ1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbn1cblxuLnRoZW1lLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlKTtcbiAgY29sb3I6IHZhcigtLWN5YW4pO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGhlbWUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5icmFuZC1sb2NrdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE0cHg7XG59XG5cbi5icmFuZC1tYXJrIHtcbiAgd2lkdGg6IDU0cHg7XG4gIGhlaWdodDogNTRweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tY3lhbiksICM4Y2I1ZmYpO1xuICBjb2xvcjogIzAwMTUxYTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uYnJhbmQtbmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBHcm90ZXNrJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYnJhbmQtc3ViIHtcbiAgbWFyZ2luOiA0cHggMCAwO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi51c2VyLXN0cmlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4udXNlci1jaGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiA3cHggMTRweCA3cHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG59XG5cbi51c2VyLWNoaXAgc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnVzZXItY2hpcCBwIHtcbiAgbWFyZ2luOiAycHggMCAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi51c2VyLWF2YXRhciB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tY3lhbiksICM4Y2I1ZmYpO1xuICBjb2xvcjogIzAwMTUxYTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLm91dGxpbmUtYnRuLFxuLmdob3N0LWJ0bixcbi5hY3Rpb24tYnRuLFxuLnRhYi1idG4sXG4ub3AtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3JkZXItY29sb3IgMC4ycyBlYXNlLCBjb2xvciAwLjJzIGVhc2UsIGJhY2tncm91bmQgMC4ycyBlYXNlO1xufVxuXG4ub3V0bGluZS1idG4ge1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi50YWItYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbjogMThweCAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4udGFiLWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQpO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBwYWRkaW5nOiAxMXB4IDE2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50YWItYnRuLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1jeWFuKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItaGkpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc2LCAyMDcsIDI1NSwgMC4xMCk7XG59XG5cbi5wYW5lbC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKTtcbn1cblxuLmZvcm0tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAxNHB4O1xufVxuXG4uZm9ybS1ncmlkLS1zdGFja2VkIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59XG5cbi5wYWlyLWZpZWxkLFxuLm1lYXN1cmUtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDE0cHg7XG59XG5cbi5tZWFzdXJlLXJvdyB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcbn1cblxuLm1lYXN1cmUtcm93LS10aHJlZSB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4yZnIgMWZyIDEuMmZyIDFmciAxZnI7XG59XG5cbi5tZWFzdXJlLXJvdy0tY29udmVydCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4yZnIgMWZyIDFmcjtcbn1cblxuLmZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5maWVsZCBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjJlbTtcbn1cblxuLmZpZWxkIGlucHV0LFxuLmZpZWxkIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nOiAxMXB4IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zdXJmYWNlKSA5NCUsIHZhcigtLWJnKSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZpZWxkIGlucHV0OmZvY3VzLFxuLmZpZWxkIHNlbGVjdDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY3lhbik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1nbG93KTtcbn1cblxuLmFjdGlvbi1idG4ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tY3lhbiksICM4Y2I1ZmYpO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcbn1cblxuLmdob3N0LWJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi5yZXN1bHQtY2FyZCxcbi5jb21wYXJlLXJlc3VsdCB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zdXJmYWNlKSA5NiUsIHZhcigtLWJnKSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzYsIDIwNywgMjU1LCAwLjE2KTtcbn1cblxuLnJlc3VsdC1sYWJlbCB7XG4gIG1hcmdpbjogMCAwIDZweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4yMmVtO1xufVxuXG4ucmVzdWx0LWNhcmQgaDIge1xuICBtYXJnaW46IDAgMCA4cHg7XG4gIGZvbnQtZmFtaWx5OiAnU3BhY2UgR3JvdGVzaycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMjRweCwgNHZ3LCAzNnB4KTtcbiAgY29sb3I6IHZhcigtLWN5YW4pO1xufVxuXG4ucmVzdWx0LWNhcmQgcCxcbi5jb21wYXJlLWNvcHkge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi5jb21wYXJlLWJhcnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEwcHg7XG59XG5cbi5iYXIge1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnZlcmRpY3QtY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoNzYsIDIwNywgMjU1LCAwLjEyKTtcbiAgY29sb3I6IHZhcigtLWN5YW4pO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ub3Atcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLm9wLWJ0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbn1cblxuLm9wLWJ0bi5hY3RpdmUge1xuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1oaSk7XG4gIGNvbG9yOiB2YXIoLS1jeWFuKTtcbiAgYmFja2dyb3VuZDogcmdiYSg3NiwgMjA3LCAyNTUsIDAuMTApO1xufVxuXG4ucmVmZXJlbmNlLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMTRweDtcbn1cblxuLnJlZmVyZW5jZS1ibG9jayB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zdXJmYWNlKSA5MiUsIHZhcigtLWJnKSk7XG59XG5cbi5yZWZlcmVuY2UtYmxvY2sgaDMge1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtZmFtaWx5OiAnU3BhY2UgR3JvdGVzaycsIHNhbnMtc2VyaWY7XG59XG5cbi5yZWZlcmVuY2UtYmxvY2sgcCB7XG4gIG1hcmdpbjogOHB4IDAgMDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLmhpc3RvcnktdG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uaGlzdG9yeS10b29sYmFyIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi5oaXN0b3J5LWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbn1cblxuLmhpc3RvcnktaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc3VyZmFjZSkgOTQlLCB2YXIoLS1iZykpO1xufVxuXG4uaGlzdG9yeS1pdGVtIHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmhpc3RvcnktaXRlbSBzcGFuIHtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uaGlzdG9yeS1zdGF0dXMge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMTYsIDE4NCwgMTQzLCAwLjE0KTtcbiAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmhpc3Rvcnktc3RhdHVzLS1lcnJvciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMyLCAxMTIsIDEyOCwgMC4xNCk7XG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xufVxuXG4uZW1wdHktc3RhdGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDE4cHggMCA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gIC5kYXNoYm9hcmQtaGVhZGVyLFxuICAuaGlzdG9yeS10b29sYmFyLFxuICAudXNlci1zdHJpcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuXG4gIC5mb3JtLWdyaWQsXG4gIC5yZWZlcmVuY2UtZ3JpZCxcbiAgLm1lYXN1cmUtcm93LFxuICAubWVhc3VyZS1yb3ctLXRocmVlLFxuICAubWVhc3VyZS1yb3ctLWNvbnZlcnQsXG4gIC5wYWlyLWZpZWxkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgLmRhc2hib2FyZC1zaGVsbCB7XG4gICAgcGFkZGluZzogMTRweDtcbiAgfVxuXG4gIC5oaXN0b3J5LWl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAub3V0bGluZS1idG4sXG4gIC5naG9zdC1idG4sXG4gIC5hY3Rpb24tYnRuLFxuICAudGhlbWUtYnRuLFxuICAudGFiLWJ0bixcbiAgLm9wLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9983:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/section-card/section-card.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionCardComponent: () => (/* binding */ SectionCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const _c0 = ["*"];
function SectionCardComponent_header_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
  }
}
function SectionCardComponent_header_1_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.subtitle);
  }
}
function SectionCardComponent_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 2)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SectionCardComponent_header_1_p_2_Template, 2, 1, "p", 3)(3, SectionCardComponent_header_1_p_3_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.subtitle);
  }
}
class SectionCardComponent {
  title = '';
  subtitle = '';
  compact = false;
  static ɵfac = function SectionCardComponent_Factory(t) {
    return new (t || SectionCardComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SectionCardComponent,
    selectors: [["app-section-card"]],
    inputs: {
      title: "title",
      subtitle: "subtitle",
      compact: "compact"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 3,
    consts: [[1, "section-card"], ["class", "section-card__header", 4, "ngIf"], [1, "section-card__header"], ["class", "section-card__eyebrow", 4, "ngIf"], ["class", "section-card__subtitle", 4, "ngIf"], [1, "section-card__eyebrow"], [1, "section-card__subtitle"]],
    template: function SectionCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SectionCardComponent_header_1_Template, 4, 2, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("compact", ctx.compact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title || ctx.subtitle);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".section-card[_ngcontent-%COMP%] {\n  background: var(--card);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 24px;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.20);\n}\n\n.section-card.compact[_ngcontent-%COMP%] {\n  padding: 18px;\n}\n\n.section-card__header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.section-card__eyebrow[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: 'Syne', sans-serif;\n  font-size: 11px;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: var(--muted);\n}\n\n.section-card__subtitle[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VjdGlvbi1jYXJkL3NlY3Rpb24tY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBwYWRkaW5nOiAyNHB4O1xuICBib3gtc2hhZG93OiAwIDI0cHggNjBweCByZ2JhKDAsIDAsIDAsIDAuMjApO1xufVxuXG4uc2VjdGlvbi1jYXJkLmNvbXBhY3Qge1xuICBwYWRkaW5nOiAxOHB4O1xufVxuXG4uc2VjdGlvbi1jYXJkX19oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uc2VjdGlvbi1jYXJkX19leWVicm93IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogJ1N5bmUnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi5zZWN0aW9uLWNhcmRfX3N1YnRpdGxlIHtcbiAgbWFyZ2luOiA2cHggMCAwO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5383:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/toast-host/toast-host.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastHostComponent: () => (/* binding */ ToastHostComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/toast.service */ 5423);





function ToastHostComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("toast--visible", ctx_r0.visible)("toast--error", ctx_r0.message.variant === "error")("toast--info", ctx_r0.message.variant === "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message.variant === "error" ? "!" : ctx_r0.message.variant === "info" ? "i" : "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.message.text);
  }
}
class ToastHostComponent {
  toastService;
  message = null;
  visible = false;
  subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
  timer;
  constructor(toastService) {
    this.toastService = toastService;
  }
  ngOnInit() {
    this.subscriptions.add(this.toastService.messages$.subscribe(message => {
      this.message = message;
      this.visible = true;
      window.clearTimeout(this.timer);
      this.timer = window.setTimeout(() => {
        this.visible = false;
      }, 2500);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    window.clearTimeout(this.timer);
  }
  static ɵfac = function ToastHostComponent_Factory(t) {
    return new (t || ToastHostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ToastHostComponent,
    selectors: [["app-toast-host"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "toast", 3, "toast--visible", "toast--error", "toast--info", 4, "ngIf"], [1, "toast"], [1, "toast__icon"], [1, "toast__text"]],
    template: function ToastHostComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastHostComponent_div_0_Template, 5, 8, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    styles: [".toast[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 24px;\n  bottom: 24px;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 220px;\n  max-width: min(92vw, 380px);\n  padding: 12px 16px;\n  border-radius: var(--radius-md);\n  background: rgba(17, 17, 25, 0.95);\n  border: 1px solid rgba(168, 255, 120, 0.3);\n  color: var(--green);\n  box-shadow: 0 16px 44px rgba(0, 0, 0, 0.4);\n  transform: translateY(30px);\n  opacity: 0;\n  transition: opacity 0.25s ease, transform 0.25s ease;\n}\n\n.toast--visible[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.toast--error[_ngcontent-%COMP%] {\n  border-color: rgba(255, 107, 107, 0.35);\n  color: var(--red);\n}\n\n.toast--info[_ngcontent-%COMP%] {\n  border-color: rgba(0, 229, 255, 0.35);\n  color: var(--cyan);\n}\n\n.toast__icon[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.06);\n  font-weight: 700;\n}\n\n.toast__text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.45;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9hc3QtaG9zdC90b2FzdC1ob3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGtDQUFrQztFQUNsQywwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQywyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLnRvYXN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMjRweDtcbiAgYm90dG9tOiAyNHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1pbi13aWR0aDogMjIwcHg7XG4gIG1heC13aWR0aDogbWluKDkydncsIDM4MHB4KTtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE3LCAxNywgMjUsIDAuOTUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2OCwgMjU1LCAxMjAsIDAuMyk7XG4gIGNvbG9yOiB2YXIoLS1ncmVlbik7XG4gIGJveC1zaGFkb3c6IDAgMTZweCA0NHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2UsIHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xufVxuXG4udG9hc3QtLXZpc2libGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50b2FzdC0tZXJyb3Ige1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAxMDcsIDEwNywgMC4zNSk7XG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xufVxuXG4udG9hc3QtLWluZm8ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMjI5LCAyNTUsIDAuMzUpO1xuICBjb2xvcjogdmFyKC0tY3lhbik7XG59XG5cbi50b2FzdF9faWNvbiB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50b2FzdF9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 289);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map