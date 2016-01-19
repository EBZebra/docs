
# Keycode Mapping Guide

##Overview

Keycodes are set of constants that uniquely identify the ASCII value of key-presses on a device (whether hard or soft). The keycodes for keys with multiple values (such as upper and lower case) are accessed with the shift or other modifier key. Enterprise Browser 1.4 permits Android keycode values to be assigned from a file when an Enterprise Browser app starts up.

**This guide applies to Android only**.

### Keycode Handling 
On Android devices, the keycode values of certain keys are sometimes not returned as expected. To ensure control and accuracy of key presses, the desired keycode value(s) can be assigned through the current [KeyCapture 4.x API](../api/keycapture) as well as legacy 2.x versions. The steps in thie guide apply to all API versions. 

The following facts apply generally to keycode mapping for Enterprise Browser: 

* Keycode mapping requires Enterprise Browser 1.4 or higher.
* Mapping requires the inclusion of a KeyCapture API. [Here's how](../api/keycapture). 
* Keycode mappings are contained in the `keycodemapping.xml` file.
* The `keycodemapping.xml` file is the same for all versions of the KeyCapture API.
* The mapping file is read by Enterprise Browser only at launch.
* Upon app install, a mapping-file template is placed in `/android/data/com.symbol.enterprisebrowser`.
* Keycodes not mapped (or left blank in the mapping file) retain their default values. 
* Keycode mapping requires no settings in the `Config.xml` file. 


##Mapping Keycodes 
To assign custom keycodes to Android hard or soft keys, follow these simple steps:  

&#49;. [Deploy Enterprise Browser](../guide/setup) to the device. 

&#50;. Navigate to `/android/data/com.symbol.enterprisebrowser` on the device. 

&#51;. Copy the `keycodemapping.xml` template to a PC and open it for editing. 

The template should look similar to the image below:  

	:::xml
	<?xml version = "1.0"?>
	<!--
	.....KeyCode Mapping File....
	-->
	<KeyCodeConfiguration>

		<KeyCodes>

			<!-- Example -->
			<!-- <KEYCODE  name="KEYCODE_0" from="7" to="0x30" /> -->
	  
		</KeyCodes>

	</KeyCodeConfiguration>

&#52;. Copy and paste the example KEYCODE tag (omitting the comment tags) as shown:

	:::xml
	...
	<KeyCodes>

		<!-- Example -->
		<!-- <KEYCODE  name="KEYCODE_0" from="7" to="0x30" /> -->

		<KEYCODE  name="KEYCODE_0" from="7" to="0x30" />

	</KeyCodes>
	...

&#53;. Replace the values (within the quotes) for name=, from= and to= fields, as desired. 

&#54;. Repeat steps 4 and 5 until all keycodes are mapped as required.

For example:  

		:::xml     
		<?xml version = "1.0"?>
		<!--
		.....KeyCode Mapping File....
		-->
		<KeyCodeConfiguration>
			<KeyCodes>
				<!-- Example -->
				<!-- <KEYCODE  name="KEYCODE_0" from="7" to="0x30" /> -->
				<KEYCODE  name="KEYCODE_F1" from="131" to="20" />
				<KEYCODE  name="KEYCODE_ENTER" from="46" to="76" />
				<KEYCODE  name="KEYCODE_E" from="33" to="7" />
				<KEYCODE  name="KEYCODE_BKSC" from="46" to="32" /> 
				<KEYCODE  name="KEYCODE_VOL_DOWN" from="25" to="175" />	
			</KeyCodes>
		</KeyCodeConfiguration>


&#55;. Copy the modified `keycodemapping.xml` file to its original location on the device, replacing the template. 

&#56;. Relaunch the Enterprise Browser app and check that its keycodes are mapped as specified.  

##More Information
For more information, please refer to the [Android KeyEvents method](http://developer.android.com/reference/android/view/KeyEvent.html) docs. 