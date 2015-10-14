# Config.XML Reference
Runtime configuration of the Enterprise Browser is managed through an XML file called Config.xml. This file is *mandatory* for proper Enterprise Browser execution: not every setting has a default and if the configuration file cannot be found, the Enterprise Browser will *not* start. An example configuration file is provided as part of the installation and contains sensible defaults, this page explains the meanings of each of the settings and their possible values. The example `Config.xml` file is bundled your installation or the Enterprise Browser on your device.

## Configuration File Location
The location of the configuration file loaded by the Enterprise Browser is dependent on a number of factors:

* When running on the Enterprise Tablet the configuration file is read from `/Android/data/com.symbol.enterprisebrowser/Config.xml`.
* When running on all other devices the Enterprise Browser will attempt to launch the configuration file `Config.xml` located in the folder `Config` off the installation root.
* You can change which configuration file is loaded using the /C: configuration option

For persistent installations, on cold boot the `Config.xml` file is copied from `\Application\EnterpriseBrowser\Config\Config.xml` to `\Program Files\EnterpriseBrowser\Config\Config.xml`; bear this in mind if you want your configuration to persist across cold boot. <!-- This behavior may be modified by changing `\Application\RhoElements.cpy`. --> <!-- Need to verify this -->

>Note: The operating systems of some devices have case sensitive file systems. Therefore it is good practice to always keep URL values in the Config.xml file case identical to the names of the actual files.

## Substitution Variables
The following substitution variables are available in the configuration file
<table class="re-table">
	<tr>
		<th>Substitution Variable</th>
		<th>Expanded Value</th>
	</tr>
	<tr>
		<td>%INSTALLDIR%</td>
		<td>The directory into which the Enterprise Browser has been installed.</td>
	</tr>
</table>

## Config.xml File Format
The following is an example of a typical configuration file

	:::xml
	<?xml version="1.0"?>
	<!-- Enterprise Browser Configuration file -->
	<Configuration>
		<DebugButtons>
			<DebugButtonsEnabled value="0"/>
		</DebugButtons>

		<Logger>
			<LogProtocol value="FILE"/>
			<LogPort value="80"/>
			<LogURI value="file://%INSTALLDIR%/log.txt"/>
			<LogError value="1"/>
			<LogWarning value="0"/>
			<LogInfo value="0"/>
			<LogUser value="1"/>
			<LogMemory value="0"/>
			<LogMemPeriod value="5000"/>
			<LogMaxSize value="10"/>
		</Logger>

		<FileLocations>
			<RegEXFile value="file://%INSTALLDIR%/RegEx.xml"/>
		</FileLocations>

		<Screen>
			<FullScreen value="1"/>
			<ShowLicenseConfirmation value="1"/>
			<EnableZoom value="1"/>
		</Screen>

		<WebServer>
			<Enabled VALUE="0"/>
			<Port VALUE="8080"/>
			<WebFolder VALUE="\www"/>
			<Public VALUE="0"/>
		</WebServer>

		<DeviceKeys>
			<EnableFunctionKey_F1 value="0"/>
			<EnableFunctionKey_F2 value="0"/>
			<EnableFunctionKey_F3 value="0"/>
		</DeviceKeys>

		<Navigation>
			<NavTimeout value="45000"/>
		</Navigation>

		<Geolocation>
			<GeolocationEnabled value="1"/>
		</Geolocation>

		<Engine>
			<EngineInUse value="IE"/>
		</Engine>

		<Applications>
			<Application>
				<General>
					<Name value="Menu"/>
					<StartPage value="file://%INSTALLDIR%/menu.html" name="Menu"/>
				</General>

				<HTTP_Proxy value=""/>
				<HTTPS_Proxy value=""/>

				<WebDB>
					<WebStorageDBPath value="file://%INSTALLDIR%"/>
					<WebSQLDBQuota value="5000000"/>
					<WebSQLDBPath value="file://%INSTALLDIR%"/>
				</WebDB>

				<ApplicationCache>
					<ApplicationCachePath value="file://%INSTALLDIR%"/>
					<ApplicationCacheQuota value="5000000"/>
				</ApplicationCache>

				<NPAPI>
					<Preloads>
						<PreloadLegacyGeneric value="1"/>
						<PreloadLegacyODAX value="1"/>
						<PreloadLegacyAirBeam value="1"/>
						<PreloadLegacyAPD value="1"/>
						<PreloadJSObjects value="1"/>
					</Preloads>
				</NPAPI>

				<HTMLStyles>
					<TextSelectionEnabled value="0"/>
					<FontFamily value="Droid Sans Fallback"/>
				</HTMLStyles>

				<GUI>
					<SignalRefresh value="5000"/>
					<HourglassEnabled value="1"/>
					<HourglassLeft value=""/>
					<HourglassTop value=""/>
				</GUI>

				<Navigation>
					<BadLinkURI value="file://%INSTALLDIR%/badlink.html"/>
					<EnableSSL3 value="1"/>
					<UserAgent value="Mozilla/5.0 (%p) AppleWebKit/%w (KHTML, like Gecko) Safari/%w"/>
					<NetworkCookieDatabase value="file://%INSTALLDIR%/cookies.db"/>
					<ViewportEnabled value="1"/>
					<Cache value="5MB"/>
				</Navigation>
				<ZoomKey>
					<ZoomInKey value="0x70"/> //Any function key can be applied
					<ZoomOutKey value="0x71"/> //Any function key tag can be applied
				</ZoomKey>
				<isWindowsKey  value="0"/>				
			</Application>
		</Applications>
	</Configuration>

## General
### StartPage
Defines the start page of a Enterprise Browser application, displayed at launch. This should be a local file to avoid connectivity issues on startup. Case sensitive. 

**Possible Values**

* Fully qualified path to start page

#### Example
	:::xml
	<StartPage value="file:///index.html" name="Start Page"/>

	<!-- OR -->

	<StartPage value="http://www.hostsite.com/my_app_menu.html" name="Menu"/>

### Name
The name of the application
**Possible Values**

* ASCII text

#### Example
	:::xml
	<Name value="My App"/>

### UseRegularExpressions
Determines behavior of Function keys on Windows Mobile and Windows CE devices. When enabled, F-keys on WM/CE devices are capturable using the KeyCapture API. When disabled, keys revert to the device’s default behavior. This setting is not specific to an application. When enabled, settings are applied globally to the device. Regular Expressions are used to maintain backward compatibility with PocketBrowser syntax for controlling device capabilities. If backward compatibility is not required, regular expressions can safely be disabled, possibly improving app performance. Applies only to apps for Windows Mobile/CE devices built with RhoMobile Suite 2.2 or higher that need backward compatibility with PocketBrowser.

