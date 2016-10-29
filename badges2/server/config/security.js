BrowserPolicy.content.allowOriginForAll("*.googleapis.com");
BrowserPolicy.content.allowOriginForAll("*.gstatic.com");
BrowserPolicy.content.allowOriginForAll("*.bootstrapcdn.com");

BrowserPolicy.content.allowFontDataUrl();

// fix for modal, but not very secure
BrowserPolicy.content.allowEval();
