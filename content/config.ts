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
  createdAt?: Date | string;
  updatedAt?: Date | string;
};

export const newPersona = (args:PersonaModel) => ({...args});

export interface PostModel {
  uid: string;
  persona?: string;
  title: string;
  slug?: string;
  featuredImage?: string;
  featuredImageCaption?: string;
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

export const newPost = (args:PostModel) => ({...args});
