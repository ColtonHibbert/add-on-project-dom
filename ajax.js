/*
    AJAX, Asynchronous JavaScript And XML
    send and recieve updates without using the URL request, the data can be url-encoded 
    update in the background and no page reloads
    AJAX lets you send regular text, JSON, and XML, everything in AJAX still gets converted to strings 
        NOT a programming language
        uses browser/window object XMLHttpRequest, all modern browsers support it
        JavaScript and HTML DOM will display the data
        Steps
            Browser
                Event occurs
                create XMLHttpRequest object
                Send HttpRequest
            Server
                process HttpRequest
                crete response and send back
            Browser
                Process response data using JS
                update page
    XMLHttpRequest object, what makes ajax possible, the function to create it is on the window object
    var xhttp = new XMLHttpRequest(); creates the XMLHttpRequest object
    Basically you   
        1.create your XMLHttpRequest object
        2.open method to set up your request and give it the params it needs
        3.set up headers or other info based on what you want to send
        4.send method, to send the request
            xhttp.open("POST", "ajax_test.asp", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send("fname=Henry&lname=Ford");
    On the response
        1.listen for onreadystatechange event
        2.call response methods to get your data
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("demo").innerHTML =
                    this.getAllResponseHeaders();
                }
            };
    XMLHttpRequest Methods
        abort()	Cancels the current request, used on the request
              xhttp.abort();
        getAllResponseHeaders()	Returns header information, used on the response
        getResponseHeader()	Returns specific header information, used on the response
        open(method, url, async, user, psw)	Specifies the request, used on the request
            method: the request type GET or POST, etc
            url: the file location/endpoint
            async: true (asynchronous) or false (synchronous)
            user: optional user name
            psw: optional password
            xhttp.open("GET", "ajax_test.asp", true);
        send()	Sends the request to the server, Used for GET requests, used on the get request
        send(string) Sends the request to the server, Used for POST requests, used on post request
        setRequestHeader(header, value)	Adds a label/value pair to the header to be sent, used on the request
    XMLHttpRequest Properties
        xhttp.onreadystatechange
        onreadystatechange	Defines a function to be called  every time readyState property changes, there are 5 states is called just 4 times on states 1-4
            onreadystatechange = myFunction() {code}
       readyState	Holds the status of the XMLHttpRequest.
            0: request not initialized
            1: server connection established
            2: request received
            3: processing request
            4: request finished and response is ready
        responseText	Returns the response data as a string
        responseXML	Returns the response data as XML data
        status	Returns the status-number of a request
            200: "OK"
            403: "Forbidden"
            404: "Not Found"
            and so forth
        statusText	Returns the status-text (e.g. "OK" or "Not Found") 
        simple GET request
            xhttp.open("GET", "demo_get.asp", true);
            xhttp.send(); 
            or 
            xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
            xhttp.send();
        simple POST request
            xhttp.open("POST", "ajax_test.asp", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send("fname=Henry&lname=Ford");

*/