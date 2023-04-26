(function(ext) {
    // Detects the user's operating system and sets a variable to it
    ext.detectOS = function(callback) {
        let os = "";
        if (navigator.appVersion.indexOf("Win")!=-1) os = "Windows";
        if (navigator.appVersion.indexOf("Mac")!=-1) os = "MacOS";
        if (navigator.appVersion.indexOf("X11")!=-1) os = "UNIX";
        if (navigator.appVersion.indexOf("Linux")!=-1) os = "Linux";
        callback(os);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'detect OS', 'detectOS']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Get OS', descriptor, ext);
})({});