
# Keycode Usage

##Overview

Keycodes are hexadecimal constants with a '0x' prefix that uniquely identify the ASCII equivilent of each soft or hard key pressed on the device. Keycodes for keys with multiple values such as upper and lower case are accessed with a modifier such as the shift key. 

## Keycode Handling 
On Android devices, the keycode values of certain keys are sometimes not returned as expected when the key is pressed. To ensure control and accuracy of key presses, the desired keycode value(s) can be assigned using the [KeyCapture API](../api/keycapture). This process is supported on the current KeyCapture 4.x API as well as the legacy 2.x version. The steps detailed here cover both. 

**Applies to Android only**.

##Mapping Keycodes 

* Keycode mappings are contained in the file `keycodemapping.xml`.
* This file is found in `/Enterprise Browser/JavaScript Files/Enterprise Browser`, a directory on the computer that contains the Enterprise Browser installation.

Blank and contains no mappings? 
Keycodes not mapped retain their default values. 

`keycodemapping.xml` file is 

is present in the installation directory when Enterprise Browser application is installed.

the included files will be found in: 

*  The `keycodemapping.xml` is used for remapping the key code value with the desired key code value for the particular key pressed.

* The `keycodemapping.xml` file will always be used as an input from 2.x or 4.x KeyCapture API.

STEPS FOR REMAPPING

&#49;. Install Enterprise Browser, after installation one can see keycodemapping.xml present in the installation directory.

&#50;. Tag called "KEYCODE" is present inside keycodemapping.xml file as shown below. 

              <!-- Example -->
              <!-- <KEYCODE  name="KEYCODE_0" from="7" to="0x30" /> -->  

&#51;. One can map any key code value with the desired key code value for any key pressed.
 
               For Example:     
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
&#52;. Modify the xml and update the xml in the installation directory.

&#53;. Relaunch the Enterprise Browser Application.

&#54;. Check the key code value from 2.x or 4.x KeyCapture API. It will return the remapped key code value of the particular key pressed which was remapped using keycodemapping.xml.

