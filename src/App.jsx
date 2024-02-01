import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import LoginForm from './components/LoginForm';
import './index.css';

// Configurar Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  if (!user) {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm auth={auth} onLogin={setUser} />
      </div>
    );
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm db={db} />
      <TaskList db={db} />
    </div>
  );
};

export default App;
