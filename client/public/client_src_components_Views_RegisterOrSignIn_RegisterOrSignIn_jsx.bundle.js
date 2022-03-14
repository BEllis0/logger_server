"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklogger_server"] = self["webpackChunklogger_server"] || []).push([["client_src_components_Views_RegisterOrSignIn_RegisterOrSignIn_jsx"],{

/***/ "./client/src/actions/register.js":
/*!****************************************!*\
  !*** ./client/src/actions/register.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"register\": () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ \"./client/src/actions/types.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction register(payloadData) {\n  return function (dispatch) {\n    axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/v1/users/new', {\n      headers: {\n        \"content-type\": \"application/json\"\n      },\n      data: payloadData\n    }).then(function (response) {\n      dispatch({\n        type: _types_js__WEBPACK_IMPORTED_MODULE_0__.actions.register.REGISTER_USER,\n        payload: response.data\n      });\n      dispatch({\n        type: _types_js__WEBPACK_IMPORTED_MODULE_0__.actions.snackbar.MESSAGE,\n        payload: {\n          message: response.data.message || \"Account created!\",\n          severity: 'success'\n        }\n      });\n    })[\"catch\"](function (error) {\n      dispatch({\n        type: _types_js__WEBPACK_IMPORTED_MODULE_0__.actions.error.UPDATE_ERROR,\n        payload: {\n          message: error.response.data,\n          isLoggedIn: false\n        }\n      });\n    });\n  };\n}\n;\n\n//# sourceURL=webpack://logger_server/./client/src/actions/register.js?");

/***/ }),

/***/ "./client/src/components/Forms/Register/RegisterForm.jsx":
/*!***************************************************************!*\
  !*** ./client/src/components/Forms/Register/RegisterForm.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _Misc_Copyright_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Misc/Copyright.jsx */ \"./client/src/components/Misc/Copyright.jsx\");\n/* harmony import */ var _actions_register_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/register.js */ \"./client/src/actions/register.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/CssBaseline.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Link */ \"./node_modules/@mui/material/Link/Link.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ \"./node_modules/@mui/icons-material/LockOutlined.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/createTheme.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n // redux\n\n // connect to store\n\n\n\n\n\n\n\n\n\n\n\n\nvar theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\nvar RegisterForm = function RegisterForm(props) {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      firstName = _React$useState2[0],\n      updateFirstName = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      lastName = _React$useState4[0],\n      updateLastName = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),\n      _React$useState6 = _slicedToArray(_React$useState5, 2),\n      email = _React$useState6[0],\n      updateEmail = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),\n      _React$useState8 = _slicedToArray(_React$useState7, 2),\n      password = _React$useState8[0],\n      updatePassword = _React$useState8[1];\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),\n      _React$useState10 = _slicedToArray(_React$useState9, 2),\n      username = _React$useState10[0],\n      updateUsername = _React$useState10[1];\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    props.register({\n      firstName: firstName,\n      lastName: lastName,\n      username: username,\n      email: email,\n      password: password\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    theme: theme\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    component: \"main\",\n    maxWidth: \"xs\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    sx: {\n      marginTop: 8,\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    sx: {\n      m: 1,\n      bgcolor: 'secondary.main'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    component: \"h1\",\n    variant: \"h5\"\n  }, \"Sign up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    onSubmit: handleSubmit,\n    component: \"form\",\n    noValidate: true,\n    sx: {\n      mt: 3\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    container: true,\n    spacing: 2\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    onChange: function onChange(e) {\n      return updateFirstName(e.target.value);\n    },\n    autoComplete: \"fname\",\n    name: \"firstName\",\n    required: true,\n    fullWidth: true,\n    id: \"firstName\",\n    label: \"First Name\",\n    autoFocus: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 6\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    onChange: function onChange(e) {\n      return updateLastName(e.target.value);\n    },\n    required: true,\n    fullWidth: true,\n    id: \"lastName\",\n    label: \"Last Name\",\n    name: \"lastName\",\n    autoComplete: \"lname\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    onChange: function onChange(e) {\n      return updateUsername(e.target.value);\n    },\n    required: true,\n    fullWidth: true,\n    id: \"username\",\n    label: \"Username\",\n    name: \"username\",\n    autoComplete: \"username\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    onChange: function onChange(e) {\n      return updateEmail(e.target.value);\n    },\n    required: true,\n    fullWidth: true,\n    id: \"email\",\n    label: \"Email Address\",\n    name: \"email\",\n    autoComplete: \"email\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    onChange: function onChange(e) {\n      return updatePassword(e.target.value);\n    },\n    required: true,\n    fullWidth: true,\n    name: \"password\",\n    label: \"Password\",\n    type: \"password\",\n    id: \"password\",\n    autoComplete: \"new-password\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    type: \"submit\",\n    fullWidth: true,\n    variant: \"contained\",\n    sx: {\n      mt: 3,\n      mb: 2\n    }\n  }, \"Sign Up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    container: true,\n    justifyContent: \"flex-end\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n    href: \"/sign-in\",\n    variant: \"body2\"\n  }, \"Already have an account? Sign in\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Misc_Copyright_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    sx: {\n      mt: 5\n    }\n  })));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    state: state\n  };\n};\n\nvar mapDispatchToProps = {\n  register: _actions_register_js__WEBPACK_IMPORTED_MODULE_2__.register\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router__WEBPACK_IMPORTED_MODULE_16__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(RegisterForm)));\n\n//# sourceURL=webpack://logger_server/./client/src/components/Forms/Register/RegisterForm.jsx?");

