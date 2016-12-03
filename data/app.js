// link to parts of the html page
// <a href="http://example.com/page.html#foo"'+posts[i].Post_Date+'"></a>
// foo = ID of what you want to link it to

(function() {
  var app = angular.module('myApp',  ['ngSanitize']);

  app.controller('clubCtrl', ['$scope', '$http', function($scope, $http) {
              $scope.myData = posts;
              $scope.myResult = results;
          }
  ]);
})();

// $(document).ready(function() {
//   load_posts();
// });

// function load_posts() {
//   for (i=0; i<posts.length; i++) {
//     date_id = "dates" + String(i);
//     $('#display-board').append('<ul class="dates" id="'+date_id+'"></ul>');
//     $('#'+date_id).append('<li>'+posts[i].Post_Date+'<li>');
//     }
// }

// function load_posts() {
//   for (i=0; i<posts.length; i++) {
//     post_id = "post" + String(i);
//     $('#posts').append('<div class="post" id="'+post_id+'"></div>');
//     // $('#posts').append("<img class=\"post_image\" src=\""+image+"\">");
//     $('#'+post_id).append('<h1>'+posts[i].Post_Date+'</h1>');
//     $('#'+post_id).append('<p>'+posts[i].Post+'</p>');
//     // if (image = "" 0) {
//     //   ('#'+post_id).append('<div class="stretch"></div>');
//     // }
//   }
// }