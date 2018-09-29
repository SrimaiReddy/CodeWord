webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_Navbar_vue__ = __webpack_require__(25);
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'App',
  components: {
    Navbar: __WEBPACK_IMPORTED_MODULE_0__partials_Navbar_vue__["a" /* default */]
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config_config__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      auth: false,
      email: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.auth = __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* default */].check();
    if (this.auth) {
      __WEBPACK_IMPORTED_MODULE_0_axios___default()({
        method: "post",
        url: "https://gdpcodeword.herokuapp.com/codeword/details",
        headers: {
          token: window.localStorage.getItem("token")
        }
      }).then(function (result) {
        _this.email = result.data.email;
      });
    }
  },

  methods: {
    onLogout: function onLogout() {
      localStorage.removeItem("token");
      this.auth = __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* default */].check();
      this.$router.push({ path: "/" });
    }
  },
  watch: {
    $route: function $route(to, from, next) {
      this.auth = __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* default */].check();
    }
  }
});

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'HomePage',
  data: function data() {
    return {
      msg: '',
      signed: false
    };
  },

  methods: {
    signIn: function signIn() {
      var _this2 = this;

      this.msg = '';
      var data = new FormData(document.querySelector('form'));
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('https://gdpcodeword.herokuapp.com/codeword/signin', {
        email: data.get('emailID'),
        password: data.get('password')
      }).then(function (response) {
        if (response.data.token) {
          _this2.msg = 'Signed in successfully. Redirecting .';
          _this2.signed = true;
          localStorage.setItem('token', response.data.token);
          var _this = _this2;
          setTimeout(function () {
            _this.$router.push({ path: '/dashboard' });
          }, 1000);
        } else {
          _this2.msg = response.data.message;
          _this2.signed = false;
        }
      });
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      fullname: '',
      email: '',
      password: '',
      repeatPassword: '',
      terms: false
    };
  },

  validations: {
    email: {
      required: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["required"],
      email: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["email"]
    },
    fullname: {
      required: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["required"]
    },
    password: {
      required: __WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["required"],
      minLength: Object(__WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["minLength"])(6)
    },
    repeatPassword: {
      sameAsPassword: Object(__WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["sameAs"])('password')
    },
    terms: {
      sameAs: Object(__WEBPACK_IMPORTED_MODULE_1_vuelidate_lib_validators__["sameAs"])(function () {
        return true;
      })
    }
  },
  methods: {
    OnRegister: function OnRegister() {
      var _this = this;

      console.log('onregister clicked fullnaem', this.fullname);
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('https://gdpcodeword.herokuapp.com/codeword/signup', {
        fullname: this.fullname,
        email: this.email,
        password: this.password
      }).then(function (res) {
        console.log(res);
        if (res.data.message) {
          _this.$router.push({ path: '/signin' });
        }
      });
    }
  }
});

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router_routes__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_vue_dist_bootstrap_vue_esm__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_vue_dist_bootstrap_vue_css__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_vue_dist_bootstrap_vue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bootstrap_vue_dist_bootstrap_vue_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuelidate__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuelidate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vuelidate__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_bootstrap_vue_dist_bootstrap_vue_esm__["a" /* default */]);
__webpack_require__(91);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_6_vuelidate___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router_routes__["a" /* default */],
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] },
  template: '<App/>'
});

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f0c3fab8_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(48);
function injectStyle (ssrContext) {
  __webpack_require__(23)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f0c3fab8_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d202319e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__ = __webpack_require__(47);
function injectStyle (ssrContext) {
  __webpack_require__(26)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Navbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d202319e_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Navbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    user () {
      return this.$store.state.user
    },
    check () {
      console.log(localStorage.getItem('token'))
      return localStorage.getItem('token') // get token from localStorage
    }
  });

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = {
    url:"http://localhost:3000"
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",attrs:{"id":"mainNav"}},[_c('div',{staticClass:"container"},[_c('a',{staticClass:"navbar-brand ",attrs:{"href":"#page-top"}},[_vm._v("Code Word")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"navbar-collapse collapse",attrs:{"id":"navbarResponsive"}},[_c('ul',{staticClass:"navbar-nav ml-auto"},[(!_vm.auth)?_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/signup"}},[_vm._v("Sign Up")])],1):_vm._e(),_vm._v(" "),(!_vm.auth)?_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/"}},[_vm._v("Sign In")])],1):_vm._e(),_vm._v(" "),(_vm.auth)?_c('li',{staticClass:"nav-item"},[_c('router-link',{attrs:{"to":"/dashboard"}})],1):_vm._e(),_vm._v(" "),(_vm.auth)?_c('li',{staticClass:"nav-item dropdown"},[_c('a',{staticClass:"nav-link dropdown-toggle",attrs:{"id":"dropdown01","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[_vm._v(_vm._s(_vm.email))]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdown01"}},[_c('a',{staticClass:"dropdown-item"},[_vm._v("  "+_vm._s(_vm.email)+" ")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",on:{"click":function($event){$event.preventDefault();return _vm.profilePage($event)}}},[_vm._v("Profile")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",on:{"click":function($event){$event.preventDefault();return _vm.changePassword($event)}}},[_vm._v("Change Password")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",on:{"click":function($event){$event.preventDefault();return _vm.onLogout($event)}}},[_vm._v("Logout")])])]):_vm._e()])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"navbar-toggler collapsed",attrs:{"type":"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[_c('span',{staticClass:"navbar-toggler-icon"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',[_c('Navbar'),_vm._v(" "),_c('router-view')],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Signup__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Dashboard__ = __webpack_require__(81);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Home__["a" /* default */]
  }, {
    path: '/signup',
    name: 'Signup',
    component: __WEBPACK_IMPORTED_MODULE_3__components_Signup__["a" /* default */]
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Dashboard__["a" /* default */]
  }]
}));