**Possible Values**

* 0 - Do Not Use Regular Expressions
* 1 - Use Regular Expressions

#### Example
	:::xml
	<UseRegularExpressions value='1'/>

### HTTP_Proxy
Specifies the URL and port number for the HTTP proxy. Leave this field blank if no proxy is to be used. Applies to the Zebra WebKit engine on WM/CE devices and to the stock webkit on Android. Supported on WM/CE only when Zebra Webkit is used; proxy settings for Internet Explorer are picked up from the Windows connection manager.

**Possible Values**

* URL:PortNo

#### Example
	:::xml
	<HTTP_Proxy value="http://my.proxy.com:8080"/>

### HTTPS_Proxy
Specifies the URL and port number for the HTTPS proxy. Leave this field blank if no proxy is to be used. Applies to the Zebra WebKit engine on WM/CE devices and to the stock webkit on Android. Supported on WM/CE only when Zebra Webkit is used. Not otherwise supported on WM/CE; use HTTP_Proxy instead.

**Possible Values**

* URL:PortNo

#### Example
	:::xml
	<HTTPS_Proxy value="https://my.proxy.com:8181"/>

### No_Proxy
Used to specify sites to be accessed directly rather than through a proxy. Accepts a comma-separated list of host names, domain names (beginning with a dot), IP addresses, or CIDR-format IP network addresses. Examples: myhost, .mydomain.com, 192.168.1.1 and 192.168.0.0/24. Applies only to the Zebra WebKit engine.

**Possible Values**

* Comma separated list of direct access addresses.

#### Example
	:::xml
	<No_Proxy value="*.my_app.com,http://internal.site.com"/>

## DebugButtons
### DebugButtonsEnabled
When enabled, presents a set of controls useful for development and debugging purposes.
Note: When using this feature with the IE engine on a CE device, screen distortion may be noticed when scrolling.

**Notes**

* When using this feature with the IE engine on a CE device, screen distortion may be noticed when scrolling.<br>
* When debug buttons are enabled, [Gestures](../api/Gesture) may not function as expected.<br>

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<DebugButtonsEnabled value="1"/>

## Logger
### LogProtocol
Sets the protocol over which the logging data will be sent.

**Possible Values**

* File
* HTTP

#### Example
	:::xml
	<LogProtocol value="FILE"/>

### LogPort
The port over which the logging data will be sent when HTTP is set in LogProtocol (ignored otherwise).

**Possible Values**

* Any valid HTTP port

#### Example
	:::xml
	<LogPort value="80"/>

### LogURI
The URL or file name and path to which logged data should be sent or saved.

**Possible Values**

* Any valid URL or fully qualified file name

>Note: The operating systems of some devices have case sensitive file systems. Therefore it is good practice to always keep URL values in the Config.xml file case identical to the names of the actual files.

#### Example
	:::xml
	<!-- Store log file in the file log.txt in the app's installation directory -->
	<LogURI value="file://%INSTALLDIR%/log.txt"/>

### LogError
Controls logging of ERROR messages generated by the Enterprise Browser.  If set to 1, it enables error-level logging only (can be overridden by LogWarning).

**Possible Values**

0 - Disabled
1 - Enabled

#### Example
	:::xml
	<LogError value="1"/>

### LogWarning
Controls the logging of WARNING messages generated by the Enterprise Browser. If set to 1, enables warning and error messages (overrides LogError setting; can be overridden by LogInfo).

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<LogWarning value="1"/>

### LogInfo
Controls the logging of INFORMATION messages generated by the Enterprise Browser. If set to 1, enables Info, Warning and Error logging (Overrides LogWarning and/or LogError settings; can be overridden by LogUser). 

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<LogInfo value="1"/>

### LogUser
Controls logging of User, Info, Warning and Error messages from the user application. Overrides LogWarning, LogError and/or LogInfo settings. Data can be logged using the Log API.

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<LogUser value="1"/>

### LogMemory
Controls the logging of memory usage in the system. Supports Android, WM/CE; does not apply to the Enterprise Tablet.

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<LogMemory value="1"/>

### LogMemPeriod
Specifies the time interval after which memory logs will be generated. Supports Android and WM/CE; does not apply to the Enterprise Tablet.

**Possible Values**

* Time in milliseconds

#### Example
	:::xml
	<LogError value="5000"/>

### LogMaxSize
Specifies the maximum allowable size of the log file, after which no more logs will be saved.

**Possible Values**

* File size in kilobytes

#### Example
	:::xml
	<LogMaxSize value="100"/>

## FileLocations
### RegExFile
**Applies only to Windows Mobile/CE**. Defines the location of the XML file that contains the conversions to be used for backward compatibility with EMML 1.0.

**Possible Values**

* Fully qualified path to file defining the regular expressions

> Note: The operating systems of some devices have case sensitive file systems. Therefore it is good practice to always keep URL values in the Config.xml file case identical to the names of the actual files.

#### Example
	:::xml
	<RegEXFile value="file://%INSTALLDIR%/RegEx.xml"/>

### PluginFile
Specifies location of the plug-in file (a .DLL on the device), which facilitates mapping between modules and plug-ins on the device. **Not applicable to the Enterprise Tablet**.

**Possible Values**

* Fully qualified path to plugin file.

> Note: The operating systems of some devices have case sensitive file systems. Therefore it is good practice to always keep URL values in the Config.xml file case identical to the names of the actual files.

#### Example
	:::xml
	<PluginFile value="file://path-to-plugin-file"/>

## Screen
### FullScreen
Sets the Enterprise Browser app to display in full screen mode, hiding the OS from the user unless specifically minimized using the Application API. For Windows Mobile devices that include a custom Zebra user interface, access is provided to the status bar at the top of the screen. Enabled by default. 

**Possible Values**

* 0 - Disabled
* **1 - Enabled**

#### Example
	:::xml
	<FullScreen value="0"/>

### ShowLicenseConfirmation
**Applies to Windows Mobile/CE only**. Controls the display of the “Licensed to…” dialog at launch (on licensed devices only). Has no effect on unlicensed devices. 

**Possible Values**

* 0 - Do not show license confirmation
* **1 - Show license confirmation**

