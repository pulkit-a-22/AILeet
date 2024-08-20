# AILeet - Chrome Extension for LeetCode Hints

AILeet is a Chrome extension that helps you solve LeetCode problems by providing AI-generated hints using the OpenAI GPT model. This guide will walk you through the process of setting up the project, obtaining an API token from OpenAI, configuring the extension, and uploading it to Chrome as a developer extension.

## Features

- Provides AI-generated hints for LeetCode problems.
- Allows users to input their own OpenAI API token for personalized usage.
- Easy to set up and use.

## Getting Started

### 1. Download the Repository

To download the AILeet repository, follow these steps:

1. Open your terminal.
2. Clone the repository using the following command:

   ```bash
   git clone https://github.com/pulkit-a-22/AILeet.git
3. Navigate to the project directory

### 2. Get an OpenAI api key
To use AILeet, you will have to load a balance into your chat-gpt account. Luckily, a simple 5 dollars will last you for many years. 
1. Navigate to the API section on Open AI's dashboard
2. Click on "Create a new secret key"
3. Give your key a name and then create
4. Copy the API key. Make sure to save the key as you wont be able to view it again

### 3. Input the API token into the extension
1. After navigating to the folder directly in your terminal enter this command:
   touch .env
2. Copy this in, replacing it with your API key:
   CHATGPT_API_KEY=your-api-key
3. Save the file and exit

### 4. Upload the file to Google Chrome to use as an extension 
1. Go to the extensions tab in chrome's settings
2. Toggle Developer Mode in the top right
3. Click the Load Unpacked button
4. Load in the folder that contains the extension

### 5. Run the server
1. Navigate to the project directory in your terminal
2. Enter the following command:
   node server.js

### 6. Enjoy AILeet!
Now, when you go to a Leetcode problem, you should see a button that says "get AI Hint" on the bottom right. 





