<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--     <title>Authentication Toolkit</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
        }
        h1, h2, h3 {
            color: #333;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: monospace;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        a {
            color: #0366d6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h2 {
            border-bottom: 2px solid #ddd;
            padding-bottom: 5px;
        }
    </style> -->
</head>
<body>

<h1>Authentication Toolkit</h1>

<p>A secure and scalable authentication system built with <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, and tested using <strong>Postman</strong>. This toolkit provides user registration, login, profile management, and session handling functionalities.</p>

<div class="section">
    <h2>Features</h2>
    <ul>
        <li><strong>User Registration</strong>: Secure user registration with input validation and duplicate checks.</li>
        <li><strong>Authentication</strong>: Login with JWT (JSON Web Token) for secure access and password verification.</li>
        <li><strong>Profile Management</strong>: Upload avatar and cover images using <strong>Multer</strong> and store them in <strong>Cloudinary</strong>.</li>
        <li><strong>Session Management</strong>: Secure session handling and logout functionality.</li>
        <li><strong>API Testing</strong>: Thoroughly tested all endpoints using <strong>Postman</strong>.</li>
    </ul>
</div>

<div class="section">
    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Node.js</strong>: Runtime environment.</li>
        <li><strong>Express</strong>: Web framework for routing and middleware.</li>
        <li><strong>MongoDB</strong>: Database for storing user data.</li>
        <li><strong>Mongoose</strong>: MongoDB object modeling.</li>
        <li><strong>JWT (JSON Web Tokens)</strong>: For secure authentication.</li>
        <li><strong>bcrypt</strong>: For password hashing.</li>
        <li><strong>Multer</strong>: For handling file uploads.</li>
        <li><strong>Cloudinary</strong>: For image storage and management.</li>
        <li><strong>Postman</strong>: For API testing.</li>
    </ul>
</div>

<div class="section">
    <h2>Setup Instructions</h2>

    <h3>Prerequisites</h3>
    <ul>
        <li>Node.js and npm installed.</li>
        <li>MongoDB database (local or cloud-based).</li>
        <li>Cloudinary account for image storage.</li>
        <li>Postman for API testing.</li>
    </ul>

    <h3>Installation</h3>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/your-username/authentication-toolkit.git
cd authentication-toolkit</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Create a <code>.env</code> file in the root directory and add the following environment variables:
            <pre><code>PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth-toolkit
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret</code></pre>
        </li>
        <li>Start the server:
            <pre><code>npm start</code></pre>
        </li>
        <li>The server will run on <code>http://localhost:3000</code>.</li>
    </ol>
</div>

<div class="section">
    <h2>API Endpoints</h2>

    <h3>1. User Registration</h3>
    <ul>
        <li><strong>URL</strong>: <code>/api/auth/register</code></li>
        <li><strong>Method</strong>: <code>POST</code></li>
        <li><strong>Request Body</strong>:
            <pre><code>{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123"
}</code></pre>
        </li>
        <li><strong>Response</strong>:
            <pre><code>{
    "message": "User registered successfully"
}</code></pre>
        </li>
    </ul>

    <h3>2. User Login</h3>
    <ul>
        <li><strong>URL</strong>: <code>/api/auth/login</code></li>
        <li><strong>Method</strong>: <code>POST</code></li>
        <li><strong>Request Body</strong>:
            <pre><code>{
    "email": "john@example.com",
    "password": "password123"
}</code></pre>
        </li>
        <li><strong>Response</strong>:
            <pre><code>{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}</code></pre>
        </li>
    </ul>

    <h3>3. Upload Avatar</h3>
    <ul>
        <li><strong>URL</strong>: <code>/api/profile/upload-avatar</code></li>
        <li><strong>Method</strong>: <code>POST</code></li>
        <li><strong>Headers</strong>:
            <pre><code>Authorization: Bearer &lt;token&gt;</code></pre>
        </li>
        <li><strong>Request Body</strong>:
            <code>avatar</code>: Image file (multipart/form-data).
        </li>
        <li><strong>Response</strong>:
            <pre><code>{
    "message": "Avatar uploaded successfully",
    "avatarUrl": "https://res.cloudinary.com/..."
}</code></pre>
        </li>
    </ul>

    <h3>4. Logout</h3>
    <ul>
        <li><strong>URL</strong>: <code>/api/auth/logout</code></li>
        <li><strong>Method</strong>: <code>POST</code></li>
        <li><strong>Headers</strong>:
            <pre><code>Authorization: Bearer &lt;token&gt;</code></pre>
        </li>
        <li><strong>Response</strong>:
            <pre><code>{
    "message": "Logged out successfully"
}</code></pre>
        </li>
    </ul>
</div>

<div class="section">
    <h2>Testing with Postman</h2>
    <ol>
        <li>Import the Postman collection provided in the <code>postman</code> folder.</li>
        <li>Set up environment variables in Postman for <code>token</code> and <code>base_url</code>.</li>
        <li>Test all endpoints (registration, login, profile upload, logout).</li>
    </ol>
</div>

<div class="section">
    <h2>Folder Structure</h2>
    <pre><code>src/
│
├── controllers/          # Route handlers
├── models/               # MongoDB models
├── middleware/           # Authentication and validation middleware
├── routes/               # Express routes
├── utils/                # Utility functions (e.g., JWT, Cloudinary)
├── config/               # Configuration files (e.g., database, Cloudinary)
├── tests/                # API tests
└── app.js                # Main application file</code></pre>
</div>

<div class="section">
    <h2>Contributing</h2>
    <p>Contributions are welcome! Please follow these steps:</p>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch (<code>git checkout -b feature/YourFeatureName</code>).</li>
        <li>Commit your changes (<code>git commit -m 'Add some feature'</code>).</li>
        <li>Push to the branch (<code>git push origin feature/YourFeatureName</code>).</li>
        <li>Open a pull request.</li>
    </ol>
</div>

<div class="section">
    <h2>License</h2>
    <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
</div>


</body>
</html>
