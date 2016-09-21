/**
* AngularJS Tutorial 1
* @author Nick Kaye <nick.c.kaye@gmail.com>
*/

/**
* Main AngularJS Web Application
*/
var app = angular.module('tutorialWebApp', [
  'ngRoute', 'ngAnimate', 'ngTouch'
]);

/**
* Configure the Routes
*/
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
  // Home
  .when("/", {
    templateUrl: "partials/slide1.html",
    controller: "PageCtrl"
  })
  // Pages
  .when("/slide1", {
    templateUrl: "partials/slide1.html",
    controller: "PageCtrl"
  })
  .when("/slide2", {
    templateUrl: "partials/slide2.html",
    controller: "PageCtrl"
  })
  .when("/slide3", {
    templateUrl: "partials/slide3.html",
    controller: "PageCtrl"
  })
  .when("/slide4", {
    templateUrl: "partials/slide4.html",
    controller: "PageCtrl"
  })
  .when("/slide5", {
    templateUrl: "partials/slide5.html",
    controller: "PageCtrl"
  });

    $locationProvider.html5Mode(true);
}]);

app.controller('PageCtrl', function($scope, $location) {
  $scope.myUrl = $location.path();
  var $before;

  $scope.clicking = function(id) {
  //  console.log($location);
    $before = $location.path().slice(-1);

    if(id >= $before || $before == '/') {
      $scope.slideDir = 'slide-in-right';
    } else {
      $scope.slideDir = 'slide-in-left';
    }
  };

  $scope.goLeft = function() {
    console.log('slide left');

    $scope.slideDir = 'slide-in-right';
    $before = $location.path().slice(-1);
    $prevSlide = Number($before) + 1;

    if($before == '/') {
      $location.path('slide2');
    } else if($before < 5) {
        $location.path('slide' + $prevSlide);
    } else {
       $location.path('/');
    }
  };

  $scope.goRight = function() {
    console.log('slide right');

    $scope.slideDir = 'slide-in-left';
    $before = $location.path().slice(-1);

    $nextSlide = Number($before) - 1;
    console.log($before);
    if($before != '/' && $before > '1' ) {
        $location.path('slide' + $nextSlide);
    } else {
      $location.path('/');
    }
  };


});






console.log('yeah');
