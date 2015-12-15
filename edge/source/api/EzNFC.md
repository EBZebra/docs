#EzNFC


## Overview
Example extension apiThis is example of API. Implementation contain in extension.


##Methods



### disableRead()
disables NFC read of the Application

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.EzNFC.disableRead()</code> 


### enableAdapter()
Navigates to device NFC Adapter settings screen if device's NFC Adapter is not enabled

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>BOOLEAN</span></p><ul></ul>

####Returns
Synchronous Return:

* BOOLEAN

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.EzNFC.enableAdapter()</code> 


### enableRead()
Enables NFC read of the application if device is NFC supported

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>Type : <span class='text-info'>STRING</span><p>The Type of NFC Tag that has been read </p></li><li>ID : <span class='text-info'>STRING</span><p>The ID of the Tag that has been read. </p></li><li>Payload : <span class='text-info'>STRING</span><p>Payload is the data overall data of NFC Tag </p></li><li>TNF : <span class='text-info'>STRING</span><p>TNF ia las 3 bits of Payload </p></li><li>EncodingFormat  : <span class='text-info'>STRING</span><p>Text encoding format applied </p></li><li>data : <span class='text-info'>STRING</span><p>The String data that is read from Tag. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.EzNFC.enableRead()</code> 


##Properties



###isEnabled

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
returns is device NFC is enabled.
####Params
<p><strong>Default:</strong> false</p>
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.EzNFC.isEnabled</code>



####Platforms

* Android

###isSupported

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
returns is device NFC supported.
####Params
<p><strong>Default:</strong> false</p>
####Access


* Class: This property can only be accessed via the API class object.
	* <code>EB.EzNFC.isSupported</code>



####Platforms

* Android