## DOM Injection

New in Enterprise Browser 1.3 is the ability to insert certain types of HTML5 code into the DOM without modifying the underlying application. This permits features, capabilities and even the look of one or more server-based Enterprise Browser app pages to be modified at runtime using meta tags, CSS and JavaScript stored in a text file on the device. 


####How it works
The DOM injection capability is activated in 'extensions' section of the app's `build.yml`, which is enabled by default in EB 1.3 and higher apps. A text file is created to contain the elements and pages to be injected, and the file path is specified in the &lt;Application&gt; section of the `Config.xml`. Once in place, the app when executed assembles a list of the pages to receive injections and another of the elements to be injected for a given page whenever that page is displayed. 

DOM Injection is **supported on Android with the stock webkit, Windows Mobile/CE with the Zebra Webkit and on Windows CE with the IE engine**. DOM injection is NOT currently supported on Windows Mobile with the IE engine. No special licensing is required. 

## What is the DOM?
In the context of modern web programming, **the ‘DOM’ refers to your HTML5 code as it will appear when running**. For example, while the code of an HTML5 app might define certain variables, those variables contain no values until the app is executed. Therefore, it's accurate to think of the DOM as an HTML5 app once it's in use.

## How to use DOM Injection

To use DOM injection, **all of the following must be true**:

* You're working with an Enterprise Browser 1.3 (or higher) app
* The extensions section of the `build.yml` includes 'dominjector'
* You've created a `tags` file containing elements to be injected and pushed it to the target device
* The path to the `tags` file is specified in `config.xml` 
* The target device supports DOM injection: 
	* Android with stock webkit 
	* Windows Mobile/CE device with Zebra Webkit
	* Windows CE with IE engine

**_DOM injection is NOT currently supported on Windows Mobile with the IE Engine_**. 

### Step 1- Modify the build.yml file

**Enable DOM injection by including it in the 'extensions' section** of the app's `build.yml`, as below: 

		:::xml
		extensions: ['dominjection','otherExt','anotherExt']


When multiple extensions are used, separate them with commas. 

ut **injected code itself can be either local or server-based**. 






