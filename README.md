# RapidTell: Full-Stack E-commerce Platform

RapidTell is a complete, full-stack e-commerce solution for selling mobile phones. It features a modern frontend for customers, a separate admin interface for product management, and a robust backend to handle business logic, payments, and notifications.

## ✨ Key Features

- **Customer-Facing Store (`/fe`):** A responsive and intuitive interface for users to browse products, view details, and make purchases.
- **Administrative Panel (`/updates-fe`):** A dedicated interface for administrators to manage product information, such as pricing, stock, and details.
- **Secure Payments:** Integration with Stripe for secure and reliable payment processing.
- **Authentication:** Firebase-powered user authentication for a secure and personalized experience.
- **Transactional Emails:** Automated email notifications for events like order confirmations, using Resend.
- **Serverless Backend (`/be`):** A scalable and efficient backend built with Netlify Functions and Express.js.

## 🚀 Technologies Used

This project is built with a modern stack, separating concerns into distinct applications:

**Frontend (`fe`):**
- **Framework:** React
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Bootstrap & React-Bootstrap
- **Routing:** React Router
- **HTTP Client:** Axios
- **Backend as a Service (BaaS):** Firebase (for Auth and DB)
- **Payments:** Stripe
- **PDF Generation:** jsPDF
- **Notifications:** React Toastify

**Backend (`be`):**
- **Hosting:** Netlify
- **Framework:** Express.js (via `serverless-http`)
- **Functions:** Netlify Functions
- **Email Service:** Resend
- **Environment:** Node.js

**Admin Panel (`updates-fe`):**
- **Framework:** React
- **Build Tool:** Vite
- **Styling:** Bootstrap & React-Bootstrap
- **Payments:** Stripe (for management)
- **Notifications:** React Toastify

## 📁 Project Structure

The repository is organized into three main application directories:

```
/
├── be/                # Backend (Netlify Functions, Express API)
├── fe/                # Main customer-facing frontend (React, Vite)
├── updates-fe/        # Admin panel frontend for product management
├── email-responsive/  # Responsive email templates
└── ...                # Configuration and documentation
```

## 🔧 Getting Started

To get the project running locally, follow these steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/installation) (or `npm`/`yarn`)

### Installation & Running

Each part of the project must be installed and run separately.

**1. Backend (`/be`)**

```bash
# Navigate to the backend directory
cd be

# Install dependencies
pnpm install

# Start the development server (runs Netlify Dev)
pnpm start
```

**2. Frontend (`/fe`)**

```bash
# Navigate to the frontend directory
cd fe

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

**3. Admin Panel (`/updates-fe`)**

```bash
# Navigate to the admin panel directory
cd updates-fe

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

## 📜 Available Scripts

Each application directory contains the following standard scripts:

### `fe` and `updates-fe`

- `pnpm dev`: Starts the Vite development server.
- `pnpm build`: Bundles the application for production.
- `pnpm lint`: Lints the codebase using ESLint.
- `pnpm preview`: Serves the production build locally for preview.

### `be`

- `pnpm start`: Starts the Netlify development server.
- `pnpm build`: Creates a production build of the serverless functions.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.