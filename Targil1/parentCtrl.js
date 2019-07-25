module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.email = ''
    $scope.name = ''
    $scope.age = 0
    $scope.getClass = function() {
        if ($scope.email == '' )
            return 'missing'
        return 'ok'
    }
    $scope.colorMe = function() {
        if($scope.name != '' || $scope.email != '' || $scope.age > 0 ){
            if($scope.name != '' && $scope.email != '' && $scope.age > 0){
                if($scope.age < 18){
                    return 'under'
                }
                return 'ok'
            }
            return 'part'
        }
        return 'missing'
    }
}