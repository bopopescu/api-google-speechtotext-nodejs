// Imports the Google Cloud client library
const Speech = require('@google-cloud/speech');

// Your Google Cloud Platform project ID
const projectId = 'speechtotext-api-172610';

// Instantiates a client
const speechClient = Speech({
  projectId: projectId
});

const GOOGLE_APPLICATION_CREDENTIALS = "./SpeechToText-API-13041b48d1eb" ;

// The name of the audio file to transcribe
const fileName = './resources/radio1phut30giay.wav';

// The audio file's encoding, sample rate in hertz, and BCP-47 language code
const options = {
  encoding: 'LINEAR16',
  sampleRateHertz: 44100,
  languageCode: 'vi'
};

// Detects speech in the audio file
speechClient.recognize(fileName, options)
  .then((results) => {
    const transcription = results[0];
    console.log(`Transcription: ${transcription}`);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });

/* speechClient.LongRunningRecognize(uri, options)
  .then((results) => {
    const transcription = results[0];
    console.log(`Transcription: ${transcription}`);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  }); */