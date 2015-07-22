var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.menu = [
    { name: 'Home', extraScreen: 'icon-home', icon: 'icon-home', color: "#777" , enabled: true  }
    // { name: 'posts', extraScreen: 'Wi-fi menu', icon: 'device:network-wifi', enabled: true },
    // { name: 'Pages', extraScreen: 'Bluetooth menu', icon: 'device:bluetooth', enabled: true },
    // { name: 'Appearence', extraScreen: 'Wi-fi menu', icon: 'device:network-wifi', enabled: true },
    // { name: 'Settings', extraScreen: 'icon-home', icon: 'icon-home', enabled: true  }
  ];

}]);


