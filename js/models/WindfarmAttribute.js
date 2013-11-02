App.WindfarmAttribute = DS.Model.extend({
	name: DS.attr('string'),
	info: DS.attr('string'),
	type: DS.attr('string'),
});

App.Windfarm.FIXTURES = [
 {
 	id: 0,
 	name: 'id',
 },
 {
 	id: 1,
 	name: 'status',
 },
 {
 	id: 2,
 	name: 'location',
 },
 {
 	id: 3,
 	name: 'wind class',
 },
 {
 	id: 4,
 	name: 'megawatts',
 },
 {
 	id: 5,
 	name: 'population density',
 },
 {
 	id: 6,
 	name: 'endangered species',
 }
];