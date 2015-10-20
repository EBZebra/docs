# Enterprise Browser On-device Config

## On-device Config Editor

The on-device configuration feature permits several key runtime settings contained in the Config.xml* file to be edited on-device, _without_ the aid of a PC. Apps made with Enterprise Browser 1.3 and higher have the ability to access key capture, zoom in/out, start page and other settings; a full list below. The settings panel can be secured with a password, assign an exit password to other EB apps, and show or hide its own control from the user interface. 

On-device configuration works through a new interface in the Settings panel, and is supported on Android with the stock webkit and on Windows Mobile/CE platforms with the Zebra webkit and IE engine. Settings edited on the device take effect the first time Enterprise Browser is launched following the change. 

Configuring the full set of [runtime settings in the Config.xml](../guide/configreference) still requires a computer, but that too has been made significantly easier in EB 1.3 with the introduction of the [Config Editor utility](../guide/ConfigEditor), a new utility for Windows that edits and deploys Config.xml files from a single panel.  

* The Config.xml file contains settings for all runtime behavior of an Enterprise Browser app. It must reside on the target device or the app will not launch. 

## Accessing On-Device Configuration 
A button for accessing on-device configuration is displayed by default following the initial Enterprise Browser 1.3 installation, and thereafter when the EB app is restarted unless or until a different start page is assigned using the Startpage parameter. 

The first time an Enterprise Browser 1.3 app is launched, a screen will appear like the one below. 


image 1

**To edit the config.xml file that's on the device, press the "Settings" button**. Pressing the "Return to OS" button will skip settings configuration and bring up the operating system. To display the Settings button again, simply relaunch Enterprise Browser app. 

Pressing Settings will bring up a screen like the one below. 


image 2

**To activate your EB app's start page, enter the URL in the Value field of the StartPage parameter**, as highlighted below. 

Unless you're done with settings, **Do not apply the changes yet**. The next time the app is launched, it will display its intended start page and not the Settings button. Fortunately, there's another way to access the Settings panel. 

**Set the Value of the Settings Button Enabled parameter to Enabled**. This will cause a Settings button to appear in the UI at all times. Notice that a password also can be applied to the Settings panel, if desired. 

image 3

**Press Apply to update the Config.xml file with the new settings**. A screen like the one below will be displayed. Restart the app to activate the changes. 

image 4

Next time the app is restarted, a Settings button will appear in the UI like the one shown below. Other Action buttons are explained below. 

image 5

## Action Buttons

The on-device settings panel presents four buttons.  These buttons are present at bottom of the settings page and each has an unique function which is described below.
         
1. **Apply updates the config.xml** with the new values. Note that Startpage settings will persist after a cold boot or reinstallation of Enterprise Browser.  

2. **Quit exits the app without saving**. If ExitPasswordEnabled parameter is Enabled, the Quit button will cause a password prompt to appear. 

3. **Back navigates to the previous page** with no prompt. Unsaved changes are lost. 

4. **Reset will revert all settings the their default values**.

## On-Device Configurable Settings
### Debugbuttons
When enabled, presents a set of controls useful for development and debugging purposes. Note: When using this feature with the IE engine on a CE device, screen distortion may be noticed when scrolling.

### HTTP_Proxy
Specifies the URL and port number for the HTTP proxy. Leave this field blank if no proxy is to be used. **Applies only to WM/CE devices with the Zebra WebKit engine or Android with the stock webkit**. When Internet Explorer is used, proxy settings are picked up from Windows connection manager.

### HTTPS_Proxy 
Specifies the URL and port number for the HTTPS proxy. Leave this field blank if no proxy is to be used. **Applies only to WM/CE devices with the Zebra WebKit engine or Android with the stock webkit**. For otherwise configured WM/CE devices, use HTTP_Proxy. 

### VerifyPeerCertificate
Controls whether server certificates will be verified against the internal certificates. Enabled by default. Useful for debugging, a value of 0 (disabled) is equivalent to automatically clicking ‘OK’ on a web browser’s dialog when requesting approval for an untrusted certificate. It is strongly recommended that this feature be enabled for deployment.

### Username
Specifies the username to be provided automatically when Enterprise Browser is instructed to navigate to a page that requires basic or digest HTTP authentication. If this setting is absent, a login prompt will be displayed with a username of (""). In most cases, Enterprise Browser will permit one incorrect entry of credentials before presenting the HTTP 401 Unauthorized page. When used with IE engine, will permit multiple incorrect entries. Applies to Android and WM/CE.

### Password
Specifies the password to be provided automatically when Enterprise Browser is instructed to navigate to any page that requires basic or digest HTTP authentication. If this setting is absent, a login prompt will be displayed with a password of (""). In most cases, Enterprise Browser will permit one incorrect entry of credentials before presenting the HTTP 401 Unauthorized page. When used with IE engine, will permit multiple incorrect entries. Applies to Android and WM/CE.

### ExitPasswordEnabled
When enabled, prompts for a password when quitting an Enterprise Browser app. Password is stored using the ExitPasswordValue tag. Disabled by default.

### ExitPasswordValue
Contains the password for quitting Enterprise Browser when function is enabled using the ExitPasswordEnabled tag. Can be edited only when ExitPasswordEnabled tag is set to '1' and cannot be left empty.

### SettingsButtonEnabled
When enabled, places a settings button at the bottom right corner of all screens that routes to the settings page. NOTE: When the IE engine is used on a Windows CE device, this feature might cause screen distortion when scrolling.

### SettingsPageProtectionEnabled
When enabled, prompts for a password before allowing access to the Settings page. Password is stored using the SettingsPagePassword tag.

### SettingsPagePassword
Contains the password for accessing the Settings page when password function is enabled using the SettingsPageProtectionEnabled tag. Can be edited only when SettingsPageProtectionEnabled tag is set to '1' and cannot be left empty.

### FunctionKeysCapturable
Determines behavior of Function keys on Windows Mobile/CE and Android devices. When enabled, device Function keys are capturable using the Key Capture API. When disabled, keys revert to the device’s default behavior. This setting is not specific to an application. When enabled, settings are applied globally to the device. Refer to the EnableFunctionKey_X tag and complete documentation for more information about the interaction between the FunctionKeysCapturable and EnableFunctionKey_X parameters.

### ZoomInKey
Controls zoom-IN behavior for application text using function key(s) configured with the EnableFunctionKey_X parameter. This setting will not be applied if the parameter is missing, left blank or contains an invalid key code. Note: The function keys used for Zoom IN or Zoom OUT operation will not be accessible via the current and previous Key Capture APIs. Applies only to WM/CE with IE or Zebra Webkit. Other requirements are detailed in the Remarks section at the bottom of this guide. Read more.

### ZoomOutKey
Controls zoom-OUT behavior for application text using function key(s) configured with the EnableFunctionKey_X parameter. This setting will not be applied if the parameter is missing or left blank or contains an invalid key code. Note: The function keys used for Zoom IN or Zoom OUT operation will not be accessible via the current and previous Key Capture APIs. Applies only to WM/CE with IE or Zebra Webkit. Other requirements are detailed in the Remarks section at the bottom of this guide.Read more.

### StartPage 
Defines the start page of a Enterprise Browser application, displayed at launch. This should be a local file to avoid connectivity issues on startup. Case sensitive. This setting is stored in the Windows registry and persists after reboot. 

**NOTE**: The Startpage value persists on the device even after a cold boot or uninstallation. If Enterprise Browser is re-installed, a prompt will be displayed on first launch offering to accept the previous Startpage or enter a new one. 


