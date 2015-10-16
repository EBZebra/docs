#Sip


## Overview
Example extension apiThis is example of API. Implementation contain in extension.


##Methods



### hide()
hides the sip if it is displayed.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Sip.hide()</code> 


### show()
displays the default sip.

####Parameters
<ul><li>callback : <span class='text-info'>CallBackHandler</span></li></ul>

####Returns
Synchronous Return:

* Void

####Platforms

* Android

####Method Access:

* Class Method: This method can only be accessed via the API class object. 
	* <code>EB.Sip.show()</code> 


##Remarks



###General

                    
Note that some devices may not support all the API's or there is a possiblities of discrepancy across BSP's & platforms.
                    
                

###General

                    
In Android the Sip behaviour is platform and device dependent. Currently, show() will NOT put focus into desired input area. 
                    
                