/**
 * Checklist-model
 * AngularJS directive for list of checkboxes
 * https://github.com/vitalets/checklist-model
 * License: MIT http://opensource.org/licenses/MIT
 */
angular.module("checklist-model",[]).directive("checklistModel",["$parse","$compile",function(e,t){function r(e,t,r){if(angular.isArray(e))for(var n=e.length;n--;)if(r(e[n],t))return!0;return!1}function n(e,t,n){return e=angular.isArray(e)?e:[],r(e,t,n)||e.push(t),e}function c(e,t,r){if(angular.isArray(e))for(var n=e.length;n--;)if(r(e[n],t)){e.splice(n,1);break}return e}function a(a,i,o){function l(e,t){var r=h(a.$parent);angular.isFunction(p)&&(t===!0?p(a.$parent,n(r,e,g)):p(a.$parent,c(r,e,g)))}function u(e,t){return f&&f(a)===!1?void l(k,a[o.ngModel]):void(a[o.ngModel]=r(e,k,g))}var s=o.checklistModel;o.$set("checklistModel",null),t(i)(a),o.$set("checklistModel",s);var h=e(s),p=h.assign,d=e(o.checklistChange),f=e(o.checklistBeforeChange),k=o.checklistValue?e(o.checklistValue)(a.$parent):o.value,g=angular.equals;if(o.hasOwnProperty("checklistComparator"))if("."==o.checklistComparator[0]){var $=o.checklistComparator.substring(1);g=function(e,t){return e[$]===t[$]}}else g=e(o.checklistComparator)(a.$parent);a.$watch(o.ngModel,function(e,t){if(e!==t){if(f&&f(a)===!1)return void(a[o.ngModel]=r(h(a.$parent),k,g));l(k,e),d&&d(a)}}),angular.isFunction(a.$parent.$watchCollection)?a.$parent.$watchCollection(s,u):a.$parent.$watch(s,u,!0)}return{restrict:"A",priority:1e3,terminal:!0,scope:!0,compile:function(e,t){if(("INPUT"!==e[0].tagName||"checkbox"!==t.type)&&"MD-CHECKBOX"!==e[0].tagName&&!t.btnCheckbox)throw'checklist-model should be applied to `input[type="checkbox"]` or `md-checkbox`.';if(!t.checklistValue&&!t.value)throw"You should provide `value` or `checklist-value`.";return t.ngModel||t.$set("ngModel","checked"),a}}}]);