# ReadSphere

**MERN Stack Book Rental Platform**

## Folder Structure
```
InkSpire/
│
├── client/                              ← React frontend (Vite)
│   ├── public/
│   │   └── video/hero-section.mp4
│   ├── src/
│   │   ├── assets/                      ← Images, SVGs
│   │   ├── components/                  ← UI components (Navbar, Footer, BookCard, etc.)
│   │   │   ├── Navbar/                 ← Navbar.jsx, Navbar.css
│   │   │   ├── Footer/                 ← Footer.jsx, Footer.css
│   │   │   ├── BookCard/                ← BookCard.jsx, BookCard.css
│   │   │   ├── CartItem/                ← CartItem.jsx, CartItem.css
│   │   │   ├── WishlistButton/          ← WishlistButton.jsx, WishlistButton.css (NEW)
│   │   │   └── ...
│   │   ├── pages/                       ← Route pages (Home, Library, BookDetail, Cart, Wishlist, …)
│   │   ├── context/                     ← AuthContext.jsx
│   │   ├── utils/                        ← api.js (Axios instance)
│   │   ├── App.jsx
│   │   ├── App.css                      ← Global styles + pink/black theme
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/                              ← Express backend
│   ├── config/
│   │   └── db.js                        ← MongoDB Atlas connection
│   ├── models/
│   │   ├── Book.js
│   │   ├── User.js
│   │   ├── Rent.js
│   │   ├── Cart.js
│   │   ├── Wishlist.js                  ← New model for wishlist items
│   │   └── Review.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── bookRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── wishlistRoutes.js            ← New wishlist endpoints
│   │   ├── rentRoutes.js
│   │   ├── reviewRoutes.js
│   │   ├── paymentRoutes.js
│   │   └── adminRoutes.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── bookController.js
│   │   ├── cartController.js
│   │   ├── wishlistController.js        ← New controller
│   │   ├── rentController.js
│   │   ├── reviewController.js
│   │   ├── paymentController.js
│   │   └── adminController.js
│   ├── middleware/
│   │   ├── auth.js                      ← JWT verification
│   │   └── adminAuth.js                 ← Admin‑only check
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Getting Started
1. **Frontend** – `cd client && npm install && npm run dev`
2. **Backend** – `cd server && npm install && npm run dev`
3. Set up a `.env` file in `server/` with MongoDB URI, JWT secret, and Razorpay test keys.

---

*All directories follow the plan outlined in the implementation document.*
