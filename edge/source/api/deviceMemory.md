#DeviceMemory


## Overview
Example extension apiThis is example of API. Implementation contain in extension. In Android, this API will work version 4.0 onwards.


##Methods



### getAvailableMemory()
Returns the available memory present in the device. It will be returned in KB. In iOS this function return current free memory of application, but system memory management can allocate more via free unused memory or memory allocated by another processes. So in this case this function is practically unuseful on iOS - we do not recommned use it on iOS for plane any memory using strategy etc.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>INTEGER</span></p><ul></ul>

####Returns
Synchronous Return:

* INTEGER

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.DeviceMemory.getAvailableMemory()</code> 


### getExternalStorage()
Returns the available memory present in the user directory of the device. It will be returned in KB.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>INTEGER</span></p><ul></ul>

####Returns
Synchronous Return:

* INTEGER

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.DeviceMemory.getExternalStorage()</code> 


### getInternalStorage()
Returns the available memory present in the external storage of the device. It will be returned in KB.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>INTEGER</span></p><ul></ul>

####Returns
Synchronous Return:

* INTEGER

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.DeviceMemory.getInternalStorage()</code> 


### startListeningPlatformMemoryWarning()
Callback to be fired when underlying OS warns for device memory being low or critical

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>It will be either DEVICE_MEMORY_STATUS_LOW or DEVICE_MEMORY_STATUS_CRITICAL. When it's value is "low" it means device memory is beginning to run low on memory and when "critical", the app is in 
									risk of getting killed.So when on "critical", release all the resources as soon as possible. In Android, the OS can fire mutiple times for both the status. So the user of this should handle appropriately. In iOS only DEVICE_MEMORY_STATUS_CRITICAL received, because System has only one level of memory warning. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.DeviceMemory.startListeningPlatformMemoryWarning()</code> 


### stopListeningPlatformMemoryWarning()
Stops firing callbacks for the method startListeningPlatformMemoryWarning. Now the application will NOT recieve any callbacks when device Memory is down. 

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.DeviceMemory.stopListeningPlatformMemoryWarning()</code> 


##Constants


* DEVICE_MEMORY_STATUS_LOWDevice has low free memory - application should free unused resources and prepare to emergency exit
* DEVICE_MEMORY_STATUS_CRITICALDevice has critical memory situation - application should prepare to exit or crash ASAP and free unused resources if possible