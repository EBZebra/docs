# Enterprise Browser Installation
## Installation on Host PC 

Installing Enterprise Browser on your system will provide all the software necessary to start making your own Enterprise Browser apps. All that's needed is a **desktop or laptop that connects via ADB or Mobile Device Center (or ActiveSync on WinXP) to one or more [supported Zebra devices](index.html) running Android, Windows Mobile or Windows CE**. See the Prerequisites section for connection details. 

#####Mac OS X Support
Enterprise Browser now offers limited support for Mac OS X. The Enterprise Browser 1.3 device installer packages can now be downloaded as a disk image (.dmg) file, permitting Mac users to: 

* **Copy EnterpriseBrowser .apk files** to Android devices
* **Copy EnterpriseBrowser .cab files** to an MDM system for mass deployment
* **Create shortcuts to Android apps** using the EB native widget (in device after installing the EB app)
* Access the EB demo app
* Easily link to EB online help

<!-- * Copy EnterpriseBrowser .cab files to Windows Mobile/CE devices -->

### Prerequisites

* **A computer running Windows or Mac OS X** (Macs offer a subset of functions)
* **USB driver for targeting Zebra devices** (required on Windows only)
* **Android Debug Bridge** (if targeting Android devices)
* **Microsoft Mobile Device Center** (if targeting Windows Mobile/CE devices; included with Windows 7)

>**Note: Mobile Device Center replaced Microsoft ActiveSync starting with Windows Vista. Installation from Windows XP systems requires ActiveSync**. 

### Windows Installation

####If upgrading from a prior version...

![img](images/getting-started/setup/ebsetup_00.jpg)

####...uninstall the older version of Enterprise Browser before installing the new one.

If not upgrading, skip to step 3. 

