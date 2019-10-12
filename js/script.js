$(document).ready(function() {

	$('#box').click('click touchstart', function() {
	$( this ).css( "width", "20%" );
	
	});

var s = skrollr.init({
		edgeStrategy: 'set',
		easing: {
			WTF: Math.random,
			inverted: function(p) {
				return 1-p;
			}
		}
	});



});

