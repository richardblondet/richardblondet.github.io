import {
  joinPathFragments,
  formatFiles,
  generateFiles,
  names,
  Tree,
} from '@nrwl/devkit';
import * as path from 'path';
import { PostGeneratorGeneratorSchema } from './schema';
import slugify from 'slugify';

const POSTS_TARGET_DIRECTORY = 'content/posts';
interface NormalizedSchema extends PostGeneratorGeneratorSchema {
  fileName: string;
  slug: string;
  createdAt: string;
  parsedTags?: string[];
}

function capitalizeTitle(titleSentence: string) {
  const words = titleSentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  return words.join(" ");
}

function normalizeOptions(tree: Tree, options: PostGeneratorGeneratorSchema): NormalizedSchema {
  const { fileName } = names(options.title);
  const title = capitalizeTitle(options.title);
  const slug = slugify(options.title).toLowerCase();
  const createdAt = new Date().toISOString();
  const directory = options.directory ? `${names(options.directory).fileName}` : '';
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  const startDate = options.startDate ? new Date(options.startDate).toISOString() : '';
  const endDate = options.endDate ? new Date(options.endDate).toISOString() : '';

  return {
    ...options,
    title,
    fileName,
    directory,
    slug,
    createdAt,
    parsedTags,
    startDate,
    endDate,
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    tmpl: ''
  };
  const srcFolder = path.join(__dirname, 'files');
  const target = joinPathFragments(POSTS_TARGET_DIRECTORY, options.directory ?? '');

  generateFiles(
    tree, 
    srcFolder, 
    target, 
    templateOptions
  );
}

export default async function (tree: Tree, options: PostGeneratorGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
  
  addFiles(tree, normalizedOptions);
  await formatFiles(tree);
}
