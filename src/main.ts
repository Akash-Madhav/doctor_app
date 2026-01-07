import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
// Firebase initialization (using npm SDK)
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCjfGKTwj8IZAtBjkE2UA2Y5btt2OU7lcc',
  authDomain: 'patient-8caf5.firebaseapp.com',
  projectId: 'patient-8caf5',
  storageBucket: 'patient-8caf5.firebasestorage.app',
  messagingSenderId: '950818401670',
  appId: '1:950818401670:web:46b9edbf7fc19edb745007',
  measurementId: 'G-VMS7JMM1JR'
};

const firebaseApp = initializeApp(firebaseConfig);
try {
  // Analytics only in browser environments
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const analytics = getAnalytics(firebaseApp);
} catch (e) {
  // ignore analytics errors in non-browser/test envs
}

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
