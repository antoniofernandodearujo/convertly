import admin from 'firebase-admin';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Inicializar o Firebase Admin usando variáveis de ambiente
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: 'api-convertly', //troque pelo o seu project id, esse é um de exemplo.
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const bucket = admin.storage().bucket();
export { bucket };
