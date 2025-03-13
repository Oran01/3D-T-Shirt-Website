# 3D T-Shirt Customization App 🎨👕

A **3D T-shirt customization web app** built with **React, Vite, and Three.js**, powered by **DALL·E AI** for generating unique designs. This project allows users to customize T-shirts with different colors, images, and AI-generated textures.

---

## 🚀 Features

- 🎨 **Color Picker** - Change the color of the T-shirt in real-time.
- 📂 **File Upload** - Upload custom images to apply to the T-shirt.
- 🤖 **AI Integration (DALL·E 2)** - Generate unique designs using OpenAI's DALL·E.
- 🔄 **Undo/Redo** - Keep track of design changes.
- 🖼️ **Download Designs** - Save customized T-shirts as images.
- 🌐 **Responsive UI** - Works on desktop and mobile devices.
- ⚡ **Optimized with Vite** - Faster builds and hot module reloading.

---

## 🎥 Tutorial Credit

This project was built following the **JavaScript Mastery** tutorial:  
🔗 [YouTube Video](https://www.youtube.com/watch?v=RbxHZwFtRT4&t=14266s)

---

## 🛠️ Technologies Used

### **Frontend**

- ⚛️ **React.js** - UI framework
- 🎭 **Framer Motion** - Animations
- 🖼️ **Three.js** - 3D rendering engine
- 🏗️ **@react-three/fiber** - Three.js wrapper for React
- 🎨 **@react-three/drei** - Utility components for Three.js
- 🌎 **Vite** - Fast development server

### **Backend**

- 🏗️ **Express.js** - Backend framework for API handling
- 🔐 **dotenv** - Environment variable management
- 🤖 **OpenAI API** - AI-powered image generation

---

## 📦 Installation & Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Oran01/3D-T-Shirt-Website.git
   cd 3D-T-Shirt-Website
   ```

2. **Install dependencies:**

   ```sh
   cd client
   npm install
   ```

3. **Install server dependencies:**

   ```sh
   cd ../server
   npm install
   ```

4. **Setup environment variables:**
   Create a .env file in the server directory and add:

   ```sh
   OPEN_AI_KEY=your-openai-api-key
   PORT=8080
   ```

5. **Start the backend server:**

   ```sh
   cd server
   npm start
   ```

6. **Start the frontend development server:**

   ```sh
   cd ../client
   npm run dev
   ```

7. Open [http://localhost:5173] (<http://localhost:5173>) in your browser.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests to improve the project!

---

🌟 Star this repo if you found it useful! ⭐
