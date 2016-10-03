#Scanandpair


## Overview
The Scanandpair provides mechanism to pair or unpair the Bluetooth device with the remote Bluetooth device using remote device name or mac address. NOTE: Bluetooth is not enabled or disabled by this API for Scanandpair functionality. User need to ensure to enable or disable the Bluetooth using EnterpriseBrowser Intent API or manually via Device settings. Bluetooth connectivity should be in visible state. This API is supported from Android Kitkat version onwards.
## Enabling the API

There are two methods of enabling the Scanandpair API:

* Include all 'ebapi' modules
* Include only the API modules you need

Both methods are explained below. 

Either way, the included files will be found in: 
`/Enterprise Browser/JavaScript Files/Enterprise Browser`,
a directory on the computer that contains the Enterprise Browser installation.

### Include all JS API modules
To include all JavaScript APIs, copy the `ebapi-modules.js` file to a location accessible by your app's files and include the JavaScript modules file in your app. For instance, to include the modules file in your `index.html`, copy the file to the same directory as your index.html and add the following line to the HEAD section of your index.html file:

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>

> This will define the EB class within the page. **Note that the path for this file is relative to the current page** (index.html). Any page on which the modules are required will need to have the required .js file(s) included in this fashion.

### Include only the modules you need
To include individual APIs, you must first include the `ebapi.js` in your HTML, and then the additional required API file(s). For instance, to use the Scanandpair API, add the following code to the HTML file(s). Again, this assumes that relevant API files have been copied to the same directory as the HTML.

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.scanandpair.js"></script>

> In the code lines above, notice that `ebapi.js` is included first, followed by `eb.scanandpair.js`, which is the Scanandpair API for Enterprise Browser. **This coding is required on each HTML page whenever an individual API will be called from that page**.

        


##Methods



### addStatusListener()
User can register to get status and message notification via callback. NOTE: This is the recommended and an alternative approach to getState and getResult properties. If this method is invoked, it automatically returns all the possible status and its result (one-by-one in an asynchronous manner) via the registered callback without manually invoking the same via getState and getResult properties.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>It provides the exact status of Bluetooth pairing or unpairing. </p></li><li>result : <span class='text-info'>STRING</span><p>It provides the exact result code of Bluetooth pairing or unpairing. </p></li><li>message : <span class='text-info'>STRING</span><p>It provides the exact information related to Bluetooth pairing or unpairing. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Scanandpair.addStatusListener()</code> 


### getAllProperties()
This method will return all of object/value pairs for the propertyNames of the API class.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li> : <span class='text-info'>STRING</span><p> </p></li></ul></ul>

####Returns
Synchronous Return:

* HASH : Map of all available properties<ul><li> : <span class='text-info'>STRING</span><p> </p></li></ul>

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Scanandpair.getAllProperties()</code> 


### getDefault()
This method will return an object that represents the default instance of the API Class. For example Camera.getDefault will return a Camera object that represents the default camera.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>SELF_INSTANCE</span></p><ul></ul>

####Returns
Synchronous Return:

* SELF_INSTANCE : Default object of Module.

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Scanandpair.getDefault()</code> 


### getProperties(<span class="text-info">ARRAY</span> arrayofNames)
This method will return a set of object/value pairs for the list of the propertyName that is passed in. The propertyNames must be a valid property of the API class.

####Parameters
<ul><li>arrayofNames : <span class='text-info'>ARRAY</span><p>List of properties I want to know about </p></li><ul><li><i>Object</i> : <span class='text-info'>STRING</span><p> </p></li></ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li> : <span class='text-info'>STRING</span><p> </p></li></ul></ul>

####Returns
Synchronous Return:

* HASH : Map of properties I want to know about<ul><li> : <span class='text-info'>STRING</span><p> </p></li></ul>

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Scanandpair.getProperties(<span class="text-info">ARRAY</span> arrayofNames)</code> 


### getProperty(<span class="text-info">STRING</span> propertyName)
This method will return the value of the propertyName that is passed in. The propertyName must be a valid property of the API class.

####Parameters
<ul><li>propertyName : <span class='text-info'>STRING</span><p>The property to return info about. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>STRING</span></p><ul></ul>

####Returns
Synchronous Return:

* STRING : The property to return info about.

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Scanandpair.getProperty(<span class="text-info">STRING</span> propertyName)</code> 


