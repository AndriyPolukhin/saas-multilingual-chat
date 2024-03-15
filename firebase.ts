import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'

// Web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.APP_API_KEY,
	authDomain: process.env.APP_AUTH_DOMAIN,
	projectId: process.env.APP_PROJECT_ID,
	storageBucket: process.env.APP_STORAGE_BUCKEKT,
	messagingSenderId: process.env.APP_MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
}

// Initialize Firebase, with a ternary check to not to re-initiate the app if it is already created
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const functions = getFunctions(app)

export { db, auth, functions }
