# Content Modeling

- Status: draft
- Date: 10-01-2023 15:23:48
- Story: https://github.com/richardblondet/richardblondet.github.io/issues/36

## Decision Outcome

- **Persona**

```ts
export interface PersonaModel {
  name: string;
  slug: string;
  intro: string;
  description?: string;
  avatarImage: string;
  coverImage?: string;
  contentSource: 'astro.glob' | 'astro.collection';
  postListFormat: 'cards' | 'timeline' | 'grid';
  type: 'actor' | 'abstract' | 'proxy';
  isPrimary: boolean;
  currentlyDoing?: string | string[];
  parent?: string;
  themeId?: string;
  createdAt: Date;
  updatedAt: Date;
};
```

|  | Description |
| --- | --- |
| name | Role Name, Persona Name, Title, Area, Mask, etc |
| slug | `unique` slugified name|
| intro | displayed in the card |
| description | **TODO** `optional` expanded information about integrated persona |
| avatarImage | Avatar image |
| coverImage | Card Cover Image |
| contentSource | `['astro.glob', /* TODO */ 'astro.collection']` source for this persona's posts |
| postListFormat | `['cards', /* TODO */'timeline', /* TODO */'grid']` post listing components |
| type | **TODO** `['actor', 'abstract', 'proxy']` |
| isPrimary | **TODO** to be listed in the cards |
| currentlyDoing | **TODO** |
| parent | Persona parent for linear hierarchy |
| themeId | **TODO** theme tokens selection |
| createdAt | **TODO** |
| updatedAt | **TODO** |

- **Post** 

```ts
export interface PostModel {
  uid: string;
  persona?: string;
  title: string;
  slug?: string;
  coverImage?: string;
  body?: string;
  tags?: string[];
  excerpt?: string;
  status: PostStatus;
  type: PostType;
  keywords?: string;
  parent?: number;
  commentCount?: number;
  likesCount?: number;
  wordCount?: number;
  isPinned?: boolean;
  isCommentOpened?: boolean;
  timelineDate?: Date;
  timelineRanged?: Date;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
enum PostStatus {
  Published = "published",
  Draft = "draft",
  Archived = "archived",
  Deprecated = "deprecated",
}
enum PostType {
  Article = "article",
  Essay = "essay",
  Blog = "blog",
  Media = "media",
  Thought = "thought",
  Event = "event",
}
```
|  | Description |
| --- | --- |
| uid | **TODO** | 
| persona | `unique` persona slug | 
| title | post title | 
| slug | `unique` blog slug. **Optional** | 
| coverImage | feature image | 
| body | **TODO** content | 
| tags | **TODO** tagging | 
| excerpt | displayed in the card component | 
| status | `[published, draft, archived, deprecated]` **TODO** organization and compilation decisions | 
| type | **TODO** | 
| keywords | **TODO** SEO | 
| parent | **TODO** for hierarchy | 
| commentCount | **TODO** | 
| likesCount | **TODO** | 
| wordCount | **TODO** | 
| isPinned | **TODO** Prioritize on listing | 
| isCommentOpened | **TODO** |
| timelineDate | **TODO** | 
| timelineRanged | **TODO** | 
| createdAt | **TODO** | 
| updatedAt | **TODO** | 


### Consequences

- Less anxious stakeholders

## Context, Problem Statement and Requirements

- We have a ./content_data destined to hold our data, that's going to comprise md and mdx files. We want to use instead the directory name ./content for that.
- This file structure should account for future tooling eg: adding content, using frontmatter vscode editor, etc.
- We need a model to limit to a structure writing, while allow future scale for filtering and other creative uses


## Decision Drivers

- ✅ Existing DBML model created back in January. Ref [schema.dbdiagram](https://dbdiagram.io/d/63bda9876afaa541e5d19706)
- ✅ We envision having the content closer to the root for ease of work and future tooling
