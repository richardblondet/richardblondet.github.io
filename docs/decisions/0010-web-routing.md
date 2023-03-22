# Web Routing

- Status: draft
- Date: 21-03-2023 16:14:42
- Story: https://github.com/richardblondet/richardblondet.github.io/issues/36

## Decision Outcome

- **Chosen Option:** 
  - **Personas** `src/pages/as/[persona].astro`
  - **Posts** `src/pages/p/[post].astro`
- **Rules:** 
  - Static
  - Astro Level: data fetching
  - React Level: dynamic functions

### Consequences

- Wip

## Context, Problem Statement and Requirements

- We need a model to limit to a structure writing, while allow future scale for filtering and other creative uses

## Decision Drivers

- ✅ Astro's easy way to provide static building, ssr and islands. 
- ✅ Because all routes must be determined at build time, a dynamic route must export a getStaticPaths() that returns an array of objects with a params property. Each of these objects will generate a corresponding route. [dog].astro defines the dynamic dog parameter in its filename, so the objects returned by getStaticPaths() must include dog in their params. The page can then access this parameter using Astro.params.

## Links

- https://docs.astro.build/en/core-concepts/routing/#static-ssg-mode