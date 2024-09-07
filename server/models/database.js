const mongoose = require('mongoose');

const uri = 'mongodb+srv://darshithpandith:t7zrm5tMwb0eIkST@cluster0.tyt6z0k.mongodb.net/thindi';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });

// const mongoose = require('mongoose');

// const uri = 'mongodb+srv://darshithpandith:t7zrm5tMwb0eIkST@cluster0.tyt6z0k.mongodb.net/thindi';
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 30000, // Adjust this value as needed (30 seconds in this case)
//   socketTimeoutMS: 45000, // Adjust this value as needed (45 seconds in this case)
// };

// mongoose.connect(uri, options).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error.message);
// });
