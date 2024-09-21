# Undetectable API Node.js Module

* This Node.js module simplifies interaction with the Undetectable AI Detection API. It allows developers to easily detect AI-generated text within their applications.

## Table of Contents

* Features
* Installation
* Prerequisites
* Getting Started
    * Importing the Module
    * Initializing the API Client
* Usage
    * Detecting Human Text
    * Detecting Individual Human Text
* API Reference
    * UndetectableApi Class
    * detectHumanText(text)
    * detectIndividualHumanText(text)
* Error Handling
* Examples
* Contributing
* License

### Features

* **Easy Integration**: Simplifies interaction with the Undetectable API.
* **Text Detection**: Detects AI-generated content in text.
* **Individual Detection**: Allows detection using various third-party AI detectors.
* **Promise-Based**: Uses async/await for clean and readable code.
* **TypeScript Support**: Fully typed for a better development experience.

### Installation

Install the package via npm:

**Bash**
```
npm install undetectable-api
```

If the package is not published on npm, you can include the source code directly by copying the undetectableApi.ts file and related modules into your project directory.

### Prerequisites

* Node.js version 12 or higher.
* TypeScript (optional) if you want to use the module with TypeScript.
* API Key from [Undetectable.ai](https://undetectable.ai/).
### Getting Started

#### Importing the Module

#### Using npm:

#### For CommonJS:

**JavaScript**
```
const { UndetectableApi } = require('undetectable-api');
```

#### For ES6 Modules or TypeScript:

**TypeScript**
```
import { UndetectableApi } from 'undetectable-api';
```

#### Using source code directly:

**TypeScript**
```
import { UndetectableApi } from './src/undetectableApi';
```

#### Initializing the API Client

Create an instance of the UndetectableApi class using your API key:

**TypeScript**
```
const apiKey = 'your-api-key-here';
const undetectableApi = UndetectableApi.getInstance(apiKey);
```

### Usage

#### Detecting Human Text

Use the detectHumanText method to submit text for AI detection:

**TypeScript**
```
const text = 'Sample text to analyze for AI-generated content.';
try {
  const response = await undetectableApi.detectHumanText(text);
  console.log('Detection Result:', response);
} catch (error) {
  console.error('Error:', error.message);
}
```

### Detecting Individual Human Text

Use the `detectIndividualHumanText` method to submit text for detection by various third-party AI detectors:

**TypeScript**
```
const text = 'Sample text to analyze using individual detectors.';
try {
  const response = await undetectableApi.detectIndividualHumanText(text);
  console.log('Individual Detection Result:', response);
} catch (error) {
  console.error('Error:', error.message);
}
```

### API Reference

`UndetectableApi` **Class**

#### Methods

`detectHumanText(text)`

* **Description**: Submits text for AI detection.
* **Parameters**:
    * `text` (string): The text to analyze.
* **Returns**: `Promise<DetectApiResponse>`
* **Usage**:

**TypeScript**
```
const response = await undetectableApi.detectHumanText(text);
```

`detectIndividualHumanText(text)`

* **Description**: Submits text for detection by various third-party AI detectors.
* **Parameters**:
    * `text` (string): The text to analyze.
* **Returns**: Promise<DetectApiResponse>
* **Usage**:

**TypeScript**
```
const response = await undetectableApi.detectIndividualHumanText(text);
```

#### Error Handling

Errors are thrown as instances of `Error` with descriptive messages. Common error