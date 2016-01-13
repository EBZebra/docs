#DataWedge Usage and Compatibility

The DataWedge app makes it possible to fetch barcode data from within an Enterprise Browser application without using the Enterprise Browser APIs. The EB application simply invokes DataWedge, which scans and acquires the barcode data and enters the corresponding keystrokes into any EB input field. 

###Enabling DataWedge

To enable DataWedge from within an Enterprise Browser app, perform the following steps on the device:

1. Install your Enterprise Browser app. 
2. Start the DataWedge app. 
3. In DataWedge, select **Menu->New Profile**. 
4. Enter a name and tap OK. The new profile will appear in the Profiles list. 
5. Tap on the new profile.
6. Select Associated Apps from the Applications section.
7. Select **Menu->New app/activity**. A list of installed apps will appear. 
8. Select your EB app's package name (scrolling down, if necessary).
9. **Tap the asterisk** (*) to associate all of your app's activities with DataWedge. 
10. Tap the device's Back button until the new Profile's Settings screen appears.
11. Confirm that the 'Profile enabled' checkbox is checked. 
12. **Uncheck the 'Enabled' checkboxes of the Barcode Input, Keystroke Output and Intent Output sections**. 

>**NOTE: While such a profile is enabled, your app will not be able to scan using the Enterprise Browser APIs**. If API-based scanning is required, be sure to disable DataWedge using the steps below. For more information about potential DataWedge conflicts, please refer to the [Remarks section](../guide/configreference?Remarks) of the Enterprise Browser [Configuration Reference](../guide/configreference). 

###Disabling DataWedge

To disable DataWedge, perform the following steps on the device:

1. Start the DataWedge app.
2. Select **Menu->Settings**.
3. Uncheck 'DataWedge Enabled' checkbox.

##Barcode Scanning Options

###Barcode API
The [Barcode API](../api/barcode) is the recommended means of performing barcode scans with Enterprise Browser apps. Enterprise Browser also provides the Scanner API, which provides backward compatibility with PocketBrowser and RhoElements apps.

* API: Barcode

####Example 

    :::javascript
    EB.Barcode.enable();


###Meta Tags
This API provides backward compatibility for PocketBrowser and RhoElements applications.

* API: Scanner

####Example 

    :::html
    <META HTTP-Equiv="scanner" Content="enabled">


###ActiveXObject
This API provides backward compatibility for PocketBrowser and RhoElements applications.

* API: Scanner

####Example 

    :::javascript
    var scannerObj = new ActiveXObject("PocketBrowser.Generic"); 
    scannerObj.InvokeMETAFunction('Scanner', 'enabled');

###JavaScript Object
This API provides backward compatibility for PocketBrowser and RhoElements applications.

* API: Scanner

####Example 

    :::javascript
    scanner.enable();