/***/ }),

/***/ "./client/src/components/Forms/SignIn/SignInForm.jsx":
/*!***********************************************************!*\
  !*** ./client/src/components/Forms/SignIn/SignInForm.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions_login_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/login.js */ \"./client/src/actions/login.js\");\n/* harmony import */ var _actions_users_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/users.js */ \"./client/src/actions/users.js\");\n/* harmony import */ var _actions_messages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/messages.js */ \"./client/src/actions/messages.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Link */ \"./node_modules/@mui/material/Link/Link.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ \"./node_modules/@mui/icons-material/LockOutlined.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _Misc_Copyright_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Misc/Copyright.jsx */ \"./client/src/components/Misc/Copyright.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n // redux\n\n // connect to store\n\n\n\n // UI kit components\n\n\n\n\n\n\n\n\n // components\n\n\n\nvar SignInForm = function SignInForm(props) {\n  var login = props.login,\n      getProfile = props.getProfile,\n      getMessagesByUser = props.getMessagesByUser,\n      pollServer = props.pollServer;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      email = _React$useState2[0],\n      setEmail = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      password = _React$useState4[0],\n      setPassword = _React$useState4[1];\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    login({\n      email: email,\n      password: password\n    }).then(function (response) {\n      getProfile();\n      getMessagesByUser();\n      window.interval = window.interval || setInterval(function () {\n        pollServer();\n      }, 60000);\n    })[\"catch\"](function (err) {\n      console.log('Error logging in user', err);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    item: true,\n    xs: 12,\n    sm: 8,\n    md: 5,\n    elevation: 6,\n    square: \"true\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    sx: {\n      my: 8,\n      mx: 4,\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    sx: {\n      m: 1,\n      bgcolor: 'secondary.main'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    component: \"h1\",\n    variant: \"h5\"\n  }, \"Sign in\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onSubmit: handleSubmit,\n    component: \"form\",\n    noValidate: true,\n    sx: {\n      mt: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    },\n    margin: \"normal\",\n    required: true,\n    fullWidth: true,\n    id: \"email\",\n    label: \"Email Address\",\n    name: \"email\",\n    autoComplete: \"email\",\n    autoFocus: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    onChange: function onChange(e) {\n      return setPassword(e.target.value);\n    },\n    margin: \"normal\",\n    required: true,\n    fullWidth: true,\n    name: \"password\",\n    label: \"Password\",\n    type: \"password\",\n    id: \"password\",\n    autoComplete: \"current-password\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    type: \"submit\",\n    fullWidth: true,\n    variant: \"contained\",\n    sx: {\n      mt: 3,\n      mb: 2\n    }\n  }, \"Sign In\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    container: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    item: true,\n    xs: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    href: \"#\",\n    variant: \"body2\"\n  }, \"Forgot password?\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    item: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    href: \"/register\",\n    variant: \"body2\"\n  }, \"Don't have an account? Sign Up\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Misc_Copyright_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    sx: {\n      mt: 5\n    }\n  }))));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    loggedIn: state.login.loggedIn\n  };\n};\n\nvar mapDispatchToProps = {\n  login: _actions_login_js__WEBPACK_IMPORTED_MODULE_2__.login,\n  getProfile: _actions_users_js__WEBPACK_IMPORTED_MODULE_3__.getProfile,\n  getMessagesByUser: _actions_messages_js__WEBPACK_IMPORTED_MODULE_4__.getMessagesByUser,\n  pollServer: _actions_login_js__WEBPACK_IMPORTED_MODULE_2__.pollServer\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router__WEBPACK_IMPORTED_MODULE_14__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(SignInForm)));\n\n//# sourceURL=webpack://logger_server/./client/src/components/Forms/SignIn/SignInForm.jsx?");

