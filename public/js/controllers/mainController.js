app.controller('MainCtrl', function($scope){
    console.log("In the main controller");
    $scope.welcome = "Welcome";
});

app.controller('ContactController', function($scope){
    console.log("Contact Controller");
});

app.controller('LanguageController', function($scope){
    $scope.languages = ["English", "Kazakh", "Russian"];
    $scope.chosenLanguage = 'English';


    $scope.changeLanguage =  function(previous){
        var index = $scope.languages.indexOf(previous);
        if(index >= 0 && index < $scope.languages.length -1){
            $scope.chosenLanguage = $scope.languages[index + 1];
        }
        else{
            $scope.chosenLanguage = $scope.languages[0];
        }
    }
});
