'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('GaleriaCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var pictures = $scope.pictures = [];

    var baseURL = "http://lorempixel.com/300/180/";

    var titles = [ "Comida sana", "Salud y trabajo", "Vida en la ciudad",
    "Mantente activo", "Cuida tu aspecto", "¡¡Vid nocturna"];

    var keywords = [ "food", "business", "city", "sports", "fashion",
    "nightlife"];

    var dummytext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida congue pellentesque." +
      " Praesent vel quam in lacus auctor ullamcorper in eget nunc. Integer ornare turpis ut velit tristique amet";

    $scope.addPics = function( i ){

      pictures.push(
        {
          url: baseURL+keywords[ i ],
          title: titles[ i ],
          summary: i + dummytext + i
        }
      )
    }

    for( var i = 0; i < 5; i++ ){
      $scope.addPics( i );
    }

    $scope.rate = 0;

    $scope.max = 10;

    $scope.isReadonly = false;
  });
