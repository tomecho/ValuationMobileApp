# ValuationMobileApp
A simple react native mobile api that gives the user a rough estimate of what the thing they take a picture of is worth.

## Tools used
* react native - builds native apps in javascript
* expo - simplifies react native development
* express - for a simple http api to abstract over the necessary api's for security reasons
* clarifai - identifies images
* ebay api - values things

## Architecture
### mobile
react native app that does image selection and upload

### server
express app that basically wraps ebay and clarifai libaries to protect credentials and access.

## Getting it started
### Creating secrets
To keep some sensitive credentials confidential (not pushed up to github) there are a few files that need to be created.
* server/src/secrets.ts
```javascript
const ebayCredentials = {
  production: {
    appId: "appid",
    certId: "certid"
  }
}
const clarifaiApiKey = "the_key";
```
### Starting it up
* server 
  * `cd server; npm start`
* client
  * `cd mobile; npm start`
  * install the expo app on your phone
  * open it up
  * make sure you're on the same wifi network
  * select the app in expo to start it up
