'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MiembrosCtrl
 * @description
 * # MiembrosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MiembrosCtrl', function ($scope, $http, $modal) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://localhost:63342/prototipo/app/miembros.json').success(function(data){
      $scope.miembros = data;
    });

    $scope.gridOptions = {
      data: 'miembros',
      showGroupPanel: true,
      enableCellSelection: true,
      enableRowSelection: false,
      enableCellEdit: true,
      columnDefs: [

        {field: 'no', displayName: 'Nº.'},
        {field: 'nombre', displayName: 'Nombre'},
        {field: 'fidelidad', displayName: 'Puntos de fidelidad'},
        {field: 'fechaUnion',  displayName: 'Fecha de ingreso'},
        {field: 'tipoMiembro', displayName: 'Tipo de miembro'}
      ]
    };

    $scope.showModal = function(){
      //alert('probando showModal');
      $scope.nuevoMiembro = {};
      var modelInstance = $modal.open(
        {
          templateUrl: 'views/add_miembro.html',
          controller: 'addNuevoMiembroCtrl',
          resolve: {
            nuevoMiembro : function(){
              return $scope.nuevoMiembro;
            }
          }
        }
      );

      modelInstance.result.then( function( selectedItem ){
        console.log($scope.nuevoMiembro);
        $scope.miembros.push(
          {
            no: $scope.miembros.length+1,
            nombre: $scope.nuevoMiembro.nombre,
            fidelidad: $scope.nuevoMiembro.fidelidad,
            fechaUnion: $scope.nuevoMiembro.fechaUnion,
            tipoMiembro: $scope.nuevoMiembro.tipoMiembro
          }
        )
      });
    }
  }).controller('addNuevoMiembroCtrl', function($scope, $modalInstance, nuevoMiembro){
    $scope.nuevoMiembro = nuevoMiembro;

    $scope.salvarNuevoMiembro = function(){
      $modalInstance.close( nuevoMiembro );
    }

    $scope.cancel= function(){
      $modalInstance.dismiss('cancel');
    };

  });
