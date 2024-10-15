# 📄 Document Converter Mobile App 📱
Welcome to the Document Converter project! This is a simple yet efficient mobile application built with React Native and Expo, designed to handle document conversions directly from your mobile device. 🚀

<div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
  <img src="https://github.com/antoniofernandodearujo/convertly-app/blob/main/imgs-readme/1.png" alt="Imagem 1" width="200"/>
  <img src="https://github.com/antoniofernandodearujo/convertly-app/blob/main/imgs-readme/2.png" alt="Imagem 2" width="200"/>
  <img src="https://github.com/antoniofernandodearujo/convertly-app/blob/main/imgs-readme/3.png" alt="Imagem 3" width="200"/>
  <img src="https://github.com/antoniofernandodearujo/convertly-app/blob/main/imgs-readme/4.png" alt="Imagem 4" width="200"/>
</div>


## ✨ Features

- 📂 File Conversion: Convert various document formats (e.g., PDF to DOCX and vice-versa).
- 📲  Mobile-Friendly: Handles file manipulation and conversion limitations efficiently on mobile platforms.
- 🌐 Full-Stack Integration: The mobile app communicates with a Node.js backend API, ensuring the heavy lifting of conversions happens on the server. Learn more about the backend here.
- 🔄 Real-Time Progress: Shows progress of the file conversion with a clean and responsive interface.

## 🛠️ How It Works
This project addresses mobile file manipulation challenges by utilizing a backend service to handle the core file processing. Here’s how the workflow is set up:

- 📤 The mobile app uploads the selected document.
- 🖥️ The Node.js backend processes the file conversion.
- 📥 The converted document is returned, ready for download.
### Backend Repository: Check the API here

## 🌍 Web Version
We also have a web version of the application, making it easy to convert documents right from your browser! You can check out the web version here. Both the mobile and web versions share the same backend, keeping everything consistent.
#### 🔗 Access: main.d2as35u28vga9.amplifyapp.com/

## 🚀 Full-Stack Experience
This project is part of a Full-Stack Application that integrates:

- Frontend (Mobile): Built with React Native + Expo.
- Backend: A Node.js API that handles file conversions, storage, and retrieval.
- Frontend (Web): Also included in the repository, providing a seamless experience across platforms.

## 🧩 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/document-converter-app.git
   ```

2. Install depedencies:

   ```bash
   cd document-converter-app
   npm install
   ```
3. Start the app:

   ```bash
   npx expo start
   ```
4. Enjoy converting your documents on the go! ✨


## 🖥️ Backend Setup
To set up and run the backend API, please follow the instructions in the backend repository. Check it out here.

## 💡 Challenges & Solutions
One of the main challenges was handling large file conversions on mobile devices. To overcome this, we offloaded the file processing to a Node.js API, allowing the app to handle only file uploads and downloads. This makes the mobile app fast and lightweight, while the backend does the heavy lifting.

## 📝 Contributions
Feel free to fork this project, submit pull requests, or raise issues. Contributions are always welcome! ❤️

## 📫 Contact
If you have any questions or feedback, feel free to reach out to me at afas@academico.ufpb.br

## ❤️ Enjoying the App?
If you like this project, give it a ⭐ on GitHub and share it with others!