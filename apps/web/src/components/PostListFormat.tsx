import { PostCardList } from "@richardblondet.com/ui";
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

  return <Component posts={posts} />;
};