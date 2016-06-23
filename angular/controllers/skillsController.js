(function(){
var app = angular.module('app.skillStars', []);

app.controller('SkillsController', function(){
    this.tableCells = 2;

    this.items = [
    {
        title: 'Oliopohjaiset kielet (C#)',
        progress: 4
    }, {
        title: 'HTML5 / CSS3',
        progress: 3.5
    }, {
        title: 'Tietokannat (MySQL)',
        progress: 3.5
    }, {
        title: 'Graafinen suunnittelu',
        progress: 2.5
    }];

    this.tableRows = this.items.length / this.tableCells;
    this.imageSrc = ["img/star.png", "img/halfStar.png"];
});
})();