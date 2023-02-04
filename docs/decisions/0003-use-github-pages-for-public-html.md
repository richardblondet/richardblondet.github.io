# Use Github Pages For Public Html

- Status: accepted
- Date: 02-02-2023 14:19:10
- Story: https://github.com/richardblondet/richardblondet.github.io/issues/3

## Decision Outcome

- **Chosen Option:** Github Pages
- **Rules:** 
  - selected branch: `gh-pages`
  - directory name: `public_html`


- Since we are already using github for our public site we are keeping it. Tho might just be temporal.

### Consequences

- ✅ Low costs
- ✅ Low effort

## Context, Problem Statement and Requirements

- Because we are working alone, we want to be able to get from zero to one without investing financially and with low effort. 
- We also need to be able to deploy from the working repository

## Decision Drivers

- ✅ Already in git
- ✅ Simple Setup 
- ✅ Aligns with branching strategy
- ✅ Security and reliability
- ✅ Integrated Editor & CMS if brave enough
- ✅ Static 
- 🚫 Static 
- 🚫 Github Actions learning curve

## Considered Options

- [Netlify](https://www.netlify.com/)
- [Github Pages](https://pages.github.com/)
- [Firebase Hosting](https://firebase.google.com/products/hosting)
- [Vercel](https://vercel.com/)
- [Railway](https://railway.app/)


### Options Observations

### [Netlify](https://www.netlify.com/)

- ✅ Easy to use
- ✅ Feature full
- ✅ Free Domain & Generous free tier
- 🚫 Many moving parts

### [Github Pages](https://pages.github.com/)

- ✅ Easy to use
- ✅ Free Domain 
- ✅ Fast CDN
- ✅ CMS integrated
- 🚫 Less control over URLs
- 🚫 Low cache expires
- 🚫 No cookies to change HTML
- 🚫 Lacks features for the future like serverless funcs, backend provisioning, etc

### [Firebase Hosting](https://firebase.google.com/products/hosting)

- ✅ Backend 
- ✅ Database options 
- ✅ Preview your site with your team before going live
- ✅ Owned by Google
- 🚫 Not globally avialable. Blocked in china
- 🚫 Self serving tool not friendly (opinionated)

### [Vercel](https://vercel.com/)

- ✅ Easy to use
- ✅ Very developer focus
- ✅ Feature full
- ✅ Free Domain & Generous free tier
- 🚫 NextJS-focus features

### [Railway](https://railway.app/)

- ✅ Feature full
- 🚫 Free tier not generous compared with others



--- 
## Links

- https://www.bloggingpro.com/blogging-on-github-pages-the-pros-and-cons/
- https://docs.astro.build/en/guides/deploy/
- https://www.zesty.io/mindshare/headless/netlify-pros/
- https://redvike.com/article/pros-and-cons-of-firebase/
- https://www.altexsoft.com/blog/firebase-review-pros-cons-alternatives/
- https://www.trustradius.com/products/netlify-platform/reviews?qs=pros-and-cons#reviews
- https://osdb.io/firebase-pros-and-cons-when-you-should-and-shouldnt-use-firebase-osdb/
- https://webo.digital/blog/what-is-vercel-is-it-the-right-platform-for-front-end-developers/#whats-so-good-about-vercel
- https://www.getapp.com/development-tools-software/a/vercel/reviews/
- https://blog.back4app.com/firebase-advantages-and-disadvantages/