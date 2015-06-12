#Camera


## Overview
The Camera API provides access to your device's Camera(s). Use this API to give users the ability to take a photo via one of the device's cameras and return it to the application. Photos can either be stored on the device and optionally transfered to an online server using the Network API or can be returned as a DataURI object for storing or display.
## Enabling the API
There are two methods of enabling the Camera API: 

* Include all ebapi modules or 
* Include only the API modules you need 

For either of these methods, you'll need to include files from the `/Enterprise Browser/JavaScript Files/Enterprise Browser` directory on the computer that you installed the Enterprise Browser.

### Include all JS API modules
To include all JS APIs, you must copy the ebapi-modules.js file to a location accessible by your app's files and include the JavaScript file in your app. For instance, to include the modules file in your index.html, with the file in the same directory as your index.html, you would add the following line to the <head> section of your index.html:

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>

> Note: that the pathing for this file is relative to the current page.

This will define the EB class within the page. Any page you need to use the modules will need to have the .js file included in this fashion.

### Include only the modules you need
To include single APIs, you must first include the `ebapi.js` in your HTML as well as the API file you want to use. For instance, to use the Camera API, I would add the following code to my HTML file(s), assuming the API files have been copied to the same directory as the HTML.

    :::html
    <script type="text/javascript" charset="utf-8" src="ebapi.js"></script>
    <script type="text/javascript" charset="utf-8" src="eb.camera.js"></script>

The ebapi.js file is necessary for all single API inclusions.

        


##Methods



### choosePicture(<span class="text-info">HASH</span> propertyMap)
Choose a picture from the album.

####Parameters
<ul><li>propertyMap : <span class='text-info'>HASH</span> <span class='label label-info'>Optional</span><p>Provide a set of properties to configure an image, for example to specify the image size or color mode. Valid `properties` for this parameter are the properties available to this API module. Check the <a href='#api-camera?Properties'>property section</a> for applicable properties. Not providing properties to this function will use the Camera's default properties, or those previously set on the Camera instance.</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>Whether or not the image was successfully chosen from the gallery. The returned string will be one of 'ok', 'cancel' or 'error'. </p></li><li>imageUri : <span class='text-info'>STRING</span><p>The URI to the chosen image. </p></li><li>imageHeight : <span class='text-info'>INTEGER</span><p>The height of the image. </p></li><li>imageWidth : <span class='text-info'>INTEGER</span><p>The width of the image. </p></li><li>imageFormat : <span class='text-info'>STRING</span><p>The format of the image, either 'png' or 'jpg'. </p></li><li>message : <span class='text-info'>STRING</span><p>If the returned status is 'error' then this field will contain more information on the error. </p></li><li>image_uri : <span class='text-info'>STRING</span><p>It is recommended to use imageUri in preference to this parameter. </p></li><li>image_height : <span class='text-info'>INTEGER</span><p>It is recommended to use imageHeight in preference to this parameter. </p></li><li>image_width : <span class='text-info'>INTEGER</span><p>It is recommended to use imageWidth in preference to this parameter. </p></li><li>image_format : <span class='text-info'>STRING</span><p>It is recommended to use imageFormat in preference to this parameter. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Camera.choosePicture(<span class="text-info">HASH</span> propertyMap)</code> 


### enumerate()
Returns the cameras present on your device, allowing you to access your device's front or back camera.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>ARRAY</span></p><ul><ul><li>cameraArray : <span class='text-info'>SELF_INSTANCE: EB.Camera</span><p> </p></li></ul></ul>

####Returns
Synchronous Return:

* ARRAY : Array of objects.<ul><li>cameraArray : <span class='text-info'>SELF_INSTANCE: EB.Camera</span><p> </p></li></ul>

####Platforms

* Android
* Windows Mobile

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Camera.enumerate()</code> 


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
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.getAllProperties()</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.getAllProperties()</code> 


### getCameraByType(<span class="text-info">STRING</span> cameraType)
Returns the camera of requested type if that camera exist - else return nil.

####Parameters
<ul><li>cameraType : <span class='text-info'>STRING</span><p>CameraType: main or front. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>SELF_INSTANCE</span></p><ul></ul>

####Returns
Synchronous Return:

* SELF_INSTANCE : Camera with requested type or nil if not requested type does not exist.

####Platforms

* Android
* Windows Mobile

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Camera.getCameraByType(<span class="text-info">STRING</span> cameraType)</code> 


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
* Windows Mobile

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Camera.getDefault()</code> 


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
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.getProperties(<span class="text-info">ARRAY</span> arrayofNames)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.getProperties(<span class="text-info">ARRAY</span> arrayofNames)</code> 


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
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.getProperty(<span class="text-info">STRING</span> propertyName)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.getProperty(<span class="text-info">STRING</span> propertyName)</code> 


