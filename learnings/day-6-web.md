# Day 6 – Tailwind CSS

## What is Utility-First CSS?

Tailwind CSS is a utility-first CSS framework. Instead of writing custom CSS classes, we apply small utility classes directly in HTML. Each class represents a single CSS property, making development faster and more consistent.

Example:

- `bg-blue-600` sets the background color.
- `text-white` changes the text color.
- `p-4` adds padding.
- `rounded-lg` creates rounded corners.

---

## What is Flexbox?

Flexbox is a one-dimensional layout system used to align items in rows or columns. It helps distribute space and align elements efficiently.

Common Tailwind Flexbox classes:

- `flex`
- `justify-center`
- `justify-between`
- `items-center`
- `flex-col`

Flexbox is ideal for navigation bars, cards, buttons, and simple layouts.

---

## What is CSS Grid?

Grid is a two-dimensional layout system that arranges items into rows and columns.

Common Tailwind Grid classes:

- `grid`
- `grid-cols-2`
- `grid-cols-3`
- `gap-4`

Grid is useful for galleries, dashboards, and complex page layouts.

---

## Responsive Breakpoints

Tailwind provides responsive prefixes that apply styles at different screen sizes.

- `sm:` → Small devices
- `md:` → Medium devices
- `lg:` → Large devices
- `xl:` → Extra large devices
- `2xl:` → Very large screens

Example:

`md:w-96`

This means the element becomes width 96 only on medium screens and larger.