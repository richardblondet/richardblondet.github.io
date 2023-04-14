import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { PostGeneratorGeneratorSchema } from './schema';

describe('post-generator generator', () => {
  let appTree: Tree;
  const options: PostGeneratorGeneratorSchema = { title: 'Hello World Title', persona: 'software-developer' };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    // find a way to test creating this files
    // const config = readProjectConfiguration(appTree, 'test');
    // expect(config).toBeDefined();
  });
});
