# Enterprise Browser Installation
## Installation on a desktop or laptop 

Installing Enterprise Browser on your system will provide all the software necessary to start making your own Enterprise Browser apps. All that's needed is a **computer that connects via ADB or ActiveSync to one or more [supported Zebra devices](index.html) running Android, Windows Mobile or Windows CE**. See the Prerequisites section for connection details. 

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
* **Android Debug Bridge (if targeting Android devices)**
* **Microsoft ActiveSync (if targeting Windows Mobile/CE devices)**

### Windows Installation

####If upgrading from a prior version...

![img](images/getting-started/setup/ebsetup_00.jpg)

**...uninstall the older version of Enterprise Browser before installing the new one**. 

If not upgrading, skip to step 3. 

1. **Backup any data stored in the C:\EnterpriseBrowser directory**; step 2 will cause it to be lost. 
2. To unstall, **select Start Menu > Enterprise Browser > Uninstall Enterprise Browser** and follow the prompts. 
3. **[Download Enterprise Browser](https://atgsupportcentral.motorolasolutions.com/ewa/pub/getFile.do?fileName=ssi/emb/downloads/EnterpriseBrowser_v1.2.9.0.msi) installation package** (.msi).  
4. **Launch the installer file**; accept the licence agreement and follow the other prompts. When the installation finishes, a screen will appear similar to the one below. 
5. **Click "Close" to quit the installer and launch Enterprise Browser**. (Be sure the 'Launch' box is checked). 

<!--![img](images/getting-started/setup/setup-msi-install.png)-->

![img](images/getting-started/setup/ebsetup_01.jpg)

This will display the Enterprise Browser's 'Installer' screen, which looks similar to the one below, with supported platforms for selection on the left, and a description of the selected platform on the right. 

To bring up this screen at a later time, select **Start Menu > Enterprise Browser > Enterprise Browser Installer**. It's there in the sample Start menu, above. 

For Windows-only shops, **skip down to the Device Deployment section**. 

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


## Device Deployment
Communication from the host computer to target device(s) is handled by the [Android Debug Bridge](http://developer.android.com/tools/help/adb.html) (ADB) for Android devices and by [Microsoft ActiveSync](http://www.microsoft.com/en-us/download/details.aspx?id=15) for Windows Mobile/CE. It also might be necessary to **install an OEM USB driver to make a USB-attached Android device visible to Windows**. If the device isn't visible to Windows, refer to the [Connections section](../guide/setup?Connections), below. 

* **ADB supports USB connections only**
* **ActiveSync supports USB and Bluetooth connections** 

Once a connection has been established, install the Enterprise Browser runtime onto a device:

1. Select **Start > Enterprise Browser > Enterprise Browser Installer** to  bring up the EB Installer.
2. **Select the platform that matches the device being targeted**. Information in the right-hand pane will vary accordingly.
3. **Continue to the section below that corresponds with the selected device platform**. 

<!--![img](images/getting-started/setup/setup-eb-installer-platform-select.png)-->

> **Note: Once the Enterprise Browser is deployed to a device, restart the device to generate file and folder structures for proper application operation**.


## Connections
### Android devices

Connecting an Android device to a Windows computer requires:

* **USB drivers** for the specific hardware being used
* **The Android ADT bundle** to make devices visible to apps 

####STEP 1: USB drivers
If Windows doesn't see your Zebra device, visit the [Zebra Support Portal](https://portal.motorolasolutions.com/Support/US-EN/Search?searchType=simple&searchTerm=android%20usb%20drivers) and download the latest driver from the list that will appear there. 

For non-Zebra hardware, visit [Google’s OEM USB Driver page](http://developer.android.com/tools/extras/oem-usb.html) for instructions and links to OEM drivers for your brand of device.

#### STEP 2: Android ADT 
Visit To get the ADT bundle, which includes the Android SDK, you can go [here](http://developer.android.com/sdk/index.html). You'll specify your build of Windows (32-bit or 64-bit) and agree to the terms and download the bundle. This will come as an archive and you'll need to extract it somewhere where you'll remember it as you'll need to refer to it later.

Once you have extracted all the files in the ADT bundle, you'll need to add the platform-tools path to your path environment variable so that Windows can access it without referring to the entire path each time you use it. To do this, open your environment variables settings: right-click "Computer" -> Properties -> "Advanced System Settings" -> "Environment Variables" button. The window should look similar to this.

![img](images/getting-started/setup/setup-environment-variables-window.png)

In the lower part of the window, find the "Path" System variable, click on it, and click the "Edit" button. Now you'll need to add a semi-colon (;) and the path to your android "platform-tools" folder to this string.

For example:
if your platform-tools directory path is `C:\android\sdk\platform-tools`, you would add `;C:\android\sdk\platform-tools` to the end of the Path System variable.

Now you should be able to access the adb command from any directory using your command-prompt. To make sure that your device is setup and will interface with the EB Installer, connect your device via USB, ensure that USB debugging is enabled, open a command prompt (cmd.exe) and run the command:

	:::term
	$ adb devices

Which, if your device is setup correctly, you should see something like this:

![img](images/getting-started/setup/setup-adb-devices-output.png)

Now that you have your android device connected to your computer through adb, you are ready to deploy the EB onto your device using the Enterprise Browser Installer.

When you choose to deploy to your android device you'll see a message asking you to make sure that your device is recognized by the `adb devices` command then, you should see something like this.

![img](images/getting-started/setup/setup-deploying-android.png)

After this step. the EB should be deployed on your Android device.

### Windows Mobile/Windows CE Devices
To connect your WinMo/WinCE device to your computer, all you need to do is connect the device. Upon connecting your device, the drivers and mobile Device Center application should be installed, allowing you to connect to your device. Once the software installs, be sure to reboot your computer and your device to make sure there are no complications.

> Note: Connecting your device to a USB 3.0 port may result in the device not being recognized by your computer. Be sure to connect the device to a USB 2.0 port.

With your device connected and recognized by the OS and the Mobile Device Center application, you should see something like this.

![img](images/getting-started/setup/setup-mobile-device-center-connected.png)

Now that your device is connected and recognized by your computer, you are ready to deploy the EB onto your device using the Enterprise Browser Installer.

1. The ActiveSync installer will install the selected Enterprise Browser runtime files to your device. 
2. If you have chosen to install the Persistent Runtime for Windows then you are required to Cold Boot/Clean PS the device after installation.

> Note if you are given a choice of which directory to install to select the default option, regardless of what you select, Enterprise Browser will install into the default location.

![img](images/getting-started/setup/setup-deploying-winmo.png)

Once you have finished the deploying process on your computer, there is another installation process you must complete on your device.

## Manual Deployment
The Enterprise Browser runtime can also be installed manually by the user. Please follow the following steps to carry out manual installation.

1. Download the Enterprise Browser MSI.
2. Install the MSI. 
3. You should see the following Start Menu Entries after MSI installation is complete.
	* Enterprise Browser
		* Documentation
		* Enterprise Browser Installer
		* Enterprise Browser Runtimes
		* JavaScript Files
4. Click on the Enterprise Browser Runtimes Start Menu item. This will open up Windows Explorer and point to a folder where all the Runtimes are available.
5. Choose the appropriate Runtime.
6. Copy and Paste to your connected device.
7. Open the File location on your device where you have copied the Runtime and click to install.
8. If you are installing a Persistent Runtime then you are required to Coldboot/CleanPS the device after installation.

![img](images/getting-started/setup/setup-enterprise-browser-runtimes.png)

Once the installation is completed on your device, you can start Enterprise Browser on your device by clicking the associated icon form the programs group/Apps.

## Launching Enterprise Browser
Launching Enterprise Browser after installing on the device, will launch a default welcome start page that is included with the installation

>Note: On Android, if you do not disconnect the device from your laptop, you will see the application being forced closed. The USB storage option needs to be turned off so that Enterprise Browser can launch properly.

After launching, a default [configuration file](../guide/configreference) will be created. You will need to modify this to make Enterprise Browser [start with your application](../guide/launching).

## Removing Enterprise Browser

### Windows Mobile
Remove Enterprise Browser by removing the application.

### Windows CE
If you installed the persistant version of Enterprise Browser, it will not be removed after a cold boot. To remove it, you will need to manually remove the folder and CPY files that are found in the non-volatile area of memory.

### Android
Use Android Settings applet to remove the Enterprise Browser from the device.

<!-- To install the drivers for that device. Usually this is done by simply plugging the device into the machine. Most of the time, the device driver will install automatically and you'll be good to go. If not, you'll need to download the drivers for that device. To get the drivers for your device, you'll need to find the device page on [motorolasolutions.com](http://www.motorolasolutions.com/). The best way to do this is enter your device's model number into the search bar at the top of the landing page. Once you have found your device, you should see a tab to download software. For instance, the drivers for the TC55 are [here](http://goo.gl/mjrqMM).

The page you want should look something like this:

![img](images/getting-started/setup/setup-device-drivers-download.png) -->

