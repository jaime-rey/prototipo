'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var baseURL='http://lorempixel.com/960/450/';
    $scope.setInterval=5000;

    $scope.slides = [
      {
        title:'Aprende a mantenerte en forma',
        image:baseURL+'sports',
        text:'¡Practica algún deporte todos los días'
      },
      {
        title:'Buena alimentación',
        image:baseURL+'food',
        text:'¡La importancia de frutas y verduras en la dieta!'
      },
      {
        title:'En contacto con la naturaleza',
        image:baseURL+'nature',
        text:'¡Mantente en armonía con la naturaleza!'
      }
    ];

// Modelo para los tres bloques de contenidos
    var baseURLMini='http://lorempixel.com/200/200/';
    $scope.contenido=[
      {
        img:baseURLMini+'people',
        title:'Sobre Nosotros',
        sumario:'Somos una empresa comprometida con la vida sana'
      },
      {
        img:baseURLMini+'business',
        title:'Nuestros Servicios',
        sumario:'Ofrecemos asesoría profesional para mantenerse Sanos, buena alimentación, cuales son los mejores ejercicios para tí, etc.'
      },
      {
        img:baseURLMini+'transport',
        title:'Contáctanos',
        sumario:'#333, Buena vida Online, Plaza Central, Durance, Zip-432167'
      }
    ]


  });
