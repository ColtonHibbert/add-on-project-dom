/*
    JSON, JavaScript Object Notation, 
    JSON is string/text written in JavaScripts Object Notation
    Data sent between browser and server can only be text
    Can also convert JSON into JS on both ends
    JSON objects can be nested inside other JSON objects
    Because JSON is text any language can read and use it
    JSON is always in name:value pairs
        name will always be in quotes
        values may not be in quotes depending on data type
        "name":"John"
    JSON names require double quotes, JavaScript names don't
    JSON values must be one of the following types
        string
            { "name":"John" }
        number
            { "age":30 }
        an object(JSON object)
            {
                "employee":{ "name":"John", "age":30, "city":"New York" }
            }
        array
            {
                "employees":[ "John", "Anna", "Peter" ]
            }   
        boolean
            will be true/falase
            { "sale":true }
        null
            { "middlename":null }
        CANNOT BE 
            undefined, write it as a string if needed and convert it
            function, write it as a string if needed and convert it, should avoid doing this for functions
            date, need to set date a string and convert it later with JS, see reviver example
    JSON files
        The file type for JSON files is ".json"
        The MIME type for JSON text is "application/json"
    METHODS for JSON    
    JSON.stringify(obj), turns data into JSON, 
        const myJSON = JSON.stringify(myObj);
        will autoconvert dates into strings
        will literally remove any functions completely, both key and value, unless you convert it to a string first
    JSON.parse(obj,reviver), turns data into JS object, or array
        const jsObject = JSON.parse(obj);
        reviver argument is a function,takes 2 arguments key,value and checks each property and returns if ok
            var jsonObj = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
            var obj = JSON.parse(jsonObj, function (key, value) {
                if (key == "birth") {
                    return new Date(value);
                } else {
                    return value;
                }
            }); 
    .json(), like parse, turns data into JS object
        const jsObject = jsonData.json() or res.json()
    JSON accessing values, 
        JSON is iterable
        You can still access JSON values without converting to JS
        use object notation .
        or bracket notation
            myObj = { "name":"John", "age":30, "car":null };
            x = myObj.name;
            x = myObj["name"];
        modify any value just like a JS object
            myObj.cars.car2 = "Mercedes";
        delete a JSON property, use delete keyword and specify
            delete myObj.cars.car2;
        Use bracket notation if it's an array 

    JSONP, JSON with Padding
    uses the <script> tag
            <script src='filename or url' />
    does NOT use XMLHttpRequest object
    lets you load EXTERNAL scripts
    Requesting a file from another domain can cause problems, due to cross-domain policy.
    Requesting an external script from another domain does not have this problem.
    You can dynamically create script tags with JS and add the src as well

*/