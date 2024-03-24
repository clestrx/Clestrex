import mongoose from 'mongoose';

const connection = {}; // Object to store the connection

export default async function connectDB() {
  if (connection.isConnected) {
    // Use existing database connection
    console.log('Using existing database connection');
    return;
  }

  try {
    // Create new database connection
    const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log('Database connected');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}
