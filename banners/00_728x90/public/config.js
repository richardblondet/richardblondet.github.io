var config = {
	global: {
		border: '#888',
		intro: {
			bg: "backup.jpg",
			exit: "http://www.littleremedies.com/coupons/"
		},
		header: {
 			bg: "i_header.jpg",
 			bg2: "i_header.jpg",
 			exit: "http://www.littleremedies.com/coupons/"
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
			title: "A look inside",
			description: "Little Remedies &reg; is formulated with the ingredients that your little ones need. And nothing they don't. ",
			learn: "video_watchmore.png?test=testing",
			exit: 'http://www.littleremedies.com/coupons/',
			misc: "",
			bg: {
				big: "video_poster_small.jpg",
				small: "video_poster_small.jpg"
			},
			files: [
				"http://www.webmdmobilevideo.com.edgesuite.net/media/cons_video_assets/sponsor/2015/content-showcase/A_Look_Inside_1708_30_v4_422-master_edited.mp4"
			]
		},
		{
			file: 'module_gallery.js',
			mod_name: 'slideshow',
			tab_class: 'gallery',
			bg: "gallery_poster.jpg",
			btn_color: '#004a99',
			photos: [
				[
					"slide1.jpg",
					"Soothing Care for Them. And Peace of Mind for You.",
					"Little Remedies &reg; products contain no artificial flavors, artificial colors or alcohol. We believe \"less is more\" and formulate our line of products with only the ingredients they need to feel better.",
					""
				],
				[
					"slide2.jpg",
					"Little Remedies &reg; Advanced Colic Relief Drops",
					"Little Remedies &reg; Advanced Colic Relief Drops is safe and gentle and relieves colic and stomach discomfort due to gas and hiccups. The unique chamomile herbal blend of ingredients has been shown to reduce crying by 60%.",
					"**These statements have not been evaluated by the Food and Drug Administration (FDA). This product is not intended to diagnose, treat, cure or prevent any disease. Chamomile herbal blend shown to reduce crying by 60% in as little as 1 week."
				],
				[
					"slide3.jpg",
					"Little Remedies &reg; Gas Relief Drops",
					"Safe, gentle remedy quickly relieves tummy pain from excess gas from food or swallowing of air.",
					""
				],
				[
					"slide4.jpg",
					"Little Remedies &reg; Gripe Water",
					"Non-medicated, effective relief for your baby's upset stomach due to discomfort from hiccups and colic.",
					"**These statements have not been evaluated by the Food and Drug Administration (FDA). This product is not intended to diagnose, treat, cure or prevent any disease."
				],
				[
					"slide5.jpg",
					"Other Helpful Hints",
					"To help prevent colicky symptoms, burp you baby during and after feeding to reduce air build up. <br><br> For more tips, visit <a class='anchor-exit' target='_blank' href='http://www.littleremedies.com/natural-remedies/stomach-gas-remedies/gripe-water/littleremedies.com'>littleremedies.com</a>",
					""
				]
			]
		},
		// {
		// 	file: 'module_twitter.js',
		// 	mod_name: 'twitter',
		// 	tab_class: 'twitter',
		// 	id: 'perlebioscience',
		// 	name: 'Perle',
		// 	handle: '@PerleBioscience',
		// 	feed: 'https://feeds.joystickinteractive.com/perlebioscience',
		// 	bg: {
		// 		icon: 'https://joystick.cachefly.net/webmd/template/728x90/i_twitter_icon.png',
		// 		big: 'https://joystick.cachefly.net/webmd/template/728x90/i_twitter_bg.jpg',
		// 		small: 'https://joystick.cachefly.net/webmd/template/728x90/i_twitter_poster.jpg'
		// 	}
		// }
		{
			file: 'module_facebook.js',
			mod_name: 'facebook',
			tab_class: 'facebook',
			bg: "fb_poster.jpg",
			exit: "https://www.facebook.com/LittleRemedies?fref=ts"
		},
	]
};

