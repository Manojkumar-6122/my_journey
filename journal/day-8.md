# Day 8 – Daily Learning Journal

## What I Learned Today

Today I learned the fundamentals of Next.js by building a simple landing page using the App Router. I understood how Next.js extends React by providing built-in routing, better performance, and improved SEO. I learned that every folder inside the `app` directory represents a route and that `page.tsx` is the entry point for each page. Since I created the project using the latest version of Next.js, it was generated with TypeScript by default, so I worked with `page.tsx` instead of `page.js`.

I also learned the difference between Server Components and Client Components. Server Components are rendered on the server and improve performance by sending less JavaScript to the browser, while Client Components are used when user interaction or React hooks like `useState` and `useEffect` are needed.

In addition, I practiced using conventional commits by separating my feature work from the documentation updates.

## What Was Hard

The most challenging part today was understanding why my project contained `page.tsx` instead of `page.js`. After learning that the latest Next.js versions create TypeScript projects by default, it became clear. I also had to be careful while staging files so that my feature commit and documentation commit remained separate.

## One Question I Still Have

I understand the basic difference between Server Components and Client Components, but I would like to learn how Next.js decides what should be rendered on the server versus the client in larger, real-world applications, and what best practices developers follow when choosing between them.