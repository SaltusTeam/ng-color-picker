angular.module('ngColorPicker', [])
.directive('colorpickerDinamic', function() {
    return {
        scope: {
            ngModel: '=',
            colors: '='
        },
        restrict: 'AE',
        template: '<ul><li ng-repeat="color in colors track by $index" ng-class="{selected: (color===ngModel)}" ng-click="pick(color)" ng-style="{\'background-color\':color};"></li></ul>',
        link: function (scope) {
            scope.ngModel = scope.ngModel || scope.colors[0];

            scope.pick = function (color) {
                scope.ngModel = color;
            };
        }
    };

});