/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d48e085_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(53);
function injectStyle (ssrContext) {
  __webpack_require__(52)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4d48e085"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d48e085_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"container "},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"}),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-12 col-sm-12"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[(_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-success",attrs:{"role":"alert"}},[_vm._v("\n                    "+_vm._s(_vm.msg)+"\n                ")]):(!_vm.signed && _vm.msg)?_c('div',{staticClass:"alert alert-danger",attrs:{"role":"alert"}},[_vm._v("\n                    "+_vm._s(_vm.msg)+"\n                ")]):_vm._e(),_vm._v(" "),_c('form',[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"},on:{"click":_vm.signIn}},[_vm._v("Sign In")])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"})])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group row "},[_c('label',{attrs:{"for":"inputEmail"}},[_vm._v("Email address")]),_vm._v(" "),_c('input',{staticClass:"form-control",attrs:{"type":"text","name":"emailID","id":"inputEmail","placeholder":"Email ID"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group row"},[_c('label',{attrs:{"for":"inputPassword"}},[_vm._v("Password")]),_vm._v(" "),_c('input',{staticClass:"form-control",attrs:{"type":"password","name":"password","id":"inputPassword","placeholder":"Password"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Signup_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40090118_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Signup_vue__ = __webpack_require__(80);
function injectStyle (ssrContext) {
  __webpack_require__(55)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Signup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40090118_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Signup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row reg"},[_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"}),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-12 col-sm-12",staticStyle:{"margin-top":"5em"}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('form',[_c('h2',[_vm._v("Student Register")]),_vm._v(" "),_c('div',{staticClass:"form-group",class:{invalid: _vm.$v.fullname.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.fullname),expression:"fullname"}],staticClass:"form-control",attrs:{"type":"text","placeholder":"Full Name","auto":"","required":"required"},domProps:{"value":(_vm.fullname)},on:{"blur":function($event){_vm.$v.fullname.$touch()},"input":function($event){if($event.target.composing){ return; }_vm.fullname=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group",class:{invalid: _vm.$v.email.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.email),expression:"email",modifiers:{"lazy":true}}],staticClass:"form-control",attrs:{"type":"email","placeholder":"Email"},domProps:{"value":(_vm.email)},on:{"blur":function($event){_vm.$v.email.$touch()},"change":function($event){_vm.email=$event.target.value}}}),_vm._v(" "),(!_vm.$v.email.email)?_c('p',[_vm._v("Please provide a valid email address.")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group",class:{invalid: _vm.$v.password.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model.lazy",value:(_vm.password),expression:"password",modifiers:{"lazy":true}}],staticClass:"form-control",attrs:{"type":"password","placeholder":"Password","required":"required"},domProps:{"value":(_vm.password)},on:{"blur":function($event){_vm.$v.password.$touch()},"change":function($event){_vm.password=$event.target.value}}}),_vm._v(" "),(!_vm.$v.password.minLength)?_c('p',[_vm._v(" Password must have at least "+_vm._s(_vm.$v.password.$params.minLength.min)+" letters. ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group",class:{invalid: _vm.$v.repeatPassword.$error}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.repeatPassword),expression:"repeatPassword"}],staticClass:"form-control",attrs:{"type":"password","placeholder":"Confirm Password"},domProps:{"value":(_vm.repeatPassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.repeatPassword=$event.target.value}}}),_vm._v(" "),(!_vm.$v.repeatPassword.sameAsPassword)?_c('p',[_vm._v(" Password must be identical. ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"form-group",class:{invalid: _vm.$v.terms.$invalid}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.terms),expression:"terms"}],attrs:{"type":"checkbox","id":"terms"},domProps:{"checked":Array.isArray(_vm.terms)?_vm._i(_vm.terms,null)>-1:(_vm.terms)},on:{"change":[function($event){var $$a=_vm.terms,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.terms=$$a.concat([$$v]))}else{$$i>-1&&(_vm.terms=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.terms=$$c}},function($event){_vm.$v.terms.$touch()}]}}),_vm._v(" "),_c('label',{attrs:{"for":"terms"}},[_vm._v("Accept Terms of Use")])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('button',{staticClass:"btn btn-success btn-lg btn-block",attrs:{"type":"submit","disabled":this.$v.$invalid},on:{"click":_vm.OnRegister}},[_vm._v("Register Now")])]),_vm._v(" "),_vm._m(0)])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-4 col-xs-0 col-sm-0"})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center"},[_vm._v("Already have an account? "),_c('a',{attrs:{"href":"#"}},[_vm._v("Sign in")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e1bc9f8_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__ = __webpack_require__(82);
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e1bc9f8_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("Login Successfull")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[19]);
//# sourceMappingURL=app.133d260a9282cdf4d658.js.map