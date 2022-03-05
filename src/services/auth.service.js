import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as signOutUser,
  updateProfile,
} from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

import { CollectionName } from '@/includes/firebase.include';

const register = async (email, password, additionalInfo) => {
  // Initialize firestore auth and db
  const auth = getAuth();
  const db = getFirestore();
  // Create user
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  // Get additional info, if exists then update user details
  const { displayName } = additionalInfo || {};
  if (displayName && !!displayName.trim()) {
    await updateProfile(userCredential.user, { displayName });
  }
  // Add new enty to 'user' collection
  await setDoc(
    doc(db, CollectionName.USERS, userCredential.user.uid),
    {
      email,
      name: displayName || '',
      role: 2,
    },
  );

  return userCredential;
};

const signIn = async (email, password) => {
  const auth = getAuth();
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential;
};

const signOut = async () => {
  const auth = getAuth();
  await signOutUser(auth);
};

export { register, signIn, signOut };
