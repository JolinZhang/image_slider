(function(){
  var sliderApp = angular.module('sliderApp',[]);

  sliderApp.controller('SliderController',function($scope){
     $scope.sliders = images;
     $scope.currentIndex = 0;

     $scope.prev = function(){
        $scope.currentIndex > 0 ? $scope.currentIndex-- :$scope.currentIndex = $scope.sliders.length -1;
     }
     $scope.next = function(){
        $scope.currentIndex < $scope.sliders.length -1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
     }
     $scope.$watch('currentIndex',function(){
       $scope.sliders.forEach(function(slider){
            slider.src.visible = false;
                 });
            // console.log($scope.sliders[$scope.currentIndex].src);
            // .visible = true;
            // alert('hey, myVar has changed!');
     });

    //  $scope.$watch('currentIndex',function(){
    //           $scope.sliders.forEach(function(slider){
    //             slider.src.visible = false;
    //           });
    //           $scope.sliders[$scope.currentIndex].src.visible = true;
    //         });

  });

  var images=[{
    src:'1.jpg',
    title:'Miami Beach'
  },{
    src:'2.jpg',
    title:'Key West'
  },{
    src:'3.jpg',
    title:'Biscayne National Park'
  },{
    src:'4.jpg',
    title:'Key West'
  },{
    src:'5.jpg',
    title:'Everglades National Park'
  },{
    src:'6.jpg',
    title:'Everglades National Park'
  }];

})();
