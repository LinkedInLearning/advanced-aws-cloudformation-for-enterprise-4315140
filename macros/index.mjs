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

    const response = {
        requestId: event.requestId,
        status: "success",
        fragment: event.fragment // no change
    };
    return response;
};
