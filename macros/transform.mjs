export const handler = async(event) => {
    
    // var region = event.region
    // var accountID = event.accountID
    // var fragment = event.fragment
    // var transformId = event.transformId
    // var params = event.params
    // var requestID = event.requestId
    // var templateParameterValues = event.templateParameterValues
    
    console.log("Hello from lambda")
    console.log( "event params: " + JSON.stringify(event, 2, null))


    // START: TRANSFORM THE JSON
    var tags = [
        { "Key" : "Created by",
          "Value" : "me"
        },
        { "Key" : "Created on",
          "Value" : new Date().toISOString()
        }
    ]
    // event.fragment is already parsed into JSON
    if ( event.fragment.hasOwnProperty("Resources") ) {
        var resources = event.fragment["Resources"]
        Object.keys( resources ).forEach( (resourceLabel) => {
            console.log("Encountered resource " + resourceLabel )
            resources[resourceLabel]["Properties"]["Tags"] = tags // note: this will replace any existing tags
        })
    }
    console.log("Converted fragment: " + JSON.stringify(event.fragment, 2, null))
    // END: TRANSFORM THE JSON

    const response = {
        requestId: event.requestId,
        status: "success",
        fragment: event.fragment // no change
    };
    return response;
};
