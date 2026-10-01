# 🍕 Fast React Pizza Co.

A modern and responsive pizza ordering web application built with React.  
Users can browse pizzas, customize their orders, manage their cart, place orders, and track order details.


🔗 **Live Demo**

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Fast%20React%20Pizza-orange?style=for-the-badge)](https://fast-react-pizza-co-app-six.vercel.app/)

---
## 📸 Preview

<div align="center">

<img src="./public/1.png" width="850" alt="Weather App Desktop Preview">

<br><br>

<img src="./public/2.png" width="850" alt="Weather App Mobile Preview">

</div>
## ✨ Features

- 🍕 Browse pizza menu
- 🔍 Search orders using order ID
- 🛒 Add pizzas to cart
- ➕ Increase/decrease pizza quantity
- 🗑️ Remove items from cart
- 🧹 Clear entire cart
- 💰 Automatic order price calculation
- ⚡ Priority order option
- 📦 Create and manage orders
- 📍 Order status and estimated delivery time
- 🔄 Update order priority
- 🌐 Client-side routing
- 📱 Responsive design
- 🎨 Modern UI using Tailwind CSS
- 💾 Global state management using Redux Toolkit
- 📡 API integration for menu and orders
- 📍 Geolocation support for delivery location

---

## 🛠️ Tech Stack

### 🎨 Frontend

![React](https://img.shields.io/badge/React-2026-blue?style=for-the-badge\&logo=react\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge\&logo=javascript\&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge\&logo=reactrouter\&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge\&logo=redux\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwindcss\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)

### 🔌 Backend / Data

![REST API](https://img.shields.io/badge/REST_API-005571?style=for-the-badge)
![JSON Server](https://img.shields.io/badge/JSON_Server-000000?style=for-the-badge)
![Fetch API](https://img.shields.io/badge/Fetch_API-3178C6?style=for-the-badge)

### 🧰 Development Tools

![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge\&logo=visualstudiocode\&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge\&logo=git\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge\&logo=github\&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge\&logo=vercel\&logoColor=white)


## 🧠 React Concepts Used

This project was built to practice real-world React development concepts such as:

- Functional Components
- Props
- State Management
- `useState`
- `useEffect`
- `useSelector`
- `useDispatch`
- Redux Toolkit
- `createSlice`
- `configureStore`
- React Router
- Nested Routes
- Route Loaders
- Actions
- `useLoaderData`
- `useParams`
- `useFetcher`
- Form Actions
- Protected Routes
- API Requests
- Error Handling

---

## 🛒 Cart Management

Redux Toolkit is used to manage the shopping cart globally.

Cart functionality includes:

- Add item
- Remove item
- Increase quantity
- Decrease quantity
- Clear cart
- Calculate total quantity
- Calculate total price

---

## 📦 Order Management

Users can place orders by providing their details.

The application supports:

- Creating orders
- Viewing order details
- Searching orders
- Tracking order status
- Estimated delivery time
- Priority orders
- Updating order priority
- Calculating priority charges

---

## 🗺️ Routing

React Router is used for navigation and nested routing.

Example routes include:

```text
/
├── /menu
├── /cart
├── /order/new
├── /order/:orderId
└── /order/search