### pair(<span class="text-info">HASH</span> pairInfo)
This method is used for pairing the Bluetooth device with the remote Bluetooth device. It will return the exact result code of Bluetooth pairing on invoking this method. NOTE: If the alwaysScan property is set to true, then this method scans a barcode to get the Bluetooth address or name of a remote Bluetooth device depending on the input provided to the scanDataType property. Else user need to set the property macAddress or deviceName manually of the remote Bluetooth device which need to be paired depending on the input provided to the scanDataType property. User can also register the callback via addStatusListener method before invoking the pair method for getting the detailed status, it's respective result code and it's respective message. It provides information one-by-one in an asynchronous manner via registered callback.

####Parameters
<ul><li>pairInfo : <span class='text-info'>HASH</span> <span class='label label-info'>Optional</span><p>Map of Scanandpair properties to be set. It is used for setting the required information before pairing the Bluetooth device with the remote Bluetooth device. NOTE: If user, has passed the empty argument, then it is mandatory for the user to set the property macAddress or deviceName of the remote Bluetooth device which need to be paired depending on the input provided to the scanDataType property. Valid `properties` for this parameter are the properties available to this API module. Check the <a href='#api-Scanandpair?Properties'>property section</a> for applicable properties. Not providing properties to this function will use the default properties, or those previously set on the Scanandpair instance. However, it is mandatory for the user to set the property macAddress or deviceName of the remote Bluetooth device which need to be paired depending on the input provided to the scanDataType property.</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>STRING</span></p><ul></ul>

####Returns
Synchronous Return:

* STRING

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Scanandpair.pair(<span class="text-info">HASH</span> pairInfo)</code> 


### removeStatusListener()
User can un-register to get status and message notification via callback.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Scanandpair.removeStatusListener()</code> 


### setDefault(<span class="text-info">SELF_INSTANCE: EB.Scanandpair</span> defaultInstance)
This method allows you to set the attributes of the default object instance by passing in an object of the same class.

####Parameters
<ul><li>defaultInstance : <span class='text-info'>SELF_INSTANCE: EB.Scanandpair</span><p>An instance object that is of the same class. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Scanandpair.setDefault(<span class="text-info">SELF_INSTANCE: EB.Scanandpair</span> defaultInstance)</code> 


### setProperties(<span class="text-info">HASH</span> propertyMap)
This method will set the values of a list of properties for the API class. The propertyName must be a valid property for the class and must also not be read only.

####Parameters
<ul><li>propertyMap : <span class='text-info'>HASH</span><p>Map of properties I want to set </p></li><ul><li><i>Object</i> : <span class='text-info'>STRING</span><p> </p></li></ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Scanandpair.setProperties(<span class="text-info">HASH</span> propertyMap)</code> 


### setProperty(<span class="text-info">STRING</span> propertyName, <span class="text-info">STRING</span> propertyValue)
This method will set the value of a property for the API class. The propertyName must be a valid property for the class and must also not be read only.

####Parameters
<ul><li>propertyName : <span class='text-info'>STRING</span><p>The one property name that I want to set </p></li><li>propertyValue : <span class='text-info'>STRING</span><p>The one property value that I want to set </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Scanandpair.setProperty(<span class="text-info">STRING</span> propertyName, <span class="text-info">STRING</span> propertyValue)</code> 


### unpair(<span class="text-info">HASH</span> unpairInfo)
This method is used for unpairing the Bluetooth device with the remote Bluetooth device. It will return the exact result code of Bluetooth unpairing on invoking this method. NOTE: If the alwaysScan property is set to true, then this method scans a barcode to get the Bluetooth address or name of a remote Bluetooth device depending on the input provided to the scanDataType property. Else user need to set the property macAddress or deviceName manually of the remote Bluetooth device which need to be unpaired depending on the input provided to the scanDataType property. User can also register the callback via addStatusListener method before invoking the unpair method for getting the detailed status, it's respective result code and it's respective message. It provides information one-by-one in an asynchronous manner via registered callback.

