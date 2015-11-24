# Debugging Enterprise Browser Apps
This guide will help you with debugging your Enterprise Browser apps directly from the device using a tool called [weinre](http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html).

## Debugging on the Device Using Weinre
Weinre is a must have developer tool for testing or debugging your JavaScript Enterprise Browser application. Although a lot of testing and analysis can be done using emulators and your IDE, sometimes the application behaves differently on a device and you can't test hardware features like [Barcode](../api/barcode) as effectively. Weinre allows you to do all of this. Think of it as a remote Web Inspector. It also allows you to get familiar with the Enterprise Browser APIs right from the Weinre JavaScript Console tab much more rapidly then trying to fumble around with reading through logs.

For those who would rather see it in action, this guide is modeled after a [webinar](https://www.youtube.com/watch?v=aSTXEEAfJ6M) that shows most of what we are going to cover here. We will also be using the [Barcode Example](https://github.com/rhomobile/rho-samples/tree/master/BareBones/BarcodeExample) app for all of the examples in this guide. You may download it and follow along but the app is by no means necessary. You can use Weinre with any application or simply if you would just like to play around with the APIs to try out some code.

### Installing Weinre
> Note: You must have admin/sudo privileges to install weinre and your device must be on the same WiFi network as your laptop.

Weinre is a Node.js application and comes delivered via a Node Package installed with the `npm` command. Download node.js [here](http://nodejs.org/download/) and install it on your computer. Once it is installed, install weinre using the following command:

    :::term
    $ npm -g install weinre

> Note: Mac users you may have to include the 'sudo' prefix

More details around the installation process and configuration of Weinre can be found on [Weinre's installation site](http://people.apache.org/~pmuellr/weinre/docs/latest/Installing.html).

### Starting Weinre
Open a command prompt and start Weinre with your local machine's local IP address using the `--boundhost` option. If you just launch `weinre` on it's own it will be bound to the `localhost` which will be inaccessible from your device.

    :::term
    $ weinre --boundhost <your local IP address>

Weinre will print out the address and port that you will use in order to continue.

For example, here is my output from the above command

    :::term
    2013-10-31T00:24:07.549Z weinre: starting server at http://192.168.1.128:8080

Verify that Weinre is running correctly by navigating your browser to the address Weinre gives you. You should see a page like this.

![img](images/debugging/weinre-web-console.png)

### Enabling Weinre In Your App
Notice the section in the web console labeled "Target Script". This is a string that you must copy into your app in order for Weinre to be able to interact with your app. This string is `<script src="http://<your local ip address>:<your port>/target/target-script-min.js#anonymous"></script>`. I'm going to put this line into my `barcode_enumerate.html` file so that when I load that file in my app, it will connect to Weinre and start capturing info. After editing this file, you would rebuild and relaunch the application so that the changes take effect. 

Here is what the line looks like in my HTML:

![img](images/debugging/weinre-target-script-example.png)

Now that we have those steps out of the way, it's time to start up Weinre's `debug client user interface` by clicking the link in the  `Access Points` section of the page we just loaded in our browser.

![img](images/debugging/weinre-link-to-debug-ui.png)

### Debug Client UI
You may notice that there are many options at the top of the debug UI that very closely resemble the tools available in the Chrome Web Inspector. This is not by accident, these tools serve the same purpose as they would in the Chrome Web Inspector but these are for inspection on the device. 

Here you see both the Weinre debug UI connected to my device (when the device is connected, the Targets and Clients fields are populated with green text describing the device connection.) and my device's screen. I am screen-casting my Android device's screen to my monitor with the help of an app called [Droid@Screen](http://droid-at-screen.ribomation.com/) which uses USB and adb in order to stream screen shots to your computer. It's got some lag but is very useful.

![img](images/debugging/weinre-debug-and-device.png)

Now you can inspect your app just as you would any other HTML page if you were using the Chrome web inspector. Select the Elements tool at the top of the page and select an element to inspect. You will also see the element highlighted on your device showing you that two-way communication is established.

![img](images/debugging/weinre-two-way-communication-inspection.png)

You can use the Elements tool to change things on the app's view on the fly just by changing the code in the inspector itself. For instance, in the below images I am simply changing the text on the button from "Enumerate" to "Changed!".

<div class="span6" style="text-align:center">
    <p><b>Button text "Enumerate"</b></p>
</div>
![img](images/debugging/weinre-button-element-before-change.png)
<div class="span6" style="text-align:center">
    <p><b>Button text "Changed!"</b></p>
</div>
![img](images/debugging/weinre-button-element-after-change.png)

You can change pretty much any part of the view such as CSS styling and even which APIs and methods are called, but I chose to do a simple one for brevity's sake.

### Console and Issuing API Calls
One of the most helpful features of Weinre is the console. You can use this console as the classic console to see what is happening on the device while in operation. However, with this console we can do more than just look at what's happening on the device, we can also issue commands to the device to see how the device will react. This is especially helpful since all of the hardware APIs will only work on actual hardware, which means they cannot be tested in an emulator.

In this example, I am showing just a few commands that can be run from the console to verify that the JS APIs are operating properly. Here I use the JS API to check the platform I am running on and use the camera to scan a barcode.

![img](images/debugging/weinre-barcode-take.png)

As you can see, I have verified using API calls that my JS APIs are functioning properly. My device is an ET1 which **is** in fact an Android device, so we know that the System API is working. The item's barcode that I scanned reads exactly what was returned here by the `Barcode.take()` method, so I know that the Barcode module is working properly.

Notice that when the barcode callback handler function is executed we are doing a `console.log(e)` where `e` is the callback return object. We can then simply inspect the object right in the console and see that it contains a `barcode` property and a `status` property. Exactly what is described in the [Barcode.take()](../api-barcode?take(HASH propertyMap)) method description. Using other means like looking in [your log file](../guide/logging) for information like this may be very time consuming and tedious to add code to output to the log, retrieve it from the device, etc.

### Other Tabs in Debugger UI
![img](images/debugging/weinre-tabs.png)
There are a few other tabs that we have seen in the debugger UI that I should briefly mention. 

#### Network Tab
This tab is great for inspecting what files the application is obtaining from the 'server'. Remember that when building an EB application, the 'server' is normally running on the device as well. However it is still important to inspect this as unnecessary processing of JavaScript or CSS files may be giving your application a lag that you may not have noticed while running the app in an emulator. There are many resources on the internet that describe using this tab in detail either in the context of Weinre or Chrome Dev Tools. Be sure to be aware of how to use this useful resource when optimizing your application.

#### TimeLine Tab
This tab is great for inspecting front-end UI or DOM performance. Each action in your user interface will be displayed and you can inspect for bottle necks in rendering, or other areas. Again there are many resources on the web that discuss this feature. We also did a full [webinar](https://developer.motorolasolutions.com/docs/DOC-1661) on the topic for detecting Reflows and the usual CSS suspects for performance hits on devices. Be sure to get familiar with these concepts and include them in your routine for application optimization.

#### Resources Tab
The resources tab provides information about the various resources associated with a page. This is useful if you want to make sure a resource (e.g. an external script or stylesheet) has been loaded or for checking out the cookies. You can also look at some HTML5 features like localStorage or WebSQL. 

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
As you can probably guess by now, debugging using this method is very similar to debugging using your web browser's built in web inspector because that is exactly what you are doing. Any further tutorials concerning debugging in this fashion should be looked into via tutorials for the given web inspection utility of your respective web browser.

* [Google Chrome Dev Tools Tutorial](https://developers.google.com/chrome-developer-tools/)