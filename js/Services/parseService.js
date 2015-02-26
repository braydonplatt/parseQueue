var app = angular.module('parseQ');

app.service('parseService', function($http, $q){

    this.postData = function(question){
        var deferred = $q.defer();
    $http({
        method: 'POST',
        url: 'https://api.parse.com/1/classes/question',
        data: {text: question, status: red}

    })
        .then(function(data){
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    this.getData = function(){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/question'
        })
            .then(function(data){
                console.log(data.data.results);
                deferred.resolve(data.data.results);
            })
        return deferred.promise;
    }


    this.updateData = function(object){
        var deferred = $q.defer();
        $http({
            method: 'PUT',
            url: 'https://api.parse.com/1/classes/question/' + object.objectId,
            data: object
        })
            .then(function(data){
                console.log(data.data.results);
                deferred.resolve(data.data.results);
            })
        return deferred.promise;
    }

    
});