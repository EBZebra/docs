# Enterprise Browser Shortcut Creator Utility for Windows

## Shortcut Creator Utility
Shortcut Creator is a Windows utility that quickly creates shortcuts for Enterprise Browser apps for Android and Windows Mobile/CE and can deploy them directly to devices. From a single screen, the tool can create and deploy multiple shortcuts, each with a unique name, startpage URL and Config.xml file, if desired. For Android, each shortcut also can have a unique icon. Shortcuts for different platforms can be created at one time and easily deployed en masse to their respective platforms using a Mobile Device Management (MDM) system. 

Shortcut Creator is included with Zebra Enterprise Browser 1.3. 

>**This tool relies on settings in the Config.xml**, a device-resident file that controls all runtime settings for Enterprise Browser. For help editing Config.xml files, please refer to the [Config Editor utility guide](../guide/ConfigEditor) and the [Config.xml Reference](../guide/configreference). 

### QUICK STEPS
1. Use these instructions only after [installing Enterprise Browser](../guide-setup) (version 1.3 is required). 
2. Open Shortcut Creator and **select a platform** (Android or Windows Mobile/CE).
3. **Select Default or Custom** Config.xml (if Custom, navigate to the file).
4. **Enter a name** for the shortcut.
5. **Specify a start page** URL.
6. **Select an icon** for your shortcut (Android only).
7. Click **Add to List** to store settings and create another, if desired. 
8. Click **Save Shortcut** to save all shortcut settings for later retrieval.
9. Click **Push to Device** to deploy (via ADB or ActiveSync).
10. **Launch Enterprise Browser** to create shortcut(s) on device.&#42;

&#42; *Shortcut creation behavior is determined by the **&lt;shortcut&gt; tag** in the Config.xml file on the target device. This tag must be configured prior to shortcut deployment*.

## Prerequisites
* **Windows development host**
* **Zebra Enterprise Browser 1.3**
* **USB driver for targeting Zebra devices**
* **Android Debug Bridge (if targeting Android devices)**
* **Microsoft ActiveSync (if targeting Windows Mobile/CE devices)**

EB Shortcut Creator is included with Zebra Enterprise Browser 1.3. If you don't already have EB 1.3, please [install Enterprise Browser](../guide/setup), then resume from here. 

## Using Shortcut Creator

* **Launch the "Shortcuts Utility"** from the Enterprise Browser folder of the Windows Start Menu, as below. 

![img](images/Utilities/Shortcut_Creator_01.jpg)

A Shortcut Creator window will appear, similar to the one below.  

![img](images/Utilities/Shortcut_Creator_02.jpg)

### Create shortcut(s)

1. **Select the platform** (Android or Windows Mobile/CE) to be targeted by the shortcut.
2. **Select Default or Custom** for the Config.xml to be used with the shortcut (selecting Custom will cause the Startpage field to change to a navigation box).
3. **Enter a name** for the shortcut.
4. **Specify a start page** URL (**or navigate to the Config.XML file** to be used if Custom was chosen in step 3). 
5. **Select an icon** for your shortcut (Android only). If left blank, the default Enterprise Browser shortcut icon will be used.
6. Click **Add to List** to store settings in the list at right.

After creating your first shortcut and adding it to the list, your screen should look something like this:   

![img](images/Utilities/Shortcut_Creator_03.jpg)

&#55;. **Repeat Steps 1-6** until all the desired shortcuts are created and added to the list.

&#56;. **Click Save Shortcut** button to save all shortcut settings to the development host for later retrieval and/or mass deployment. 

Shortcut data is stored in a file called `EBShortcuts.xml` in the path: 

`C:\EnterpriseBrowserShortcutFiles\EnterpriseBrowserShortcutFiles\EBShortcuts.xml` 

In the same location are custom folders named for each shortcut created, with that shortcut's Config.xml inside. For more information, see the Mass Deployment section, below. 

### Deployment (to single device)

1. After desired shortcuts have been created (using steps 1-8 above), **click Push to Device**. A screen similar the one below will appear. 
2. **Select the desired platform and click Deploy Shortcuts** to deploy through ADB (Android via USB) or ActiveSync (WM/CE via USB or Bluetooth). Shortcut(s) will be pushed to the device. 
3. **Launch Enterprise Browser** to create shortcut(s) on the device.  

![img](images/Utilities/Shortcut_Creator_04.jpg)

>**Note: Shortcut(s) will not appear on the device until after Enterprise Browser is launched following deployment. Shortcut creation behavior is controlled by the &lt;shortcut&gt; tag in the Config.xml file on the target device**. For more information, please refer to the [Troubleshooting section](../guide/ShortcutCreator?Troubleshooting) or the [Config.xml Reference](../guide/configreference). 

### Mass Deployment (via MDM)

Shortcuts can be packaged with an Enterprise Browser app (.apk or .cab) and the corresponding Config.xml file and easily deployed across an enterprise using a mobile device management (MDM) system. 

**IMPORTANT**:

* **Shortcut creation requires Enterprise Browser 1.3 (the latest) on the deployment PC and the device(s)**. The vast majority of installations will therefore require an upgrade. 
* **Upgrading overwrites the Config.xml on target device(s)**. Previous runtime settings should be replicated in the new Config.xml before deployment.
* **Shortcut creation behavior is controlled by settings in the Config.xml**. Be sure to read, understand and configure shortcut settings before deployment. 
* **Shortcut(s) must be deployed to an individual device before they can be deployed via MDM**. The instructions below cover this scenario. 

**To prepare an Enterprise Browser app for MDM deployment**: 

