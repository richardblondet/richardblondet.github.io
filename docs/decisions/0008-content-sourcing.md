# Content Sourcing

- Status: draft
- Date: 
- Story: https://github.com/richardblondet/richardblondet.github.io/issues/36

## Decision Outcome

- **Chosen Option:** Astro.glob API
- **Rules:** 

### Consequences

-

## Context, Problem Statement and Requirements

- Decided to use Nx as code management [0004](0004-nx.md)
- Decided to use Astro as web framework [0005](0005-using-astro-as-web-framework.md)
- We have a ./content_data destined to hold our data, that's going to comprise md and mdx files. We want to use instead the directory name ./content for that.
- This file structure should account for future tooling eg: adding content, using frontmatter vscode editor, etc.

## Decision Drivers

- ✅ Using custom development workflow with both nx and astro
- ✅ Use `content` to house public content for the website


## Considered Options

- [Astro.glob API](https://docs.astro.build/en/reference/api-reference/#astroglob)
- [Astro's Content Collection](https://docs.astro.build/en/guides/content-collections/#what-are-content-collections)

### Options Observations

### [Astro.glob API](https://docs.astro.build/en/reference/api-reference/#astroglob)

- ✅ Built-in API
- ✅ Works with our file structure requirement: `await Astro.glob('../../../../../content/personas/*.md');`
- ✅ Supports MDX
- ✅ Supports generics for type parameters
- 🚫 Long path yet to integrate with Nx

- [Astro's Content Collection](https://docs.astro.build/en/guides/content-collections/#what-are-content-collections)

- ✅ Has content type definitions
- 🚫 Doesn't seem to support changing the content directory


## Links

- https://gohugo.io/content-management/organization/
- https://github.com/rodneylab/astro-blog-markdown
