var config = {
	global: {
		border: '#888',
		intro: {
			bg: "https://joystick.cachefly.net/webmd/template/728x90/backup.jpg",
			exit: "http://swiffer.com/en-us/cleaning-tips/5-ways-swiffer-helps-get-rid-of-dust-and-allergens"
		},
		header: {
 			bg: "https://joystick.cachefly.net/webmd/template/728x90/i_header.jpg",
 			bg2: "https://joystick.cachefly.net/webmd/template/728x90/i_header2.jpg",
 			exit: "http://swiffer.com/en-us/cleaning-tips/5-ways-swiffer-helps-get-rid-of-dust-and-allergens"
 		},
 		tab: {
 			//bg: "https://joystick.cachefly.net/webmd/template/728x90/i_tab_bg.jpg",
 			close_color: "#666"
 		}
	},
	module: [
		{
			file: 'module_video_html.js',
			mod_name: 'video',
			tab_class: 'video',
			active: true,
			title: "Keep Allergens* Out of Your Home",
			description: "See how the Tobin family combats dust, pollen, and dog hair for a clean home from top to bottom.",
			learn: "https://joystick.cachefly.net/webmd/template/728x90/i_video_learn.png",
			exit: 'http://swiffer.com/en-us',
			misc: "*VS. Feather Dusters.<br/>**Common inanimate allergens from pet dander and dust mite matter.",
			bg: {
				big: "https://joystick.cachefly.net/webmd/template/728x90/i_video_poster_small.jpg",
				small: "https://joystick.cachefly.net/webmd/template/728x90/i_video_poster_small.jpg"
			},
			files: [
				"https://joystick.cachefly.net/resources/video/joystick2009.mp4"
			]
		},
		{
			file: 'module_gallery.js',
			mod_name: 'slideshow',
			tab_class: 'gallery',
			bg: "https://joystick.cachefly.net/webmd/template/728x90/i_gallery_poster.jpg",
			btn_color: '#004a99',
			photos: [
				[
					"https://joystick.cachefly.net/webmd/template/728x90/i_gallery_slide1.jpg",
					"Tips to Fight Dust &amp; Allergens*",
					"Several common allergens* like pet dander, dust mite matter, and pollen are found right inside your home. Learn 5 ways Swiffer can help you live dust and allergen* free.",
					"*VS. Feather Dusters.<br/>**Common inanimate allergens from pet dander and dust mite matter."
				],
				[
					"https://joystick.cachefly.net/webmd/template/728x90/i_gallery_slide2.jpg",
					"Tips to Fight Dust &amp; Allergens*",
					"<strong>Removing Dust:</strong> The thousands of dirt-locking fibers on Swiffer 360&deg; Dusters ensure that dust isn't stirred around; it's picked up and locked in for a truly exceptional clean.",
					"*VS. Feather Dusters.<br/>**Common inanimate allergens from pet dander and dust mite matter."
				],
				[
					"https://joystick.cachefly.net/webmd/template/728x90/i_gallery_slide3.jpg",
					"Tips to Fight Dust &amp; Allergens*",
					"<strong>Pet Hair & Dander:</strong> When pets shed, they leave behind an excess of hair and dander. Use Swiffer Sweeper dry cloths, which lift pet dander, hair, dirt, and dust from the surface of your floors.",
					"*VS. Feather Dusters.<br/>**Common inanimate allergens from pet dander and dust mite matter."
				],
				[
					"https://joystick.cachefly.net/webmd/template/728x90/i_gallery_slide4.jpg",
					"Tips to Fight Dust &amp; Allergens*",
					"<strong>Hard-to-Reach Places:</strong> When's the last time you looked at the top of your ceiling fan? The Swiffer 360&deg; Dusters Extender stretches up to three feet, allowing you to clean behind, above, around, or below any obstacle.",
					"*VS. Feather Dusters.<br/>**Common inanimate allergens from pet dander and dust mite matter."
				],
				[
					"https://joystick.cachefly.net/webmd/template/728x90/i_gallery_slide5.jpg",
					"Tips to Fight Dust &amp; Allergens*",
					"<strong>Pollen Removal:</strong> Avoiding pollen is almost impossible. Swiffer 360&deg; Dusters and Swiffer Sweeper dry cloths, can help by trapping and locking pollen so you can more easily remove it from the house.",
					"*VS. Feather Dusters.<br/>**Common inanimate allergens from pet dander and dust mite matter."
				]
			]
		},
		{
			file: 'module_twitter.js',
			mod_name: 'twitter',
			tab_class: 'twitter',
			id: 'perlebioscience',
			name: 'Perle',
			handle: '@PerleBioscience',
			feed: 'https://feeds.joystickinteractive.com/perlebioscience',
			bg: {
				icon: 'https://joystick.cachefly.net/webmd/template/728x90/i_twitter_icon.png',
				big: 'https://joystick.cachefly.net/webmd/template/728x90/i_twitter_bg.jpg',
				small: 'https://joystick.cachefly.net/webmd/template/728x90/i_twitter_poster.jpg'
			}
		}
	]
};