### saveImageToDeviceGallery(<span class="text-info">STRING</span> pathToImage)
Save an image to the device gallery.

####Parameters
<ul><li>pathToImage : <span class='text-info'>STRING</span><p>The real path to the image that is to be saved in the device gallery. You need to use the RhoApplication method get_blob_path to have the real path, such as Rho::RhoApplication::get_blob_path(img.image_uri). </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Camera.saveImageToDeviceGallery(<span class="text-info">STRING</span> pathToImage)</code> 


### setDefault(<span class="text-info">SELF_INSTANCE: EB.Camera</span> defaultInstance)
This method allows you to set the attributes of the default object instance by passing in an object of the same class.

####Parameters
<ul><li>defaultInstance : <span class='text-info'>SELF_INSTANCE: EB.Camera</span><p>An instance object that is of the same class. </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Camera.setDefault(<span class="text-info">SELF_INSTANCE: EB.Camera</span> defaultInstance)</code> 


### setProperties(<span class="text-info">HASH</span> propertyMap)
This method will set the values of a list of properties for the API class. The propertyName must be a valid property for the class and must also not be read only.

####Parameters
<ul><li>propertyMap : <span class='text-info'>HASH</span><p>Map of properties I want to set </p></li><ul><li><i>Object</i> : <span class='text-info'>STRING</span><p> </p></li></ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.setProperties(<span class="text-info">HASH</span> propertyMap)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.setProperties(<span class="text-info">HASH</span> propertyMap)</code> 


### setProperty(<span class="text-info">STRING</span> propertyName, <span class="text-info">STRING</span> propertyValue)
This method will set the value of a property for the API class. The propertyName must be a valid property for the class and must also not be read only.

####Parameters
<ul><li>propertyName : <span class='text-info'>STRING</span><p>The one property name that I want to set </p></li><li>propertyValue : <span class='text-info'>STRING</span><p>The one property value that I want to set </p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.setProperty(<span class="text-info">STRING</span> propertyName, <span class="text-info">STRING</span> propertyValue)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.setProperty(<span class="text-info">STRING</span> propertyName, <span class="text-info">STRING</span> propertyValue)</code> 


### takePicture(<span class="text-info">HASH</span> propertyMap)
Start the camera application to take a picture. The user can capture the displayed image either by interacting with the resident camera app or pressing the trigger or enter key, depending on the device in use.

####Parameters
<ul><li>propertyMap : <span class='text-info'>HASH</span> <span class='label label-info'>Optional</span><p>Provide a set of properties to configure the camera, for example to specify the flashMode or compressionFormat. Valid `properties` for this parameter are the properties available to this API module. Check the <a href='#api-camera?Properties'>property section</a> for applicable properties. Not providing properties to this function will use the Camera's default properties, or those previously set on the Camera instance.</p></li><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Callback
Async Callback Returning Parameters: <span class='text-info'>HASH</span></p><ul><ul><li>status : <span class='text-info'>STRING</span><p>Whether or not the image was successfully captured. The returned string will be one of 'ok', 'cancel' or 'error'. </p></li><li>imageUri : <span class='text-info'>STRING</span><p>If the specified 'outputFormat' was 'image' then this field is the URI to the taken image stored on the device, this image will have an auto-generated name. If the specified 'outputFormat' was 'dataUri' then this field will be the image encoded as a Data URI. </p></li><li>imageHeight : <span class='text-info'>INTEGER</span><p>The actual height of the image that was captured, this may differ from the requested height as the Camera will only support a finite resolutions. </p></li><li>imageWidth : <span class='text-info'>INTEGER</span><p>The actual width of the image that was captured, this may differ from the requested width as the Camera will only support a finite resolutions. </p></li><li>imageFormat : <span class='text-info'>STRING</span><p>The format in which the image was captured, either 'png' or 'jpg'. </p></li><li>message : <span class='text-info'>STRING</span><p>If the returned status is 'error' then this field will contain more information on the error. </p></li><li>image_uri : <span class='text-info'>STRING</span><p>It is recommended to use imageUri in preference to this parameter. </p></li><li>image_height : <span class='text-info'>INTEGER</span><p>It is recommended to use imageHeight in preference to this parameter. </p></li><li>image_width : <span class='text-info'>INTEGER</span><p>It is recommended to use imageWidth in preference to this parameter. </p></li><li>image_format : <span class='text-info'>STRING</span><p>It is recommended to use imageFormat in preference to this parameter. </p></li></ul></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android
* Windows Mobile