#### Example
	:::xml
	<ShowLicenseConfirmation value="1"/>

### EnableZoom
**Applies to Android only**. Sets whether the WebView should use its built-in zoom mechanisms. Enabled by default. 

**Possible Values**

*	0 - Disable Zoom
* **1 - Enable Zoom**

#### Example
	:::xml
	<EnableZoom value="1"/>

### PageZoom
Sets the zoom factor of the page. Default zoom value is 1.0 (if unspecified). On Android, zero and negative values are not supported. On Windows, zoom value less than 1.0 reverts to 1.0 since lower values would not be readable. Page zoom settings will sometimes be reflected a few milliseconds after navigating from one page to another. A one-second delay should be anticipated. Not Supported when using Internet Explorer as the rendering engine.

**Possible Values**

* Zoom factor of the page

#### Example
	:::xml
	<PageZoom value="1.0"/>

## VoidConnection
### TrackConnection
Controls whether the application will monitor connection to the server specified by the HostURL tag. Will display a pop-up when connectivity is lost and navigate to a "bad link" page if the timeout interval is reached. Modal pop-up on Android prevents further UI actions. Non-modal Windows pop-up allows user to access background apps, which is not recommended.

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<TrackConnection value="0"/>

### HostURL
Used to specify the URL to which your application will connect. Supports IP addresses, host names and specific ports (when appended to URL with a colon. If no port is specified, default=80).

**Possible Values**

* Fully qualified URL for the host

#### Example
	:::xml
	<HostURL value="http://my.host.com"/>

### Message
Use to specify a custom message to be displayed in a pop-up window.

**Possible Values**

* Customized message

#### Example
	:::xml
	<Message value="Connection message!"/>

### Timeout
Defines the amount of time (in milliseconds) the application should wait for a connection to the URL specified in ‘HostURL’ before displaying the ‘bad link’ message. The minimum value is 30000; lower values will revert to 30000. Value should be a multiple of the value set in PollInterval.

**Possible Values**

* Timeout in milliseconds

#### Example
	:::xml
	<Timeout value="20000"/>

### PollInterval
Defines the amount of time (in milliseconds) the application should pause before subsequently checking for a connection to the URL specified in ‘HostURL.’ The minimum value is 5000; lower values will revert to 5000. The value in ‘Timeout’ should be a multiple of this number. NOTE: This parameter is not testable.

**Possible Values**

* PollInterval in milliseconds

#### Example
	:::xml
	<PollInterval value="5000"/>

## WebServer
### Enabled
Determines whether a web server will be running locally on the device to service the application. When multiple Webview applications are deployed, all can run from a single embedded server or use discrete servers, each running on a different port.

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<Enabled value="1"/>

### Port
Specifies the port number of the web server running locally on the device (default= 8080).

**Possible Values**

* Port of the web server

#### Example
	:::xml
	<Port value="8080"/>

### WebFolder
Specifies the folder on the device in which the web application and its initial page are stored. By default, the initial page is ‘index.html’ unless another page is requested. Note: this parameter is case sensitive.

**Possible Values**

* Fully qualified path to folder containing web application

#### Example
	:::xml
	<WebFolder value="file:///path/to/WebFolder/"/>

### Public
Controls access to the local web server from an external device. Generally used only for debugging; could case serious security risks if enabled in production. **It is highly recommended that this feature be disabled before deployment**.

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<Public value="0"/>

## DeviceKeys
> Note: On Windows Mobile and Windows CE devices, full control is given to the developer over how their application handles function keys. Settings applied will persist until the device is warm-booted. Function key default behavior will vary from by device and operating system. On the Zebra MC75a, F3 and F4 represent the red and green phone keys. On many devices, the volume keys are also mapped as Function keys. Not all function keys will have default behavior.

Unblocking function keys may expose underlying operating system functions. On some devices, for example, red and green phone keys provide access to the start menu and programs.

The list below shows the behavior of the Enterprise Browser when Function Keys are pressed given the possible configuration settings:

* **ENABLE FUNCTION KEY = TRUE & FUNCTION KEYS CAPTURABLE = TRUE**
	* All Function Keys can be captured by the Key Capture Module
	* Function Key will not have its default Operating system behavior
* **ENABLE FUNCTION KEY = TRUE & FUNCTION KEYS CAPTURABLE = FALSE**
	* Function Keys with default OS behavior can not be captured by the Key Capture Module
	* Function Keys without default OS behavior can be captured by the Key Capture Module
	* Function Key will have its default Operating system behavior (if any)
* **ENABLE FUNCTION KEY = FALSE & FUNCTION KEYS CAPTURABLE = TRUE**
	* All Function Keys can be captured by the Key Capture Module
	* Function Key will not have its default Operating system behavior
* **ENABLE FUNCTION KEY = FALSE & FUNCTION KEYS CAPTURABLE = FALSE**
	* All Function Keys can not be captured by the Key Capture Module
	* Function Key will not have its default Operating system behavior (if any)

#### Example
	:::xml
	<DeviceKeys>
	    <EnableFunctionKey_F1 value="1"/>
	</DeviceKeys>

### FunctionKeysCapturable
Determines behavior of Function keys on Windows Mobile/CE and Android devices. When enabled, device Function keys are capturable using the Key Capture API. When disabled, keys revert to the device’s default behavior. This setting is not specific to an application. When enabled, settings are applied globally to the device. Refer to the EnableFunctionKey_X tag and complete documentation for more information about the interaction between the FunctionKeysCapturable and EnableFunctionKey_X parameters.

**Possible Values**

* 0 - F keys not capturable
* 1 - F keys capturable

#### Example
	:::xml
	<FunctionKeysCapturable value="1"/>

### EnableFunctionKey_X
This setting is used to specify which Function keys (F1 to F24) should be enabled (all Function keys are disabled by default). For each key to be enabled, define a tag using EnableFunctionKey_X, replacing the ‘X’ with the key number being enabled. For example, to enable F1, your tag will include EnableFunctionKey_F1 as below. See the sample Config.xml in the user guide for correct branch placement. Applies to Android and WM/CE. **Requires a preload of the KeyCapture module**.

On the Enterprise tablet, this tag can be used to enable the 'P' keys. For compatibility with other devices, the 'P' keys are referred to as 'F' keys in the config file. To enable P2 key on the Enterprise Tablet, the tag EnableFunctionKey_F2 should be set to 1.  For Windows Mobile / CE this setting is not specific to the current application and will be applied globally on the device. **This feature can only be reset by performing a device warm boot**.

