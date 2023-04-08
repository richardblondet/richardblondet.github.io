import { PostCardList, EmptyPosts } from "@richardblondet.com/ui";
import type { PersonaModel, PostModel } from "content/config";

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
  const Component = layoutComponents[postListFormat];

  if (!posts.length) {
    return <EmptyPosts message="No posts yet"  /> ;
  }

  return <Component posts={posts} />;
};