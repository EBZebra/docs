var menuStrcture = [
	{
		title: 'Help',
		icon: 'fa fa-reorder',
		items: [
			{
				name: 'About The EMDK',
				link: '#guide-about',
			},		
			{
				name: 'Getting Started',
				icon: 'fa fa-ticket',
				link: '#',
				items: [
					{
						title: 'Getting Started',
						icon: 'fa fa-book',
						items: [
							{
								name: 'Setup The EMDK',
								link: '#guide-setup',
							},
							{
								name: 'Try the Sample',
								link: '#guide-sample-sampledatacaptureprofile',
							},
							{
								name: 'Build Hello EMDK',
								link: '#guide-tutorial-tutdatacaptureprofile',
							},
							{
								name: 'Understand Profile Manager',
								link: '#guide-profiles-usingwizard',
							}
						]
					}
				]
			},
			{
				name: 'Tutorials',
				icon: 'fa fa-terminal',
				link: '#',
				items: [
					{
						title: 'Tutorials',
						icon: 'fa fa-terminal',
						items: [
							{
								name: 'Profile Manager',
								link: '#',
								items: [
									{
										title: 'Profile Manager Tutorials',
										icon: 'fa fa-book',
										items: [
											{
												name: 'Basic Data Capture',
												link: '#guide-tutorial-tutdatacaptureprofile',
											},
											{
												name: 'Using Intent Output',
												link: '#guide-tutorial-tutdatacaptureprofilePt2',
											},
											{
												name: 'Multiple Profiles',
												link: '#guide-tutorial-tutdatacaptureprofilePt3',
											},
											{
												name: 'Using Broadcast Intent Output',
												link: '#guide-tutorial-tutdatacaptureprofilePt4',
											},
											{
												name: 'Modifying Profiles',
												link: '#guide-tutorial-tutModifyBarcodeProfileSettings',
											}
										]
									}
								]
							},
							{
								name: 'Platform Intents',
								link: '#',
								items: [
									{
										title: 'Platform Intent Tutorials',
										icon: 'fa fa-book',
										items: [
											{
												name: 'Datawedge Intents',
												link: '#guide-tutorial-tutdatacaptureintent',
											},
											{
												name: 'Battery Intent',
												link: '#guide-tutorial-tutbatteryintent',
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Samples',
				icon: 'fa fa-download',
				link: '#',
				items: [
					{
						title: 'Samples',
						icon: 'fa fa-download',
						items: [
							{
								name: 'Using EMDK Sample App',
								link: '#guide-sample-sampledatacaptureprofile',
							},
							{
								name: 'Data Capture Platform Intent',
								link: '#guide-sample-sampledatacaptureintent',
							},
							{
								name: 'Battery Platform Intent',
								link: '#guide-sample-samplebatteryintent',
							}
						]
					}
				]
			}
			,
			{
				name: 'Reference',
				icon: 'fa fa-code',
				link: '#',
				items: [
					{
						title: 'Reference',
						icon: 'fa fa-code',
						items: [
							{
								name: 'Native Android',
								link: '#guide-reference-refnativeandroid',
							},
							{
								name: 'EMDK APIs',
								link: '#guide-reference-EMDKList',
								
							},
							{
								name: 'Profile Settings',
								link: '#',
								items: [
									{
										title: 'Profile Settings',
										icon: 'fa fa-book',
										items: [
											
											{
												name: 'Activity Selection',
												link: '#guide-profiles-profileactivity',
											},

											{
												name: 'Barcode',
												link: '#guide-profiles-profilebarcode',
											},
											{
												name: 'Intent Output',
												link: '#guide-profiles-profileintent',
											},
											{
												name: 'Keystroke',
												link: '#guide-profiles-profilekeystroke',
											},
											{
												name: 'Magstripe',
												link: '#guide-profiles-profilemsr',
											}
										]
									}
								]
							},
							{
								name: 'Platform Intents',
								link: '#',
								items: [
									{
										title: 'Platform Intents',
										icon: 'fa fa-book',
										items: [
											{
												name: 'Datawedge Intents',
												link: '#guide-reference-refdatacaptureintent',
											},
											{
												name: 'Battery Intent',
												link: '#guide-reference-refbatteryintent',
											}
										]
									}
								]
							}
							
						]
					}
				]
			}
			
		]
	}
];