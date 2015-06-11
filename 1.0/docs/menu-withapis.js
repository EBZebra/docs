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
								link: '#guide-sampledatacaptureprofile',
							},
							{
								name: 'Build Hello EMDK',
								link: '#guide-tutdatacaptureprofile',
							},
							{
								name: 'Understand Profile Manager',
								link: '#guide-usingwizard',
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
												link: '#guide-tutdatacaptureprofile',
											},
											{
												name: 'Using Intent Output',
												link: '#guide-tutdatacaptureprofilePt2',
											},
											{
												name: 'Multiple Profiles',
												link: '#guide-tutdatacaptureprofilePt3',
											},
											{
												name: 'Using Broadcast Intent Output',
												link: '#guide-tutdatacaptureprofilePt4',
											},
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
												link: '#guide-tutdatacaptureintent',
											},
											{
												name: 'Battery Intent',
												link: '#guide-tutbatteryintent',
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
								link: '#guide-sampledatacaptureprofile',
							},
							{
								name: 'Data Capture Platform Intent',
								link: '#guide-sampledatacaptureintent',
							},
							{
								name: 'Battery Platform Intent',
								link: '#guide-samplebatteryintent',
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
								link: '#guide-refnativeandroid',
							},
							{
								name: 'EMDK APIs',
								link: '#',
								items: [
									{
										title: 'EMDK APIS',
										icon: 'fa fa-book',
										items: [
											{
												name: 'EMDKManager',
												link: '#api-EMDKManager',
											},
											{
												name: 'EMDKManager.EMDKListener',
												link: '#api-EMDKManager-EMDKListener',
											},
											{
												name: 'EMDKResults',
												link: '#api-EMDKResults',
											},
											{
												name: 'ProfileManager',
												link: '#api-ProfileManager',
											},
											{
												name: 'VersionManager',
												link: '#api-VersionManager',
											},
											{
												name: 'ProfileConfig',
												link: '#api-ProfileConfig',
												items: [{
													title: 'ProfileConfig.',
													icon: 'fa fa-book',
													items: [
																	
														{
															name: 'ActivitySelection',
															link: '#api-ProfileConfig-ActivitySelection',
														},
														{
															name: 'ActivitySelection.ActivityElement',
															link: '#api-ProfileConfig-ActivitySelection-ActivityElement',
														},
														{
															name: 'DataCapture',
															link: '#api-ProfileConfig-DataCapture',
														},
														{
															name: 'DataCapture.Barcode',
															link: '#api-ProfileConfig-DataCapture-Barcode',
														},
														{
															name: 'DataCapture.Barcode.Decoders',
															link: '#api-ProfileConfig-DataCapture-Barcode-Decoders',
														},
														{
															name: 'DataCapture.Barcode.DecoderParams',
															link: '#api-ProfileConfig-DataCapture-Barcode-DecoderParams',
														},
														{
															name: 'DataCapture.Barcode.DecoderParams.Codabar',
															link: '#api-ProfileConfig-DataCapture-Barcode-DecoderParams-Codabar',
														},
														{
															name: 'DataCapture.Barcode.DecoderParams.Code11',
															link: '#api-ProfileConfig-DataCapture-Barcode-DecoderParams-Code11',
														},
														{
															name: 'DataCapture.Barcode.DecoderParams.Code128',
															link: '#api-ProfileConfig-DataCapture-Barcode-DecoderParams-Code128',
														},
														{
															name: 'DataCapture.Barcode.DecoderParams.Code39',
															link: '#api-ProfileConfig-DataCapture-Barcode-DecoderParams-Code39',
														},
														{
															name: 'DataCapture.Barcode.DecoderParams.Code93',
															link: '#api-ProfileConfig-DataCapture-Barcode-DecoderParams-Code93',
														},
														{
															name: 'DataCapture.Barcode.DecoderParams.Composite_AB',
															link: '#api-ProfileConfig-DataCapture-Barcode-DecoderParams-Composite_AB',
														},
														{
															name: 'DataCapture.Barcode.DecoderParams.Interleaved_2of5',
															link: '#api-ProfileConfig-DataCapture-Barcode-DecoderParams-Interleaved_2of5',
														},
														{
															name: 'DataCapture.Barcode.DecoderParams.Matrix_2of5',
															link: '#api-ProfileConfig-DataCapture-Barcode-DecoderParams-Matrix_2of5',
														},
														{
															name: 'DataCapture.Barcode.DecoderParams.MSI',
															link: '#api-ProfileConfig-DataCapture-Barcode-DecoderParams-MSI',
														},
														{
															name: 'DataCapture.Barcode.DecoderParams.UK_Postal',
															link: '#api-ProfileConfig-DataCapture-Barcode-DecoderParams-UK_Postal',
														},
														{
															name: 'DataCapture.Barcode.DecoderParams.UPCA',
															link: '#api-ProfileConfig-DataCapture-Barcode-DecoderParams-UPCA',
														},
														{
															name: 'DataCapture.Barcode.DecoderParams.UPCE0',
															link: '#api-ProfileConfig-DataCapture-Barcode-DecoderParams-UPCE0',
														},
														{
															name: 'DataCapture.Barcode.DecoderParams.UPCE1',
															link: '#api-ProfileConfig-DataCapture-Barcode-DecoderParams-UPCE1',
														},
														{
															name: 'DataCapture.Barcode.ReaderParams',
															link: '#api-ProfileConfig-DataCapture-Barcode-ReaderParams',
														},
														{
															name: 'DataCapture.Barcode.ScanParams',
															link: '#api-ProfileConfig-DataCapture-Barcode-ScanParams',
														},
														{
															name: 'DataCapture.Barcode.UpcEanParams',
															link: '#api-ProfileConfig-DataCapture-Barcode-UpcEanParams',
														},
														{
															name: 'DataCapture.MSR',
															link: '#api-ProfileConfig-DataCapture-MSR',
														},
														{
															name: 'DataCapture.DataDelivery',
															link: '#api-ProfileConfig-DataCapture-DataDelivery',
														},
														{
															name: 'DataCapture.DataDelivery.BasicDataFormatting',
															link: '#api-ProfileConfig-DataCapture-DataDelivery-BasicDataFormatting',
														},
														{
															name: 'DataCapture.DataDelivery.Intent',
															link: '#api-ProfileConfig-DataCapture-DataDelivery-Intent',
														},
														{
															name: 'DataCapture.DataDelivery.Keystroke',
															link: '#api-ProfileConfig-DataCapture-DataDelivery-Keystroke',
														}

													]
												}]
											},
											

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
												link: '#guide-refdatacaptureintent',
											},
											{
												name: 'Battery Intent',
												link: '#guide-refbatteryintent',
											}
										]
									}
								]
							},
							{
								name: 'Profile Settings',
								link: '#',
								items: [
									{
										title: 'Platform Settings',
										icon: 'fa fa-book',
										items: [
											{
												name: 'Activity Selection',
												link: '#guide-profileactivity',
											},
											{
												name: 'Barcode',
												link: '#guide-profilebarcode',
											},
											{
												name: 'Magstripe',
												link: '#guide-profilemsr',
											},
											{
												name: 'Keystroke',
												link: '#guide-profilekeystroke',
											},
											{
												name: 'Intent Output',
												link: '#guide-profileintent',
											}
										]
									}
								]
							},
							
						]
					}
				]
			}
			
		]
	}
];