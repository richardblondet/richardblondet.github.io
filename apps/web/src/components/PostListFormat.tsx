// import { useState } from "react";
import { PostCardList } from "@richardblondet.com/ui";
import type { PersonaModel, PostModel } from "../../../../content/config";

export interface PostListFormatProps {
  posts: PostModel[];
  postListFormat: PersonaModel['postListFormat'];
  selectedPersona: string;
};

const layoutComponents = {
  cards: PostCardList,
  timeline: PostCardList,
  grid: PostCardList,
};

export default ({ posts, postListFormat }: PostListFormatProps) => {
  console.log("🚀 ~ file: PostListFormat.tsx:18 ~ posts:", posts)
  console.log("🚀 ~ file: PostListFormat.tsx:18 ~ postListFormat:", postListFormat)
  // const posts = contentSourceFunctions[contentSource](selectedPersona);
  const Component = layoutComponents[postListFormat];

  return <PostCardList posts={posts} />;
};