# 🌐 Simple Node.js API for ConvertAPI and Firebase Storage
Welcome to the Simple Node.js API project! This API was created to work seamlessly with the Convertly App, a mobile app built with Expo and React Native to convert documents efficiently. 🚀

## 📋 Project Overview
This backend API has a single POST route designed to act as an intermediary between the Expo app and the ConvertAPI service. Since Expo doesn't natively support the ConvertAPI SDK, we built this API to handle the conversion requests and simplify the integration. Additionally, the API uses Firebase Admin to store the converted PDF files in Firebase Storage, making it easier to download the converted files directly.

## 🚀 Deployed to Railway
To enhance my backend deployment skills, I deployed this application on Railway. This deployment platform was chosen for its simplicity and ease of use in handling backend services. Now, you can test the API live, thanks to Railway's cloud hosting. 🎉

#### Want to try it out? The application is running on Railway, and you can access it directly for your conversion needs!

## ✨ Features
- ⚙️ ConvertAPI Integration: Handles file conversion requests from the Convertly App and communicates with the ConvertAPI.
- ☁️ Firebase Storage: Stores the converted files in Firebase Storage for easy retrieval and download.
- 🔒 POST Route: A single, clean POST route that handles file uploads and returns the converted file URL.
- 🚀 Easy Integration: Built specifically to work with the Convertly App, providing a smooth document conversion experience on mobile.
- 🌍 Railway Deployment: The API is deployed on Railway for fast and easy access.

## 🔧 Development Setup
### 1. Environment Variables
To get this project running, you’ll need to set up a few environment variables. Modify these with your own credentials for ConvertAPI and Firebase.

Create a .env file in the root directory with the following variables:

``` bash
CONVERT_API_SECRET=your_convert_api_secret
FIREBASE_STORAGE_BUCKET=your_firebase_bucket_url
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY=your_firebase_private_key
```

- You can get the CONVERT_API_SECRET from the ConvertAPI website.
- The Firebase environment variables are generated when you create your Firebase Admin SDK credentials.

### 2. ConvertAPI Setup
To get started with ConvertAPI, follow these steps:

1. Sign up at ConvertAPI and generate an API key.
2. Add your API key to the .env file under the CONVERT_API_SECRET variable.
3. You can test ConvertAPI’s capabilities using their online API documentation.

### 3. Firebase Setup
To store the converted files in Firebase Storage, follow these steps:

1. Go to the Firebase Console.
2. Create a new Firebase project (or use an existing one).
3. Navigate to Project Settings -> Service Accounts.
4. Generate a new private key for the Firebase Admin SDK, which will be downloaded as a .json file.
5. From the JSON file, copy the client_email, private_key, and other required fields into the .env file.

### Make sure Firebase Storage is enabled in your Firebase Console:

- Go to Storage in the Firebase Console.
- Create a storage bucket (or use the default bucket).
- Update the FIREBASE_STORAGE_BUCKET in your .env file with your bucket URL.

### 4. Installing Dependencies
After setting up the environment variables, install the required dependencies:
``` bash
npm install
```

### 5. Starting the Server
Once everything is set up, start the server:
``` bash
npm run dev
```

📬 POST Route
``` bash
https://convert-api-service-production.up.railway.app/api/covert
```

### Request Body:
- file: The file you want to convert (PDF, DOCX).
- conversionType: The type of conversion (e.g., PDF to DOCX - 1, DOCX to PDF - 2).
#### Obs.: If you are testing in Postman/Insomnia, remember to put a form-data in the body of the request
### Response:
- url: The URL of the converted file stored in Firebase Storage.

## 🛠️ Technologies Used
- Node.js: Backend framework for building the API.
- ConvertAPI: External service for document conversions.
- Firebase Admin SDK: Used to upload and manage files in Firebase Storage.
- Express.js: For setting up the HTTP server and handling routes.
- Railway: For deploying and hosting the API live

## 🌐 Related Projects
This backend API was built specifically for the Convertly App, a mobile document converter built with React Native and Expo. You can check out the app repository here:
#### 🔗 Convertly App Repository: https://github.com/antoniofernandodearujo/convertly-app

## 🚀 Hosted on Railway
This project is deployed on Railway, where you can access the live API and try out file conversions in real time. This deployment also helped improve backend deployment skills, offering practical experience in hosting a Node.js application on a cloud platform.

## 📄 License
This project is licensed under the MIT License. Feel free to fork, modify, and contribute! ❤️
