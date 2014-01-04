/*!
 * Evertrue Event Tracking to feed Google Analytics
 * scrollDepth: Copyright (c) 2013 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 * GA Event Trackers: Mat Budelman (@designedbymat)
 */

// NOTE:
// Requires jQuery: <script src="jquery-1.10.2.min.js"></script>
// Requires scrollDepth Script: <script src="jquery.scrolldepth.js"></script>

/*!
 *	First: EverTrue Scroll Tracking Settings
 */
<script>
	$(function() {
	  $.scrollDepth({
	    minHeight: 2000, // Only track for documents taller than 2000px | Default: 0
	    elements: ['#comments', 'footer'] // Track DOM elements | Default: []
	    percentage: false, // Don't track depth percentage | Default: true});
	});
</script>

/*!
 *	Second: Event Tracking for Buttons
 */
<script type="text/javascript">
	$(document).ready(function(){
		$('a.cta_button').click(function(){
			_gaq.push(['_trackEvent', 'Link', 'Click', $(this).attr('href')]);
		});
	});
</script>

/*!
 *	Third: Event Tracking for Links
 */
 <script type="text/javascript">
	$(document).ready(function(){
		$('a.cta_button').click(function(){
			_gaq.push(['_trackEvent', 'Link', 'Click', $(this).attr('href')]);
		});
	});
</script>
