# Content Sourcing

- Status: wip
- Date: 
- Story: https://github.com/richardblondet/richardblondet.github.io/issues/36

## Decision Outcome

- **Chosen Option:** Astro.glob API
- **Rules:** 
  - content lives on the root directory content.
  - lets add a model definition in typescript for the content

### Consequences

- Top level content visibility

## Context, Problem Statement and Requirements

- Decided to use Nx as code management [0004](0004-nx.md)
- Decided to use Astro as web framework [0005](0005-using-astro-as-web-framework.md)
- We have a ./content_data destined to hold our data, that's going to comprise md and mdx files. We want to use instead the directory name ./content for that.
- This file structure should account for future tooling eg: adding content, using frontmatter vscode editor, etc.

## Decision Drivers

- ✅ Using custom development workflow with both nx and astro
- ✅ Use `content` to house public content for the website
- ✅ We envision having the content closer to the root for ease of work and future tooling
- ✅ We can always change as the implementation of each is fairly simple


## Considered Options

- [Astro.glob API](https://docs.astro.build/en/reference/api-reference/#astroglob)
- [Astro's Content Collection](https://docs.astro.build/en/guides/content-collections/#what-are-content-collections)

### Options Observations

### [Astro.glob API](https://docs.astro.build/en/reference/api-reference/#astroglob)

- ✅ Built-in API
- ✅ Works with our file structure requirement: `await Astro.glob('../../../../../content/personas/*.md');`
- ✅ Supports MDX
- ✅ Content component astro element to render the file contents
- ✅ Supports generics for type parameters
- ✅ Supports other file types as long as a generic type exists
- 🚫 Long path yet to integrate with Nx
- 🚫 Support for getting the contents rendered
- 🚫 20-03-2023 14:58:23: beacuse [`getStaticPaths` executes in own isolated scope](https://docs.astro.build/en/reference/api-reference/#getstaticpaths) I can't reuse the first astro glob call for listing purposes

### [Astro's Content Collection](https://docs.astro.build/en/guides/content-collections/#what-are-content-collections)

- ✅ Has content type/schema definitions
- ✅ Advanced filter api, on collection call, as oppose to get all and then filter `getCollection()`
- ✅ Collection schema validates file frontmatter variables
- ✅ Supports MDX 
- ✅ Built-in async functions to render content 
- 🚫 Doesn't seem to support changing the content directory so no support for our requirement
- 🚫 Weird issues with `astro:content`. Seems to be error prone and needs sync and dev server reloads
- 🚫 Support for getting the contents rendered


## Links

- https://gohugo.io/content-management/organization/
- https://github.com/rodneylab/astro-blog-markdown
