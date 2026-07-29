# Day 8 – Next.js

## What is Next.js?

Next.js is a React framework developed by Vercel that helps developers build fast, scalable, and production-ready web applications. It provides features like routing, server-side rendering, static site generation, image optimization, and API routes without requiring additional configuration.

---

## App Router

The App Router is the modern routing system introduced in Next.js. It uses the `app` folder to define routes. Each folder represents a route, and files such as `page.js`, `layout.js`, and `loading.js` control different parts of the application. This approach makes routing simple and organized.

---

## Server Components

Server Components are rendered on the server before being sent to the browser. They reduce the amount of JavaScript sent to the client, improve performance, and can directly access backend resources like databases or APIs. By default, components in the App Router are Server Components.

---

## Client Components

Client Components run in the user's browser. They are required when using interactivity such as event handlers (`onClick`), React hooks (`useState`, `useEffect`), or browser APIs. To create one, add `"use client";` at the top of the component file.

---

## Why We Use Next.js

- Better performance
- Built-in routing
- Improved SEO
- Server-side rendering
- Static site generation
- Image optimization
- API routes
- Faster development experience

---

## Key Takeaways

- Next.js extends React with powerful built-in features.
- The App Router organizes pages using folders.
- Server Components improve performance.
- Client Components handle user interactions.
- Next.js is widely used for production-ready web applications.