/***/ }),

/***/ "./client/src/components/Views/RegisterOrSignIn/RegisterOrSignIn.jsx":
/*!***************************************************************************!*\
  !*** ./client/src/components/Views/RegisterOrSignIn/RegisterOrSignIn.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Nav_Primary_PrimaryNav_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Nav/Primary/PrimaryNav.jsx */ \"./client/src/components/Nav/Primary/PrimaryNav.jsx\");\n/* harmony import */ var _Forms_Register_RegisterForm_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Forms/Register/RegisterForm.jsx */ \"./client/src/components/Forms/Register/RegisterForm.jsx\");\n/* harmony import */ var _Forms_SignIn_SignInForm_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Forms/SignIn/SignInForm.jsx */ \"./client/src/components/Forms/SignIn/SignInForm.jsx\");\n/* harmony import */ var _Misc_Snackbar_Snackbar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Misc/Snackbar/Snackbar.jsx */ \"./client/src/components/Misc/Snackbar/Snackbar.jsx\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/CssBaseline.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/createTheme.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js\");\n\n // redux\n\n // connect to store\n\n\n\n\n\n\n\n\nvar theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\nvar RegisterOrSignIn = function RegisterOrSignIn(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    theme: theme\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Nav_Primary_PrimaryNav_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    container: true,\n    component: \"main\",\n    sx: {\n      height: '100vh'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    item: true,\n    xs: false,\n    sm: 4,\n    md: 7,\n    sx: {\n      backgroundImage: 'url(https://source.unsplash.com/random)',\n      backgroundRepeat: 'no-repeat',\n      backgroundColor: function backgroundColor(t) {\n        return t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900];\n      },\n      backgroundSize: 'cover',\n      backgroundPosition: 'center'\n    }\n  }), props.location.pathname === \"/register\" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Forms_Register_RegisterForm_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), props.location.pathname === \"/sign-in\" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Forms_SignIn_SignInForm_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Misc_Snackbar_Snackbar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    state: state\n  };\n};\n\nvar mapDispatchToProps = {// loginCheck,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router__WEBPACK_IMPORTED_MODULE_10__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(RegisterOrSignIn)));\n\n//# sourceURL=webpack://logger_server/./client/src/components/Views/RegisterOrSignIn/RegisterOrSignIn.jsx?");

/***/ })

}]);