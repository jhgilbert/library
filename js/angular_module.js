var learningLibrary = angular.module('LearningLibrary', []);

// ROUTING =============================================================================================================

function mainRouteConfig($routeProvider) {
    var baseURL = "../templates/";

    $routeProvider.
        when("/getting_started", {
            templateUrl: baseURL + 'getting_started.html'
        }).
        when("/using_terminal", {
            templateUrl: baseURL + 'using_terminal.html'
        }).
        when("/using_git", {
            templateUrl: baseURL + 'using_git.html'
        }).
        when("/", {
            templateUrl: baseURL + 'getting_started.html'
        }).
        otherwise({
            redirectTo: "/"
        });
}

learningLibrary.config(mainRouteConfig);