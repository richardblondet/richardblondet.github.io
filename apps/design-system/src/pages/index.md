---
title: Persona Design System
description: Getting started
section: section
status: status
layout: ../layouts/Layout.astro
---

This Design System is the easiest is the starting point for visual desicion making. Since Astro is compatible with many frameworks, you can import your components and document them right in the markdown files. 

## Getting started

### Adding new sections

To show the section on the left side navigation, add it to the navigation config file at `apps/design-system/src/navLinks.ts`.

Example:

```jsx
export default = [
  { text: "Foundations", header: true },
  { text: "Overview", link: "/foundations/overview" },
  { text: "Universal", link: "/foundations/universal" },
  ...
  { text: "Components", header: true },
  { text: "Typography", link: "/components/typography" },
  { text: "Avatar", link: "/components/avatar" },
  ...
];
```

### Adding new pages

To add new pages just create an .astro or markdown file in `src/pages/[section]/page-name.md`.


### Adding your components

Astro is great for design systems because it allows you to import components from different frameworks like react, vue or svelte.

To get started check how the `Button` component is used in the `src/pages/components/buttons.md` file.

You can import your component library or create your own and document it easily.

### `.component-preview` utility

There's a class called `.component-preview` that you can use to wrap your component in a grid, and it will look like this:

<div class="component-preview">
  <button class="text-white bg-blue-500 px-4 py-2 rounded-md">Button Component</button>
</div>

```js
  <Button>Button Component</Button>
```

### Acknowledgements

Inspired by the work of  **[@jordienr](https://twitter.com/jordienr)** from his [Astro Design System Starter](https://github.com/jordienr/astro-design-system) template. Adapted to support Astro 2.x and react.
