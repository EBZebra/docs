# Enterprise Browser Shortcut Creator Utility 

## Shortcut Creator Utility
Shortcut Creator is a Windows utility that quickly creates shortcuts for Enterprise Browser apps for Android and Windows Mobile/CE and can deploy them directly to devices. From a single screen, the tool can create and deploy multiple shortcuts, each with a unique name, startpage URL and Config.xml file, if desired. For Android, each shortcut also can have a unique icon. Shortcuts for different platforms can be created at one time and easily deployed to their respective platforms all at once. 

Shortcut Creator is included with Zebra Enterprise Browser 1.3. 

For help editing Config.xml files, please refer to the [Config Editor utility guide](../guide/ConfigEditor) and the [Config.xml Reference](../guide/configreference). 


### QUICK STEPS
1. Open Shortcut Creator and **select a platform** (Android or Windows Mobile/CE).
2. **Select Default or Custom** Config.xml (if Custom, navigate to the file).
3. **Enter a name** for the shortcut.
4. **Specify a start page** URL.
5. **Select an icon** for your shortcut (Android only).
6. Click **Add to List** to store settings and create another, if desired. 
7. Click **Save Shortcut** to save all shortcut settings for later retrieval.
8. Click **Push to Device** to deploy (via ADB or ActiveSync).
9. **Launch Enterprise Browser** to create shortcut(s) on device.  

**NOTE: Shortcut creation behavior is determined by the &lt;shortcut&gt; tag in the Config.xml file, and must be configured prior to deployment**.  

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

* **Repeat Steps 1-6** until all the desired shortcuts are created and added to the list. 
* **Click Save Shortcut** button to save all shortcut settings to the development host for later retrieval and/or mass deplyment. 

### Deploy shortcut(s) from a PC

1. After desired shortcuts have been created using steps 1-6 above and saved, **click Push to Device**. A screen similar the one below will appear. 
2. **Select the desired platform and click Deploy Shortcuts** to deploy via ADB or ActiveSync. Shortcuts will be pushed to the device. 
3. **Launch Enterprise Browser** to create shortcuts on the device.  

![img](images/Utilities/Shortcut_Creator_04.jpg)

**Note: Shortcut(s) will not appear on the device until after Enterprise Browser is launched. Shortcut creation is determined by a setting in the Config.xml file on the target device**. For more information, please refer to the [Troubleshooting section](../guide/ShortcutCreator?Troubleshooting) or the [Config.xml Reference](../guide/configreference). 

### Deploy shortcut(s) from a server
Shortcuts can be copied to a server and easily deployed across an enterprise using a mobile device management (MDM) solution. 

After the desired shortcuts have been created (using steps 1-6 above) and saved, shortcut data is stored on the PC in a file called `EBShortcuts.xml` in the following path: 

`C:\EnterpriseBrowserShortcutFiles\EnterpriseBrowserShortcutFiles\EBShortcuts.xml` 

In the same location are custom folders named for each shortcut created: 

![img](images/Utilities/Shortcut_Creator_07.jpg)

To deploy using an MDM, **the entire structure (in the red box) must be replicated on the target device(s)**. Follow the steps below from the PC that contains the shortcut data. **The proceess varies slightly for Android and Windows Mobile/CE**. 

**For Android**:

1. **Browse to the folder: `C:\EnterpriseBrowserShortcutFiles\`** (which contains a like-named folder with the EBShortcut.xml file and individual shortcut folders inside).
2. **Set the MDM to copy this folder and its contents to the root level of the Android device**, for example `/storage/sdcard0/`. Shortcuts will appear the next time Enterprise Browser is launched on the device.
3. **Issue the following command to the Android activity manager** to launch Enterprise Browser automatically after MDM deployment (optional): 

		:::term
		adb shell am start com.symbol.enterprisebrowser


**For Windows Mobile/CE**: 

1. **Browse to the folder: `C:\EnterpriseBrowserShortcutFiles\`** (which contains a like-named folder with the EBShortcut.xml file and individual shortcut folders inside).
2. **Set the MDM to copy this folder and its contents to the "\Application\" directory of the WM/CE device**. Once deployed, the path to the EBShortcuts.xml file on the device should be: 

`\Application\EnterpriseBrowserShortcutFiles\EBshortcuts.xml`

Shortcuts will appear the next time Enterprise Browser is launched on the device. 

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


