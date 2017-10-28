/**
 * Created by YJW on 2017/10/28.
 */
var Yike = angular.module("YiKe",["ngRoute","Controllers"]);

//配置路由
Yike.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when("/today",{
        templateUrl:"../views/today.html"
    }).when("/older",{
        templateUrl:'views/older.html',
        controller:'OlderController'
    }).when("/author",{

    })
}]);

Yike.run(['$rootScope', function ($rootScope) {
    $rootScope.loaded = false;
    $rootScope.title = '今日一刻';

    $rootScope.collapsed = false;
	$rootScope.toggle = function () {
	$rootScope.collapsed = !$rootScope.collapsed;

    var navs = document.querySelectorAll('.navs dd');
        if($rootScope.collapsed) {
    		for(var i=0; i<navs.legth; i++) {
        		navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
                navs[i].style.transitionDelay = '0.2s';
        		navs[i].style.transform = 'translate(0)';
            }
        } else {
    		for(var i=navs.length - 1; i>=0; i--) {
                navs[i].style.transitionDuration = (navs.length - i + 1) * 0.05 + 's';
                navs[i].style.transitionDelay = '';
        		navs[i].style.transform = 'translate(-100%)';
            }
        }

    }
}]);
