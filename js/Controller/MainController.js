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
            debugger;
            $scope.questions = data;
        })
    };
    $scope.getParseData();

    $scope.changeStatus = function(questionId) {
        question.status = "yellow";
        parseService.updateData().then(function (data) {
            getQuestion();

        })
        };
});