####Parameters
<ul><li>unpairInfo : <span class='text-info'>HASH</span> <span class='label label-info'>Optional</span><p>Map of Scanandpair properties to be set. It is used for setting the required information before unpairing the Bluetooth device with the remote Bluetooth device. NOTE: If user, has passed the empty argument, then it is mandatory for the user to set the property macAddress or deviceName of the remote Bluetooth device which need to be unpaired depending on the input provided to the scanDataType property. Valid `properties` for this parameter are the properties available to this API module. Check the <a href='#api-Scanandpair?Properties'>property section</a> for applicable properties. Not providing properties to this function will use the default properties, or those previously set on the Scanandpair instance. However, it is mandatory for the user to set the property macAddress or deviceName of the remote Bluetooth device which need to be unpaired depending on the input provided to the scanDataType property.</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>STRING</span></p><ul></ul>

####Returns
Synchronous Return:

* STRING

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Scanandpair.unpair(<span class="text-info">HASH</span> unpairInfo)</code> 


##Properties



###alwaysScan

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Specifies if a scan should always be performed to get the Bluetooth address or name of the remote Bluetooth device. If set to true, the provided deviceName or macAddress properties are ignored and scanning is always done. If set to false, then scanning is skipped and the provided deviceName or macAddress properties are directly used for pairing or unpairing. The default value is set to true.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.Scanandpair.alwaysScan</code>



####Platforms

* Android

###deviceIdentifier

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the type of scanner to be used for scanning the barcode. The deviceIdentifier property has no impact if the alwaysScan property is set to false. The default value is set to DEFAULT.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Scanandpair.INTERNAL_CAMERA1 - String: INTERNAL_CAMERA1 Use first available camera.
* Constant: EB.Scanandpair.INTERNAL_IMAGER1 - String: INTERNAL_IMAGER1 Use first available imager.
* Constant: EB.Scanandpair.INTERNAL_LASER1 - String: INTERNAL_LASER1 Use first available laser scanner.
* Constant: EB.Scanandpair.BLUETOOTH_IMAGER1 - String: BLUETOOTH_IMAGER1 Use first available Bluetooth imager. Note: This requires pairing the Bluetooth Imager before calling the pair or unpair methods.
* Constant: EB.Scanandpair.DEFAULT - String: DEFAULT Use default scanner. Depending on the mobile device, the first available scanner can be laser, imager or camera.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.Scanandpair.deviceIdentifier</code>



####Platforms

* Android

###deviceName

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the Bluetooth name of the remote Bluetooth device. If the alwaysScan property is set to false, then scanning is skipped and the provided Bluetooth name is directly used for pairing or unpairing. If the alwaysScan property is set to true, then provided Bluetooth name is ignored and scanning is always done. The maximum allowed length of the Bluetooth name barcode that can be scanned or explicitly provided is 123 characters. The deviceName property is always chosen for pairing or unpairing if scanDataType property is set to DEVICE_NAME.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.Scanandpair.deviceName</code>



####Platforms

* Android

###getResult

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
This property provides the exact result code of the pair or unpair method. Note: When the getState property returns ERROR, this property can be used to find out the exact error code information.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.Scanandpair.getResult</code>



####Platforms

* Android

###getScannedData

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
Provides the last scanned data. The maximum allowed length of the barcode that can be scanned is 123 characters. The getScannedData property has no impact if the alwaysScan property is set to false. In such cases, it holds the last scanned data and not the one which is entered manually.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.Scanandpair.getScannedData</code>



####Platforms

* Android

###getState

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
This property provides the exact state of the pair or unpair method.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.Scanandpair.getState</code>



####Platforms

* Android

###isPreviousCommandPending

####Type
<span class='text-info'>BOOLEAN</span> <span class='label label-warning'>Read Only</span>
####Description
This property provides information, if any of the previous request is pending. If this property returns true, the client application must wait for the previous request to complete before invoking the methods or setting the properties of Scanandpair API.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.Scanandpair.isPreviousCommandPending</code>



####Platforms

* Android

###macAddress

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the MAC address of the remote Bluetooth device. If the alwaysScan property is set to false, then scanning is skipped and the provided Bluetooth address is directly used for pairing or unpairing. If the alwaysScan property is set to true, the provided Bluetooth address is ignored and scanning is always done. The allowed lengths of the Bluetooth address barcode that can be scanned is 17 characters. The macAddress property is always chosen for pairing or unpairing if scanDataType property is set to MAC_ADDRESS. NOTE: Ensure to set the colon separted values. For Example: 10:23:A4:CA:50:6D
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.Scanandpair.macAddress</code>



