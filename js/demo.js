/*window.onload = function() {
	console.log("hey!");
	$('.results td').on("click", function(event) {
		$(this).parent().toggleClass('selected');
		console.log("CLICK");
	} );
};*/

 $(function(){ //incase you missed the doc.ready
   $('.results tbody').on('click','td', function () {
    console.log("i clicked on a row");
   });
});


