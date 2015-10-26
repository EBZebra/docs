## DOM Injection

New in Enterprise Browser 1.3 is the ability to insert HTML5 code into the DOM without modifying the underlying application. This permits features, capabilities and even the look of one or more server-based Enterprise Browser app pages to be modified at runtime using meta tags, CSS and JavaScript stored in a text file on the device. 

DOM injection is enabled by default in EB 1.3 and higher apps, and is activated by the presence of &lt;CustomDOMElements&gt; in the &lt;Application&gt; section of the app's `Config.xml` file. This new tag should contain a fully qualified path to the device-resident file that you create which stores the DOM element(s) to be injected into which pages. When executed, the app then assembles a list of the pages to receive injections and another of the elements to be injected for a given page whenever that page is displayed. **The injected code itself can be local, server-based or a combination**.

DOM Injection is **supported on Android with the stock webkit, Windows Mobile/CE with the Zebra Webkit and on Windows CE with the IE engine**. DOM injection is NOT currently supported on Windows Mobile with the IE engine. No special licensing is required. 

## What is the DOM?
In the context of modern web programming, **the ‘DOM’ refers to your HTML5 code as it will appear when running**. For example, while the code of an HTML5 app might define certain variables, those variables contain no values until the app is executed. Therefore, it's accurate to think of the DOM as an HTML5 app that's in use.

## How to use DOM Injection

To use DOM injection, **all of the following must be true**:

* You're working with an Enterprise Browser 1.3 (or higher) app
* You've created a `tags` file containing elements to be injected and pushed it to the target device
* The path to the `tags` file is specified in `config.xml` 
* The target device is one of the following: 
	* Android with stock webkit 
	* Windows Mobile/CE device with Zebra Webkit
	* Windows CE with IE engine

**_DOM injection is NOT currently supported on Windows Mobile with the IE Engine_**. 

### Step 1- Prepare the 'tags' file

* **Create a text file and with DOM-injection tags** similar to those below. These will become the commands that will be injected into the DOM. Notice the syntax is similar to that of ordinary HTML tags for including scripts, style sheets and meta data. 

What's different is the 'pages' attribute, which isspecifies the page into which the element defined in the tag will be injected. 


**Injected code itself can be local or server-based**. 

	:::xml
	<script type='text/javascript' src='./mytest.js' pages='p1;p2'/>
	<script type='text/javascript' src='./mytest.js' pages='*'/>
	<script type='text/javascript' src='http://192.168.10.1:8081/test.js' pages='*'/>
	<script type='text/javascript' src='file://\programfiles\enterprisebrowser\rho\apps\app\test.js' pages='p1;p2'/>
	<meta http-equiv="refresh" content="30" pages='p1;p2'/> 
	< meta http-equiv="refresh" content="30" pages='*'/>
	<META HTTP-Equiv="scanner" Content="Enable" pages='*'/>
	<!--META HTTP-Equiv="scanner" Content="Enable" pages='*'-->
	<link rel="stylesheet" type="text/css" href="mystyle.css" pages='p1;p2'/>
	<link rel="stylesheet" type="text/css" href="mystyle.css" pages='*'/>
	<!--link rel="stylesheet" type="text/css" href="mystyle.css" pages='*'-->
	<link rel="stylesheet" type="text/css" href="file://\programfiles\enterprisebrowser\rho\apps\app\mystyle.css" pages='p1;p2'>