1. **Backup any data stored in the C:\EnterpriseBrowser directory**; step 2 will cause it to be lost. 
2. To unstall, **select Start Menu > Enterprise Browser > Uninstall Enterprise Browser** and follow the prompts. 
3. **[Download Enterprise Browser](https://atgsupportcentral.motorolasolutions.com/ewa/pub/getFile.do?fileName=ssi/emb/downloads/EnterpriseBrowser_v1.2.9.0.msi) installation package** (.msi).  
4. **Launch the installer file**; accept the licence agreement and follow the other prompts. When the installation finishes, a screen will appear similar to the one below. 
5. **Click "Close" to quit the installer and launch Enterprise Browser**. (Be sure the 'Launch' box is checked). 

<!--![img](images/getting-started/setup/setup-msi-install.png)-->

![img](images/getting-started/setup/ebsetup_01.jpg)

This will display the Enterprise Browser's 'Installer' screen, which looks similar to the one below. Supported platforms are the left with a description when selected on the right. 

To bring up this screen at a later time, select **Start Menu -> Enterprise Browser -> Enterprise Browser Installer**. 

For Windows-only shops, **instructions continue in the 'Deployment to devices' section**, below. 

![img](images/getting-started/setup/ebsetup_02.jpg)

<!--[img](images/getting-started/setup/setup-start-menu-items.png)-->

### Mac OS X Installation
1. **[Download the Enterprise Browser disk image](https://atgsupportcentral.motorolasolutions.com/ewa/pub/getFile.do?fileName=ssi/emb/downloads/EnterpriseBrowser_v1.2.9.0.msi)** (.dmg) file. 
2. **Double-click the .dmg file to open it**. A window will open like the image below. 
3. **Drag and drop the Enterprise Browser icon onto the Applications folder** (in the direction of the arrow). 

![img](images/getting-started/setup/setup-dmg-install.png)

The Enterprise Browser files and folders will be copied into the Application folder on the host Mac, creating a directory structure similar to the one shown in the image below: 

![img](images/getting-started/setup/setup-macosx-directories.png)

It's important to note that **files in the 'Runtimes' folder (red arrows) match up with those deployed by the Windows version**; they correspond to some of the runtimes listed on the left side of the [Windows 'Installer' screen](images/getting-started/setup/ebsetup_02.jpg) (above). 


## Deployment to Device(s)
Communication from the host computer to target device(s) is handled by the [Android Debug Bridge](http://developer.android.com/tools/help/adb.html) (ADB) for Android devices and by [Microsoft ActiveSync](http://www.microsoft.com/en-us/download/details.aspx?id=15) for Windows Mobile/CE. It also might be necessary to **install an OEM USB driver to make a USB-attached Android device visible to Windows**. If the device isn't visible to Windows, refer to the [Connections section](../guide/setup?Connections), below. 

* **ADB supports USB connections only**
* **ActiveSync supports USB and Bluetooth connections** 

Once a connection has been established, install the Enterprise Browser runtime onto a device:

![img](images/getting-started/setup/setup-eb-installer-platform-select.jpg)

1. Select **Start -> Enterprise Browser -> Enterprise Browser Installer** to bring up the EB Installer. A window will appear similar to the image above.  
2. **Select the platform that matches the device, OS and web view being targeted**. Information in the right-hand pane will vary accordingly.
3. **Click Deploy and foillow prompts that appear**. A window will appear similar to the image below. 
4. **Restart the device to complete the installation**.

> **Note: For persistent installations on Windows CE (the lower-most two options on the 'Installer' screen above), a cold boot/cleanPS (clean persistent storage) is required to activate**.

![img](images/getting-started/setup/WM_setup_01.jpg)

> **Note**: Prior to installation, some Windows devices might prompt for the installation location on the device. **Enterprise Browser overrides any selection made here; it will always be installed in `\Program Files\EnterpriseBrowser\`**.

## Connections
### Android devices

Requirements for using Enterprise Browser on a Windows system to target an Android device:

* **USB drivers** for the specific hardware device being targeted
* **The Android ADT bundle** to make devices visible and to push files 
* **A path to `adb.exe`** in the host system's environment variable

####STEP 1: Get USB drivers
Visit the [Zebra Support Portal](https://portal.motorolasolutions.com/Support/US-EN/Search?searchType=simple&searchTerm=android%20usb%20drivers), download and install the latest driver from the list. 

For non-Zebra hardware, visit [Google’s OEM USB Driver page](http://developer.android.com/tools/extras/oem-usb.html) for instructions and links to OEM drivers for your brand of device.

#### STEP 2: Get Android ADT 
Visit the [Android Developer Tools page](http://developer.android.com/sdk/index.html), download and install the Android SDK to match your system (Mac OS X, Linux or Windows 32/64). 

#### STEP 3: Update system path
Add the full path to `adb.exe` to your system path. The EB installer and its utilities use adb to push files to Android devices. Since its location could vary with any given system, the path to adb.exe **must** be available system-wide so that EB can simply execute 'abd.exe' rather than repeating the explicit path with every push function. 

To add the platform-tools path to your system's environment variable: 

* Right-click 'Computer' and **select -> Properties**
* **Select 'Advanced System Settings'** in the System Properties window
* In the 'Advanced' tab, **Click the 'Environment Variables' button** to bring up a window similar to the one below:

![img](images/getting-started/setup/setup-environment-variables-window.jpg)

* **In the <u>LOWER</u> window, scroll down to 'Path'**
* **Select Path and click 'Edit...'** to bring up the path for editing
* **Add a semi-colon (;) to the end of the line followed by the path to 'abd.exe'**
* **If you're not sure of the path, the following DOS command will reveal it**: 


		:::term
		c:\> dir /s adb.exe 

This command should result in something like this: 

![img](images/getting-started/setup/dos_dir_command.png)

* If there's more than one path to adb.exe, **enter the one that ends with `\platform-tools`**
* **The correct string for this example would be `;C:\Users\AppData\Local\Android\sdk\platform-tools`** (notice the semi-colon separator at the beginning of the line)
* **Close the dialog and restart the system** 

* **To confirm that the path is correct**, connect the device and run the following command:  

		:::term
		$ adb devices


If everything is setup correctly, you should see something like this:

![img](images/getting-started/setup/adb_devices_command.png)

<!-- ![img](images/getting-started/setup/setup-deploying-android.png)-->

The system is now ready to deploy Enterprise Browser apps and shortcuts to an Android device.

### Windows Mobile/CE devices
Upon connecting a Windows Mobile/CE device to a Windows 7 (or higher) PC, the Mobile Device Center application and all necessary drivers are supposed to install automatically and recognize the device. If that doesn't happen immediately, try one or more of the following:   

* **Be sure the device is plugged into a _USB 2.0_ port** (not USB 3.0)
* **Allow Windows to search for updates** if prompted after plugging in the device
* If no such prompt appears, **go to Device Manager and select Action -> 'Scan for hardware changes'** When USB drivers are installed correctly, a box like the image below will appear.  
* **Restart Windows after any software or driver is installed or updated** 

![img](images/getting-started/setup/WM_setup_00.jpg)

> **Note: If Windows doesn't recognize a devices connected to a USB 3.0 port, try connecting it to a USB 2.0 port**.

When a device is properly connected and recognized, the Mobile Device Center application should appear something like this:

![img](images/getting-started/setup/setup-mobile-device-center-connected.png)

The system is now ready to deploy Enterprise Browser using the Enterprise Browser installer. 

## Manual Deployment
Enterprise Browser runtimes can be individually pushed to devices from Windows or Mac OS machines and unpackaged by hand on the device. 

After installing the Enterprise Browser (.msi or .dmg) as above: 

&#49;. On Windows, go to **Start Menu -> Enterprise Browser -> Resources ->Enterprise Browser Runtimes**. On Mac, open the **Applications -> Enterprise Browser -> Runtimes** folder. 

![img](images/getting-started/setup/EB_resources_menu.jpg)

On Windows, this will bring up a window that looks similar to the image below: 

![img](images/getting-started/setup/setup-enterprise-browser-runtimes.png)

&#50;. **Copy the desired runtime to the root directory of the device**. 

&#51;. From the device, **use a file explorer to locate and execute the runtime**. 

&#52;. **Reboot the device** to complete the installation. 

&#53;. **If a persistent runtime was installed, perform a coldboot/cleanPS** on the device to activate the runtime.

## Launching the EB App 
After installation, an Enterprise Browser app icon will appear **in the all-apps section of Android devices** and **in the Main app menu of Windows Mobile/CE**. The first time an Enterprise Browser 1.3 app is launched, it starts with default runtime settings as defined in the Config.xml file on the device. Refer to the [Config.xml Reference guide](../guide/configreference) for complete details.  

By default, a screen like the one below will appear: 

![img](images/OndeviceConfig/On-device_config_01.png)

Pressing the "Return to OS" button will skip settings configuration and bring up the operating system. To display the Settings button again, simply relaunch the Enterprise Browser app. 

**Press the "Settings" button to edit the on-device config.xml file**. A screen like the image below will appear:

![img](images/OndeviceConfig/On-device_config_02.png)

###Activating your start page
**To activate your EB app's start page, enter the URL in the Value field of the StartPage parameter**, as highlighted above, but **do not apply the changes yet**. Applying changes immediately will cause the new start page to be displayed next time EB is launched and will remove access to the Settings panel. 

**WARNING: Free-form text fields such as 'username' and 'password' can accept alpha-numeric characters only. Entering non-text characters (< > \ / " ') in these fields (except in a URL field) will corrupt the Config.xml file**. 

**If on-device access to runtime settings is desired after you've set your start page (for example, to experiement with various settings before deployment), set the SettingsButtonEnabled parameter to 'Enable'** (as below). This will cause a Settings button to appear in the UI at all times. Passwords also can be set here, if desired. 

![img](images/OndeviceConfig/On-device_config_03.png)

**Press 'Apply' to update the Config.xml file with the new settings**. A screen like the one below will be displayed. Restart the app to activate the changes. 

![img](images/OndeviceConfig/On-device_config_04.png)

The Settings button, if enabled, appears in the UI like the one in the red box below.

![img](images/OndeviceConfig/On-device_config_05.png)

**Note: When the IE engine is used on a Windows CE device**, displaying the Settings button in this way might cause screen distortion when scrolling.

**WARNING: Free-form text fields such as 'username' and 'password' can accept alpha-numeric characters only. Entering non-text characters (< > \ / " ') in these fields (except in a URL field) will corrupt the Config.xml file**. 

The on-device settings panel provides access to just a small subset of Enterprise Browser runtime settings. For access to all settings, please refer to the [On-device Configuration guide](../guide-OndeviceConfig).

<!--## Removing Enterprise Browser

### Windows Mobile
Remove Enterprise Browser by removing the application.

### Windows CE
If you installed the persistant version of Enterprise Browser, it will not be removed after a cold boot. To remove it, you will need to manually remove the folder and CPY files that are found in the non-volatile area of memory.

### Android
Use Android Settings applet to remove the Enterprise Browser from the device.-->

<!-- To install the drivers for that device. Usually this is done by simply plugging the device into the machine. Most of the time, the device driver will install automatically and you'll be good to go. If not, you'll need to download the drivers for that device. To get the drivers for your device, you'll need to find the device page on [motorolasolutions.com](http://www.motorolasolutions.com/). The best way to do this is enter your device's model number into the search bar at the top of the landing page. Once you have found your device, you should see a tab to download software. For instance, the drivers for the TC55 are [here](http://goo.gl/mjrqMM).

The page you want should look something like this:

![img](images/getting-started/setup/setup-device-drivers-download.png) 

1. The ActiveSync installer will deploy the selected Enterprise Browser runtime files to the device. 
2. If installing one of the the persistent runtimes for Windows CE, a cold boot/clean PS will be required after installation.

> **Note**: Prior to installation, some Windows devices might prompt for the installation location on the device. **Enterprise Browser overrides any selection made here; it will always be installed in `\Program Files\EnterpriseBrowser\`**.

![img](images/getting-started/setup/WM_setup_01.jpg)

<!-- ![img](images/getting-started/setup/setup-deploying-winmo.png)-->

