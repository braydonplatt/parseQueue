var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers = {'X-Parse-Application-Id': 'NZU0PcURf9dBUcHNI3jXzu6dEZ9z84X7TeHhsA5H', 'X-Parse-REST-API-Key': 'Xy0S5uvVZZWcCHNYrRdbJ5j6CrqTEbJ8vspfchwF'};
            return config;
        }
    };
});