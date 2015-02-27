var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService){

    $scope.postData = function(){
        parseService.postData($scope.postQuestion).then(function(data){
        $scope.getParseData();
        })
    };

    $scope.getParseData = function(){
        parseService.getData().then(function(data){
            console.log(data);
            $scope.questions = data;
        })
    };
    $scope.getParseData();

    $scope.changeStatus = function(questionId) {
        parseService.updateData(questionId).then(function (data){
            $scope.getParseData();

        })
        };

    $scope.deleteData = function(questionId) {
        parseService.deleteData(questionId).then(function(){
            $scope.getParseData();
        })

    }
});