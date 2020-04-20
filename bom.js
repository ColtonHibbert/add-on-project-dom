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
    window.location, used to get, set, and redirect the URL, can be written without the prefix, any globals can
        location.href returns the href (URL) of the current page
        location.hostname returns the domain name of the web host
        location.pathname returns the path and filename of the current page
        location.protocol returns the web protocol used (http: or https:)
        location.port returns port,https default is 443, http default is 80, if it is a default the browser won't show anything
        location.assign("https://www.w3schools.com") loads a new document
    window.history, browser history, limitations on how this can be used
        history.back() same as clicking back in a browser
        history.forward() same as clicking forward in a browser
    window.navigator
        any information from the navigator object has the potential to be misleading or wrong
        navigator.cookieEnabled, returns true if cookies are enabled, otherwise false
        navigator.platform, returns the operating system like Windows 32
        navigator.language, returns the browsers language
        navigator.onLine, returns true if browser is online
        navigator.javaEnabled() returns true if Java is enabled
        note how  cookieEnabled is just a property but javaEnabled() is a function
            
        navigator.appVersion, don't use it, not reliable and can be faked, returns info about browser version
        navigator.appName, don't use it, returns Netscape for basically every browswer, chrome etc
        navigator.appCodeName, don't use it, returns Mozilla for Chrome IE etc
        navigator.product, don't use it, returns Gecko for basically everything
    Popup Boxes
        window has 3 standard popups
        window.alert("alert"), press ok to proceed, nothing returned
        window.confirm("confirm ok or cancel"), ok returns true, cancel returns false
        prompt("prompt, input a value"), asks user input and stores as value if you click ok, cancel returns null
    Timing Events, setTimeout() and setInterval()
        setTimeout(function, milliseconds), runs once
        clearTimeout(timeoutVar), needs variable, stops setTimeout function
            const timeoutVar = setTimeout(myFunction, 3000);
            clearTimeout(timeoutVar);
        setInterval(function, milliseconds), keeps running every interval
        clearInterval(intervalVar), needs variable, stops function execution set in setInterval 
            const intervalVar = setInterval(myFunction, 3000);
            clearInterval(intervalVar);
    Cookies, information stored in text files on your computer, solve the problem of how to remember information about the user
        cookie support must be enabled in the browser
        cookies are saved in name-value pairs and take additional parameters,   
            document.cookie ="username=John, expires=date, path=/pathname";
        document.cookie property looks like a text string but it is not, you will get name-value pairs
            cookie1 = value; cookie2 = value;
        to find a specific cookie value you must parse the entire string with JS and look for that value 
        create a cookie
            document.cookie = "username=John Doe";
            document.cookie = "username=John Doe; expires=Thu, 18 Dec 2021 12:00:00 UTC";, future expiry date will delete it at that time
            document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";, tell browser what path cookie belongs to, default is the page
        read a cookie
            const x = document.cookie;
        delete a cookie, set expiry date to the past, don't need the value
            document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        function checkCookie() {
            var user = getCookie("username");
            if (user != "") {
                alert("Welcome again " + user);
            } else {
                user = prompt("Please enter your name:", "");
                if (user != "" && user != null) {
                    setCookie("username", user, 365);
                }
            }
        }
    Forms
        Constraint Validation DOM methods
            Property	        Description
            checkValidity()	    Returns true if an input element contains valid data
            setCustomValidity()	Sets the validationMessage property of an input element

            checkValidity() example
                function myFunction() {
                    var inpObj = document.getElementById("id1");
                    if (!inpObj.checkValidity()) {
                        document.getElementById("demo").innerHTML = inpObj.validationMessage;
                    }
                }
        Constraint Validation DOM Properties
            Property	        Description
            validity	        Contains boolean properties related to the validity of an input element.
            validationMessage	Contains the message a browser will display when the validity is false.
            willValidate	    Indicates if an input element will be validated
        Validity Properties of input elements
            Property	    Description
            customError	    Set to true, if a custom validity message is set.
            patternMismatch	Set to true, if an element's value does not match its pattern attribute.
            rangeOverflow	Set to true, if an element's value is greater than its max attribute.
            rangeUnderflow	Set to true, if an element's value is less than its min attribute.
            stepMismatch	Set to true, if an element's value is invalid per its step attribute.
            tooLong	        Set to true, if an element's value exceeds its maxLength attribute.
            typeMismatch	Set to true, if an element's value is invalid per its type attribute.
            valueMissing	Set to true, if an element (with a required attribute) has no value.
            valid	        Set to true, if an element's value is valid.
                
            example rangeOverflow property
                <input id="id1" type="number" max="100">
                <button onclick="myFunction()">OK</button>   
                   
                function myFunction() {
                    var txt = "";
                    if (document.getElementById("id1").validity.rangeOverflow) {
                        txt = "Value too large";
                    }
                    document.getElementById("demo").innerHTML = txt;
                }
*/