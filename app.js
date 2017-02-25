angular.module('firstApp', [])
.directive('topAlert',[function(){   //这里自定义的指令名字必须开头小写
    return {
        restrict: 'E',
        scope : {
            message : "=",
            type : "="
            },
        link: function(scope,ele,sttrs){
            scope.hide = function(){
                scope.message = null,
                scope.type = null
            }
        },
        templateUrl: 'alert.html'
    };
}])
.factory('alertService',['$timeout',function($timeout){
    return {
        message : null,
        type : null,
        setAlert : function(mes,typ){
            this.message = mes
            this.type = typ
            var self = this;
            $timeout(function(){
                self.clear();
            },3000)
        },
        clear : function(){
            this.message = null
            this.type = null
        }
    }
}])
.controller('Controller',['$scope','alertService',function($scope,alertService){
    $scope.topService = alertService;
    alertService.setAlert('登录成功', 'danger');
}])