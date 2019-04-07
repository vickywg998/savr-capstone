# Savr

Thank you so much for checking out what I built for my final project at BrainStation. You can access the website via www.tinyurl.com/savr-app (click Advanced and Proceed to www.tinyurl.com/savr-app if you are using Chrome)

Here are some of the instructions to try out the app on your own computer. 

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install everything you need to run the project.

```bash
npm install 
```

## Usage
- Get API keys from [Google Cloud Vision API](https://cloud.google.com/vision/docs/libraries) and [Edamam](https://developer.edamam.com/)
- With Google credentials, please download the JSON file with Google Auth Keys and set up the environment accordingly. 
- Create a .env file 

Inside the .env file: 
```bash

PORT=8080
GOOGLE_APPLICATION_CREDENTIALS=./[FILL_IN_YOUR_GOOGLE_JSON_FILE]
API_ID="[FILL IN YOUR EDAMAM API_ID]"
API_KEY="[FILL IN YOUR EDAMAM API_KEY]"

```

## Built with

- Front-end: HTML, CSS, JavaScript, React 
- Back-end: Node.js, Express
- Database: JSON (will be migrated to MySQL)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

