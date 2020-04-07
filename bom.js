/*
    BOM, Browser Object Model
    No official standards for the BOM, most browsers have almost implement JS interactivity the same
    BOM is generaly referring to the window object
    All global objects, etc, will be inside the window object
    Document lives inside the window object
        window.document.getElementById(id);
    window size, browser window/viewport is NOT including scrollbars and toolbars, just webpage area
        window.innerHeight, 
        window.innerWidth,
    window methods, some common methods
        window.open(), open a new window
        window.close(), close current window
        window.move(), move current window
        window.resizeTo(), resize current window
    window.screen, can be written without the window prefix
        screen.width, visitors screen width in pixels
        screen.height, visitors screen height in pixels
        screen.availWidth, visitors screen width in pixels minus features like Windows Taskbar
        screen.availHeight, visitors screen height in pixels minus interface featuers like Windows Taskbar
        screen.colorDepth, returns number of bits used to display one color
            24 is true colors, over 16 million
            32 is deep colors, over 4 billion
        screen.pixelDepth, same as colorDepth for modern computers
    window.location, used to get, set, and redirect the URL
        



*/