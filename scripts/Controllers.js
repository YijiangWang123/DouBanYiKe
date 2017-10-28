/**
 * Created by YJW on 2017/10/28.
 */

//实例一个模块，管理所有的控制器
angular.module("Controllers",[])
.controller("DemoController",["$scope",function ($scope) {
    console.log("启动了");
}]).controller("TodayController",["$scope",function ($scope) {
    console.log("今天");
}]);