> Note: On the Zebra MC40, F1 is mapped to the Volume Down button, F2 to the Volume UP button and F3 to the Search button.

Interaction between FunctionKeysCapturable and EnableFunctionKey_X is shown in the table below.

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<EnableFunctionKey_F1 value="1"/>

### EnableApplicationKey_X
**Applies to Windows Mobile/CE**. Specifies which Application keys (numbered A1 to A16) should be enabled (all are disabled by default). For each key to be enabled, define a tag using EnableApplicationKey_X, replacing the ‘X’ with the key being enabled. For example, to enable key A5, your tag will include EnableApplicationKey_A5 as below. See the sample Config.xml file in user docs for correct branch placement. The "P" keys on Enterprise Tablet will be referred to as "F" keys in config file.

**Notes**

* Requires a preload of the KeyCapture module; disabled by default.
* Applies to Android and Windows Mobile/CE devices.  
* Application-key mapping is device-specific; behavior may vary from one device to another.
* This setting is not specific to an application. When enabled, settings are applied globally to the device. 
* On Zebra MC40, F1 is mapped to the Volume Down button, F2 to the Volume UP button and F3 to the Search button.
* This feature can only be reset by performing a device warm boot. 

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example

	:::xml
	<EnableApplicationKey_A5 value="1"/>


## Navigation
### NavTimeout
Defines the amount of time (in milliseconds) the application should wait to establish communication with the relevant server (as opposed to waiting for a page to fully load) before displaying the ‘bad link’ message. If the destination is unreachable, the bad link message might be displayed before the timeout is reached. The navigation timeout will not be invoked when navigating to an application’s start page. The recommended best practice is to store the first page locally to avoid connectivity issues at startup. The app can then redirect to an online page if desired.

**Possible Values**

* Timeout in milliseconds (default value = 45000)

#### Example

	:::xml
	<NavTimeout value="30000"/>


## ScreenOrientation
### AutoRotate
When disabled the orientation of the screen will not change as the device is rotated and vice versa. This is a screen rotation lock.

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example

	:::xml
	<AutoRotate value="0"/>


## UserData
###UserData
Used to persist data when using Read/WriteUserSetting.

**Possible Values**

* Any valid user setting

#### Example

	:::xml
	<UserData value="1"/>


## WebDB
### WebStorageDBPath
Sets the path to an existing directory for storage of web storage databases. Applies to Windows Mobile/CE using the Zebra Webkit only. Case sensitive. 

**Possible Values**

* Fully qualified local path

> Note: The operating systems of some devices have case sensitive file systems. Therefore it is good practice to always keep URL values in the Config.xml file case identical to the names of the actual files.

#### Example
	:::xml
	<WebStorageDBPath value="file:///path-to-web-storage"/>

### WebSQLDBQuota
Sets the maximum per-database quota for Web SQL databases. Applies only to Windows Mobile/CE using the Zebra Webkit.

**Possible Values**

* Size in bytes

#### Example
	:::xml
	<WebSQLDBQuota value="20000"/>

### WebSQLDBPath
Path to an existing directory to store Web SQL databases. Applies to only Windows Mobile/CE using the Zebra Webkit. Case sensitive. 

**Possible Values**

* Fully qualified local path

> Note: The operating systems of some devices have case sensitive file systems. Therefore it is good practice to always keep URL values in the Config.xml file case identical to the names of the actual files.

#### Example
	:::xml
	<WebSQLDBPath value="file:///path-to-sql-db"/>

## ApplicationCache
### ApplicationCacheQuota
Application Cache data maximum quota per application. Applies to only Windows Mobile/CE using the Zebra Webkit.

**Possible Values**

* Size in bytes

#### Example
	:::xml
	<ApplicationCacheQuota value="20000"/>

### ApplicationCachePath
Path to an existing directory to store Application Cache data. Applies to only Windows Mobile/CE using the Zebra Webkit.

**Possible Values**

* Fully qualified local path

#### Example
	:::xml
	<ApplicationCachePath value="file:///path-to-app-cache"/>

## NPAPI
### NPAPIDirectory
Not applicable to the Enterprise Tablet:<br>

Path to an existing directory containing the NPAPI Plug-ins. **Not applicable to the Enterprise Tablet.** Case sensitive. 

**Possible Values**

* Fully qualified local path.

> Note: The operating systems of some devices have case sensitive file systems. Therefore it is good practice to always keep URL values in the Config.xml file case identical to the names of the actual files.

#### Example
	:::xml
	<NPAPIDirectory value="file:///path-to-NPAPI-dir"/>

## Preloads
### Preload
Defines plug-ins to be pre-loaded rather than loading as needed by a program function. Pre-loading prevents application lag when a program function is called for the first time. For example, when Barcode.enable is called by an app, a slight lag will be seen as the Barcode DLL loads into memory. Specify a Preload tag for each module to be loaded when Enterprise Browser starts up. While multiple modules may be defined in the same DLL, list all pre-loaded modules for maximum benefit. For memory-constrained devices, pre-load all required modules to prevent an out-of-memory condition during execution. Does not apply to the Enterprise Tablet; plug-ins are integral to Enterprise Browser on this platform.

**Possible Values**

* Module name

#### Example
	:::xml
	<Preload value="MyModule"/>

### PreloadLegacyActiveX
Determines whether to preload the ActiveX object in WebKit. Use this for backward compatibility with code written in PocketBrowser that used the ActiveXObject. Applies to WM CE with the Zebra Webkit only.

**Possible Values**

* 0 - Do Not Preload
* 1 - Preload

#### Example
	:::xml
	<PreloadLegacyActiveX value="1"/>

### PreloadLegacyGeneric
Determines whether to preload the NPAPI plugin to mimic the Generic ActiveX object in WebKit. On the Enterprise Tablet this plugin is automatically loaded when the JSObjects plugin is preloaded.

**Possible Values**

* 0 - Do Not Preload
* 1 - Preload

#### Example
	:::xml
	<PreloadLegacyGeneric value="1"/>

### PreloadLegacyODAX
Determines whether to preload the NPAPI plug-in to mimic the ODAX ActiveX object in WebKit. Does not apply to the Enterprise Tablet. 

**Possible Values**

* 0 - Do Not Preload
* 1 - Preload

