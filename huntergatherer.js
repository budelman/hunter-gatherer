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
 *	Second: Track All LINKS
 */
<script type="text/javascript">
	$(document).ready(function(){
		$('a').click(function(){
			_gaq.push(['_trackEvent', 'Links', 'Click', $(this).attr('href')]);
		});
	});
</script>

/*!
 *	Third: Track all BUTTONS
 */
<script type="text/javascript">
	$(document).ready(function(){
		$('a.cta_button').click(function(){ // select all links with the class '.cta_button'
			_gaq.push(['_trackEvent', 'Buttons', 'Click', $(this).attr('href')]);
		});
	});
</script>

/*!
 *	Fourth: Track all VIDEO PLAYS
 */
 <script type="text/javascript">
	$(document).ready(function(){
		$('a.hero-video-link').click(function(){ // select all links with the class '.hero-video-link'
			_gaq.push(['_trackEvent', 'Videos', 'Play', $(this).attr('href')]);
		});
	});
</script>

/*!
 *	Note: Create an if/then statement for all links so that I can sort how I send analytics based on the presence of a type of class, ID, or Elements.
 *			For instance, add: if $(this).hasClass('hero-video-link;) {} else {}
 */
