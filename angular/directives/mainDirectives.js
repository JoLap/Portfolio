(function(){
var app = angular.module('app.directives', []);

app.directive('navTab', function(){
	return{
		restrict: 'E',
		templateUrl: 'angular/templates/navTab.html'
	};
});

app.directive('aboutPage', function(){
	return {
		restrict: 'E',
		templateUrl: 'angular/templates/aboutPage.html'
	};
});
app.directive('skillsTable', function(){
	return{
		restrict: 'E',
		templateUrl: 'angular/templates/progressElement.html'
	};
});
app.directive('resumePage', function(){
	return {
		restrict: 'E',
		templateUrl: 'angular/templates/resumePage.html'
	};
});

app.directive('frontPage', function(){
	return {
		restrict: 'E',
		templateUrl: 'angular/templates/frontPage.html'
	};
});

app.directive('contactPage', function(){
	return {
		restrict: 'E',
		templateUrl: 'angular/templates/contactPage.html'
	};
});
})();