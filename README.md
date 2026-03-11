# Veltrixa Auto - Japanese Vehicles Sales Website

## 🚗 About
Veltrixa Auto is a professional website for Japanese vehicle sales, connecting buyers worldwide with quality Japanese automobiles. The platform features a user-friendly interface for customers and a secure admin panel for inventory management.

## 🌟 Features

### Public Website
- Browse vehicles with advanced search and filters
- View detailed vehicle information with image galleries
- Contact sellers via WhatsApp and Email
- Responsive design for all devices
- Special offers and featured vehicles sections

### Admin Panel (Secure)
- Password-protected access
- Add new vehicles with details and images
- Edit existing vehicle information
- Delete vehicles from inventory
- Real-time updates to the website

## 📁 Project Structure
veltrixa-auto/
├── index.html # Homepage
├── cars.html # Vehicle listing page
├── car-details.html # Individual vehicle page
├── how-to-buy.html # Purchase guide
├── about.html # About us page
├── contact.html # Contact page
├── admin.html # Admin panel (protected)
├── css/
│ └── style.css # Main stylesheet
├── js/
│ └── firebase-config.js
├── images/
│ └── VeltrixaAuto_Logo.png
└── README.md

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript
- Firebase (Firestore, Authentication)
- Font Awesome Icons

## 🔧 Setup Instructions

### 1. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project "Veltrixa-Auto"
3. Enable Firestore Database
4. Enable Authentication (Email/Password)
5. Create an admin user in Authentication
6. Get your Firebase configuration

### 2. Update Firebase Configuration
In each HTML file, replace the Firebase configuration with your own:
```javascript
const firebaseConfig = {
    apiKey: "YOUR-API-KEY",
    authDomain: "YOUR-AUTH-DOMAIN",
    projectId: "YOUR-PROJECT-ID",
    storageBucket: "YOUR-STORAGE-BUCKET",
    messagingSenderId: "YOUR-SENDER-ID",
    appId: "YOUR-APP-ID"
};
