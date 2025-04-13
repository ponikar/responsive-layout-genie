import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAAVbvmouBtRrutSXKVnI3w3dM3wOeMik",
  authDomain: "instant-mockup-9ab28.firebaseapp.com",
  projectId: "instant-mockup-9ab28",
  storageBucket: "instant-mockup-9ab28.appspot.com",
  messagingSenderId: "646384273487",
  appId: "1:646384273487:web:e2f784d0c97c04c655823a",
  measurementId: "G-RMTP1H3Z10",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function uploadZipBlob(
  zipBlob: Blob,
  fileName: string = "archive.zip"
): Promise<string> {
  const storageRef = ref(storage, `__hack/${Date.now()}-${fileName}`);

  const snapshot = await uploadBytes(storageRef, zipBlob, {
    contentType: "application/zip",
  });

  // Get the public download URL
  const downloadURL = await getDownloadURL(snapshot.ref);

  return downloadURL;
}
