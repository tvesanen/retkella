// Module to show the map 
angular.module('ngMap').controller('MyCtrl', function(NgMap) {
  var vm = this;
  NgMap.getMap().then(function(map) {
    console.log('map', map);
    vm.map = map;
  });
   vm.trailVisible = false;
   
   vm.clicked = function() {
//    alert('Clicked a link inside infoWindow');
	vm.trailDescription = vm.trail.description;
	vm.trailVisible = true;
  };

  
  vm.trails = [
		{id:'foo', name:"Puikkari", position:[61.46,23.74], depth: 3},
		{id:'three', name:"Laipanmaa", position:[61.21,25.29], depth: 2},
		{id: 'four', name:"Siikaneva", position:[61.32,22.93], depth: 1}
		];

	
	vm.trails[0].description = [
		{topic:"Otsikko1", img:"images/Puikkari/Kuva1.jpg", description:"Vähälumisena uutena vuotena voi lähteä vaikka metsäkävelylle."},
		{topic:"Otsikko2", img:"images/Puikkari/Kuva2.jpg", description:"Pakkasta oli juuri sopivat 3 astetta ja ilma aurinkoinen."},
		{topic:"Otsikko3", img:"images/Puikkari/Kuva3.jpg", description:"Maisema pelkistyy valkoiseen lumeen, harmaaseen kallioon vihreisiin havupuihin ja ruskeisiin puunrunkoihin."},
		{topic:"Otsikko4", img:"images/Puikkari/Kuva4.jpg", description:"Viime päivien myrskyt eivät olleet aiheuttaneet tuhoja metsän keskellä. Sen sijaan aukkojen reunoissa puita oli kaatunut suuria määriä."}
		];
		
		
	vm.trails[1].description = [
		{topic:"Rajalan metsäkämppä", img:"images/Laipanmaa/Rajala.jpg", description:"Lähtöpisteenä toimi Rajalan metsäkämppä, johon on noin 11 km tieltä 325 (risteys on noin 6 km Sahalahdesta Kuhmalahteen päin, risteyksessä opastetaan Laipanmaalle).Siellä on parkkipaikka, joka oli aivan täynnä (sinne mahtuu kuusi autoa). Samaan aikaan kanssani lähtöpaikalle tuli isä noin 7-vuotiaan poikansa kanssa. He lähtivät kulkemaan reissua vastakkaiseen suuntaan ja kohtasimme Elamonjärven laavulla. Reipas poika, kun jaksaa noin pitkän reissun kulkea melko vaikeakulkuista reittiä."},
		{topic:"Ruokojärvi", img:"images/Laipanmaa/Ruokojärvi.jpg", description:"Tälle pikkujärvelle on vain noin kilometrin matka Rajalan kämpältä. Järven itäpuolella on nuotiopaikka ja opastaulu. Valokuvaan on vaikea vangita tunnelmaa, joka näistä luonnon keskellä olevista suojärvistä välittyy."},
		{topic:"Iso-Laippa", img:"images/Laipanmaa/Kiuas.jpg", description:"Nuotiopaikalla oli ilmeisesti saunottu telttasaunassa, paikalla olivat kiuaskivet, lauteet ja telttakankaan pidikkeet."},
		{topic:"Elamonjärvi", img:"images/Laipanmaa/Elamonjärvi.jpg", description:"Alueen suurin järvi, hieno laavu ja nuotiopaikka. Järven rannassa on jopa muutama mökki, joten ei niin ei niin erämaatunnelmaa. Lähtöpaikallani tapaamani kaksikko oli päässyt jo makkaranpaistoon."},
		{topic:"Lamminsuo", img:"images/Laipanmaa/Suolampi.jpg", description:"Tämä upea suomaisema huipentui mitä kauneimpaan suolampeen."}
		];
		
	vm.trails[2].description = [
		{topic:"Suomaisema", img:"images/Siikaneva/suo.jpg", description:"Siikanevalla kulkija voi aistia laajan suoalueen rauhan ja eloisuuden samaan aikaan. Siikaneva onkin vaikuttava päiväretkikohde etenkin lumettomaan aikaan. Pääosin pitkostettu kierros esittelee alueen monipuolista luontoa ja maisemia. Laajat suokentät levittäytyvät kulkijan ympärille, kunnes aukeus vaihtuu välillä vanhan metsän saarekkeiden hämyiseen tunnelmaan."},
		{topic:"Nuotiopaikka", img:"images/Siikaneva/Retkella.jpg", description:"Reitin puolivälissä on kalliolla nuotiopaikka, jossa on hyvä pysähtyä syömään eväitä ja ihailemaan maisemia"}
		];	
	
	
	
  vm.showDetail = function(e, trail) {
    vm.trail = trail;
    vm.map.showInfoWindow('foo-iw', trail.id);

  };

  vm.hideDetail = function() {
    vm.map.hideInfoWindow('foo-iw');
  };
    
  vm.image = {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      size: [20, 32],
      origin: [0,0],
      anchor: [0, 32]
    };
	
   vm.shape = {
      coords: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
    };
});




