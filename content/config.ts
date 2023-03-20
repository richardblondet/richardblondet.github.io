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
  currentlyDoing?: string;
  higherPersona?: string;
  themeId?: string;
  createdAt: string;
  updatedAt: string;
};

export const newPersona = (args:PersonaModel) => ({...args});

