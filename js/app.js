angular.module('ERL', ['ngSanitize'] )
    .controller('AppCtrl', function ($scope) {
        $scope.client = {};

        $scope.pages = [];

        var initPageNum = 1;
        var typesOfPages = '';


        $scope.lowQuote = 500;
        $scope.highQuote = 1500;

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
        $scope.clickedDiff = false;
        $scope.differenceText = "The difference between a Website and a web app is quite simple. " +
            "A web app is this, while a website is this, duh, easy"

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
            val: "Other"
        }
        ];

        $scope.calculateQuote = function() {
            var additionalCost = 0;
            var costPerPage = $scope.pages.length * 120;
            // 1.5 hours per page
            additionalCost += costPerPage;

            var isWordpress = document.querySelector('input[name = "isWordpress"]:checked').value;
            if (isWordpress == 'yeswp') {
                // 12 additional hours for WordPress
                additionalCost += 960;
            }

            var projectType = document.querySelector('input[name = "projectType"]:checked').value;
            if (projectType == 'webapp') {
                // 28 additional hours at $80 / hr for Web App
                additionalCost += 2240;
            } else {
                // 8 hours at $80 / hr for web site
                additionalCost += 640;
            }
            $scope.quoteRange = '$' + ($scope.lowQuote + additionalCost).toString() + " to " +
                '$' + ($scope.highQuote + additionalCost).toString()

        }

        $scope.sendEmail = function() {

            var email = '\n';
            var projectType = document.querySelector('input[name = "projectType"]:checked').value;
            var learnBtns = document.querySelector('input[name = "learnBtns"]:checked').value;
            var isWordpress = document.querySelector('input[name = "isWordpress"]:checked').value;
            if (isWordpress == 'yeswp') {
                isWordpress = 'Yes'
            } else {
                isWordpress = 'No'
            }
            var homeTemplates = document.querySelector('input[name = "homePages"]:checked').value;
            var aboutTemplates = document.querySelector('input[name = "aboutPages"]:checked').value;

            email += 'Hi Resilient Lab, ' + '\n' + '\n';
            email += 'My name is ' + $scope.client.name + ' and I work for ' + $scope.client.company + '\n';
            email += 'I am current looking to build a ' + projectType + " with your team!" + '\n';
            email += "Here's what I intend for those who use my " + projectType + ' to do:' + '\n';
            email += learnBtns + '\n';

            if ($scope.moreInfo !== undefined && $scope.moreInfo !== '') {
                email += " and " + $scope.moreInfo + '\n';
            }

            email += 'Here are the pages: ' + '\n' + typesOfPages + '\n';
            email += 'Here are the templates I hope to use: ' + '\n' + homeTemplates + '\n' + aboutTemplates + '\n';
            email += "Is this a wordpress project? " + isWordpress + '\n';

            email += "Here was the estimated cost of the project: " + $scope.quoteRange
            email += 'Please contact me back at ' + $scope.client.email + '\n';

            console.log(email);
            document.getElementById("formToSend").name = "Potential ERL Client: \n";
            document.getElementById("formToSend").value = '';
            document.getElementById("formToSend").value += email;
        };


    });
