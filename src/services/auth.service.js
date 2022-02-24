import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const register = async (email, password) => {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential;
};

const signIn = async (email, password) => {
  const auth = getAuth();
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential;
};

export { register, signIn };
