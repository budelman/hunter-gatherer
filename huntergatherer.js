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
 *	First: Set EverTrue specific .scrollDepth tracking settings
 */
<script type="text/javascript">

	$(function() {

		$.scrollDepth ({

			minHeight: 2000, // Only track for documents taller than 2000px | Default: 0 (all pages get tracked)

			elements: [], // Track DOM elements like: ['#comments', 'footer'] | Default: [] (do not track specific elements)

			percentage: true, // Don't track specific depth percentage | Default: true, (track deafult of 25, 50, 75, 100)

		});

	});

</script>

/*!
 *	Second: Track All Links and send different tracking based on the type of link.
 */
<script type="text/javascript">

	$(document).ready(function(){

		$('a').click(function(){

			if $(this).hasClass ('hero-video-link') { // has a video class?

				_gaq.push(['_trackEvent', 'Videos', 'Play', $(this).attr ('href') ]); // Send video tracking

				}

			else if $(this).hasClass ('cta_button') { // has a button class?

				_gaq.push(['_trackEvent', 'Buttons', 'Click', $(this).attr('href')]); // Send button tracking

				}

			else { // is a link?

				_gaq.push(['_trackEvent', 'Links', 'Click', $(this).attr('href')]); // Send link tracking

				} // End if

		}); // End click function

	}); // End ready function

</script>
