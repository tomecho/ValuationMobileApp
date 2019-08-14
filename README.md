# ValuationMobileApp
A simple react native mobile api that gives the user a rough estimate of what the thing they take a picture of is worth.

## Tools used
* react native - builds native apps in javascript
* expo - simplifies react native development
* clarifai - identifies images
* ebay api - values things

## Architecture
### mobile
react native app that does image selection and upload

### server
express app that basically wraps ebay node api to protect credentials and access to ebay api. eventually should do the same for clarifai