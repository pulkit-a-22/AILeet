AILeet - Chrome Extension for LeetCode Hints
AILeet is a Chrome extension that helps you solve LeetCode problems by providing AI-generated hints using the OpenAI GPT model. This guide will walk you through the process of setting up the project, obtaining an API token from OpenAI, configuring the extension, and uploading it to Chrome as a developer extension.

Features
Provides AI-generated hints for LeetCode problems.
Allows users to input their own OpenAI API token for personalized usage.
Easy to set up and use.
Getting Started
1. Download the Repository
To download the AILeet repository, follow these steps:

Open your terminal.

Clone the repository using the following command:

bash
Copy code
git clone https://github.com/your-username/AILeet.git
Navigate to the project directory:

bash
Copy code
cd AILeet
2. Obtain an API Token from OpenAI
To use AILeet, you need an API token from OpenAI. Here's how to get one:

Sign Up or Log In to OpenAI:

Go to OpenAI.
Sign up or log in to your account.
Create an API Key:

Once logged in, navigate to the API section of the dashboard.
Click on "Create new secret key."
Give your key a name and click "Create."
Copy the API key provided by OpenAI. Make sure to save it securely, as you won't be able to view it again.
3. Input the API Token into the Extension
AILeet allows you to input your API token directly through the Chrome extension interface, but if you prefer to set it up via a .env file, follow these steps:

Create a .env File:

In the root directory of your project (where your content.js and manifest.json files are located), create a file named .env.
bash
Copy code
touch .env
Add Your API Key to the .env File:

Open the .env file in a text editor and add the following line, replacing your-api-key with the API key you obtained from OpenAI:
env
Copy code
CHATGPT_API_KEY=your-api-key
Save the file after making this change.

4. Upload the Extension to Google Chrome
To upload the AILeet extension to Chrome as a developer extension, follow these steps:

Open Chrome and Navigate to Extensions:

Open Google Chrome.
Go to chrome://extensions/ in your browser.
Enable Developer Mode:

In the top right corner, toggle the "Developer mode" switch to the "On" position.
Load the Unpacked Extension:

Click the "Load unpacked" button.
Navigate to the directory where your AILeet project is located.
Select the folder containing your extension files (e.g., the folder containing manifest.json).
Test the Extension:

Once the extension is loaded, you should see it appear in your extensions list.
Click the AILeet icon in your browser's toolbar to access the extension.
Input your OpenAI API key through the popup interface if you haven't done so via the .env file.
Start using AILeet on LeetCode!
5. Using the Extension
Navigate to a LeetCode problem.
Click the AILeet icon in the Chrome toolbar to get a hint for the problem you are working on.
