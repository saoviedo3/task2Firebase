import { useState } from 'react';
import PropTypes from 'prop-types';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = ({ auth, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      onLogin(userCredential.user);
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

LoginForm.propTypes = {
  auth: PropTypes.object.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