#### Example
	:::xml
	<PreloadLegacyODAX value="1"/>

<!-- ### Preloads \\ PreloadLegacyNoSIP
Whether or not to preload the NPAPI plugin to mimic the NoSIP ActiveX object in WebKit.

> Note: We recommend using the [Sip API](../api-Sip?Disabling%20the%20SIP) instead of this NOSIP setting.

**Possible Values**

* 0 - Do Not Preload
* 1 - Preload

#### Example
	:::xml
	<PreloadLegacyNoSIP value="1"/>
 -->

### PreloadLegacyAirBeam
Determines whether to preload the NPAPI plugin to mimic the AirBeam ActiveX object in WebKit. Not applicable to the Enterprise Tablet.

**Possible Values**

* 0 - Do Not Preload
* 1 - Preload

#### Example
	:::xml
	<PreloadLegacyAirBeam value="1"/>

### PreloadLegacyAPD
Determines whether to preload the NPAPI plugin to mimic the APD ActiveX object in WebKit.

**Possible Values**

* 0 - Do Not Preload
* 1 - Preload

#### Example
	:::xml
	<PreloadLegacyAPD value="1"/>

### PreloadJSObjects
Determines whether to preload the NPAPI plug-in to provide native JavaScript objects for each of the modules. On the Enterprise Tablet, this plug-in will be included if the JSObjects plug-in is preloaded.

**Possible Values**

* 0 - Do Not Preload
* 1 - Preload

#### Example
	:::xml
	<PreloadJSObjects value="1"/>

## Scrolling
### ScrollTechnique
Specifies the technique used to scroll the viewport. **'FingerScroll'** is an Android-only feature that permits scrolling around a page with finger swiping. **'Scrollbars'** will be presented when the page is too large to fit the viewport (not available on Android). **'None'** displays no scrollbars and the page will not respond to finger swipes. This setting is not supported on Windows CE using the IE rendering engine. FingerScroll may interfere with drawing on a Canvas element. 

**Possible Values**

* FingerScroll
* Scrollbars 
* None 

#### Example
	:::xml
	<ScrollTechnique value="FingerScroll"/>

## Authentication
### Username
Specifies the username to be provided automatically when Enterprise Browser is instructed to navigate to a page that requires basic or digest HTTP authentication. If this setting is absent, a login prompt will be displayed with a username of (“”). In most cases, Enterprise Browser will permit one incorrect entry of credentials before presenting the HTTP 401 Unauthorized page. When used with IE engine, will permit multiple incorrect entries. Applies to Android and WM/CE. 

**Possible Values**

* Username string

#### Example
	:::xml
	<Username value="username"/>

### Password
Specifies the password to be provided automatically when Enterprise Browser is instructed to navigate to any page that requires basic or digest HTTP authentication. If this setting is absent, a login prompt will be displayed with a password of (“”). In most cases, Enterprise Browser will permit one incorrect entry of credentials before presenting the HTTP 401 Unauthorized page. When used with IE engine, will permit multiple incorrect entries. Applies to Android and WM/CE. 

**Possible Values**

* Password string

#### Example
	:::xml
	<Password value="password"/>

## HTMLStyles
### CaretWidth
Specifies the width (in pixels) of the textbox / text-area caret. If unspecified, defaults to ‘1’. Applies only to Webkit on Windows Mobile or Windows CE. 

**Possible Values**

* Integer values for caret width in pixels

#### Example
	:::xml
	<CaretWidth value="3"/>


###ClearTypeEnabled
Controls whether ClearType is used. Applies to Windows Mobile only.

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<ClearTypeEnabled value="0"/>

###FitToScreenEnabled
Automatically expands the application window to fit the screen. Apples to Windows Mobile with Internet Explorer rendering engine only.

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<FitToScreenEnabled value="0"/>

### FontFamily
Specifies the default font to use when rendering text in web pages. Should be a TrueType font present on the device. Default font for all Zebra Technologies WM/CE devices is preset to ‘Tahoma’ and on Enterprise Tablet is 'Droid Sans Fallback.' The specified font must be stored in \Windows for WM/CE, and /system/fonts for Enterprise Tablet. Note that Tahoma has no italic or oblique variants. 

**Possible Values**

* Font name

#### Example
	:::xml
	<FontFamily value="Tahoma"/>

### FontDirectory
Specifies the location of TrueType fonts on the device. For Zebra Technologies WM/CE devices, the default font directory is \Windows. Does not apply to Enterprise Tablet.

**Possible Values**

* Relative directory containing the font files

#### Example
	:::xml
	<FontDirectory value="\\Windows"/>

###JavascriptEnabled
Controls whether JavaScript is enabled on Windows Mobile devices.

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<JavascriptEnabled value="0"/>

###TextSelectionEnabled
Controls whether text selection is enabled when dragging the stylus on the screen. When enabled, the scroll bar is recommended for scrolling the page. Should be set to '1' for access to Copy (Ctrl+C) and Paste (Ctrl+V) functions on Webkit for WM/CE.

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<TextSelectionEnabled value="0"/>

### UseNativeFonts
Controls which fonts will be used. When set to ‘0’ (default) the FreeType library will be used as on apps built with RMS 2.x. When set to ‘1’ the native font engine on the device is used. A setting of ‘1’ overrides the ‘FontFamily’ setting. On localized devices from 4.1 and higher, the native font engine will be used by default. The FreeType library cannot render localized characters such as Asian and some accented European characters. The log file displays the font engine in use on launch. Some early BSPs of CE7 do not support the native font render. Applies to Windows Mobile and Windows CE only. This config element is not currently available on the MC92, VC70 or WT41N0 devices.

**Possible Values**

* 0 - Use FontFamily Setting
* 1 - Use FreeType font library

#### Example
	:::xml
	<UseNativeFonts value="1"/>

## Soft Input Panel (SIP)
### ResizeOnSIP
Controls window resizing when the soft input panel (on-screen keyboard, or SIP) is displayed. When enabled, the browser window will resize to accommodate the SIP, when displayed. If the SIP has been moved to the top half of the screen, the browser window will reduce in size from the top. Applies to Android and Windows Mobile only. Requires SIP module preload. Not compatible with Windows CE. Not compatible with Finger Scrolling. The SIP always appears at the bottom of the screen. 

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<ResizeOnSIP value="1"/>