&#49;. **Deploy an app for Android (.apk) or Windows Mobile/CE (.cab)** using the [standard device deployment procedures](../guide/setup).

&#50;. **Copy the `Config.xml` file from the device to the host PC** and open it in a text editor. **Its location varies by platform**:

**Android**: `<internal storage>/Android/data/com.symbol.enterprisebrowser/`

**WM/CE**: `<internal storage>\Program Files\EnterpriseBrowser\Config\` 

&#51;. **Set the &lt;ShortcutCreationEnabled&gt; value to either 1 or 2**. For behavior of these, refer to the [Troubleshooting section](../guide/ShortcutCreator?Troubleshooting) (below) or the [Config.xml reference](../guide/configreference). 

&#52;. **Push the `Config.xml` file to its original location on the device**, replacing the original.  

&#53;. If not done earlier, **create the desired shortcut(s) (using steps 1-8 above)**. Shortcut data is stored on the PC in a file called `EBShortcuts.xml` in the following path: 

`C:\EnterpriseBrowserShortcutFiles\EnterpriseBrowserShortcutFiles\EBShortcuts.xml` 

In the same location are custom folders named for each shortcut created, with that shortcut's Config.xml inside: 

![img](images/Utilities/Shortcut_Creator_07.jpg)

&#54;. To deploy shortcuts _**and**_ the Enterprise Browser app using an MDM system:

* **Set the MDM to replicate the entire shortcut directory structure (in the red box) to the target device(s)**.
* **Set the MDM to deploy the .apk or .cab file appropriate for the platform**. This will create the Enteprise Browser directory structure on the device (as below). 
* **Copy the new Config.xml (modified in step 3) <u>to its original location on the target device**</u>: 

**Android**

* **Copy Config.xml and .apk to**: `<internal storage>/Android/data/com.symbol.enterprisebrowser/`

* **Copy shortcut dir to**: `<internal storage>/EnterpriseBrowserShortcutFiles/`

**WM/CE**

* **Copy Config.xml and .cab file to**: `<internal storage>\Program Files\EnterpriseBrowser\Config\`

* **Copy shortcut dir to**: `<internal storage>\Application\EnterpriseBrowserShortcutFiles\`

&#55;. Shortcuts will be created on the device the next time Enteprise Browser is launched following deployment. **Optionally, launch Enterprise Browser from the MDM using one of the following commands**: 

Android: 

		:::term
		adb shell am start com.symbol.enterprisebrowser

Windows Mobile/CE: 

		:::term
		( ---> info to come <--- ) 

Shortcut icons will be visible to the user in the device's main application area or menu. From a system perspective, shortcut files are stored this way: 

**Android** shortcut files are not exposed to the end user.

**Windows Mobile** `.ink` files are deployed in the `\​Windows\StartMenu\Programs` directory and named after the shortcut. 

**Windows CE** `.ink` files are deployed in `\​Windows\Programs` and `\​Windows\Desktop` directories  and named after the shortcut.

**Notes** 

* **File structure must be replicated exactly** for proper shortcut operation.
* Automatically generated shortcut **files and folders must not be modified by hand**. 
* **Customizing shortcut data files manually could result in unknown failures**.
* **To change shortcut settings, use the Shortcut Creator utility** and redeploy. 
* Existing **shortcuts on target device(s) will be overwritten** when redeployed. 

## Troubleshooting

![img](images/Utilities/Shortcut_Creator_05.jpg)

For shortcut deployment, Shortcut Creator communicates with Android devices over USB using the Android Debug Bridge (ADB). To ensure that ADB is installed and communicating with a device: 

* Open a command prompt and navigate to the folder containing the adb.exe utility.
* Run the "adb devices" command. The screen below shows a failed communication attempt followed by a successful one. 

If your device fails, it might be necessary to install an OEM USB driver to make a USB-attached Android device visible. Visit [Google’s OEM USB Driver page](http://developer.android.com/tools/extras/oem-usb.html) for instructions and links to OEM drivers for your brand of hardware.


![img](images/Utilities/Shortcut_Creator_06.jpg)

### Connections
Communication from the development host to target device(s) is handled by the [Android Debug Bridge](http://developer.android.com/tools/help/adb.html) (ADB) for Android devices and by [Microsoft ActiveSync](http://www.microsoft.com/en-us/download/details.aspx?id=15) for Windows Mobile/CE. If a device is not shown, please verify that the appropriate software and drivers are installed, and check the physical connection(s). 

* **ADB supports USB only**
* **ActiveSync supports USB or Bluetooth** 
* **Device(s) must contain an EB app and its Config.xml file**  

It might be necessary to install an OEM USB driver to make a USB-attached Android device visible to Windows. Visit [Google’s OEM USB Driver page](http://developer.android.com/tools/extras/oem-usb.html) for instructions and links to OEM drivers for your brand of hardware.

### Config.xml
Shortcut creation is determined by a setting in the Config.xml file on the target device. After shortcut data is pushed to the device, shortcuts are created at the next Enterprise Browser launch. Shortcut creation thereafter depends on how the shortcut tag is configured in the Config.xml file. See options below. Whether deploying to Android or Windows Mobile/CE, the device must contain an Enterprise Browser app with a Config.xml file that includes the "shortcut" tag. The available options are as follows:  

#### Example XML

 	:::xml

	<shortcut>
		<ShortcutCreationEnabled value = "1"/>
	</shortcut>


Possible Values (0, 1, or 2)

* **0= create no shortcuts (default)**
* 1= check for and create new shortcuts at every launch
* 2= check for and create new shortcuts only at initial launch


