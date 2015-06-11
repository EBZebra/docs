#BottomCommandArea

## Overview
The BottomCommandArea Module is used to set the parameters of the Bottom Command Area. The bottom command area is a region at the bottom of the screen designed to hold Enteprise Browser controls such as the SIP button or Zoom button to separate them from the rest of the user application.

## Enabling the API
In order to use this API you must include reference to the following JavaScript file that is included with the Enterprise Browser installation:

* elements.js 

> Note - this file either needs to be on the device in a relative folder from where your HTML page is, or it must be copied to your web server appropriately.

	:::html
    <script type="text/javascript" charset="utf-8" src="elements.js"></script>;


### API Usage
This API does not use the `EB` namespace. It is simply referenced using the API name:

	:::javascript
	bottomCommandArea.visibility = 'visible';


##Properties

###visibility

####Type
<span class='text-info'>STRING</span> 
####Description
Sets the visibility of the button.

#### Possible Value

* visible
* hidden

####Platforms

* Android
* Windows Mobile/CE

###height

####Type
<span class='text-info'>INTEGER</span> - Positive number, representing pixels
####Description
Sets the height of the bottom command area. Default Value = Slightly greater than the height of a buttons default height, which depends on the screen resolution.

####Platforms

* Android
* Windows Mobile/CE

###image

####Type
<span class='text-info'>STRING</span> 
####Description
Sets the image to be displayed on the bottom command area. See Remarks.

#### Possible Value

* String - URL to location of image file in relation to the Enterprise Browser device folder. A default image is provided.

####Platforms

* Android
* Windows Mobile/CE

###color

####Type
<span class='text-info'>STRING</span> 
####Description
The color to set the bottom command area to.

#### Possible Value

* Color in the #RRGGBB format ex: `bottomCommandArea.color='#FF0000';`

####Platforms

* Android
* Windows Mobile/CE


## Remarks
###Use of Images.
Images can be specified as local to the device or on an HTTP / FTP server, just specify the required protocol as part of your URL (file://\, HTTP:// and FTP://). Image will be scaled to the size of the command area. JPEG and GIF images are only supported on WM devices. Both CE and WM support BMP files.

###Switching to Other Applications
All controls are designed to be shown on top of Enterprise Browser. If you require to switch to an application other than Enterprise Browser you should minimize Enterprise Browser to ensure the buttons do not remain shown. (Not applicable to Android)

###Screen Orientation
When the screen orientation changes, either using the ScreenOrientation tag or by rotating a device with hardware support, the command areas will automatically move and resize to fit the new layout. However the buttons themselves are not moved and in some cases this may result in them being off the screen or not in the expected position. If so they must be moved manually by detecting the ScreenOrientationEvent.