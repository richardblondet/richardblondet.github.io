"use strict";
/*
 *|------------------------------------------
 *| [script.js][logic][author:richardblondet]
 *|------------------------------------------
 */
var App = angular.module("babysitting", [
	"ngRoute",
	"ngSanitize",
	"ngAnimate",
	"ui.bootstrap",
	"ngCookies",
	"ngMask"
]);
/*
 *|-------------------------------------
 *| [config][route][locations]
 *|-------------------------------------
 */
App.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {

		/*
		 *|--------------------
		 *| Route provider
		 *|--------------------
		 */
		$routeProvider

		/*
		 *|--------------------
		 *| main route
		 *|--------------------
		 */
			.when('/', {
			templateUrl: 'partials/video-instruction.html',
			controller: ['$scope', 'AgeResolver', '$location', function($s, AgeResolver, $location) {
				$s.proceed = function() {
					$location.path('/instructions');
				}
			}],
			resolve: {
				AgeResolver: ["AgeHandler", "$location", function(AgeHandler, $location) {
					var a = AgeHandler.getCookie();
					if (a == undefined || a == "undefined" || !a) {
						$location.path('/confirm-age');
					} else if (Number(a) < 13) {
						$location.path('/error');
					} else if (Number(a) > 13) {
						return {
							status: true,
							age: a
						};
					}
				}]
			}
		}) 

		/*
		 *|--------------------
		 *| Confirm age
		 *|--------------------
		 */
		.when('/confirm-age', {
			templateUrl: 'partials/age-gate.html',
			controller: 'maincontroller'
		})
		

		/*
		 *|---------------------
		 *| Upload video [modal]
		 *|---------------------
		*/
		.when('/upload/:identifier', {
			templateUrl: 'partials/instructions.html',
			controller: 'uploadcontroller'
		})
		

		/*
		 *|--------------------
		 *| Instructions
		 *|--------------------
		 */
		.when('/instructions', {
			templateUrl: 'partials/instructions.html',
			controller: ['$scope', '$location', function($scope, $location) {
				$scope.proceed = function() {
					$location.path('/complete-form');
				}
			}]
		})
		

		/*
		 *|-----------------------
		 *| Complete form
		 *|-----------------------
		*/
		.when('/complete-form', {
				templateUrl: 'partials/form.html',
				controller: ['$scope', '$location', '$uibModal', 'AgeHandler', 'VideoEntry', '$routeParams', 'USStates', '$timeout', 'formVals', function($scope, $location, $uibModal, AgeHandler, VideoEntry, $routeParams, USStates, $timeout, formVals) {
					var val = formVals.get() || {};
					$scope.input = {
						name: val.name || "",
 						pre_phone: val.pre_phone || "",
 						mid_phone: val.mid_phone || "",
 						pos_phone: val.pos_phone || "",
 						address: val.address || "",
 						city: val.city || "",
 						state: val.state || "",
 						zip: val.zip || "",
 						age: val.age || "",
 						email: val.email || ""
					};
					if (AgeHandler.getCookie()) {
						if (AgeHandler.getCookie() < 13) {
							$location.path('/error');
						}
						$scope.input.age = AgeHandler.getCookie();
					} else {
						$location.path('/confirm-age');
					}
					$scope.us_states = USStates;
					$scope.open = function(s) {
						var uiBox = $uibModal.open({
							animation: true,
							size: 'md',
							backdrop: 'static',
							keyboard: false,
							templateUrl: s + '.html',
							controller: function($scope, $uibModalInstance) {
								$scope.close = function() {
									$uibModalInstance.dismiss('cancel');
								}
							},
						});
					};

					function escapeHtml(str) {
						var entityMap = {
							"&": "&amp;",
							"<": "&lt;",
							">": "&gt;",
							'"': '&quot;',
							"'": '&#39;',
							"/": '&#x2F;'
						};
						return String(str).replace(/[&<>"'\/]/g, function(s) {
							return entityMap[s];
						});
					}

					function validateEmail($email) {
						var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
						return emailReg.test($email);
					}
					$scope.valid = {
						terms: 0,
						certContent: 0,
						nat: 0
					};
					$scope.subm = function(source) {
						$scope.input.source = source;
						if (!$scope.input.name ||
							!$scope.input.pre_phone ||
							!$scope.input.mid_phone ||
							!$scope.input.pos_phone ||
							!$scope.input.address ||
							!$scope.input.city ||
							!$scope.input.state ||
							!$scope.input.zip ||
							!$scope.input.email ||
							!$scope.valid.terms ||
							!$scope.valid.certContent ||
							!$scope.valid.nat ||
							!validateEmail($scope.input.email)
						) {

							$scope.open('field-error');
							return false;
						}
						$scope.input.name = escapeHtml($scope.input.name);
						$scope.input.address = escapeHtml($scope.input.address);
						$scope.input.city = escapeHtml($scope.input.city);
						if( val.identifier ) {
 							$location.path('/upload/' + val.identifier);
 							return;
 						}
						VideoEntry.publish({
							name: $scope.input.name,
							email: $scope.input.email,
							address: $scope.input.address,
							city: $scope.input.city,
							state: $scope.input.state,
							zip: $scope.input.zip,
							age: $scope.input.age,
							phone: "(" + $scope.input.pre_phone + ")" + $scope.input.mid_phone + "-" + $scope.input.pos_phone,
							source: $scope.input.source,
						}).success(function(data, status, headers) {
							if (status == 200) {
								$scope.input.identifier = data.identifier;
 								formVals.set($scope.input);
								$location.path('/upload/' + data.identifier);
							}
						}).error(function(data) {
							/* console.log(data); */
							/* console.log("$http Err", data); 
						});
					};
				}]
			})
			
			/*
			 *|-----------------------
			 *| Success State
			 *|-----------------------
			
			.when('/success', {
				templateUrl: 'partials/success.html',
				controller: ['$scope', '$location', 'formVals', function($scope, $location, formVals) {
 					formVals.remove();
					$scope.proceed = function() {
						$location.path('/');
					}
				}]
			})
			*/

		/*
		 *|---------------------
		 *| Upload error [modal]
		 *|---------------------
		 */
		.when('/upload-error/:identifier', {
			templateUrl: 'partials/instructions.html',
			controller: 'uploaderrorcontroller'
		})
		

		/*
		 *|-----------------------
		 *| Fields errors [modal]
		 *|-----------------------
		 */
		.when('/field-error', {
			templateUrl: 'partials/form.html',
			controller: 'fielderrorcontroller'
		})
		

		/*
		 *|---------------------
		 *| Upload progr [modal]
		 *|---------------------
		 */
		.when('/uploading/:identifier', {
			templateUrl: 'partials/instructions.html',
			controller: 'uploadprogresscontroller'
		})
		

		/*
		 *|--------------------
		 *| Error
		 *|--------------------
		
		.when('/', {
			templateUrl: 'partials/error.html',
			controller: 'maincontroller'
		})
		*/ 
		

		/*
		 *|--------------------
		 *| content release
		 *|--------------------
		 */
		.when('/content-release', {
			templateUrl: 'partials/content-release.html',
			controller: 'maincontroller'
		})
		

		/*
		 *|--------------------
		 *| default
		 *|--------------------
		 */
		.otherwise({
			redirectTo: '/'
		});

	}
]);
/*
 *|-------------------------------------
 *| [run][events][locations]
 *|-------------------------------------
 */
App.run(['$rootScope', '$route', '$location', 'AgeHandler', '$cookies', function($rootScope, $route, $location, AgeHandler, $cookies) {
	var cookie = $cookies.get('__aib');
	/* window.onbeforeunload = function(){ Hackish 
		if( cookie ) {
			$cookies.remove('__aib');
		}
	} */
}]);
/*
 *|-----------------------------------------
 *| [directive][DOM][full-height background]
 *|-----------------------------------------
 */
App.directive('fullWidth', ['$log', function($log) {
	var w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		x = w.innerWidth || e.clientWidth || g.clientWidth,
		y = w.innerHeight || e.clientHeight || g.clientHeight;
	return {
		restrict: 'A',
		link: function($scope, iElm, iAttrs, controller) {
			iElm.css("min-height", y + "px");
			iElm.css("width", x + "px");
			angular.element(w).bind("resize", function(e) {
				x = w.innerWidth || e.clientWidth || g.clientWidth,
					y = w.innerHeight || e.clientHeight || g.clientHeight;
				iElm.css("min-height", y + "px");
				iElm.css("width", x + "px");
			});
		}
	};
}]);
/*
 *|----------------------------------------
 *| [factory][age-gate-factory]
 *|----------------------------------------
 */
App.factory('AgeHandler', ['$cookies', '$q', function($cookies, $q) {
		return {
			getAge: function(dateString) {
				var today = new Date();
				var birthDate = new Date(dateString);
				var age = today.getUTCFullYear() - birthDate.getUTCFullYear();
				var m = today.getUTCMonth() - birthDate.getUTCMonth();
				if (m < 0 || (m === 0 && today.getUTCDate() < birthDate.getUTCDate())) {
					age--;
				}
				return age;
			},
			setCookie: function(val) {
				var future = new Date();
				future.setDate(future.getUTCDate() + 14);

				$cookies.put('__aib', val, {
					expires: null
				});
			},
			getCookie: function() {
				return $cookies.get('__aib');
			}
		};
	}])
	/*
	 *|-----------------------------------------
	 *| [directive][birthdate-picker-component]
	 *|-----------------------------------------
	 */
App.directive('birthdatePickerComponent', ['$log', '$location', 'AgeHandler', function($log, $location, AgeHandler) {
	var MONTHS = [{
			name: 'January',
			val: 1
		}, {
			name: 'February',
			val: 2
		}, {
			name: 'March',
			val: 3
		}, {
			name: 'April',
			val: 4
		}, {
			name: 'May',
			val: 5
		}, {
			name: 'June',
			val: 6
		}, {
			name: 'July',
			val: 7
		}, {
			name: 'August',
			val: 8
		}, {
			name: 'September',
			val: 9
		}, {
			name: 'October',
			val: 10
		}, {
			name: 'November',
			val: 11
		}, {
			name: 'December',
			val: 12
		}],
		Today = new Date(),
		set = function(c) {
			var days = [],
				years = [];
			for (var i = 0; i <= 90; i++) {
				if (i < 31) {
					days.push(i + 1);
				}
				years.push((Today.getUTCFullYear() - 6) - i);
			};
			if (c == "days") {
				return days;
			} else {
				return years;
			}
		};
	return {
		name: 'birthdatePickerComponent',
		controller: function($scope, $element, $attrs, $transclude, $location) {
			$scope.month, $scope.dd, $scope.yyyy;
			$scope.MONTHS = MONTHS;
			$scope.DAYS = set("days");
			$scope.YEARS = set("years");
			$scope.proceed = false;
			$scope.hasError = false;

			$scope.check = function(m, d, y) {
				if (m && d && y) {
					var cDate = new Date(m + "/" + d + "/" + y),
						cMon = cDate.getUTCMonth() + 1,
						cDat = cDate.getUTCDate(),
						cYear = cDate.getUTCFullYear();
					if (m === cMon) { /* Fix concordance */
						$scope.proceed = true;
						$scope.hasError = false;
					} else {
						$scope.hasError = true;
					}
				} else {
					$scope.proceed = false;
				}
			};
			$scope.ageHandler = function(m, d, y) {
				if ($scope.proceed == false) return;
				if ($scope.hasError == true) return;
				/* console.log("Selected age", AgeHandler.getAge(m + "/" + d + "/" + y)); */
				var age = AgeHandler.getAge(m + "/" + d + "/" + y);
				AgeHandler.setCookie(age);
				$location.path('/'); /* continue users journey */
			}
		},
		restrict: 'A',
		template: '<div class="birthdate-picker-container">' +
			'<div class="row" data-ng-class="{\'has-error\': (hasError==true)}">' +
			'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">' +
			'<div class="select-picker-wrapper">' +
			'<select data-ng-model="month" data-ng-change="check(month, dd, yyyy)" data-ng-options="m.val as m.name for m in MONTHS" id="month-picker" class="form-control" name="month">' +
			'<option value="" selected="selected">MONTH</option>' +
			'</select>' +
			'</div>' +
			'</div>' +
			'<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">' +
			'<div class="select-picker-wrapper">' +
			'<select data-ng-model="dd" data-ng-change="check(month, dd, yyyy)" data-ng-options="d for d in DAYS" id="dd-picker" name="dd" class="form-control">' +
			'<option value="" selected="selected">DD</option>' +
			'</select>' +
			'</div>' +
			'</div>' +
			'<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">' +
			'<div class="select-picker-wrapper">' +
			'<select data-ng-model="yyyy" data-ng-change="check(month, dd, yyyy)" data-ng-options="y for y in YEARS" id="yyyy-picker" class="form-control" name="yyyy">' +
			'<option value="" selected="selected">YYYY</option>' +
			'</select>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'</div>' +
			'<div class="confirm-button">' +
			'<div class="row">' +
			'<button class="btn btn-danger" data-ng-click="ageHandler(month, dd, yyyy)">' +
			'continue' +
			'</button>' +
			'</div> ' +
			'</div>',
		link: function($scope, iElm, iAttrs, controller) {}
	};
}]);
/*
 *|-------------------------------------
 *| [controller][maincontroller]
 *|-------------------------------------
 */
App.controller('maincontroller', ['$scope', '$rootScope', '$route', function($scope, $rootScope, $route) {}]);
/*
 *|-------------------------------------
 *| [controller][uploadcontroller]
 *|-------------------------------------
 */
App.controller('uploadcontroller', ['$scope', '$uibModal', '$location', 'fileSharer', '$routeParams', function($scope, $uibModal, $location, fileSharer, $routeParams) {
	var identifier = $routeParams.identifier;
	$scope.open = function() {
		var uiBox = $uibModal.open({
			animation: true,
			size: 'md',
			backdrop: 'static',
			keyboard: false,
			templateUrl: 'upload.html',
			controller: function($scope, $uibModalInstance, $location) {
				$scope.close = function() {
					$uibModalInstance.dismiss('cancel');
				}
				$scope.uploadHandler = function() {
					var file = $scope.myVideo;
					$uibModalInstance.close(file);
				};
			},
		});

		uiBox.result.then(function(selectedFile) {
			/* console.log(selectedFile); */
			fileSharer.setFile(selectedFile);
			$location.path('/uploading/' + identifier);
		}, function() {
			$location.path('/complete-form');
		});
	};
	$scope.open();
}]);
/*
 *|-------------------------------------
 *| [factory:service][fileSharer]
 *| Holds a file in memory for upload
 *|-------------------------------------
 */
App.factory('fileSharer', ['$q', function($q) {
	var file;
	var f = {
		setFile: function(selectedFile) {
			file = selectedFile;
		},
		getFile: function() {
			return file;
		},
 		removeFile: function() {
 			file = null;
 		}
	}
	return f;
}]);
/*
 *|-------------------------------------
 *| [directive][fileModel]
 *|-------------------------------------
 */
App.directive('fileModel', ['$parse', function($parse) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var model = $parse(attrs.fileModel);
			var modelSetter = model.assign;

			element.bind('change', function(e) {
				var fullPath = element[0].value,
					fileExtension = "",
					proceed = false,
					fileSize = Math.round(((element[0].files[0].size / 1024) / 1024).toFixed(4));
				if (fileSize >= 151) {
					alert("File's too large. Limit size is 150MB");
					return;
				}

				if (fullPath) {
					var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
					var filename = fullPath.substring(startIndex),
						fileExtension = filename.substring(filename.lastIndexOf(".") + 1, filename.length);

					switch (fileExtension.toLowerCase()) {
						case "avi":
							proceed = true;
							break;
						case "mov":
							proceed = true;
							break;
						case "mp4":
							proceed = true;
							break;
						case "m4v":
							proceed = true;
							break;
						case "ogv":
							proceed = true;
							break;
						case "webm":
							proceed = true;
							break;
						case "mkv":
							proceed = true;
							break;
						case "3gp":
							proceed = true;
							break;
						case "flv":
							proceed = true;
							break;
						case "wmv":
							proceed = true;
							break;
						case "wma":
							proceed = true;
							break;
						case "asf":
							proceed = true;
							break;
						case "mpeg":
							proceed = true;
							break;
						default:
							alert("Warning! ." + fileExtension.toLowerCase() + " file extension is not supported.");
							return proceed;
							break;
					}
					document.getElementById("input-file-name").value = filename.replace("\\", "");
				}
				scope.$apply(function() {
					modelSetter(scope, element[0].files[0]);
				});
			});
		}
	};
}]);
/*
 *|----------------------------------------------
 *| [controller][uploadprogresscontroller][uplad]
 *|----------------------------------------------
 */
App.controller('uploadprogresscontroller', ['$scope', '$uibModal', '$location', '$routeParams', function($scope, $uibModal, $location, $routeParams) {
	var identifier = $routeParams.identifier;
	$scope.open = function() {
		var uiBox = $uibModal.open({
			animation: true,
			size: 'md',
			backdrop: 'static',
			keyboard: false,
			templateUrl: 'upload-progress.html',
			controller: function($scope, fileSharer, $timeout, $uibModalInstance, $location) {
				$scope.myVideoFile = fileSharer.getFile();
				if (!$scope.myVideoFile) {
					$location.path('/upload/' + identifier);
					return false;
				}
				$scope.xhr = new XMLHttpRequest();
				var fd = new FormData();
				$scope.xhr.open('POST', '/api/upload/' + identifier, true);
				fd.append('videoFile', $scope.myVideoFile);
				$scope.xhr.onload = function(e) {
					if($scope.xhr.readyState == 4 ) {
 						if ($scope.xhr.status == 200) {
 							$uibModalInstance.close('success');
 						} else {
 							$uibModalInstance.dismiss('cancel');
 						}
					}
				};
				/* Error handling */
				$scope.xhr.onerror = function(e) {
					$uibModalInstance.dismiss('cancel');
				}
				/* Listen to the upload progress. */
				$scope.xhr.upload.onprogress = function(e) {
					$timeout(function(){
						if (e.lengthComputable) {
							$scope.progressCounter = Math.round(e.loaded * 100 / e.total);
						}
					},0);
				};
				$scope.xhr.send(fd);
				$scope.cancel = function() {
					$timeout(function(){
						$scope.xhr.abort();
						$scope.myVideoFile = null;
 						fileSharer.removeFile();
						$location.path('/upload/' + identifier);
					},0);
				}
			}
		});
		uiBox.result.then(function(responseData) {
			$location.path('/' + responseData);
		}, function() {
			$location.path('/upload-error/' + identifier);
		});
	};
	$scope.open();
}]);
/*
 *|-------------------------------------
 *| [directive][progressIndicator]
 *|-------------------------------------
 */
App.directive('progressIndicator', ['$rootScope', '$timeout', '$location', function($rootScope, $timeout, $location) {
	return {
		restrict: 'A',
		template: '<div class="progressing-bar" data-ng-style="{\'width\': progressCounter + \'%\' }"></div>',
		link: function($scope, iElm, iAttrs, controller) {
			$scope.progressCounter = 0;
		}
	};
}]);
/*
 *|-------------------------------------
 *| [controller][uploaderrorcontroller]
 *|-------------------------------------
 */
App.controller('uploaderrorcontroller', ['$scope', '$uibModal', '$location', '$routeParams', function($scope, $uibModal, $location, $routeParams) {
	var identifier = $routeParams.identifier;
	$scope.open = function() {
		var uiBox = $uibModal.open({
			animation: true,
			size: 'md',
			backdrop: 'static',
			keyboard: false,
			templateUrl: 'upload-error.html',
			controller: function($scope, $uibModalInstance) {
				$scope.back = function() {
					$uibModalInstance.dismiss('cancel');
				}
			},
		});
		uiBox.result.then(function() {
			/*Nothing to see, just an error*/
		}, function() {
			$location.path('/upload/' + identifier);
		});
	};
	$scope.open();
}]);
/*
 *|---------------------------------------
 *| [controller][fielderrorcontroller]
 *|---------------------------------------
 */
App.controller('fielderrorcontroller', ['$scope', '$uibModal', '$location', function($scope, $uibModal, $location) {
	$scope.open = function() {
		var uiBox = $uibModal.open({
			animation: true,
			size: 'md',
			backdrop: 'static',
			keyboard: false,
			templateUrl: 'field-error.html',
			controller: function($scope, $uibModalInstance) {
				$scope.ok = function() {
					$uibModalInstance.dismiss('cancel');
				}
			},
		});
		uiBox.result.then(function() {},
			function() {
				// $location.path('/complete-form');
			})
	};
	$scope.open();
}]);
/*
 *|---------------------------------------
 *| [factory][form posting]
 *|---------------------------------------
 */
App.factory('VideoEntry', ['$http', function($http) {
	return {
		publish: function(data) {
			/* if(!videoid) throw new Error("No video id provided"); */
			return $http({
				method: 'PUT',
				/* [CHANGE] ABSOLUTE for RELATIVE */
				url: '/api/videos/',
				data: data,
				headers: {
					'Content-Type': 'application/json'
				}
			});
		}
	}

}]);
/*
 *|---------------------------------------
 *| [factory][states]
 *|---------------------------------------
 */
App.factory('USStates', ['$log', function($log) {
	var states = [
		{ name: "Alabama", abbreviation: "AL"}, {name: "Alaska", abbreviation: "AK"}, {name: "American Samoa", abbreviation: "AS"}, {name: "Arizona", abbreviation: "AZ"}, {name: "Arkansas", abbreviation: "AR"}, {name: "California", abbreviation: "CA"}, {name: "Colorado", abbreviation: "CO"}, {name: "Connecticut", abbreviation: "CT"}, {name: "Delaware", abbreviation: "DE"}, {name: "District Of Columbia", abbreviation: "DC"}, {name: "Federated States Of Micronesia", abbreviation: "FM"}, {name: "Florida", abbreviation: "FL"}, {name: "Georgia", abbreviation: "GA"}, {name: "Guam", abbreviation: "GU"}, {name: "Hawaii", abbreviation: "HI"}, {name: "Idaho", abbreviation: "ID"}, {name: "Illinois", abbreviation: "IL"}, {name: "Indiana", abbreviation: "IN"}, {name: "Iowa", abbreviation: "IA"}, {name: "Kansas", abbreviation: "KS"}, {name: "Kentucky", abbreviation: "KY"}, {name: "Louisiana", abbreviation: "LA"}, {name: "Maine", abbreviation: "ME"}, {name: "Marshall Islands", abbreviation: "MH"}, {name: "Maryland", abbreviation: "MD"}, {name: "Massachusetts", abbreviation: "MA"}, {name: "Michigan", abbreviation: "MI"}, {name: "Minnesota", abbreviation: "MN"}, {name: "Mississippi", abbreviation: "MS"}, {name: "Missouri", abbreviation: "MO"}, {name: "Montana", abbreviation: "MT"}, {name: "Nebraska", abbreviation: "NE"}, {name: "Nevada", abbreviation: "NV"}, {name: "New Hampshire", abbreviation: "NH"}, {name: "New Jersey", abbreviation: "NJ"}, {name: "New Mexico", abbreviation: "NM"}, {name: "New York", abbreviation: "NY"}, {name: "North Carolina", abbreviation: "NC"}, {name: "North Dakota", abbreviation: "ND"}, {name: "Northern Mariana Islands", abbreviation: "MP"}, {name: "Ohio", abbreviation: "OH"}, {name: "Oklahoma", abbreviation: "OK"}, {name: "Oregon", abbreviation: "OR"}, {name: "Palau", abbreviation: "PW"}, {name: "Pennsylvania", abbreviation: "PA"}, {name: "Puerto Rico", abbreviation: "PR"}, {name: "Rhode Island", abbreviation: "RI"}, {name: "South Carolina", abbreviation: "SC"}, {name: "South Dakota", abbreviation: "SD"}, {name: "Tennessee", abbreviation: "TN"}, {name: "Texas", abbreviation: "TX"}, {name: "Utah", abbreviation: "UT"}, {name: "Vermont", abbreviation: "VT"}, {name: "Virgin Islands", abbreviation: "VI"}, {name: "Virginia", abbreviation: "VA"}, {name: "Washington", abbreviation: "WA"}, {name: "West Virginia", abbreviation: "WV"}, {name: "Wisconsin", abbreviation: "WI"}, {name: "Wyoming", abbreviation: "WY"}
	];
	return states;
}]);
/*
 *|---------------------------------------
 *| [filter][escapeHtml]
 *|---------------------------------------
 */
App.filter('escapeHtml', function() {

	var entityMap = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': '&quot;',
		"'": '&#39;',
		/* "/": '&#x2F;' */
	};

	return function(str) {
		return String(str).replace(/[&<>"']/g, function(s) {
			return entityMap[s];
		});
	}
});
/*
 *|---------------------------------------
 *| [directive][onlineDisclaimer]
 *|---------------------------------------
 */
App.directive('onlineDisclaimer', ['$rootScope', '$location', 'AgeHandler', function($rootScope, $location, AH) {
	return {
		restrict: 'A',
		link: function($scope, iElm, iAttrs, controller) {
			$rootScope.$on('$locationChangeStart', function() {
				var cookie = AH.getCookie();
				if( cookie&&cookie>=13 ) {
					iElm.css('display', 'inline');
				} else {
					iElm.css('display', 'none');
				}
			});
		}
	};
}]);
/*
 *|---------------------------------------
 *| [directive][disneyPlayer]
 *|---------------------------------------
 */
App.directive('disneyPlayer', ['$log', '$window', function($log, $window) {
	// Runs during compile
	return {
		restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		template: '<div id="player"></div>',
		scope: {
			width: '@',
			height: '@',
			videoid: '@'
		},
		link: function($scope, iElm, iAttrs, controller) {
			var tag = document.createElement('script');
			tag.src = "//www.youtube.com/player_api";

			var thisTag = document.getElementsByTagName('script')[0];
			thisTag.parentNode.insertBefore(tag, thisTag);

			var player,

				playerVars = {
					height: $scope.height,
					width: $scope.width,
					videoId: $scope.videoid,
					events: {
						'onReady': function(event) {
							event.target.playVideo();
						},
						'onStateChange': function(event) {
							if (event.data === 0) {
								angular.element(document.getElementById('btnup')).addClass("done");
							}
						}
					}
				}
			$window.onYouTubePlayerAPIReady = function() {
				player = new YT.Player(iElm.children()[0], playerVars);
			}
		}
	};
}]);
/*
 *|-------------------------------------
 *| [factory:service][formVals]
 *| Holds form vals in memory
 *|-------------------------------------
 */
App.factory('formVals', ['$q', function($q) {
	var vals;
	var f = {
		set: function(obj) {
			vals = obj;
		},
		get: function() {
			return vals;
		},
		remove: function() {
			vals = null;
		}
	}
	return f;
}]);
/*
 *|---------------------------------------
 *| [directive][windowCopy]
 *|---------------------------------------
 */
App.directive('windowCopy', ['$rootScope', '$uibModal', function($rootScope, $uibModal) {
	return {
		restrict: 'A',
		link: function($scope, iElm, iAttrs, controller) {
			$scope.open = function(s) {
				var mod = $uibModal.open({
					animation: true,
					size: 'md',
					backdrop: 'static',
					keyboard: true,
					templateUrl: s + '.html',
					controller: function($scope, $uibModalInstance) {
						$scope.close = function() {
							$uibModalInstance.dismiss('cancel');
						}
					}
				});
			};
		}
	};

}]);

/* Function when the main video its done */
function vidEnd() {
	angular.element(document.getElementById('btnup')).addClass("done");
}
