import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

import { db, CollectionName } from '@/includes/firebase.include';

const register = async (email, password, additionalInfo) => {
  // Create user
  const auth = getAuth();
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

export { register, signIn };
