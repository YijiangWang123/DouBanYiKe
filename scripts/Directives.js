/**
 * Created by YJW on 2017/10/28.
 */

angular.module("Directives",[])
.directive("loading",function () {
    return {
        restrict: "EAC",
        replace: true,
        template: "<img src='' alt='' />"
    }
});