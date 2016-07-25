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
        var typesOfPages = '';
        /** Allows the user to add pages to the scope of the project */
        $scope.addPage = function() {
            if ($scope.pagename !== undefined && $scope.pagename !== "") {
                $scope.pages.push({
                    id: initPageNum,
                    name: $scope.pagename
                });
                initPageNum++;
                typesOfPages += $scope.pagename + '\n';
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

        $scope.learnBtns = [{
                id: "1",
                val: "Users should learn more about my company/organization"
            }, {
                id: "2",
                val: "I want users to know about events that we have"
            }, {
                id: "3",
                val: "Users should learn more about my company/organization"
            }, {
                id: "4",
                val: "I want users to know about events that we have"
            }, {
                id: "5",
                val: "Users should learn more about my company/organization"
            }, {
                id: "6",
                val: "I want users to know about events that we have"
            }
        ];


        $scope.sendEmail = function() {

            var newLine = '\n';
            var email = newLine;
            var projectType = document.querySelector('input[name = "projectType"]:checked').value;
            var learnBtns = document.querySelector('input[name = "learnBtns"]:checked').value;
            var isWordpress = document.querySelector('input[name = "isWordpress"]:checked').value;

            email += 'Hi Resilient Lab, ' + newLine + newLine;
            email += 'My name is ' + $scope.client.name + 'and I work for ' + $scope.client.company + newLine;
            email += 'I am current looking to build a ' + projectType + " with your team!" + newLine;
            email += "Here's what I intend for those who use my " + projectType + ' to do:' + newLine;
            email += learnBtns + newLine + " and " + $scope.moreInfo + newLine;
            email += 'Here are the pages: ' + newLine + typesOfPages + newLine + newLine;
            email += 'Please contact me back at ' + $scope.client.email + newLine;
            email += "Is this a wordpress project? " + isWordpress;

            console.log(email);
            document.getElementById("formToSend").name = "Potential ERL Client: \n";
            document.getElementById("formToSend").value = '';
            document.getElementById("formToSend").value += email;
        }

        $scope.isSelected = function() {

        }


    });
