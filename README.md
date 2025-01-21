# quicknotes_api

The `quicknotes_api` is the backend service for the **quickNotes** application, a modern note-taking app designed for simplicity, efficiency, and seamless user experience. It handles the core functionalities such as note management, validation, database interactions, and API endpoints.

---

## Purpose

The backend of **quickNotes** was developed to:
1. Provide a robust and scalable REST API for managing notes.
2. Handle secure database operations using modern ORM tools.
3. Enable validation and error handling for clean and reliable data processing.

This project showcases my ability to design, implement, and deploy a backend system for full-stack applications.

---

## Development Environment

### Tools & Technologies Used
- **Framework**: Node.js, Express.js
- **Validation**: express-validator
- **ORM**: TypeORM
- **Database**: MySQL
- **Language**: TypeScript
- **Environment Management**: dotenv
- **Miscellaneous**:
    - Reflect Metadata for TypeScript decorators
    - CORS for secure cross-origin requests
    - ts-node for TypeScript runtime

---

## Folder Structure

- **src/notes/**:
    - `notes.controller.ts`: Handles incoming HTTP requests for note-related operations.
    - `notes.router.ts`: Defines the RESTful routes for notes.
    - `notes.entity.ts`: Represents the database schema for notes.
    - `notes.validator.ts`: Provides validation rules for input data.
    - `notes.endpoint.rest`: Contains REST endpoint definitions for testing.

- **Environment Files**:
    - `.env`: Configures environment variables for database credentials and application settings.

- **Other Files**:
    - `index.ts`: The main entry point for the application.
    - `package.json`: Specifies dependencies and scripts.

---

## API Endpoints

### Notes

1. **GET** `/notes`: Fetch all notes.
2. **POST** `/notes`: Create a new note (validated via `notes.validator.ts`).
3. **DELETE** `/notes/:id`: Delete a note by ID.

---

## Useful Resources

Here are some resources that were helpful during the development of this backend:

- [Express Documentation](https://expressjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

## Developer

**Samuel Turay**  
Software Development Student at Brigham Young University - Idaho

Connect with me:
- [LinkedIn](https://linkedin.com/in/samuel-turay1)
- [GitHub](https://github.com/Koigor97)

---
