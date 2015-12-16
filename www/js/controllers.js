angular.module('starter.controllers', [])

.controller('NotificationController', function($scope, $cordovaLocalNotification, $ionicPlatform) {

	$cordovaLocalNotification.schedule({
	id: 1,
	title: 'Warning',
	text: "ss",
	data: {
	  customProperty: 'custom value'
	}
  }).then(function (result) {
	//console.log('Notification 1 triggered');
  });
})

.controller('DashCtrl', function($scope) {
  navigator.geolocation.getCurrentPosition(function(position){
	  $scope.$apply(function(){
	   // $scope.pos = position;
	  });
	});
  var onSuccess = function(position) {
	
	$scope.$apply(function(){
		$scope.CurrentLocation = position.coords.latitude + "," + position.coords.longitude;
		console.log($scope.CurrentLocation);
	  });
  };
  function onError(error) {
	  alert('code: '    + error.code    + '' +
			'message: ' + error.message + '');
  }
  navigator.geolocation.getCurrentPosition(onSuccess, onError);

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
	Chats.remove(chat);
  };

})
.controller('DestinationController', function(NgMap) {
  var vm = this;
  vm.types = "['address']";
  vm.placeChanged = function() {
    vm.place = this.getPlace();
    console.log('location', vm.place.geometry.location);
    vm.map.setCenter(vm.place.geometry.location);
  }
  NgMap.getMap().then(function(map) {
    vm.map = map;
  });
  //console.log($scope);
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  navigator.geolocation.getCurrentPosition(function(position){
	  $scope.$apply(function(){
	   // $scope.pos = position;
	  });
	});
  var onSuccess = function(position) {
	
	$scope.$apply(function(){
	   // $scope.pos = position;
		$scope.yourName = position.coords.latitude + "," + position.coords.longitude;
	  });
  };

  // onError Callback receives a PositionError object
  //
  function onError(error) {
	  alert('code: '    + error.code    + '' +
			'message: ' + error.message + '');
  }
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
  //console.log($scope);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
	enableFriends: true
  };
});
