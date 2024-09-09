
# Phone Sales Platform

This repository is a full-stack phone sales platform that includes a complete frontend, backend, and email service for handling phone sales, payments, and notifications. The project is organized into separate folders for each major component.

## Frontend (fe)

The `fe` directory contains the frontend code for the phone sales platform. It includes:

- **React**: The core library used for building the user interface.
- **Stripe**: Integrated for handling payments, providing a seamless checkout experience.
- **React Toastify**: Used for displaying notifications to the user, such as payment confirmation or errors.
- **Firebase**: Implemented for authentication and database management.
- **Custom Email Service**: Backend logic (custom-built) for sending emails, including order confirmations and receipts.

### Key Features

- **Phone Listing**: Displays available phones with prices, colors, and availability.
- **Checkout Process**: Integrates with Stripe to handle payments.
- **Notifications**: Uses React Toastify to show real-time updates to users.
- **Authentication**: Managed through Firebase for secure user sign-in and data storage.

## Backend (be)

The `be` directory contains the backend code for the platform, deployed on Netlify. It provides the API and backend services required for the platform's operation.

- **Netlify**: Used for backend deployment, offering serverless functions.
- **Resend**: Service used to send transactional emails, such as order confirmations and receipts.
- **Custom API**: Handles all backend logic, including interactions with the database and third-party services like Stripe and Firebase.

### Key Features

- **API Endpoints**: Exposes RESTful endpoints for frontend interaction.
- **Payment Processing**: Manages Stripe payment integration.
- **Email Notifications**: Uses Resend for sending responsive email templates.

## Email Template (email-responsive)

The `email-responsive` directory contains the responsive email template created using MJML.

- **MJML**: A markup language designed for responsive email templates, used to create a well-structured and mobile-friendly invoice email.

### Key Features

- **Responsive Design**: Ensures emails are well-formatted across different devices and email clients.
- **Invoice Template**: Designed specifically to send order invoices to users after a purchase.

## Updates Frontend (updates-fe)

The `updates-fe` directory contains a secondary frontend specifically built for managing product details.

- **React**: Also built using React, this frontend allows for easy updates to phone prices, colors, and availability.

### Key Features

- **Product Management**: Admin interface for updating phone details.
- **Real-Time Updates**: Changes reflect immediately on the main frontend.
- **Authentication**: Secure access to ensure only authorized users can make changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
