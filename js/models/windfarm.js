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
   location: 'Tucumcari, NM',
   elevation: 1564,
   capacityFactor: 0.49,
   megawatts: 171.8,
   status: 'active',
   windClass: 4,
   output: 100,
   populationDensity: 60,
   numEndangeredSpecies: 3,
 },
 {
   id: 3,
   location: 'Alzada, MT',
   elevation: 1161,
   capacityFactor: 0.487,
   megawatts: 121,
   status: 'proposed',
   windClass: 2,
   output: 80,
   populationDensity: 70,
   numEndangeredSpecies: 2,
 },
 {
 	id: 4,
 	location: 'Killdeer, ND',
 	elevation: 984,
 	capacityFactor: 0.48,
 	megawatts: 202.3,
 	status: 'proposed',
 	windClass: 4,
 	output: 42,
 	populationDensity: 15,
 	numEndangeredSpecies: 3,
 },
  {
   id: 5,
   location: 'Warren County, NY',
   status: 'opposed',
   windClass: 3,
   output: 200,
   populationDensity: 40,
   numEndangeredSpecies: 5,
 },
 {
   id: 6,
   location: 'Tucumcari, NM',
   elevation: 1564,
   capacityFactor: 0.49,
   megawatts: 171.8,
   status: 'active',
   windClass: 4,
   output: 100,
   populationDensity: 60,
   numEndangeredSpecies: 3,
 },
 {
   id: 7,
   location: 'Alzada, MT',
   elevation: 1161,
   capacityFactor: 0.487,
   megawatts: 121,
   status: 'proposed',
   windClass: 2,
   output: 80,
   populationDensity: 70,
   numEndangeredSpecies: 2,
 },
 {
  id: 8,
  location: 'Killdeer, ND',
  elevation: 984,
  capacityFactor: 0.48,
  megawatts: 202.3,
  status: 'proposed',
  windClass: 4,
  output: 42,
  populationDensity: 15,
  numEndangeredSpecies: 3,
 },
  {
   id: 9,
   location: 'Warren County, NY',
   status: 'opposed',
   windClass: 3,
   output: 200,
   populationDensity: 40,
   numEndangeredSpecies: 5,
 },
 {
   id: 10,
   location: 'Tucumcari, NM',
   elevation: 1564,
   capacityFactor: 0.49,
   megawatts: 171.8,
   status: 'active',
   windClass: 4,
   output: 100,
   populationDensity: 60,
   numEndangeredSpecies: 3,
 },
 {
   id: 11,
   location: 'Alzada, MT',
   elevation: 1161,
   capacityFactor: 0.487,
   megawatts: 121,
   status: 'proposed',
   windClass: 2,
   output: 80,
   populationDensity: 70,
   numEndangeredSpecies: 2,
 },
 {
  id: 12,
  location: 'Killdeer, ND',
  elevation: 984,
  capacityFactor: 0.48,
  megawatts: 202.3,
  status: 'proposed',
  windClass: 4,
  output: 42,
  populationDensity: 15,
  numEndangeredSpecies: 3,
 },
  {
   id: 13,
   location: 'Warren County, NY',
   status: 'opposed',
   windClass: 3,
   output: 200,
   populationDensity: 40,
   numEndangeredSpecies: 5,
 },
 {
   id: 14,
   location: 'Tucumcari, NM',
   elevation: 1564,
   capacityFactor: 0.49,
   megawatts: 171.8,
   status: 'active',
   windClass: 4,
   output: 100,
   populationDensity: 60,
   numEndangeredSpecies: 3,
 },
 {
   id: 15,
   location: 'Alzada, MT',
   elevation: 1161,
   capacityFactor: 0.487,
   megawatts: 121,
   status: 'proposed',
   windClass: 2,
   output: 80,
   populationDensity: 70,
   numEndangeredSpecies: 2,
 },
 {
  id: 16,
  location: 'Killdeer, ND',
  elevation: 984,
  capacityFactor: 0.48,
  megawatts: 202.3,
  status: 'proposed',
  windClass: 4,
  output: 42,
  populationDensity: 15,
  numEndangeredSpecies: 3,
 }

];