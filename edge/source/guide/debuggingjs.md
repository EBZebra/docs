# Debugging Enterprise Browser Apps
This guide describes two methods of on-device debugging of Enterprise Browser apps. The first employs ['weinre'](http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html), the node.js application <b>We</b>b <b>In</b>spector <b>Re</b>mote that's maintained by Apache. The other uses Chrome browser, its Web Inspector and [Google Remote Debugging](https://developer.chrome.com/devtools/docs/remote-debugging).  

The Chrome-based method is easier to set up than weinre and offers some nice plusses, but it works only with Android.  

## On-Device Debugging with Weinre
Weinre is a must-have developer tool for testing and debugging JavaScript Enterprise Browser application. Although much testing and analysis can be done using emulators and an IDE, applications often behave differently when running on hardware, and features such as [Barcode](../api/barcode) scanning cannot be accurately tested. Weinre solves these problems. Acting like a remote Web Inspector, the JavaScript Console in Weinre allows you to get familiar with the Enterprise Browser APIs right from that tab. This is much faster than fumbling through logs.

This guide is modeled after a 14-minute [Weinre webinar](https://www.youtube.com/watch?v=aSTXEEAfJ6M) that shows most of what's covered here. We'll be using the [Barcode Example app](https://github.com/rhomobile/rho-samples/tree/master/BareBones/BarcodeExample) for all of the examples in this guide. You're welcome to download the app and follow along, use your own app, or simply play around with the APIs and some code snippets.

### Install Weinre
<b>Note</b>: Admin/sudo privileges are required to install Weinre.

Weinre is a Node.js application and is delivered via a Node Package installed with the `npm` command. 

<b>&#49;. [Download node.js](http://nodejs.org/download/)</b> from the project's `/release` folder. 

<b>&#50;. On Windows, install Weinre using the following command</b>:

    :::term
    $ npm -g install weinre

<b>Mac users might need to include the 'sudo' prefix</b>:


    :::term
    $ sudo npm -g install weinre

For more information about installing and configuring Weinre, please refer to the [Weinre installation site](http://people.apache.org/~pmuellr/weinre/docs/latest/Installing.html).

### Start Weinre

<b>IMPORTANT</b>: The target device must be on the same Wi-Fi network as the development host. When launched, Weinre must be bound to that network using the `boundhost` parameter (see below). Launching without this parameter will bind Weinre to the `localhost`, making it inaccessible from the device.


<b>&#51;. Launch Weinre from the command line using the `--boundhost` option</b>:

    :::term
    $ weinre --boundhost <development host IP address>

Weinre will respond with a message similar to the one below--an address and port that will be used to communicate with the device:


    :::term
    2013-10-31T00:24:07.549Z weinre: starting server at http://192.168.1.128:8080

<b>&#52;. Using a browser, open the address and port provided by Weinre</b>. 

The page should look something like this:

![img](images/debugging/weinre-web-console.png)

### Enable Weinre In the App
If all has gone well so far, the browser is displaying the Weinre Inspector Remote console. In the section labeled ‘Target Script,’ there's a string that contains a URL with the dev host's local IP address and port number, plus the name and path of the script file that Weinre needs to communicate with the target device.

Lower in the Target Script section is an example of how to embed the Target Script string between script tags:

<b>Example Script String</b>:

`<script src="http://<your local ip address>:<your port>/target/target-script-min.js#anonymous"></script>`

<b>&#53;. Copy and paste the example script string (above) into the `barcode_enumerate.html` file (or your corresponding app file).</b> 

<b>&#54;. Copy the URL string referenced earlier and use it to replace the example URL</b>. Be sure to leave the quote marks on either side of the URL.

The line in the HTML should look like this:

![img](images/debugging/weinre-target-script-example.png)

<b>&#55;. Start the Weinre debug UI by clicking the link in the Access Points section of the Weinre browser page</b>:

![img](images/debugging/weinre-link-to-debug-ui.png)

### Debug Client UI
The image below shows the ‘Remote’ tab of Weinre’s Debug Client UI. The ‘Targets’ and ‘Clients’ sections contain one device each, and the green text indicates that both devices are communicating.

The inset image is a screenshot from the target Android device that’s being displayed by an app called [Droid@Screen](http://droid-at-screen.org/) . This useful screencasting tool uses USB and ADB to stream screen shots to the development host.

![img](images/debugging/weinre-debug-and-device.png)

At this point, the app can be inspected as with the web inspector of Chrome or any other tool. The Elements tab shown below demonstrates two-way communication between the device and the development host. Clicking on an element in the HTML will cause that element to be highlighted on the device’s UI.

![img](images/debugging/weinre-two-way-communication-inspection.png)

The Elements tab can be used for on-the-fly changes to CSS styling, API and method calls and any and all app UI settings. In the example below, the button text was changed from ‘Enumerate’ to ‘Changed!’ simply by editing the test in the Elements tab.

<div class="span6" style="text-align:center">
    <p><b>Button text "Enumerate"</b></p>
</div>
![img](images/debugging/weinre-button-element-before-change.png)
<div class="span6" style="text-align:center">
    <p><b>Button text "Changed!"</b></p>
</div>
![img](images/debugging/weinre-button-element-after-change.png)

### Console and Issuing API Calls
One of the most versatile components of Weinre is its Console. Not only does it offer classic capabilities such as device visibility and monitoring during operation, but the Weinre Console also can access all of a device’s hardware fearures, issue commands and report how the device reacts.

The example below shows results from an attempt to use the JavaScript API to check the target platform, use the camera to scan a barcode, and issue a command to the [ScreenOrientation API](../api/screenorientation) (which returned an error).

![img](images/debugging/weinre-barcode-take.png)

In the example, the Console is used to verify that JavaScript APIs are functioning properly. A return of the correct system platform ‘Android’ proves that the System API is working. A return of the correct scanned barcode value likewise proves that the Barcode module is working properly.

<b>Here’s another important benefit of the Weinre console</b>.
Notice that when the barcode callback handler function is executed, we are using the form `console.log(e)`, where `e` is the callback return object. This allows us to inspect the object right in the console. It also simplifies validation because we see that it contains a barcode property and a status property, exactly as described in the [Barcode.take( ) method](../api/barcode?take(HASH propertyMap)) description. Alternative means—such as adding code for outputting to a log, then for seaching and retrieving the information from the device—can be time consuming, tedious and error-prone.

### Other Tabs in Debugger UI
Several other tabs in the debugging UI can be quite useful. 

![img](images/debugging/weinre-tabs.png)

#### Network Tab
The Network tab <b>measures and displays the time required for HTTP requests</b> made by an application. Clicking on any of the resources in the left-hand pane will visually represent the delay as its headers and content are loaded and AJAX and other calls are made to remote servers. Data displayed when hovering over ‘Latency’ and ‘Timeline’ columns, andcan be used to help optimize load-time performance. Remember that EB application can have a 'server' running on the device as well as on the web. It is important to inspect the processing of JavaScript or CSS files and reduce lag wherever possible. 

#### TimeLine Tab
The Timeline tool <b>measures and displays the rendering time of each element of the user interface</b>, presenting a visual display similar to that of the Network tab. The Timeline tab is useful for finding bottlenecks in front-end UI or DOM performance.

More information about Timeline can be found starting at 25:10 of Zebra’s [Front-End UI Optimization Webinar](https://developer.zebra.com/docs/DOC-1661). This one-hour video contains useful information about detecting reflows and other common problems that can bring mobile apps to a crawl.

#### Resources Tab
The Resources tab allows <b>displays the resources being used by the current Webview page</b>. Reources can include outside assets being called into the app such as images, JavaScript, stylesheets and cookies. Inspecting the resources can be useful if for ensuring that a particular resource has been loaded. This tab also can provide insight into other HTML5 features such as WebSQL and localStorage, if present.

## On-Device Debugging with Chrome

If you're building an Android app and have a device with Android KitKat 4.4 or higher, [Google Remote Debugging](https://developer.chrome.com/devtools/docs/remote-debugging) is an alternative to Weinre that's a bit easier to install and offers some great visuals for testing, debugging and fine-tuning your app while it's running on the device. 

Google Remote Debugging works with native Android apps that use WebView as well as purely browser-based apps. It includes live screencasting from the remote unit to the development host, and supports port forwarding and virtual host mapping in case your device needs to access a development server. 

###Requirements

* Mac OS X or Windows development host with [ADB](http://developer.android.com/tools/help/adb.html) installed
* Chrome 32 or later installed (Chrome Canary recommended)
* A USB cable for connecting the target to the dev. host
* A target device running Android 4.4 (KitKat) or later
* USB debugging enabled on target
* An app configured for WebView debugging

###1. Enable Device Debugging
The target device must have USB debugging enabled. This feature is found in **Settings >> Developer Options** panel, which is hidden by default. Here's how to **unhide Developer options** (if neccessary) **and enable USB debugging**: 

1. Go to **Settings >> About Phone**
2. **Go to the 'Build Number' box** (by scrolling all the way to the bottom)
3. **Tap the Build Number box seven times** 
4. **Return to Settings** and **tap Developer Options** 
5. **Place a check in the Enable USB Debugging** box

![Developer Options](images/debugging/Android_developerOptions.png)

###2. Discover Device (in Desktop Chrome)
If you haven't already done so, **connect your device to an available USB port on the development host** and **enable device detection in Chrome**: 

>![Chrome Detect](images/debugging/Chrome_detect_USB.png)

1. Open a browser window and **enter 'chrome://inspect'** in the address bar. You should see a screen similar the one above.

2. **Check the 'Discover USB Devices' checkbox**. Your mobile device should appear along with an alert on the device. (If no devices are visible, please refer to the [Connections](../guide/setup?Connections) section of the [Enterprise Browser Setup Guide](../guide/setup)). 

3. **Tap OK on the device** to complete the connection

4. Linux- and Mac-based developers can skip to the next step. **Developers on Windows must install a USB driver** to make a USB-attached Android device visible. Please refer to the [Connections](../guide/setup?Connections) section of the [Enterprise Browser Setup Guide](../guide/setup)) for that procedure.

5. At this point you should be ready to begin debugging. Once your app is deployed and running on the device, the chrome://inspect page should look something like the one shown below, with your device and a link to its debug-enabled WebViews. **To begin debugging, click an inspect link.** 

>![Chrome Web Inspect](images/debugging/Chrome_WebInspect.png)

<!-- Once we figure out if this works, we can uncomment this piece. Leaving it out for now.
## Remote Debugging with a Browser's Web Inspector
> Note: This JS debugging feature is currently only supported on Windows development environments.
Using a feature introduced in RhoElements 4.1, you can use your standard browser web inspector to debug your app's JavaScript. This is helpful if you are used to debugging your JS in a specific browser's web inspection utility. So far, this feature works in [Google Chrome](https://www.google.com/intl/en/chrome/browser/).

### Using the Remote Debugger
Before you can use this remote web inspector, you must first open the app you want to use in RhoSimulator. In this example, we'll run an app called [Barcode Example](https://github.com/rhomobile/rho-samples/tree/master/BareBones/BarcodeExample). As you can see from the data platform attribute, this is running as a Win32 app.

![Opening pp in RhoSim](images/debugging/opening_app_in_rhosim.png)

Once your app is open in RhoSimulator, simply navigate your browser to [http://localhost:9090/webkit/inspector/inspector.html?page=2](http://localhost:9090/webkit/inspector/inspector.html?page=2). You can also navigate to [http://localhost:9090](http://localhost:9090) and click the link that references your start page (for example http://127.0.0.1:49964/app/index.erb if your app starts at /app/index.erb). 

Once here you should see a web inspection tool very similar to our RhoSimulator's web inspector (which is very similar to that of Google Chrome's inspector) which should look like this:

![img](images/debugging/remote_inspector_landing_page.png)

### Altering App Attributes
As with most web inspectors you can change attributes in the inspector...

![img](images/debugging/changed_inspector_text.png)

...and have them appear immediately in the app.

![img](images/debugging/changed_app_text.png)
 -->

### Further Research
For more information about debugging with Chrome, please refer to the [Google Chrome Dev Tools Tutorial](https://developers.google.com/chrome-developer-tools/). 