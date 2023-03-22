/**
 * Idea to create a persona from Nx
 * @see {@link https://nx.dev/recipes/generators/creating-files}
 */
import slugify from 'slugify';
import { 
    Tree, 
    joinPathFragments,
    formatFiles, 
    installPackagesTask,
    readProjectConfiguration,
    generateFiles
} from '@nrwl/devkit';

import { PersonaModel, newPersona } from './config';

export default async function (tree: Tree, schema: PersonaModel) {
    
    const libraryRoot = readProjectConfiguration(tree, schema.name).root;
    const targetDirectory = `${libraryRoot}/personas`;
    const now = new Date().toISOString();
    
    generateFiles(
        tree, 
        joinPathFragments(__dirname, './files'),
        targetDirectory,
        newPersona({
            name: schema.name,
            slug: slugify(schema.name, { lower: true }),
            contentSource: 'astro.glob',
            postListFormat: 'cards',
            type: 'actor',
            isPrimary: false,
            themeId: '',
            createdAt: now,
            updatedAt: now,
        })
    );
    // await formatFiles(tree);

    // return () => {
    //     installPackagesTask(tree);
    // };
}
