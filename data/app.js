(function() {
  var app = angular.module('myApp', []);

  app.controller('postCtrl', function($scope, $http) {
              $scope.myData = gem;
          }
  );
 })();
 
 // if statment to write if there is something in Post_Des_Link or Post_Link then to remove the hidden class

 // return {
 //      restrict: 'E',
 //      template: '<div></div>',
 //      replace: true,
 //      scope: {
 //        obj: '='
 //      },
 //      link: function(scope, element, attr) {
 //        element.html(hrefLinks(scope.obj));
 //      }
 //    };

 // place <json-link obj="linkObj"></json-link> into html 
 // http://plnkr.co/edit/Fwca9h4yNZhJ8FGR8BK5?p=preview

  /*
    var app = angular.module('myApp', []);
    app.controller('clubCtrl', function($scope, $http) {
        $http.get("http://google,doc/customer.json").then(function (response) { 
        $scope.mymathData = response.data;
        });
    }); 
  */



