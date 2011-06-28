/*
 * jQuery DoublepostPreventer 1.0
 * - Disabling submit buttons after submit
 * @requires jQuery v1.4 or later
 *
 * Copyright (c) 2011 Niklas Hambuechen (nh2.me)
 * Licensed under the MIT license.
 *
 * $Date: 2011/06/28$
 */

/*
 * Usage example:
 * $("form").doublepostpreventer();
 */

(function($){

	$.fn.doublepostpreventer = function(){

		// Disable submit buttons after clicking to prevent double submissions
		// Disable them only if no other submit event handler is registered

		return this.find('form').andSelf().filter('form').submit(function() {
			var $form = $(this);
			var all_submit_handlers = $form.data('events').submit;
			// check if only this event handler we're in now is registered <-> only one handler is registered
			if (all_submit_handlers !== undefined && all_submit_handlers.length == 1) {
				$form.find('input[type=submit]').attr('disabled', 'disabled');
				console.log("disabling");
			}
		});

	};
})(jQuery);
