webpackJsonp([4],{"./app/containers/CalculatorPage/constants.js":function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"d",function(){return r}),a.d(t,"c",function(){return u}),a.d(t,"b",function(){return o});var n="Calculator/CHANGE_USERNAME",r="Calculator/CHANGE_FOREX",u="Calculator/LOAD_FOREX",o="Calculator/UPDATE_FORM_INPUT"},"./app/containers/CalculatorPage/reducer.js":function(e,t,a){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case u.d:return e.set("exchangeRate",a.i(r.fromJS)(t.payload));case u.b:var n=e.get("formInput");return e.set("formInput",n.set(t.payload.key,t.payload.value));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a("./node_modules/immutable/dist/immutable.js"),u=(a.n(r),a("./app/containers/CalculatorPage/constants.js")),o=a.i(r.fromJS)({username:"",exchangeRate:{GBP:1,CNY:8.8},formInput:{currency:"GBP",investmentType:"buy-to-let",saving:0,annualIncome:0,nextYearSaving:0,nextSecondYearSaving:0,interestAnnualRate:2,mortgageLengthYear:30}});t.default=n}});