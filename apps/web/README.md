# 🌐 Web Version of the File Conversion Application
Welcome to the Web Version of the File Conversion Application! This application allows users to convert documents easily using ConvertAPI, leveraging the power of React, Next.js, and Tailwind CSS. 🚀

### Access the project: https://main.d2as35u28vga9.amplifyapp.com/

## 📋 Project Overview
Unlike the mobile version, this web application utilizes the ConvertAPI directly through JavaScript, eliminating the need for the Node.js backend. This allows for a more streamlined user experience, making document conversion quick and efficient.

## 🚀 Deployed on AWS Amplify
For the first time, I deployed this application on AWS Amplify, showcasing my skills in cloud deployment. This service provides a seamless way to host and manage web applications with automatic scaling and CI/CD capabilities. 🎉

## ✨ Features
- ⚙️ ConvertAPI Integration: Direct integration with ConvertAPI, allowing for file conversions without the need for a separate backend.
- 🎨 Styled with Tailwind CSS: Beautiful and responsive design using Tailwind CSS for a modern user interface.
- 📦 Built with React and Next.js: Utilizing the latest React features with Next.js for server-side rendering and optimized performance.
- 🌍 AWS Amplify Deployment: Deployed on AWS Amplify for reliable hosting and continuous integration.

## 🔑 Getting Started

### 1. Environment Variables
To run the project locally, you need to set up your ConvertAPI API key.

1. Sign up at ConvertAPI and generate your API key.
2. Create a .env file in the root directory of your project and add the following line: #### .env
```bash
  NEXT_PUBLIC_CONVERT_API_SECRET=your_convert_api_secret
```
#### Replace your_convert_api_secret with the actual API key you obtained from ConvertAPI.

### 2. Installing Dependencies
After setting up the environment variables, install the required dependencies:

```bash
 npm install
```

### 3. Running the Project
To start the development server, run:
```bash
 npm run dev
```
#### This will launch the application on http://localhost:3000.

📄 License
This project is licensed under the MIT License. Feel free to fork, modify, and contribute! ❤️