####Platforms

* Android

###notificationType

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the notifications which indicate the progress of the different scanning states. The default value is set to BEEPER.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Scanandpair.BEEPER - String: BEEPER Beeper notification. Raises pre-defined beep sequences. This will give the user an audible alert when specific operations are performed.
* Constant: EB.Scanandpair.NONE - String: NONE Disable notification. Do not raise notification for any type of operations.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.Scanandpair.notificationType</code>



####Platforms

* Android

###pairingPin

####Type
<span class='text-info'>STRING</span> 
####Description
PIN required to pair with the remote Bluetooth device. The provided authentication PIN is used for pairing. The maximum allowed length for the authentication PIN is 15 characters.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.Scanandpair.pairingPin</code>



####Platforms

* Android

###scanDataType

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the type of data to be used for pairing or unpairing with the remote Bluetooth device. The type of data could be MAC_ADDRESS or DEVICE_NAME or UNSPECIFIED. The default value is set to UNSPECIFIED. NOTE: It is recommended to specify the type of data to be used i.e. MAC_ADDRESS or DEVICE_NAME. Otherwise it may take time for pairing or unpairing with the remote Bluetooth device.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Scanandpair.MAC_ADDRESS - String: MAC_ADDRESS Scan data is a Bluetooth MAC address.
* Constant: EB.Scanandpair.DEVICE_NAME - String: DEVICE_NAME Scan data is a Bluetooth device name.
* Constant: EB.Scanandpair.UNSPECIFIED - String: UNSPECIFIED Scan data type is unknown. The Scanandpair library will automatically attempt to determine if it is a valid mac address. If not, it will be considered as a Bluetooth name. NOTE: This should only be used if alwaysScan property is set to true.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.Scanandpair.scanDataType</code>



####Platforms

* Android

###scanTimeout

####Type
<span class='text-info'>INTEGER</span> 
####Description
Scan timeout in milliseconds. Specifies the time duration within which the barcode should be scanned. The scanTimeout property has no impact if the alwaysScan property is set to false. The default value is set to 10000 milliseconds. NOTE: The timeout value is provided by the scanner driver and it varies depending on the device. 
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.Scanandpair.scanTimeout</code>



####Platforms

* Android

###triggerType

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the scanner trigger type. The triggerType property has no impact if the alwaysScan property is set to false. The default value is set to HARD.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Scanandpair.SOFT - String: SOFT Scanner is turned ON automatically and no need to press any triggers.
* Constant: EB.Scanandpair.HARD - String: HARD Hardware trigger needs to be manually pressed to turn ON the scanner.
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.Scanandpair.triggerType</code>



####Platforms

* Android

##Constants


