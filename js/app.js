/**
 * Created by Unaka Muigai on 7/21/2016.
 */
angular.module('ERL', ['ngSanitize'] )
    .controller('AppCtrl', function ($scope) {
        $scope.client = {
        };
        console.log($scope.client);

        $scope.pages = [];

        var initPageNum = 1;
        /** Allows the user to add pages to the scope of the project */
        $scope.addPage = function() {
            if ($scope.pagename !== undefined && $scope.pagename !== "") {
                $scope.pages.push({
                    id: initPageNum,
                    name: $scope.pagename
                });
                initPageNum++;
                $scope.pagename = "";
            }
        };

        /** Allows the user to enlarge thumbnails on the screen */
        $scope.isEnlarged = false;
        $scope.viewThumbnail = function() {
            $scope.isEnlarged = !$scope.isEnlarged;
            if ($scope.isEnlarged) {
                $scope.viewedImage = "<img src='" + this.temps + "'>"
            } else {
                $scope.viewedImage = "";
            }
        };

        // All the home page templates
        $scope.homeTemplates = [
            "img-03.png",
            "img-04.png",
            "img-05.png"
        ];
        // All the about page templates
        $scope.aboutTemplates = [
            "img-03.png",
            "img-04.png",
            "img-05.png"
        ];


        $scope.sendEmail = function() {
            var email = '';
            var newLine = '\n';
            email += 'Hi Resilient Lab, ' + newLine + newLine;
            email += 'My name is ' + $scope.client.name + newLine;
            email += 'I work for ' + $scope.client.company + newLine;
            email += 'I am current looking to build a ' + $scope.projectType + newLine;
            email += 'I hope have this used'

            email += 'Please contact me back at ' + $scope.client.email;

            console.log(email);
        }


    });
