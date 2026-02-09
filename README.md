# Reway Store

Reway Store is a feature-rich e-commerce application that highlights modern web technologies and best practices for product browsing, filtering, and user authentication. This project leverages the power of Next.js 14, Zustand, and nuqs for state management, ensuring a seamless and efficient user experience.

While many opt for traditional state managers, Reway Store demonstrates the powerful capabilities of using URLs as a state store, providing enhanced flexibility and performance through options like shallow routing and throttling.

[Check Out The Demo (link)](https://reway.teeldinho.co.za/)

![Reference Design](public/assets/Mock%20up.svg)

## Project Overview

### Frontend

- **Next.js 14**: Utilized for both server and client-side rendering, optimizing performance and SEO.
- **nuqs**: Primary state management using URL as the state store, ensuring shareable and bookmarkable links.
- **Zustand**: Used minimally for managing logged-in and logged-out states.
- **React Hook Form & ZOD**: Employed for form handling and schema validation, ensuring type safety and robust validation.
- **Tailwind CSS**: Applied for styling, providing a utility-first approach to design.
- **Radix UI**: Ensures accessible and high-quality UI components.
- **Sonner**: Used for toast notifications.

### Additional Packages

- **Class Variance Authority**: For variant-based styling - an example in our code is how we have different button sizes as per the Figma design.
- **Embla Carousel React**: For responsive carousels.
- **Lucide React**: Icon components.
- **FontAwesome**: Icon library.

### Key Features

- **Authentication**: Mimicked login and registration functionality.
- **Store Browser**: Browse all products with collections and categories.
- **Search**: Search products based on the name.
- **Filter**: Filter products by brands, colors, and price range.
- **Product Details**: View detailed product information with image carousel and product configurator. You can zoom in on images and select product options.
- **State Management**: Utilizing URL for primary state management and Zustand for session state.

## Advantages of Using URL for State Management

1. **Sharable Links**: Users can share URLs to preserve the current state of the application.
2. **Bookmarkable**: Users can bookmark specific states, such as a product configuration.
3. **Consistent State Management**: URL state management works seamlessly with server components in Next.js 14.
4. **SEO Benefits**: URLs with meaningful query parameters improve search engine indexing.
5. **Simplified State Synchronization**: The URL acts as a single source of truth, avoiding discrepancies between client and server states.
6. **Optimized Server Requests**: Options like shallow routing minimize unnecessary server requests.
7. **High-Frequency Updates**: Throttling ensures efficient handling of high-frequency updates, enhancing performance.

### Areas of Improvement

- **Enhanced Search Functionality**: Improving search to include more product attributes.
- **Pagination**: Implementing pagination for better performance with large datasets.

## Getting Started

1. **Set environment variables (optional but recommended)**:

   ```
   cp .env.example .env.local
   ```

2. **Install dependencies**:

   ```
   npm install
   ```

3. **Start the development server**:

   ```
   npm run dev
   ```

4. **Build for production**:

   ```
   npm run build
   ```

5. **Start the production server**:

   ```
   npm start
   ```

## Screenshots

![Home Page](public/assets/home.png)
![Product Page](public//assets/productpreview.png)
![Product Page](public//assets/productpreview2.png)
![More Section](public//assets/more.png)
![Search Page](public//assets/search.png)
![Collection Page](public//assets/collection.png)
![SignIn Page](public//assets/signin.png)
![SignUp Page](public//assets/signup.png)
![Filter Page](public//assets/filtered.png)

### Important Notes

- **No Real Transactions**: This application uses dummy data and no real transactions are made.
- **State Management**: URL state management ensures a consistent user experience across sessions and devices.

## Conclusion

Reway Store exemplifies modern e-commerce applications by leveraging URL state management for a seamless and user-friendly experience. This approach ensures that the application is highly performant, easy to maintain, and adaptable to future web technologies, making it a robust solution for online stores.
