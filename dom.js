/*
    HTML DOM
    The HTML DOM is a standard object model and programming interface for HTML, basically we
    take HTML and we re-represent it as an object that other languages can use like JS or other languages
        Defines 
            HTML elements as Objects
            Properties of all elements
            Methods to access elements
            Events for all elements
    DOM Standard has 3 parts
        Core DOM, standard model for all document types
        XML DOM, standard model for XML documents
        HTML DOM, standard model for HTML documents
            the HTML DOM model is constructed of a tree of Objects, the order is
                document
                root element:<html>
                <head>, <body>
                and so forth
    Document Object, contains all elements on the page, need to access it first to access other elements
    JS, or other languages, can access the HTML DOM and do whatever you need it to
    HTML DOM methods, actions you can perform on HTML elements, like adding or deleting an element
    HTML DOM properties, values of HTML Elements you can get or set/change, like changing the content of an element
        document.getElementById("demo").innerHTML = 'Hello World!'
            getElementById() is a method
            .innerHTML is a property
        Change HTML properties using object notation
            element.style.property = value;
            element.src = "./filename.jpg";
        Change HTML properties using setAttribute() method
            element.setAttribute(attributeName, value);
        Use methods, add or delete elements
            document.createElement(element);
            document.removeChild(element);
            document.appendChild(element);
                can use append and remove child on other elements
            document.replaceChild(new, old);
            document.write(text); write to the html output stream  
        Use methods to add event handlers
            document.getElementById(id).onclick = function() {code}
    Document properties, there is a large list of properties on the document such as
        document.scripts	Returns all <script> elements	
        document.forms	Returns all <form> elements
        document.cookie	Returns the document's cookie
        and so forth, a good number are read only
    HTML element selectors, methods to find HTML element or elements, find by these ways
        id, document.getElementById(id); 
            live
        tag name, document.getElementsByTagName("p");
            live
        class name, document.getElementsByClassName("intro");
            note returns a live collection, a variable that stores the getElementsByClassName returns the current elements that match the selector when it is used, means it may change from the moment it was called 
        CSS selector, can find by any css query, classname, simple selector etc, or by regular id
            returns a static collection, a variable that stores the selector will be based on when the method was called
            also uses a . for classnames, # for id, and will do other queries like css selectors
            querySelector- returns the first match
              document.querySelector(".blue-class");  
              document.querySelector("#id");
              document.querySelector("#id.class:pseudo");
            querySelectorAll()- returns an array of matches
                document.querySelectorAll("p.intro")
        HTML Object and Object Collection, 
            document.anchors, Returns all <a> elements that have a name attribute
            document.body, Returns the <body> element
            document.documentElement,
            document.embeds, Returns all <embed> elements
            document.forms, Returns all <form> elements
            document.head, Returns the <head> element
            document.images, Returns all <img> elements
            document.links, Returns all <area> and <a> elements that have a href attribute
            document.scripts, Returns all <script> elements
            document.title, Returns the <title> element
    Event Listeners
        addEventListener() method,
        element.addEventListener(event, function, true- for useCapture and is optional, default is false and not needed)
        element.addEventListener("click", function(){ alert("Hello World!"); });
            attaches eventHandler and function to run for that handler
            does not overwrite existing handlers
            add as many different event types as you want
            can have two "click" events on same element
            add event listener to any DOM object like window object
            other objects like xmlHttpRequest also support events 
            DOM events don't have the on, like "change" and "click"
        removeEventListener() to remove, specify the event and the function to remove
            element.removeEventListener("mousemove", myFunction);
    Event Bubbling, Event Capturing, the two types of event propagation in the HTML DOM
        event propagation, a way of defining element order when an event occurs 
            bubbling, the innermost elements event is handled first and then bubbles up to the parent and so forth
            capturing, the outermost elements event is handled first and then the inner
                document.getElementById("myDiv").addEventListener("click", myFunction, true);
    HTML Nodes,
        everything in the HTML document is a Node,
            document, a document node
            elements, are element nodes
            text inside an element, are text nodes
            comments, are comment nodes
        Nodes are in a node tree
            terms are
                root node
                parent
                children
                siblings
            use node properties to navigate between nodes
                parentNode
                childNodes[nodenumber], nodenumber is an array, grabs the child via index
                firstChild
                lastChild
                nextSibling
                previousSibling
            .nodeValue, grabs the value of the node like with text
            again elements with text have text nodes, so we go to the element, access the child node which will be the text node, and grab the value
                both of these below do the same thing, .innerHTML is just a shorthand for grabbing the firstChild.nodeValue
                document.getElementById("id01").innerHTML = "Hello World";
                document.getElementById("id01").firstChild.nodeValue = "Hello World";
            
            


    




*/