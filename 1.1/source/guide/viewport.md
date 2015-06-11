# Viewport Configuration
Using the Viewport configuration setting in your app's config.xml, as well as in the HTML source of your app, you can configure the way your app will appear on a device based on either the device's width or a width you otherwise specify. We will go over a few of the less intuitive parts of the viewport configuration here.

## Enabling Viewport Modification
This will enable you to use your stnadard viewport settings within the Symbol Technologies Webkit. For more information on the Viewport metatag see the [Mozilla Viewport Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag).

Firstly, to enable the viewport in Symbol Technologies WebKit on Windows Mobile / CE you need to specify the following configuration option:

`config.xml`
	 
    :::xml
    <ViewportEnabled VALUE="1"/>

## Specifying Device Widths
Specifying `width=device-width` in your meta tag will either:

* Use the value specified at `&lt;ViewportWidth VALUE="320"/&gt;` if one is specified.
* Use the actual physical device width if no configuration option is specified, 480 pixels on an MC75a.

Pages that specify an initial or maximum scale means the width property actually translates into a minimum viewport width. For example, if your layout needs at least 500 pixels of width then you can use the following markup.  When the screen is more than 500 pixels wide, the browser will expand the viewport (rather than zoom in) to fit the screen:

### With Specified initial-scale

The same page rendered on MC75a will appear as follows:

In your app's html:

    :::html
    <meta name="viewport" content="width=500, initial-scale=1"/>

* MC75A Windows Mobile 6.5

![img](images/viewport_config/winmo_viewport_demo.png)

* An Android device's viewport appears similar but is not identical; the screen width is rendered at 360 pixels, presumably because the device resolution is different for Android.
* The MC75a is behaving within the parameters of documented behavior when specifying both device-width and initial-scale, as detailed above, expanding the viewport to fit the contents.

### Without Specified initial-scale

Let us consider the same page without specifying an initial-scale:

In your app's html:

    :::html
    <meta name="viewport" content="width=320"/>

* MC75A Windows Mobile 6.5

![img](images/viewport_config/winmo_no_initial_scale.png)

Note that without specifying an initial-scale the MC75a will display the page with a viewport width of 320 pixels. This is with a specified device width of 320 pixels in the `config.xml` file, had this been left blank, the page would again render with a width of 480 pixels.

We suggest that you not specify an initial-scale in the viewport if you want the page to be locked to a resolution of 320 pixels on Windows Mobile. You can modify your html file to have a custom viewport for Windows Mobile if required.