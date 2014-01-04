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
 *	Second: Track All Links and send different tracking based on the type of link.
 */
<script type="text/javascript">
	$(document).ready(function(){
		$('a').click(function(){
			if $(this).hasClass('hero-video-link'){ // identify the links with video classes
			_gaq.push(['_trackEvent', 'Videos', 'Play', $(this).attr('href')]); // Send video tracking
			}else if $(this).hasClass('cta_button'){ // identify the links with button classes
			_gaq.push(['_trackEvent', 'Buttons', 'Click', $(this).attr('href')]); // Send button tracking
			}else
			_gaq.push(['_trackEvent', 'Links', 'Click', $(this).attr('href')]); // Send link tracking
			}
		});
	});
</script>
