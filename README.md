# Image Upload and Gallery Application

This project is a simple image upload and gallery application built using Node.js, Express, MongoDB, Multer for file uploads, and EJS for rendering views.

## Features
- Upload images via a form.
- Store image metadata in MongoDB.
- Display uploaded images in a gallery.

## Prerequisites

Before running the project, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create the `uploads` directory in the project root:
   ```bash
   mkdir uploads
   ```

4. Configure MongoDB:
   - Ensure MongoDB is running on your local machine.
   - Update the `userModel` file or database connection string if necessary.

## Usage

1. Start the server:
   ```bash
   node app.js
   ```

2. Open your browser and navigate to:
   - Home page: [http://localhost:4000/](http://localhost:4000/)
   - Gallery page: [http://localhost:4000/gallery](http://localhost:4000/gallery)

## Project Structure

```plaintext
├── app.js                 # Main server file
├── models
│   └── userModel.js       # MongoDB model for storing image metadata
├── views
│   ├── index.ejs          # Upload form
│   ├── gallery.ejs        # Image gallery
├── uploads                # Directory for uploaded files
├── package.json           # Project dependencies
└── README.md              # Documentation
```

## API Endpoints

### GET `/`
- Description: Renders the upload form.

### POST `/`
- Description: Handles image upload and saves metadata to MongoDB.
- Parameters:
  - `file` (multipart/form-data): Image file to upload.

### GET `/gallery`
- Description: Displays all uploaded images.

## Example MongoDB Schema (`userModel.js`)

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    filename: String,
    path: String
});

module.exports = mongoose.model('User', userSchema);
```

## Dependencies
- **Express**: Web framework for Node.js
- **Multer**: Middleware for handling `multipart/form-data` for file uploads
- **Mongoose**: ODM for MongoDB
- **EJS**: Templating engine for rendering dynamic pages

## Known Issues
- Ensure the `uploads` directory exists and is writable.
- Make sure MongoDB is running before starting the server.

## License
This project is licensed under the MIT License.
