📚 Book Garage – MERN Stack Project

Book Garage is a full-stack MERN (MongoDB, Express, React, Node.js) web application where users can explore books, add them to favorites, manage orders, and update their profile. Admin users get enhanced control to manage books and update order statuses.

This project includes authentication, authorization, protected routes, admin controls, and a complete book purchasing workflow.

🚀 Live Demo

🔗 Frontend: https://book-garage.netlify.app/

🔗 Backend: https://books-garage.onrender.com


📌 Features
👤 User Features

Login & Signup with JWT authentication

Browse all available books

Add books to Favorites

Add to Cart & Place Orders

View Order History

Update profile details

Logout

🔐 Admin Features

(Admin role is assigned manually via MongoDB)

Add New Books

Edit Book Details

Delete Books

View All Users & Orders

Update Order Status (Pending → Shipped → Delivered)

Access Admin Dashboard

🧰 Tech Stack
Frontend

React.js

Redux Toolkit

Vite

TailwindCSS

Backend

Node.js

Express.js

MongoDB & Mongoose

JWT Authentication

Bcrypt Password Hashing

Deployment

Frontend → Netlify

Backend → Render

Database → MongoDB Atlas

📂 Project Structure
Book-Garage/
│
├── frontend/         # React + Vite app
│   ├── src/
│   └── ...
│
├── backend/          # Node + Express API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
│
└── README.md

🔑 Environment Variables

Create a .env file in the backend folder.

MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=1000

📦 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/yourusername/Books-Garage.git
cd Books-Garage

2️⃣ Backend Setup
cd backend
npm install
npm start


Backend runs on:

http://localhost:1000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🛠️ API Features
User Authentication APIs

/register – Create new user

/login – Login user

/logout – Logout

Books API

/get-all-books

/get-book/:id

/add-book (Admin)

/delete-book/:id (Admin)

Orders API

/place-order

/get-orders

/update-order-status/:id (Admin)

Favorites API

/add-favorite/:bookId

/get-favorites

🖼️ Screenshots

(Add your screenshots here)

📌 Home Page  
📌 Login / Signup  
📌 All Books Page  
📌 Profile Page  
📌 Admin Dashboard  

🛡️ Admin Role Setup

Admin role can be assigned only via MongoDB:

{
  "role": "admin"
}


Update user document manually in MongoDB Atlas.

🤝 Contributing

Pull requests are welcome!
Feel free to open an issue for suggestions or bugs.

⭐ Show Your Support

If you like this project, consider giving it a star on GitHub ⭐

Screenshots:

<img width="1919" height="870" alt="image" src="https://github.com/user-attachments/assets/d1f0f4cf-5ae0-4fe2-9627-19663ca00611" />

<img width="1919" height="873" alt="image" src="https://github.com/user-attachments/assets/560897fa-8e48-4fb2-b7aa-470b3e390b74" />

<img width="1919" height="865" alt="image" src="https://github.com/user-attachments/assets/11837d1c-a762-4f21-9b6e-4c7066a8c777" />

<img width="1919" height="865" alt="image" src="https://github.com/user-attachments/assets/9813ad07-4c42-4207-8179-7e6fcfb0811d" />


