# Fake Store Front

## Description

This is a Frontend project developed as part of a technical challenge. The application interacts with the [Fake Store API](https://fakestoreapi.com/docs) to display a list of products and allows users to view the details of each product. Additionally, a shopping cart has been implemented where users can add products.

## Implemented Features

1. **Product Display:**
   - Fetches data from the FakeStore API to show a list of products on the main screen.
   - Users can see basic information for each product, such as title, price, and an image.

2. **Product Detail View:**
   - Users can click on any product in the grid to view the complete details of that product, such as the description and rating.

3. **Search Functionality:**
   - Implementation of a search bar to filter products by name in real-time.

4. **Shopping Cart:**
   - Users can add products to the shopping cart.
   - The shopping cart displays the added products, quantity, and total.

5. **User Login and Registration:**
   - To maintain the privacy and security of the system, user management has been implemented using a separate service.

## Technologies Used

- **React**: Library used to develop the application.
- **Vite**: Build tool for fast application configuration and development.
- **Material-UI**: Component library for React that provides an attractive and easy-to-use user interface.
- **React Router**: Library for handling navigation between different screens.
- **React Query**: For managing data fetching and state management.
- **SweetAlert2**: For displaying notifications in case of error or success, such as login alerts, cart alerts, etc.
- **JWT Decode**: For handling the decoding of JWT tokens, necessary for authentication.

## Requirements

- **Node.js**: The recommended version to run this project is `v18.3.1` or higher.
- **NPM**: For dependency management and script execution.

## Installation Instructions

1. Clone this repository:

   ```bash
   git clone [https://github.com/Jableed43/front-fake-store.git](https://github.com/Jableed43/front-fake-store.git)
   ```

2.  Navigate to the project directory:

    ```bash
    cd fake-store-front
    ```

3.  Install the project dependencies:

    ```bash
    npm install
    ```

4.  Start the development server:

    ```bash
    npm run dev
    ```

    This will start the development server at `http://localhost:3000` (or the configured port).

## Available Scripts

  - `npm run dev`: Starts the development server with Vite.
