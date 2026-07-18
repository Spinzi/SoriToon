// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBThxIsrRQKwR3BBa2ZxKSu4chNI4xtaWY",
authDomain: "soritoon-c062c.firebaseapp.com",
projectId: "soritoon-c062c",
storageBucket: "soritoon-c062c.firebasestorage.app",
messagingSenderId: "192449554839",
appId: "1:192449554839:web:43f80df2a50080437e3cd2",
measurementId: "G-SX890RRD0C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);