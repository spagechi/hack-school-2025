const mongoose = require('mongoose');

mongoose.connect(config.DB_URL)
.then (() => console. log('Connected to MongoDB'))
.catch ((err) => console.error ('Error connecting to MongoDB: ', err));