### EnableSIP
Controls whether soft input panel (on-screen keyboard, or SIP) will appear. Applies to Android only. This feature can be mimicked on WM/CE by manipulating the top and left position parameters of the SIP module to position the SIP off the screen, thereby ‘disabling’ its use.

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<EnableSIP value="1"/>

## System
### LowBatteryScan
Controls whether the scanner can be used when battery charge level is low. Set to ‘0’ to disable scanning with low battery and ‘1’ to enable. Can be overridden by calling `Barcode.enable`. Applies to Android and WM/CE.

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<LowBatteryScan value="0"/>

## Scanner
### DisableScannerDuringNavigation
Controls whether scanner will be automatically disabled when navigating away from a page on which it was enabled. A setting of '0' will override this default behavior. Once enabled (either through meta tags, JavaScript or Ruby), the scanner will remain enabled in the foreground application until manually disabled. 

**Possible Values**

* 0 - The scanner will remain enabled during page navigation
* 1 - The scanner will be disabled during page navigation

#### Example
	:::xml
	<DisableScannerDuringNavigation value="1"/>

### DisableScannerInApp
Used to disable barcode scanning capabilities for a previous scanner API. Does not apply to the [common Barcode API](#api-barcode), and will not effect the behavior of barcode scanning in the License dialog. Supported on WM/CE with IE or Zebra Webkit. Note: **The scanner will not be disabled if this parameter does not exist or does not contain a value**.

**Supported Platforms**

* Windows Mobile/CE (IE or Zebra Webkit installation)

**Possible Values**

* 0 - does not disable the scanner
* 1 - disables the scanner (DefaultMetaTags, Meta Tags in HTML, Javascript API, ActiveXObject)

#### Example
	:::xml
	<DisableScannerInApp value="1"/>


## Sound
### DecodeVolume
Controls the volume of the device beeper when a barcode is scanned.

**Possible Values**

* 0 – 5 (0 = off; 1 – 5 = lowest to loudest)

#### Example
	:::xml
	<DecodeVolume value="3"/>

### DecodeFrequency
Controls the frequency of the device beeper when a barcode is successfully decoded. Must be within the range of the beeper.

**Possible Values**

* 0 to 0xFFFF

#### Example
	:::xml
	<DecodeFrequency value="0xFFFF"/>

### InvalidDecodeFrequency
Controls the frequency of the device beeper sound when a scanned barcode is not successfully decoded. This value (in hex) must be a frequency within the range of the device beeper. Not applicable to the Enterprise Tablet.

**Possible Values**

* 0 to 0xFFFF

#### Example
	:::xml
	<InvalidDecodeFrequency value="0xFFFF"/>

### DecodeDuration
Controls the duration (in milliseconds) of the device beeper sound when a barcode is scanned.

**Possible Values**

* number of milliseconds

#### Example
	:::xml
	<DecodeDuration value="500"/>

### ScanDecodeWav
Specifies a .wav file to be played when a scanned barcode is successfully decoded. File must be resident on the device. Overrides all scanner beeper settings. Not applicable to the Enterprise Tablet. Case sensitive.

**Possible Values**

* Fully qualified path and file name

#### Example
	:::xml
	<ScanDecodeWav value="file://path-to-success-wav-file"/>

### ScanInvalidWav
Specifies a .wav file to be played when a scanned barcode is not successfully decoded. File must be resident on the device. Overrides all scanner beeper settings. Not applicable to the Enterprise Tablet. Case sensitive. 

**Possible Values**

* Fully qualified path and file name

#### Example
	:::xml
	<ScanInvalidWav value="file://path-to-fail-wav-file"/>

### ImagerCaptureWav
Specifies a .wav file to be played when the Imager captures an image. File must be resident on the device. Case sensitive. 

**Possible Values**

* Fully qualified path and file name

#### Example
	:::xml
	<ImageCaptureWav value="file://path-to-capture-wav-file"/>

## GUI
### SignalRefresh
Specifies the refresh rate (in milliseconds) of the signal display. See the [Signal API](#api-signalindicators) for more information. 

**Possible Values**

* Refresh rate in milliseconds

#### Example
	:::xml
	<SignalRefresh value="1000"/>

### BatteryRefresh
Specifies the refresh rate (in milliseconds) of the battery display. See the Battery API for more information. Does not apply to the Enterprise Tablet. Note: Not supported on Android devices, which employ an asynchronous battery notification scheme that fires a batteryEvent only when the battery level changes, and is more power-efficient than polling.

**Possible Values**

* Refresh rate in milliseconds

#### Example
	:::xml
	<BatteryRefresh value="1000"/>

### HourglassEnabled
Controls whether the Hourglass icon will be displayed while navigating between pages (enabled by default). 

**Possible Values**

* 0 - Disabled
* **1 - Enabled**

#### Example
	:::xml
	<HourglassEnabled value="1"/>

### HourglassLeft
Controls the horizontal position of the Hourglass icon, which is displayed by default while navigating between pages. If not specified, the Hourglass will appear at the center of the screen.

**Possible Values**

* Horizontal position in pixels

#### Example
	:::xml
	<HourglassLeft value="100"/>

### HourglassTop
Controls the vertical position of the Hourglass icon, which is displayed by default while navigating between pages. If not specified, the Hourglass will appear at the center of the screen.

**Possible Values**

* Vertical position in pixels

#### Example
	:::xml
	<HourglassTop value="200"/>

## Navigation
### BadLinkURI
Specifies the ‘badlink’ URI file to be displayed when: 

1. An error occurs when attempting to navigate to a page (i.e. there's no network connection)
2. A page times out (according to the timeout interval set in NavTimeout)
3. The user presses the stop button. 

The browser will automatically append the querystring value 'badlink' containing the URL of the page that could not be reached, and 'stop=true' if the page was loaded because the user pressed the stop button. The page specified in the badlink setting should be a device-resident file using the `file://` protocol so it’s accessible by the browser. 

**Known issues**: If the device has no network connection, a navigation timeout message may be displayed on Windows Mobile devices using the IE engine. On CE5 and CE6, the IE engine will truncate the request variables when a navigation to badlink occurs and the reason for the failure may not be displayed. 

**Possible Values**

* Fully qualified path and file name 

> Note: The operating systems of some devices have case sensitive file systems. Therefore it is good practice to always keep URL values in the Config.xml file case identical to the names of the actual files.

#### Example
	:::xml
	<BadLinkURI value="file://%INSTALLDIR%/badlink.html"/>

###EnableSSL3
When enabled, SSL 3.0 is used. The Zebra Webkit is shipped with SSL3 disabled by default to protect against the POODLE attack vulnerability. Applies to WM/CE with Zebra webkit only. 

**Possible Values**

* 0 – Disabled
* 1 – Enabled

#### Example
	:::xml
	<EnableSSL3 value="1"/>

### UserAgent
Stores information about the device’s operating environment. Can be used to spoof the device to a web server, for example to view content designed for the desktop on the mobile screen. When visiting a web server, the WebKit browser can be used to report its User-Agent header as the value specified. 

Use the following substitution variables:
%p – Platform name (“Windows CE ” + version number)
%w – WebKit version number
%e – Zebra WebKit version number

In PocketBrowser 2.1 and higher, the default value was changed to work out of the box with a greater number of server configurations. Prior to PocketBrowser 2.1, the default user agent was “Mozilla/5.0, AppleWebKit (KHTML, i.e. Gecko), MotorolaWebKit, Safari.” This attribute cannot be set to a custom value for apps using Internet Explorer as their rendering engine. If using IE, please leave this value as the default value. Android does not support a custom UserAgent. 

**Possible Values**

* String

#### Example
	:::xml
	<UserAgent value="Mozilla/5.0 (%p) AppleWebKit/%w (KHTML, like Gecko) Safari/%w"/>

### ViewportEnabled
Controls viewport meta tag processing (enabled by default).

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<ViewportEnabled value="1"/>

### ViewportWidth
Sets the default viewport width for pages that do not have a viewport meta tag. If not specified, uses 1:1 scaling. 

**Possible Values**

* A number > 0 specifying the width scale

#### Example
	:::xml
	<ViewportWidth value="1"/>

### CaFile
Specifies the location of a device-resident file containing CA certificates in PEM format. Please [refer to openSSL](http://www.openssl.org/docs/ssl/SSL_CTX_load_verify_locations.html) for more information. Applies to Android and Windows Mobile/CE. 

> Note: Enteprise Browser only supports only a single certificate file in PEM format. If multiple certificates must be passed to the Webkit browser on WM/CE, the contents of multiple `.pem` certificates can be combined into a single file using any standard text editor. The combined file can then be specified in the CaFile parameter. 

**Possible Values**

* Fully qualified local path and file name

#### Example
	:::xml
	<CaFile value="cert-file-name"/>

### CaPath
>Note : This setting is not supported in Enterprise Browser.

A directory containing CA certificates in PEM format (one certificate per file). The OpenSSL c_rehash utility must be used to generate appropriately named links to the certificate files. See [http://www.openssl.org/docs/ssl/SSL_CTX_load_verify_locations.html](http://www.openssl.org/docs/ssl/SSL_CTX_load_verify_locations.html) for more information. 

**Possible Values**

* Local File path on the device

### VerifyPeerCertificate
Controls whether server certificates will be verified against the internal certificates. Enabled by default. Useful for debugging, a value of 0 (disabled) is equivalent to automatically clicking ‘OK’ on a web browser’s dialog when requesting approval for an untrusted certificate. **It is strongly recommended that this feature be enabled for deployment**. 

**Possible Values**

* 0 - Disable Peer certificate verification
* 1 - Enable Peer certificate verification

#### Example
	:::xml
	<VerifyPeerCertificate value="1"/>

### NetworkCookieDatabase
Specifies the location of the database to hold persistent cookies, if desired. If the specified file does not exist, one will be created. Persistent cookies will be loaded from this file and saved back to it when Enterprise Browser exits. If the file is read-only, it will not be overwritten. If not specified, cookies will not persist. Case sensitive. 

**Possible Values**

* Fully qualified local path.

> Note: The operating systems of some devices have case sensitive file systems. Therefore it is good practice to always keep URL values in the Config.xml file case identical to the names of the actual files.

#### Example
	:::xml
	<NetworkCookieDatabase value="file:///my-cookie-db"/>

### Cache
The browser cache size, in whole MBs.

**Possible Values**

* Cache size in whole MBs

#### Example
	:::xml
	<Cache value="5"/>

## DeviceKeys
### EnableCtrlKey_X
Specifies which control-key combinations (copy, paste, etc.) should be enabled. To enable a control-key combination, define a tag using EnableCtrlKey_X, replacing the ‘X’ with the key being enabled. For example, to enable copying with control-C, your tag will include EnableCtrlKey_C as below. See the sample Config.xml file in user guide for correct branch placement. **All CTRL key combinations are disabled on Windows CE by default**. 

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<EnableCtrlKey_C value="1"/>

## DefaultMetaTags
### MetaTag
Permits a default meta tag to be specified so that a tag required by the application need not be present on every HTML page. Set a default tag by specifying the tag’s module, followed by the tilde character (~) and the properties of the module you wish to set, as specified in EMML 1.1. If the meta tag is present in both the configuration and a loaded page, the page will take priority. Only persistent tags can be set logically in the configuration. Tag persistence is covered in the ‘additional information’ section in the help file. Meta tag properties and their possible values are explained in the corresponding API.

**Possible Values**

* [Module]~[property to set]

#### Example
	:::xml
	<MetaTag value="QuitButton~visibility:visible;width:50;"/>

## Geolocation
### GeolocationEnabled
Controls HTML5 Geolocation. When enabled on a device that supports geolocation and is in range of a GPS network, the geolocation data is returned to the defined JavaScript callback. When disabled the defined JavaScript error callback is called, notifying the app that the permission to using Geolocation is disabled.

**Possible Values**

* 0 - Disabled
* 1 - Enabled

#### Example
	:::xml
	<GeolocationEnabled value="1"/>

## Engine
### EngineInUse
Permits the selection of a rendering engine (IE or Webkit) when deploying a Webkit installation of Enterprise Browser to Windows CE6 or Windows Mobile 6.5 and above. If you are deploying an IE-only installation, Webkit will not be available as an option.

**Possible Values**

* IE - Use the IE engine
* Webkit - Use the webkit engine (webkit installation only)

#### Example
	:::xml
	<EngineInUse value="IE"/>

## TabInstance
### NewTabPhysicalMemLimit
Controls whether a new Tab will be created using the [NativeTabbar.create API](#api-NativeTabbar) when physical memory percentage hits a specific threshold. For example, if set to 80, new tabs will stop being created when physical memory usage on the device reaches or exceeds 80 percent the total available. Once the defined limit is reached, the NativeTabbar.create API callback will contain tabEvent = onTabNewError.

**Possible Values**

* 0 - 100 (percent; 100 = unlimited)

#### Example
	:::xml
	<NewTabPhysicalMemLimit value="50"/>

### NewTabVirtualMemLimit
Controls whether a new Tab will be created using the [NativeTabbar.create API](#api-NativeTabbar) when a virtual memory usage percentage is hit. For example, if set to 80, new tabs will stop being created when the virtual memory usage reaches or exceeds 80 percent of the total available. Once the defined limit is reached, the NativeTabbar.create API callback will contain tabEvent = onTabNewError.

**Possible Values**

* 0 - 100 (percent; 100 = unlimited).

#### Example
	:::xml
	<NewTabVirtualMemLimit value="50"/>

## ZoomKey
### ZoomInKey
Controls zoom-IN behavior for application text using function key(s) configured with the EnableFunctionKey_X parameter. This setting will not be applied if the parameter is missing, left blank or contains an invalid key code. Note: The function keys used for Zoom IN or Zoom OUT operation will not be accessible via the current and previous Key Capture APIs. Applies to WM/CE with IE or Zebra Webkit only. Other requirements are detailed in the Remarks section at the bottom of this guide. [Read more](../guide/configreference?Remarks).

**Possible Values**

* Hexadecimal key code for any function key (F1 to F24)

#### Example
	:::xml
	<ZoomInKey value="0x70"/>

### ZoomOutKey
Controls zoom-OUT behavior for application text using function key(s) configured with the EnableFunctionKey_X parameter. This setting will not be applied if the parameter is missing or left blank or contains an invalid key code. Note: The function keys used for Zoom IN or Zoom OUT operation will not be accessible via the current and previous Key Capture APIs. Applies to WM/CE with IE or Zebra Webkit only. Other requirements are detailed in the Remarks section at the bottom of this guide. [Read more](../guide/configreference?Remarks).

**Possible Values**

* Hexadecimal key code for any function key (F1 to F24)

#### Example
	:::xml
	<ZoomOutKey value="0x71"/>

## isWindowsKey
Allows Enterprise Browser 1.2 and later to mimic Windows Mobile key codes for the device’s hardware keys when used with the KeyCapture API of PocketBrowser or RhoElements 2.x. When enabled, the application will substitute its normal Android kewys with the Windows Mobile function key code values for keys F1 through F12. This can be useful for supporting both Android and Windows device platforms with a single codebase. If set to 0 or not present, the application will get the Android function key code value. Supported on Android devices with PocketBrowser or RhoElements 2.x Key Capture API. 

**Possible Values**

* 0 - Send Android Key Codes for F1 to F12
* 1 - Send Windows Mobile Key Codes for F1 to F12


#### Example
	:::xml
	<isWindowsKey value="1"/>

##Shortcut
###ShortcutCreationEnabled
Applicable only when using the Enterprise Browser Shortcut Creator utility. Controls automatic creation of app shortcuts on Android and Windows Mobile/CE target devices when Enterprise Browser is launched. When option 1 is selected, checks for and creates new shortcuts at every launch, Setting persists following EB uninstall/re-install. Setting is lost after cold reboot. Disabled by default. 

**Possible Values**

* Possible Values 
* **0 - Shortcut creation disabled**
* 1 - Shortcuts created at every launch
* 2 - Shortcuts created on initial launch only

#### Example
	:::xml
	<ShortcutCreationEnabled value="1"/>



## Remarks
### <a name="_caseSensitivity"></a>Case Sensitivity
The operating systems of some devices have case sensitive file systems. Therefore it is good practice to always keep URL values in the Config.xml file case identical to the names of the actual files.

### <a name="_batteryRefresh"></a>Battery Polling on the Enterprise Tablet
On the Enterprise Tablet the battery notification is asynchronous. For this reason, BatteryRefresh is not supported on the Enterprise Tablet. The effect of this is that a batteryEvent is fired only when the battery level changes. This has been done to save battery power compared to polling.

### Open and Print
If you plan on enabling the Ctrl+O or Ctrl+P (open dialog and print dialog, respectively) shortcut key combinations in your app, be aware that they do not work on Windows CE7 devices.

### <a name="_fnbehavior"></a>Interaction between FunctionKeysCapturable and EnableFunctionKey configuration settings
On Windows Mobile and Windows CE devices full control is given to the developer over how their application handles function keys.  Because of the limitations of the operating system any settings applied will persist until the device is next warm booted.  Which function keys have default operating system behavior will vary from device to device, e.g. on the MC75a F3 and F4 represent the red and green phone keys and on many devices the volume keys are also mapped as Function keys.  Not all function keys will have default operating system behavior.

Unblocking function keys may expose the underlying operating system, particularly the red and green phone keys will give access to the start menu and programs.

The table below shows the behavior of the Enterprise Browser when Function Keys are pressed given the possible configuration settings:

<table border=1 width="100%" class="re-table">
	<tr>
		<th></th>
		<th>Function Keys Capturable = TRUE</th>
		<th>Function Keys Capturable = FALSE</th>
	</tr>

	<tr>
		<th>Enable Function Key = TRUE</th>
		<td valign="top">
			<ul>
				<li>All Function Keys <b>can</b> be captured by the <a href="index.html#api-keycapture">Key Capture Module</a>
				<li>Function Key will <b>not</b> have its default Operating system behavior
			</ul>
		</td>
		<td valign="top">
			<ul>
				<li>Function Keys with default OS behavior <b>can not</b> be captured by the <a href="index.html#api-keycapture">Key Capture Module</a>
				<li>Function Keys without default OS behavior <b>can</b> be captured by the <a href="index.html#api-keycapture">Key Capture Module</a>
				<li>Function Key <b>will</b> have its default Operating system behavior (if any)
			</ul>
		</td>
	</tr>

	<tr>
		<th>Enable Function Key = FALSE</th>
		<td valign="top">
			<ul>
				<li>All Function Keys <b>can</b> be captured by the <a href="index.html#api-keycapture">Key Capture Module</a>
				<li>Function Key will <b>not</b> have its default Operating system behavior
			</ul>
		</td>
		<td valign="top">
			<ul>
				<li>All Function Keys <b>can not</b> be captured by the <a href="index.html#api-keycapture">Key Capture Module</a>
				<li>Function Key will <b>not</b> have its default Operating system behavior (if any)</li>
			</ul>
		</td>
	</tr>
</table>

