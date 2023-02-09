# Using Astro As Web Framework

- Status: accepted
- Date: 03-02-2023 00:11:37
- Story: https://github.com/richardblondet/richardblondet.github.io/issues/6

## Decision Outcome

- **Chosen Option:** Astro
- **Rules:** --

### Consequences

- Fast & performant by default

## Context, Problem Statement and Requirements

- We want a framework that is content focus
- We want integration with other tools like React
- We want it to be able to build static but not be locked on static
- We want a framework that allows incremental work
- We want to write using Markdown and MDX
- We want to use react or support it

## Decision Drivers

- ✅ Flexible
- ✅ Easy to use
- ✅ Full featured
- ✅ Content focused aligns with our use case
- ✅ MD and MDX by default
- ✅ Typescript support
- ✅ UI-agnostic, meaning you can Bring Your Own UI Framework (BYOF)
- ✅ Server first
- ✅ Lighthouse King


## Considered Options

- [NextJS](https://nextjs.org/)
- [CRA](https://create-react-app.dev/)
- [Astro](https://astro.build/)
- [Gatsby](https://www.gatsbyjs.com/)

### Options Observations

### [NextJS](https://nextjs.org/)

- ✅ Popular 
- ✅ Backed by vercel
- ✅ Performant
- ✅ automatic code splitting
- ✅ Good for SEO
- ✅ Dev focus
- ✅ Tons of examples of integrations
- 🚫 Not plugable, requires active development work
- 🚫 Opinionated router and server api adoption
- 🚫 No content focus
- 🚫 Typing "caveats" on proj docs shows real challenges, like the opinionated custom `_document`

### [CRA](https://create-react-app.dev/)

- ✅ Familiarty
- ✅ Easy to use
- 🚫 Requires more setup for custom things, eg Routing
- 🚫 Build customization black hole
- 🚫 Not content focused. Really nothing focused. Needs setup

### [Astro](https://astro.build/)

- ✅ Performant
- ✅ Good for SEO
- ✅ Easy i18n
- ✅ DX focused for writers or Content focused for Developers
- 🚫 MPA 
- 🚫 Svelte like components means distance from react
- 🚫 State management
- 🚫 Opinionated router and server api adoption
- 🚫 Page transitions steep implementation


### [Gatsby](https://www.gatsbyjs.com/)

- ✅ Performant
- ✅ Good for SEO
- ✅ Templates
- ✅ Good for apps
- 🚫 Steep-ish learning curve(?)
- 🚫 Processing large content means cpu hits

## Links

- https://docs.astro.build/en/concepts/why-astro/
- https://dev.to/richkurtzman/advantages-and-disadvantages-of-nextjs-5hg6
- https://pagepro.co/blog/pros-and-cons-of-nextjs/
- https://nextjs.org/docs/faq
- https://github.com/vercel/next.js/tree/canary/examples
- https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70
- https://dev.to/nikhilkumaran/don-t-use-create-react-app-how-you-can-set-up-your-own-reactjs-boilerplate-43l0
- https://blog.openreplay.com/is-gatsby-worth-using/
- https://pagepro.co/blog/when-not-to-use-gatsbyjs/
- https://stackoverflow.com/questions/63595886/what-are-the-drawbacks-of-create-react-app
- https://cleancommit.io/blog/the-pros-and-cons-of-using-gatsby/
- https://tensq.com.au/blog/gatsby-js-pros-and
- https://blog.logrocket.com/how-astro-compares-next-js-react-apps/
- https://morioh.com/p/8ad1a52e709a
- https://docs.astro.build/en/reference/api-reference/#prism-
- https://docs.astro.build/en/concepts/why-astro/#overview
- https://docs.astro.build/en/concepts/mpa-vs-spa/
- https://github.com/nxtensions/nxtensions/tree/main/packages/astro
- https://docs.astro.build/en/reference/configuration-reference/
- https://rodneylab.com/astro-turbolinks/