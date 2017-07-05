// Module to show the map 
var app = angular.module('myApp', ['ngMap']);

app.controller('MyCtrl', function($compile, $scope, $http, NgMap, callAjaxFactory) {

  var vm = this;
  vm.trails = [];
  
 // The data model:
 // id: trail ID (string)
 // name: trail name (string)
 // position: trail start coordinates (array of lat and lon)
 // description: array of description items including topic (string), img (image) and description (string)
  
  // Ajax Factory request which loads the list of trails including trail descriptions.
	callAjaxFactory.getAjax("getAllTrails", '').then(
		function(response) {
			vm.trails = response;
			console.log(vm.trails);
		}
	);
  
  // show the map
  NgMap.getMap().then(function(map) {
    console.log('map', map);
    vm.map = map;
  });
  
  // trail description is not visible until the link in the info window is clicked
   vm.trailVisible = false;
   
   vm.clicked = function() {
// link in info window is clicked -> make the trail description visible
	vm.trailDescription = vm.trail.description;
	vm.trailVisible = true;
  };

// show the info window
  vm.showDetail = function(e, trail) {
    vm.trail = trail;
    vm.map.showInfoWindow('foo-iw', trail.id);
  };

 // hide the info window
  vm.hideDetail = function() {
    vm.map.hideInfoWindow('foo-iw');
  };
 
 // marker image
  vm.image = {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      size: [20, 32],
      origin: [0,0],
      anchor: [0, 32]
    };
	
// marker shape
   vm.shape = {
      coords: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
    };
});

app.factory('callAjaxFactory', function($http){
// loads trail data in json format
	return{
		getAjax: function(method, country){
			
			var inData = {'country' : country};
			
			return $http({
				url: 'markers.json',
				method: 'POST',
				param: inData
			})
			.then(
				function(response){
					console.log(response.data);
					return response.data;
				}
			);
		}
	}
});




