(function(){
var app = angular.module('app.controllers', []);
app.controller('TimelineController', function(){
	this.events = [
	{
    badgeClass: 'success',
    badgeTitle: '2016',
    title: 'Valmistuin insinööriksi!',
    content: 'Todistus löytyy klikkaamalla vuosilukua',
    side: 'left',
    hideMobile: false,
    badgeLink: 'https://www.dropbox.com/s/yjndftr1jsjildb/393.pdf?dl=0'
  }, {
    badgeClass: 'info',
    badgeTitle: '2016',
    title: 'Ohjaaja',
    content: 'Diginuoret Ry, osana opinnäytetyötä toimin ohjaajana peliohjelmoinnista kiinnostuneille nuorille (5kk)',
    side: 'left',
    hideMobile: false,
    badgeLink: ''
  }, {
    badgeClass: 'info',
    badgeTitle: '2015',
    title: 'Ohjelmoija',
    content: 'Enfo Zender, laskujenvälityspalvelussa sovelluskehittäjänä. Työharjoittelu (2kk)',
    side: 'right',
    hideMobile: false,
    badgeLink: 'https://www.dropbox.com/s/7no9438jp91qc72/enfo.pdf?dl=0'
  }, {
    badgeClass: 'info',
    badgeTitle: '2014',
    title: 'Web-ohjelmoija',
    content: 'Hurja Solutions, HTML5, PHP, MySQL. Osana kehittämässä asiakkaiden verkkosivuja. (3kk)',
    side: 'left',
    hideMobile: false,
    badgeLink: 'https://www.dropbox.com/s/f4q1drvnath6dzn/hurja.pdf?dl=0'
  }, {
    badgeClass: 'info',
    badgeTitle: '2014',
    title: 'Projekti, Suomen ortodoksinen kirkkomuseo (n.4kk)',
    content: 'Kirjan kääntäminen tablet-laitteelle. Projekti tuli osaksi näyttelyä',
    side: 'left',
    hideMobile: false,
    badgeLink: 'https://www.dropbox.com/s/ho7gue3cymmvt10/riisa.pdf?dl=0'
  }, {
    badgeClass: 'success',
    badgeTitle: '2012',
    title: 'Takaisin kouluun',
    content: 'Savonia-ammattikorkeakoulu, tietotekniikan insinööri',
    side: 'right',
    hideMobile: false,
    badgeLink: ''
  }, {
    badgeClass: 'success',
    badgeTitle: '2011',
    title: 'Datanomiksi valmistuminen!',
    content: 'Stipendejä menestyksestä!',
    side: 'right',
    hideMobile: false,
    badgeLink: 'https://www.dropbox.com/s/5a466qymkg40lig/datamoni.pdf?dl=0'
  }, {
    badgeClass: 'info',
    badgeTitle: '2011',
    title: 'Ylläpitäjänä Englannissa',
    content: 'BJA Refrigeration Consulting Engineers nimisessä firmassa olin palvelimen ylläpitäjänä',
    side: 'right',
    hideMobile: false,
    badgeLink: ''
  }, {
    badgeClass: 'success',
    badgeTitle: '2009',
    title: 'Datanomin opinnot alkavat',
    content: '',
    side: 'left',
    hideMobile: false,
    badgeLink: ''
  }];
});
})();