* WAITINGRepresents WAITING, when scanner is waiting for hard trigger press.
* SCANNINGRepresents SCANNING, when scanner beam is on, aim at the barcode.
* DISCOVERINGRepresents DISCOVERING, when discovering the Bluetooth device.
* PAIREDRepresents PAIRED, when the Bluetooth device is paired successfully.
* UNPAIREDRepresents UNPAIRED, when the Bluetooth device is unpaired successfully.
* ERRORRepresents ERROR, when the error occurred during pair or unpair. Call getResult property for error code information.
* UNDEFINEDRepresents UNDEFINED, when undefined. This is the initial state.
* SUCCESSRepresents SUCCESS, when the Bluetooth device is paired or unpaired successfully.
* FAILURERepresents FAILURE, when operation is failed.
* INVALID_OBJECTRepresents INVALID_OBJECT, when the object is not valid.
* INVALID_CONFIGRepresents INVALID_CONFIG, when the configuration is not valid.
* INVALID_BLUETOOTH_DEVICE_INFORepresents INVALID_BLUETOOTH_DEVICE_INFO, when Bluetooth address or name provided is invalid.
* INVALID_PAIRING_PINRepresents INVALID_PAIRING_PIN, when Pin entered for Bluetooth pairing is invalid.
* BLUETOOTH_NOT_ENABLEDRepresents BLUETOOTH_NOT_ENABLED, when Bluetooth initialization is failed.
* BLUETOOTH_DEVICE_DISCOVERY_FAILEDRepresents BLUETOOTH_DEVICE_DISCOVERY_FAILED, when unable to discover Bluetooth device.
* BLUETOOTH_SERVICE_DISCOVERY_FAILEDRepresents BLUETOOTH_SERVICE_DISCOVERY_FAILED, when unable to perform Bluetooth service discovery.
* DEVICE_NOT_PAIREDRepresents DEVICE_NOT_PAIRED, when trying to unpair a Bluetooth device which is not yet paired.
* DEVICE_ALREADY_PAIREDRepresents DEVICE_ALREADY_PAIRED, when trying to pair a Bluetooth device which is already paired.
* DEVICE_PAIRING_FAILEDRepresents DEVICE_PAIRING_FAILED, when Bluetooth pairing is failed.
* DEVICE_UNPAIRING_FAILEDRepresents DEVICE_UNPAIRING_FAILED, when Bluetooth unpairing is failed.
* PAIRING_TIMEDOUTRepresents PAIRING_TIMEDOUT, when Bluetooth pairing is timed out.
* SCANNER_INIT_FAILURERepresents SCANNER_INIT_FAILURE, when there is an error in opening scanner.
* SCANNER_UNINT_FAILEDRepresents SCANNER_UNINT_FAILED, when there is an error in closing scanner
* SCANNER_NOT_SUPPORTEDRepresents SCANNER_NOT_SUPPORTED, when scanner is either not supported or not available.
* SCANNER_IN_USERepresents SCANNER_IN_USE, when scanner is busy in performing some other operation.
* INVALID_SCANNED_DATARepresents INVALID_SCANNED_DATA, when scanned data is invalid.
* SCANNER_READ_FAILEDRepresents SCANNER_READ_FAILED, when there is an error in scanning barcode.
* PREVIOUS_COMMAND_PENDINGRepresents PREVIOUS_COMMAND_PENDING, when previously requested command is in progress, wait for it to complete.
* INPROGRESSRepresents INPROGRESS, when the scanner is waiting for the H/W trigger to press or when discovering the Bluetooth device or when scanner beam is on and waiting to aim at the barcode.

##Remarks



###Android Platform Support
This API is supported from Android Kitkat version onwards.

###Register the callback
User can invoke addStatusListener method with callback before invoking pair or unpair method for getting the information of different state which occurs while pairing or unpairing the Bluetooth device in an asynchronous manner. NOTE: Before invoking addStatusListener method with the new callback, user should ensure to invoke removeStatusListener method first if user has registered the callback earlier via addStatusListener method or else the earlier callback will remain registered.

###Un-register the callback
At anypoint of time, user can invoke removeStatusListener method if they don't want to get the information of different state which occurs while pairing or unpairing the Bluetooth device.

###During Navigation and On Pause
The registered callback will be un-registered and all data related to Scanandpair will be released, if the navigation has occured or the application is minimized or moved to background.

###On Resume
On resume, the callback and the writeable properties which was set previously by the user will be configured. NOTE: Read only properties will return the default values provided by the underlying library.

###Possible values of getState property or status parameter of addStatusListener method
Possible values of getState property or status parameter of addStatusListener method which is returned inside the registered callback are:

* WAITING
* SCANNING
* DISCOVERING
* PAIRED
* UNPAIRED
* ERROR
* UNDEFINED

###Possible values of getResult property or result parameter of addStatusListener method
Possible values of getResult property or result parameter of addStatusListener method which is returned inside the registered callback are:

* SUCCESS	
* FAILURE 
* INVALID_OBJECT
* INVALID_CONFIG
* INVALID_BLUETOOTH_DEVICE_INFO
* INVALID_PAIRING_PIN
* BLUETOOTH_NOT_ENABLED
* BLUETOOTH_DEVICE_DISCOVERY_FAILED
* BLUETOOTH_SERVICE_DISCOVERY_FAILED
* DEVICE_NOT_PAIRED
* DEVICE_ALREADY_PAIRED
* DEVICE_PAIRING_FAILED
* DEVICE_UNPAIRING_FAILED
* PAIRING_TIMEDOUT
* SCANNER_INIT_FAILURE
* SCANNER_UNINT_FAILED
* SCANNER_NOT_SUPPORTED
* SCANNER_IN_USE
* INVALID_SCANNED_DATA
* SCANNER_READ_FAILED
* PREVIOUS_COMMAND_PENDING
* INPROGRESS