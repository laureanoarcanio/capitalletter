/*	Capital Letter jQuery Plugin - Released under MIT License
 *	By Laureano Arcanio
 *	@laureanoarcanio - larcanio@gmail.com
*/

(function ( $, undefined ) {
	$.fn.CapitalLetter = function ( config ) {
		config = config || {};
		var css = {
			'float': 'left',
			'padding': 0,
			'margin': '0 0.1em 0 0',
			'color': '#CC3300'
		};
		// overwrite default css with config ones
		$.extend(css, config);
		this.each(function() {
			var 
				text = $(this).html(),
				first_letter = text.substr(0,1),
				$capitalLetter = $('<span class="capital-letter">' + first_letter + '</span>');
			// Chrome Patch - 
			if ($(this).css('line-height') == 'normal') {
				$(this).css('line-height', '119%')
			}
			// Check for Characters only
			if ( /[a-zA-Z]/.test(first_letter) ) {
				// Calculates sizes
				var fontSize = parseFloat( $(this).css('line-height') ) + ( parseFloat($(this).css('font-size') )*1.5);	
				var capitalLineHeight = parseInt( parseInt( $(this).css('line-height') )*2 ) + 'px';
				// Set calculates line-height and font-size
				$capitalLetter.css($.extend({
					'line-height': capitalLineHeight,
					'font-size': fontSize + "px"
				}, css));
				$(this)
					.html($capitalLetter)
					.append(text.slice(1));  
			}
		});
		return this;
	}
})( jQuery );