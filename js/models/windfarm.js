WindfarmApp.Windfarm = DS.Model.extend({
  location: DS.attr('string'),
  status: DS.attr('string'),
  windClass: DS.attr('int'),
  output: DS.attr('int'),
  populationDensity: DS.attr('int'),
  numEndangeredSpecies: DS.attr('int'),
});

/* fixture data */
WindfarmApp.Windfarm.FIXTURES = [
 {
   id: 1,
   location: 'Warren County, NY',
   status: 'opposed',
   windClass: 3,
   output: 200,
   populationDensity: 40,
   numEndangeredSpecies: 5,
 },
 {
   id: 2,
   location: 'somewhere',
   status: 'active',
   windClass: 4,
   output: 100,
   populationDensity: 60,
   numEndangeredSpecies: 3,
 },
 {
   id: 3,
   location: 'somewhere',
   status: 'opposed',
   windClass: 2,
   output: 80,
   populationDensity: 70,
   numEndangeredSpecies: 2,
 }
];