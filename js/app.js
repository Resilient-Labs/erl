angular.module('ERL', ['ngSanitize'] )
    .controller('AppCtrl', function ($scope) {
        $scope.client = {};

        $scope.pages = [];

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

        $scope.pageNotShown, $scope.notEnoughPages, $scope.useWP, $scope.notWP, $scope.start, $scope.howItWorks, $scope.isCustomizable = false;

        // The first set of template pages shown
        $scope.templateSet1 = [
            "img/erl_page1.png",
            "img/erl_page2.png",
            "img/erl_page3.png",
            "img/erl_page4.png"
        ];
        // The second set of template pages shown
        $scope.templateSet2 = [
            "img/erl_page5.png",
            "img/erl_page6.png",
            "img/erl_page7.png",
            "img/erl_page8.png"
        ];

        $scope.showTemplates = true;

        // Values must match the 9 in the ERL Clients Spreadsheet
        $scope.selectPages = [{
            id: "1", val: "Home"
        }, {
            id: "2", val: "About"
        }, {
            id: "3", val: "Contact"
        }, {
            id: "4", val: "Blog"
        }, {
            id: "5", val: "Wild Card 1"
        }, {
            id: "6", val: "Wild Card 2"
        }, {
            id: "7", val: "Wild Card 3"
        }, {
            id: "8", val: "Wild Card 4"
        }];


        $scope.lowQuote = 500;
        $scope.highQuote = 1500;

        $scope.calculateQuote = function() {
            var additionalCost = 0;
            // multiples $120 per page (the array length of the amount of pages the user input)
            var costPerPage = $scope.selectedPages.length * 120;
            additionalCost += costPerPage; // 1.5 hours per page

            var isWordpress = document.querySelector('input[name = "isWordpress"]:checked').value;
            if (isWordpress == 'yeswp') {
                additionalCost += 960; // 12 additional hours for WordPress, adds 960
            }
         /*   var projectType = document.querySelector('input[name = "projectType"]:checked').value;
            if (projectType == 'webapp') {
                additionalCost += 2240; // 28 additional hours at $80 / hr for Web App
            } else {
                additionalCost += 640; // 8 hours at $80 / hr for web site
            }*/
            $scope.quoteRange = '$' + ($scope.lowQuote + additionalCost).toString() + " to " +
                '$' + ($scope.highQuote + additionalCost).toString()

        }
        // Sets the value for a button to true if it was checked
        $scope.setChecked = function() {
            for (var i = 1; i < 7; i++) {
                if (document.getElementById('learn' + i).checked) {
                    document.getElementById('goal' + i).value = "true";
                } else {
                    document.getElementById('goal' + i).value = "false";
                }
            }
            $scope.formComplete = true;
            /*
            for (var m = 1; m < 10; m++) {
                if (document.getElementById('selectPages' + m).checked) {
                    document.getElementById('pagina' + m).value = "true";
                } else {
                    document.getElementById('pagina' + m).value = "false";
                }
            }*/
        }

        $scope.setPages = function() {
            $scope.selectedPages = [];
            var selectedPagesCount = 0;
            for (var m = 1; m < 9; m++) {
                if (document.getElementById('selectPages' + m).checked) {
                    selectedPagesCount++;
                    $scope.selectedPages.push({
                        name: document.getElementById('selectPages' + m).value.toString(),
                        idx: selectedPagesCount
                });
                }
            }
        }
    });
