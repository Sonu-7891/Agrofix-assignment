# Bulk Veggie App

**Bulk Veggie App** is a web application designed for managing product orders, tracking orders, and providing a user-friendly interface for both users and administrators. This app includes role-based authentication, dynamic navigation, and a responsive design for seamless use on all devices.

---

## Features

### Authentication
- **User Registration**: Users can sign up by providing an email, password, and role (User/Admin).
- **Login**: Role-based login functionality, storing JWT tokens securely in `localStorage`.
- **Logout**: Clear session and redirect users to the login page.

### Role-Based Functionality
- **User Role**:
  - Browse products.
  - Place orders.
  - Track order status.
- **Admin Role**:
  - Access the admin dashboard.
  - Manage inventory.
  - View and manage orders.

### Dynamic Navigation
- Navigation menu adapts based on the user's role:
  - Admins see links to the admin dashboard and inventory.
  - Regular users see links for order placement and tracking.

### Responsive Hamburger Menu
- The navigation bar includes a hamburger menu for smaller screens.
- The hamburger toggles between `☰` (open) and `✖` (close) for better user experience.

### Order Management
- Users can place orders and track the order status in real-time.

### Admin Dashboard
- Manage products, inventory, and user orders directly from the dashboard.

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Technologies Used
## Frontend:
- React.js
- Vite.js
- CSS for styling
## Backend:
- API for authentication and data handling     - (integrated via Axios).

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Sonu-7891/Agrofix-assignment.git
   cd bulk-veggie-app
