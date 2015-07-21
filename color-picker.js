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

})
.directive('colorpicker', function() {
    var defaultColors =  [
        '#A0522D',
        '#CD5C5C',
        '#FF4500',
        '#DC143C',
        '#FF8C00',
        '#C71585',
        '#00FF00',
        '#33CCFF',
        '#FFFF00',
        '#708090',
        '#00C5CD',
        '#CDCD00',
        '#EE6363',
        '#7D26CD',
        '#363636'
    ];
    return {
        scope: {
            ngModel: '='
        },
        restrict: 'AE',
        template: '<ul><li ng-repeat="color in colors track by $index" ng-class="{selected: (color===ngModel)}" ng-click="pick(color)" ng-style="{\'background-color\':color};"></li></ul>',
        link: function (scope) {
            scope.colors = defaultColors;
            scope.ngModel = scope.ngModel || scope.colors[0];

            scope.pick = function (color) {
                scope.ngModel = color;
            };
        }
    };

});
