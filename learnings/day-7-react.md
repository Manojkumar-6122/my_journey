# Day 7 – React Fundamentals

## What are Components?

Components are reusable pieces of a React application. Instead of writing the same HTML multiple times, we create components and reuse them throughout the application. Each component has its own responsibility and makes the code easier to organize and maintain.

---

## What are Props?

Props (properties) are used to pass data from a parent component to a child component. They are read-only, meaning a child component can use the data but should not modify it.

Example:

```jsx
<Counter title="React Counter App" />
```

Here, `title` is a prop passed from `App` to the `Counter` component.

---

## What is State?

State is data managed by a component that can change over time. When the state changes, React automatically updates the user interface without refreshing the page.

Example:

```jsx
const [count, setCount] = useState(0);
```

Here, `count` stores the current value, and `setCount` updates it.

---

## What are Hooks?

Hooks are special React functions that let functional components use React features such as state and lifecycle behavior. The most commonly used hook is `useState`, which is used to store and update data inside a component.

Example:

```jsx
const [count, setCount] = useState(0);
```

Whenever `setCount` is called, React re-renders the component with the updated value.

---

## Key Takeaways

- Components make code reusable.
- Props pass data from parent to child.
- State stores changing data.
- Hooks add React features like state to functional components.