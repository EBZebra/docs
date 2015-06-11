# PocketBrowser 2.x Migration Guide
This guide is meant to assist in migration from PocketBrowser 2.x to the Enterprise Browser. For online documentation specific to PocketBrowser 2.x, please see the [online PB2 docs](http://goo.gl/H1Fuik).

## Overview
PocketBrowser 2.x applications are supported when running within Enterprise Browser. Please review the [Common Migration Notes](../guide/migration) for items that also apply to migrating PocketBrowser applications to Enterprise Browser. Then review the sections below that apply to your device and installation choice type.

## Windows Mobile/CE using Webkit
Since you have chosen Webkit to run a PocketBrowser v2 application, you should expect some major differences with regard to rendering. If you wanted your page to render as it does on PocketBrowser consider using the IE web view.

> Note: If you switch from CE to WM or vice versa, the rendering may be different as these systems have variant browser controls.

### Installation
To install Enterprise Browser please take a look at the [installation section](../guide/setup?Device Deployment).  If deploying to a Windows CE device, a persistent installation for Webkit should be selected so that Enterprise Browser persists over a cold boot.

> Note: Do not forget to cold boot the device to complete the installation.

### Configuration Settings
The [Config.xml](../guide/configreference) file needs to be updated:

1. Set the [StartPage](../guide/configreference?StartPage).

	:::xml
	<Configuration>
			<Applications>
					<Application>
							<General>
									<Name value="Menu"/>
									<StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
							</General>


2. Switch backwards compatibility on. Enterprise Browser supports PocketBrowser 2.x (EMML 1.0) through the use of a regular expressions engine. The regular expressions engine can be activated from within the configuration file by setting the value of [UseRegularExpressions](../guide/configreference?UseRegularExpressions) to 1.EMML 1.0 syntax is translated based on an XML file. After a default installation this file can be located: `\Program Files\\EnterpriseBrowser\Config\RegEx.xml`

	:::xml
	<Configuration>
			<Applications>
					<Application>
							<General>
									<Name value="Menu"/>
									<StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
									<UseRegularExpressions value='1'/>
							</General>

3. Verify that Webkit is the rendering engine to use.

	:::xml
	<Configuration>
			<Engine>
					<EngineInUse value='Webkit'/>

4. Move any offline files to the device.

>If you have any BadLink pages or offline resources (on the device), copy them over now.

### Usage Notes
* Generic methods RasConnect & RasDisconnect are not supported.
* NOSIP not supported. The NOSIP control was a solution for placing a text box onto the page that did not trigger the Soft Input Panel. This predates the APIs that now allow us to hide the SIP or place it off screen. There is no support for NOSIP on Enterprise Browser.  To disable the SIP, see the [disabling the SIP](../api-Sip?Disabling%20the%20SIP) section in the SIP API reference.
* [FitToScreenEnabled](../guide/configreference?FitToScreenEnabled) not supported. This is a function for Windows Mobile only.

## Windows Mobile/CE using IE
When using IE as the rendering engine only PocketBrowser API's and funtioanlity will be available. API's listed in this help document will not be supported. You may wish to choose to use this option if you are not looking to take advantage of Webkit abilities and/or other functionality that Enterprise Browser provides. This may be an only option for very low memory/CPU devices.

### Installation
To install Enterprise Browser please take a look at the [installation section](../guide/setup?Device Deployment).  If deploying to a Windows CE device, a persistent installation for IE should be selected so that Enterprise Browser persists over a cold boot.

> Note: Do not forget to cold boot the device to complete the installation.

### Configuration Settings
The [Config.xml](../guide/configreference) file needs to be updated:

1. Set the [StartPage](../guide/configreference?StartPage).

	:::xml
	<Configuration>
			<Applications>
					<Application>
							<General>
									<Name value="Menu"/>
									<StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
							</General>

2. Switch backwards compatibility on. Enterprise Browser supports PocketBrowser 2.x (EMML 1.0) through the use of a regular expressions engine. The regular expressions engine can be activated from within the configuration file by setting the value of [UseRegularExpressions](../guide/configreference?UseRegularExpressions) to 1.EMML 1.0 syntax is translated based on an XML file. After a default installation this file can be located: `\Program Files\\EnterpriseBrowser\Config\RegEx.xml`

	:::xml
	<Configuration>
			<Applications>
					<Application>
							<General>
									<Name value="Menu"/>
									<StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
									<UseRegularExpressions value='1'/>
							</General>

3. Verify that Webkit is the rendering engine to use.

		:::xml
		<Configuration>
				<Engine>
								<EngineInUse value='IE'/>

4. Move any offline files to the device.

>If you have any BadLink pages or offline resources (on the device), copy them over now.

### Usage Notes
* Generic methods RasConnect & RasDisconnect are not supported.
* [PageZoom](../guide/configreference?PageZoom) is not supported on IE. This web view supports text zoom only.
* Javascript events onkeydown, onkeypress, onkeyup are not supported in Windows mobile devices running Internet explorer. Use EnterpriseBrowser [Keycapture APIs](../api/keycapture) instead to capture the hardware keypresses.

## Android
Since you have chosen Android to run a PocketBrowser v2 application, you should expect some major differences with regard to rendering. The rendering that is used on Android is the stock Webview that comes with the Android SDK.

### Installation
To install Enterprise Browser please take a look at the [installation section](../guide/setup?Device Deployment).

### Configuration Settings
The [Config.xml](../guide/configreference) file needs to be updated:

1. Set the [StartPage](../guide/configreference?StartPage).

		:::xml
		<Configuration>
				<Applications>
						<Application>
								<General>
										<Name value="Menu"/>
										<StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
								</General>


2. Switch backwards compatibility on. Enterprise Browser supports PocketBrowser 2.x (EMML 1.0) through the use of a regular expressions engine. The regular expressions engine can be activated from within the configuration file by setting the value of [UseRegularExpressions](../guide/configreference?UseRegularExpressions) to 1.EMML 1.0 syntax is translated based on an XML file. After a default installation this file can be located: `\Program Files\\EnterpriseBrowser\Config\RegEx.xml`

		:::xml
		<Configuration>
				<Applications>
						<Application>
								<General>
										<Name value="Menu"/>
										<StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
										<UseRegularExpressions value='1'/>
								</General>

3. Move any offline files to the device.
>If you have any BadLink pages or offline resources (on the device), copy them over now.

4. Copy the `elements.js` file that comes with the installation to the location of your HTML pages and reference it appropriately in your application

		:::html
		<html>
			<head>
				<script type="text/javascript" charset="utf-8" src="/js/elements.js"></script>
				<!-- assumes I have copied the elements.js file to my web server's JS folder -->

### Usage Notes
* Generic methods RasConnect & RasDisconnect are not supported.
* NOSIP not supported. The NOSIP control was a solution for placing a text box onto the page that did not trigger the Soft Input Panel. This predates the APIs that now allow us to hide the SIP or place it off screen. There is no support for NOSIP on Enterprise Browser. To disable the SIP, see the [disabling the SIP](../api-Sip?Disabling%20the%20SIP) section in the SIP API reference.
* [FitToScreenEnabled](../guide/configreference?FitToScreenEnabled) not supported. This is a function for Windows Mobile only.
* EMML profiles do not work.
* Check the device for hardware compatibility, especially the [barcode scanning](http://docs.rhomobile.com/en/2.2.0/rhoelements/scanner) options.