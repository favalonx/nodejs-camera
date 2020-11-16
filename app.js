//Available in nodejs
const NodeWebcam = require('node-webcam')

//Default options
const options = {
    //Picture related
    width: 1920,
    height: 1080,
    quality: 100,

    //Delay in seconds to take shot
    //if the platform supports miliseconds
    //use a float (0.1)
    //Currently only on windows
    delay: 5,

    //Save shots in memory
    saveShots: true,
 
    // [jpeg, png] support varies
    // Webcam.OutputTypes
    output: 'png',
 
    //Which camera to use
    //Use Webcam.list() for results
    //false for default device
    device: false,
 
    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes
    callbackReturn: 'location',
 
    //Logging
    verbose: true
};

//Creates webcam instance
const Webcam = NodeWebcam.create(options)
 
 
//Will automatically append location output type
Webcam.capture('test_picture', ( err, data ) => {
    console.log(data)
})

//Also available for quick use
NodeWebcam.capture('test_picture', options, (err, data) => {
    console.log(data)
})

//Get list of cameras
Webcam.list(list => {
    //Use another device
    const anotherCam = NodeWebcam.create({device: list[0]})
    console.log('list of cam:', anotherCam)
})

//Return type with base 64 image
NodeWebcam.capture('test_picture', {callbackReturn: 'base64'}, (err, data) => { 
    // console.log(data)
})