####Method Access:

* Instance Method: This method can be accessed via an instance object of this class: 
	* <code>myObject.takePicture(<span class="text-info">HASH</span> propertyMap)</code>
* Default Instance: This method can be accessed via the default instance object of this class. 
	* <code>EB.Camera.takePicture(<span class="text-info">HASH</span> propertyMap)</code> 


##Properties



###<span class="text-info">cameraType</span>

####Type
<span class='text-info'>STRING</span> <span class='label label-warning'>Read Only</span>
####Description
<span class='label label-info'>Replaces:camera_type</span> Camera type: back or front.
####Params
<p><strong>Default:</strong> main</p>
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Camera.CAMERA_TYPE_BACK - String: back Back camera.
* Constant: EB.Camera.CAMERA_TYPE_FRONT - String: front Front camera.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.cameraType</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.cameraType</code> 



####Platforms

* Android
* Windows Mobile

###captureSound

####Type
<span class='text-info'>STRING</span> 
####Description
Path to a sound file resident on the device which will be played when the image is captured.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.captureSound</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.captureSound</code> 



####Platforms

* Android
* Windows Mobile

###<span class="text-info">colorModel</span>

####Type
<span class='text-info'>STRING</span> 
####Description
<span class='label label-info'>Replaces:color_model</span> Where supported by the hardware this property can be used to select whether to capture a color or a grayscale image.
####Params
<p><strong>Default:</strong> rgb</p>
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Camera.COLOR_MODEL_RGB - String: rgb A colour image is captured.
* Constant: EB.Camera.COLOR_MODEL_GRAYSCALE - String: grayscale A grayscale image is captured.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.colorModel</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.colorModel</code> 



####Platforms

* Android

###<span class="text-info">compressionFormat</span>

####Type
<span class='text-info'>STRING</span> 
####Description
<span class='label label-info'>Replaces:format</span> The format of the captured image in subsequent calls to takePicture(). If you do not define this property when you use choose_picture with iOS, the type of image in Gallery will be recognized, and the same format will be used for saving the image to applications data.
####Params
<p><strong>Default:</strong> jpg</p>
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Camera.COMPRESSION_FORMAT_JPG - String: jpg JPG compression.
* Constant: EB.Camera.COMPRESSION_FORMAT_PNG - String: png PNG compression.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.compressionFormat</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.compressionFormat</code> 



####Platforms

* Android
* Windows Mobile(JPG is supported on all devices, Android and Windows Mobile does not support PNG images)

###<span class="text-info">desiredHeight</span>

####Type
<span class='text-info'>INTEGER</span> 
####Description
<span class='label label-info'>Replaces:desired_height</span> Camera hardware is limited to taking photos in a finite number of resolutions, eg 2048x1536, 640x480 etc. Specifying a desiredHeight will request to take the photo with the specified height but if it is not supported by the hardware then the closest match will be selected. The callback received when a photo is taken contains the actual resolution of the captured photo.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.desiredHeight</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.desiredHeight</code> 



####Platforms

* Android
* Windows Mobile

###<span class="text-info">desiredWidth</span>

####Type
<span class='text-info'>INTEGER</span> 
####Description
<span class='label label-info'>Replaces:desired_width</span> Camera hardware is limited to taking photos in a finite number of resolutions, eg 2048x1536, 640x480 etc. Specifying a desiredWidth will request to take the photo with the specified width but if it is not supported by the hardware then the closest match will be selected. The callback received when a photo is taken contains the actual resolution of the captured photo.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.desiredWidth</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.desiredWidth</code> 



####Platforms

* Android
* Windows Mobile

###<span class="text-info">enableEditing</span>

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
<span class='label label-info'>Replaces:enable_editing</span> Enables post photo capture image customizing; image will captured reduced to screen size (not full size).
####Params
<p><strong>Default:</strong> true</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.enableEditing</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.enableEditing</code> 


###fileName

####Type
<span class='text-info'>STRING</span> 
####Description
The path without filename extension to store captured image in subsequent calls to takePicture(). The filename extension will be added automatically according to compressionFormat property value.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.fileName</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.fileName</code> 



####Platforms

* Android
* Windows Mobile

###<span class="text-info">flashMode</span>

