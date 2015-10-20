# Enterprise Browser On-device Config

## On-device Config Editor

Apps created for Enterprise Browser 1.3 now have the ability to their own key runtime settings, _after_ being deployed to the device, and _without_ the aid of a PC.

An on-device config editor introduced with EB 1.3 permits several key runtime settings in the Config.xml file to be edited on-device. These include username and password settings for access to the Settings panel and Exit-on-password, features also introduced with 1.3. 

Editable settings also include key capture, zoom in/out and the app's start page; a complete list is below. Settings take effect the first time Enterprise Browser is launched following a change. 

On-Device Configuration works through a new interface in the Settings panel, and is supported on Android with the stock webkit and on Windows Mobile/CE platforms with the Zebra webkit and IE engine.

Gaining access to the full set of [runtime settings in the Config.xml](../guide/configreference) still requires a computer, but that too has been made significantly easier with the introduction of the [Config Editor utility](../guide/ConfigEditor) for Windows, which also was introduced with Enterprise Browser 1.3.  

## Using the On-Device Config Editor
There are two ways to access the On-device Config Editor; one is automatic and the other is disabled by default and must be configured.

### Automatic access
The first time an Enterprise Browser 1.3 app is launched, a screen will appear like the one below. 