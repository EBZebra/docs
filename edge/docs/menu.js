var menuStrcture = [
	{
		title: 'Help ',
		icon: 'fa fa-reorder',
		items: [
			{
				name: 'About Enterprise Browser',
				link: '#guide-about',
			},
			{
				name: 'Getting Started',
				icon: 'fa fa-rocket',
				link: '#',
				items: [
					{
						title: 'Getting Started',
						icon: 'fa fa-rocket',
						items: [
							{
								name: 'Installation',
								link: '#guide-setup',
							},
							{
								name: 'Licensing',
								link: '#guide-licensing',
							},
							{
								name: 'Using The APIs',
								link: '#guide-apioverview',
							},
							{
								name: 'Hello EB Tutorial',
								link: '#guide-tutorial-helloeb',
							},
							{
								name: 'Feature Demo Application',
								link: '#guide-featuredemo',

							},
							{
								name: 'Start Your Application',
								link: '#guide-launching',
							},
							{
								name: 'Optimization',
								link: '#guide-optimization',
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
								name: 'Barcode',
								link: '#guide-tutorial-barcode',
							},
							{
								name: 'Gesture',
								link: '#guide-tutorial-gesture',
							},
							{
								name: 'Hello EB',
								link: '#guide-tutorial-helloeb',
							},
							{
								name: 'Imager',
								link: '#guide-tutorial-imager',
							},
							{
								name: 'KeyCapture',
								link: '#guide-tutorial-keycapture',
							},
							{
								name: 'Network',
								link: '#guide-tutorial-network',
							},
							{
								name: 'Printing',
								link: '#guide-tutorial-printing',
							},
							{
								name: 'Signature',
								link: '#guide-tutorial-signature',
							},
							{
								name: 'WebSQL',
								link: '#guide-tutorial-websql',
							}, 
						]
					}
				]
			},
			{
				name: 'Usage Guides',
				icon: 'fa fa-gears',
				link: '#',
				items: [
					{
						title: 'Usage Guides',
						icon: 'fa fa-gears',
						items: [
							{
								name: 'Certificate Usage',
								link: '#guide-certificates',
							},
							{
								name: 'Config Editor Utility',
								link: '#guide-ConfigEditor',
							},
							{
								name: 'Config.xml Reference',
								link: '#guide-configreference',
							},
							{
								name: 'DataWedge Usage',
								link: '#guide-datawedge',
							},
							{
								name: 'DOM Injection Guide',
								link: '#guide-DOMinjection',
							},
							{
								name: 'On-device Config',
								link: '#guide-OndeviceConfig',
							},
							{
								name: 'Printing Guide',
								link: '#guide-printingGuide',
							},
							{
								name: 'SAP ITS Usage',
								link: '#guide-sap',
							},
							{
								name: 'Shortcut Guide and Utility',
								link: '#guide-ShortcutCreator',
							},
							{
								name: 'Viewport Usage',
								link: '#guide-viewport',
							},
							
						]
					}
				]
			},
			{
				name: 'APIs',
				icon: 'fa fa-code',
				link: '#',
				items: [
					{
						title: 'APIs',
						icon: 'fa fa-code',
						items : [
							{
								name: 'Using The APIs',
								link: '#guide-apioverview',
							},
							{"name":"Compatibility Matrix","link":"#guide-compatibility"},
							{"name":"AddressBar","link":"#api-AddressBar"},
							{"name":"AirBeam","link":"#api-AirBeam"},
							{"name":"Alarm","link":"#api-Alarm"},
							{"name":"Application","link":"#api-Application"},
							{"name":"AudioCapture","link":"#api-audiocapture"},
							{"name":"BackButton","link":"#api-BackButton"},
							{"name":"Backlight","link":"#api-Backlight"},
							{"name":"Barcode","link":"#api-barcode"},
							{"name":"Battery","link":"#api-battery"},
							{"name":"BottomCommandArea","link":"#api-BottomCommandArea"},
							{"name":"Camera","link":"#api-camera"},
							{"name":"CardReader","link":"#api-cardreader"},
							{"name":"Comm","link":"#api-Comm"},
							{"name":"Database","link":"#api-Database"},
							{"name":"Device","link":"#api-device"},
							{"name":"EzNFC","link":"#api-EzNFC"},
							{"name":"File","link":"#api-File"},
							{"name":"FileTransfer","link":"#api-FileTransfer"},
							{"name":"ForwardButton","link":"#api-ForwardButton"},
							{"name":"Gesture","link":"#api-Gesture"},
							{"name":"GoButton","link":"#api-GoButton"},
							{"name":"HomeButton","link":"#api-HomeButton"},
							{"name":"Hourglass","link":"#api-Hourglass"},
							{"name":"Imager","link":"#api-Imager"},
							{"name":"Intent","link":"#api-Intent"},
							{"name":"KeyCapture","link":"#api-keycapture"},
							{"name":"KeyState","link":"#api-keystate"},
							{"name":"KeyLight","link":"#api-Keylight"},
							{"name":"Log","link":"#api-Log"},
							{"name":"Mediaplayer","link":"#api-mediaplayer"},
							{"name":"Memory","link":"#api-Memory"},
							{"name":"NativeMenubar","link":"#api-NativeMenubar"},
							{"name":"NativeTabbar","link":"#api-NativeTabbar"},
							{"name":"NativeToolbar","link":"#api-NativeToolbar"},
							{"name":"Network","link":"#api-Network"},
							{"name":"Notification","link":"#api-Notification"},
							{"name":"PowerOn","link":"#api-Poweron"},
							{"name":"Printer","link":"#api-printing"},
							{"name":"PrinterZebra","link":"#api-printingzebra"},
							{"name":"Process","link":"#api-process"},
							{"name":"Push","link":"#api-push"},
							{"name":"QuitButton","link":"#api-QuitButton"},
							{"name":"Reboot","link":"#api-Reboot"},
							{"name":"Registry","link":"#api-Registry"},
							{"name":"ReloadButton","link":"#api-ReloadButton"},
							{"name":"ScreenOrientation","link":"#api-screenorientation"},
							{"name":"Sensor","link":"#api-sensor"},
							{"name":"SettingsButton","link":"#api-settingsButton"},
							{"name":"SignalIndicators","link":"#api-signalindicators"},
							{"name":"Signature","link":"#api-signature"},
							{"name":"SIP","link":"#api-Sip"},
							{"name":"SipButton","link":"#api-SipButton"},
							{"name":"SmartCradle","link":"#api-smartcradle"},
							{"name":"StopButton","link":"#api-StopButton"},
							{"name":"Stylus","link":"#api-Stylus"},
							{"name":"System","link":"#api-system"},
							{"name":"SystemTime","link":"#api-SystemTime"},
							{"name":"Timer","link":"#api-Timer"},
							{"name":"TopCommandArea","link":"#api-TopCommandArea"},
							{"name":"Videocapture","link":"#api-videocapture"},
							{"name":"Volume","link":"#api-Volume"},
							{"name":"Wake","link":"#api-Wake"},
							{"name":"WebView","link":"#api-webview"},
							{"name":"Zoom","link":"#api-Zoom"},
							{"name":"ZoomTextButton","link":"#api-ZoomTextButton"}
						]
					}
				]
			},
			{
				name: 'Debugging',
				icon: 'fa fa-bug',
				link: '#',
				items: [
					{
						title: 'Debugging',
						icon: 'fa fa-bug',
						items: [
							{
								name: 'On-Device Debugging',
								link: '#guide-debuggingjs',
							},
							{
								name: 'App Logging',
								link: '#guide-logging',
							}
						]
					}
				]
			},
			{
				name: 'Migration Guides',
				icon: 'fa fa-exchange',
				link: '#guide-migration',
				items: [
					{
						title: 'Getting Started',
						icon: 'fa fa-exchange',
						items: [
							{
								name: 'Common Migration Notes',
								link: '#guide-migration',
							},
							{
								name: 'PocketBrowser 2.x',
								link: '#guide-pb2',
							},
							{
								name: 'PocketBrowser 3.x',
								link: '#guide-pb3',
							},
							{
								name: 'RhoElements 2.x',
								link: '#guide-elements',
							},
							{
								name: 'RhoMobile 4.x+',
								link: '#guide-rhomobile',
							}
						]
					}
				]
			},
			{
				name: 'Using This Help',
				link: '#guide-abouthelp',
				icon: 'fa fa-question-circle'
			},
			{
				name: 'Download For Offline Use',
				link: '#guide-downloadhelp',
				icon: 'fa fa-download'
			},

		]
	}
];