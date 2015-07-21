angular.module('ngColorPicker', [])
.directive('ngColorPicker', function() {
    return {
        scope: {
            selected: '=',
            colors: '='
        },
        restrict: 'AE',
        template: '<ul><li ng-repeat="color in colors track by $index" ng-class="{selected: (color===selected)}" ng-click="pick(color)" ng-style="{\'background-color\':color};"></li></ul>',
        link: function (scope) {
            scope.selected = scope.selected || scope.colors[0];

            scope.pick = function (color) {
                scope.selected = color;
            };
        }
    };

});