####Type
<span class='text-info'>STRING</span> 
####Description
<span class='label label-info'>Replaces:flash_mode</span> Specifies the flash behavior when taking a picture.
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Camera.FLASH_ON - String: on Flash will be used.
* Constant: EB.Camera.FLASH_OFF - String: off Flash will not be used.
* Constant: EB.Camera.FLASH_AUTO - String: auto Flash will be used if lighting conditions deem it necessary.
* Constant: EB.Camera.FLASH_RED_EYE - String: redEye Flash with red eye reduction is used.
* Constant: EB.Camera.FLASH_TORCH - String: torch The flash is turned on in torch mode.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.flashMode</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.flashMode</code> 



####Platforms

* Android

###maxHeight

####Type
<span class='text-info'>INTEGER</span> <span class='label label-warning'>Read Only</span>
####Description
The maximum height of images which can be captured.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.maxHeight</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.maxHeight</code> 



####Platforms

* Android
* Windows Mobile

###maxWidth

####Type
<span class='text-info'>INTEGER</span> <span class='label label-warning'>Read Only</span>
####Description
The maximum width of images which can be captured.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.maxWidth</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.maxWidth</code> 



####Platforms

* Android
* Windows Mobile

###outputFormat

####Type
<span class='text-info'>STRING</span> 
####Description
Specifies the way to return the captured image to the application.
####Params
<p><strong>Default:</strong> image</p>
####Values

<strong>Possible Values</strong> (<span class='text-info'>STRING</span>):
 
* Constant: EB.Camera.OUTPUT_FORMAT_IMAGE - String: image The captured image is stored on the device. The callback associated with takePicture will contain the location of the image.
* Constant: EB.Camera.OUTPUT_FORMAT_DATAURI - String: dataUri Image will be returned as a Data URI object, this is a base 64 encoding of the image and can be used to easily embed the image on the page or store the image in a database.Platforms: 
Android,WM
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.outputFormat</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.outputFormat</code> 



####Platforms

* Android
* Windows Mobile

###previewHeight

####Type
<span class='text-info'>INTEGER</span> 
####Description
In cases where the resident camera application on the device is not used this API is used to control the position of the viewfinder preview window when taking a photo.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.previewHeight</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.previewHeight</code> 



####Platforms

* Windows Mobile

###<span class="text-info">previewLeft</span>

####Type
<span class='text-info'>INTEGER</span> 
####Description
<span class='label label-info'>Replaces:left</span> In cases where the resident camera application on the device is not used this API is used to control the position of the viewfinder preview window when taking a photo.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.previewLeft</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.previewLeft</code> 



####Platforms

* Windows Mobile

###<span class="text-info">previewTop</span>

####Type
<span class='text-info'>INTEGER</span> 
####Description
<span class='label label-info'>Replaces:top</span> In cases where the resident camera application on the device is not used this API is used to control the position of the viewfinder preview window when taking a photo.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.previewTop</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.previewTop</code> 



####Platforms

* Windows Mobile

###previewWidth

####Type
<span class='text-info'>INTEGER</span> 
####Description
In cases where the resident camera application on the device is not used this API is used to control the position of the viewfinder preview window when taking a photo.
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.previewWidth</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.previewWidth</code> 



####Platforms

* Windows Mobile

###<span class="text-info">saveToDeviceGallery</span>

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
<span class='label label-info'>Replaces:save_to_shared_gallery</span> If true, the picture you take will be added to the device photo gallery. At Android default value is true.
####Params
<p><strong>Default:</strong> false</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.saveToDeviceGallery</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.saveToDeviceGallery</code> 



####Platforms

* Android

###supportedSizeList

####Type
<span class='text-info'>ARRAY</span> <span class='label label-warning'>Read Only</span>
####Description
List of resolutions supported by camera.
####Params
<li><i>Object</i> : <span class='text-info'>HASH</span><p> </p></li><ul><li>width : <span class='text-info'>INTEGER</span><p> </p></li><li>height : <span class='text-info'>INTEGER</span><p> </p></li></ul>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.supportedSizeList</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.supportedSizeList</code> 



####Platforms

* Android

###useSystemViewfinder

####Type
<span class='text-info'>BOOLEAN</span> 
####Description
Uses the system Camera application to take a picture instead of rhodes' camera. The system Camera application does not accept most rhodes' camera settings and can be adjusted by UI.
####Params
<p><strong>Default:</strong> false</p>
####Access


* Instance: This property can be accessed via an instance object of this class: <code>myObject.useSystemViewfinder</code>
* Default Instance: This property can be accessed via the default instance object of this class. 
	* <code>EB.Camera.useSystemViewfinder</code> 



####Platforms

* Android