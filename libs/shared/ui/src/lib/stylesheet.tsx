import { css, getCssText, styled, globalCss } from './theme';
import type * as Stitches from '@stitches/core';
import globalStyles from './globalStyles';
import { CakeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import type { SyntheticEvent } from 'react';
import type { PersonaModel, PostModel } from '../../../../../content/config';

const applyAlobalStyle = globalCss(globalStyles);

export default () => {
  applyAlobalStyle(); 

  return (
    <style id="stylesheet" data-generator="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  );
};

export const flex = {
  display: 'flex'
};

export const textStylesMap = {
  h1: {
    fontSize: '$xl4',
    lineHeight: '$10',
    fontWeight: '$bold',
    marginBottom: '$4',
  },
  h2: {
    fontSize: '$xl3',
    lineHeight: '$10',
    fontWeight: '$bold',
    marginBottom: '$4',
  },
  h3: {
    fontSize: '$xl2',
    lineHeight: '$8',
    fontWeight: '$semibold',
    marginBottom: '$4',
  },
  h4: {
    fontSize: '$xl',
    lineHeight: '$7',
    fontWeight: '$semibold',
    marginBottom: '$4',
  },
  h5: {
    fontSize: '$lg',
    lineHeight: '$6',
    fontWeight: '$semibold',
    marginBottom: '$4',
  },
  h6: {
    fontSize: '$base',
    lineHeight: '$4',
    fontWeight: '$semibold',
    marginBottom: '$4',
  },
  '.lead': {
    fontSize: '$xl',
    lineHeight: '$5',
    fontWeight: '$normal',
    marginBottom: '$4',
  },
  p: {
    fontSize: '$base',
    lineHeight: '$7',
    fontWeight: '$normal',
    marginBottom: '$4',
    color: '$twgray600',
  },
  small: {
    fontSize: '$sm',
    lineHeight: '1.25rem',
    fontWeight: '$normal',
    marginBottom: '$4',
  },
  blockquote: {
    tabSize: 4,
    fontSize: '$base',
    lineHeight: '$7',
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '$twgray200',
    margin: 0,
    fontWeight: '$medium',
    fontStyle: 'italic',
    color: '$twgray900',
    borderLeftWidth: '$4',
    borderLeftColor: '$twgray200',
    marginTop: '$6',
    marginBottom: '$6',
    paddingLeft: '$5',
  },
  ul: {
    listStyleType: 'disc',
    paddingLeft: '$5',
    marginBottom: '$4',
  },
  ol: {
    listStyleType: 'auto',
    paddingLeft: '$5',
    marginBottom: '$4',
  },
  li: {
    lineHeight: '$7'
  },
  dl: {
    marginBottom: '$4'
  },
  dt: {
    fontWeight: '$semibold',
    textDecoration: 'underline',
  },
  dd: {
    marginBottom: '$4',
    opacity: '0.89',
  },
  a: {
    color: '$twslate600',
    fontWeight: '$semibold',
    textDecoration: 'underline',
  }
};

// is this ugly?
export const textStyles = css({
  fontFamily: '$sans',
  color: '$twgray700',
  ['& h1']: textStylesMap['h1'],
  ['& h2']: textStylesMap['h2'],
  ['& h3']: textStylesMap['h3'],
  ['& h4']: textStylesMap['h4'],
  ['& h5']: textStylesMap['h5'],
  ['& h6']: textStylesMap['h6'],
  ['& .lead']: textStylesMap['.lead'],
  ['& p']: textStylesMap['p'],
  ['& small']: textStylesMap['small'],
  ['& blockquote']: textStylesMap['blockquote'],
  ['& ul']: textStylesMap['ul'],
  ['& ul ul']: {
    listStyleType: 'circle',
    marginTop: '$1',
    marginBottom: '$0'
  },
  ['& ol']: textStylesMap['ol'],
  ['& ol ol']: {
    listStyleType: 'lower-alpha',
  },
  ['& .list-none, & .list-none ul, & .list-none ol']: {
    listStyleType: 'none'
  },
  ['& dl']: textStylesMap['dl'],
  ['& dt']: textStylesMap['dt'],
  ['& dd']: textStylesMap['dd'],
  ['& a']: textStylesMap['a']
});

export const Div = styled('div', {});

export const RootContainer = styled('div', {
  maxWidth: '$full',
  '@lg': {
    ...flex,
    padding: '$8',
    justifyContent: 'center',
    maxWidthScreen: 'xl',
    margin: '0 auto',
  }
});

export const Container = styled('div', {
  maxWidth: '$full',
});

export const Aside = styled('aside', {
  '@lg': {
    padding: '$8',
    flexBasis: '33.333333%',
  },
});

export const Main = styled('main', flex, {
  flexDirection: 'column',
  '@lg': {
    padding: '$8',
  },
});

export const ButtonIcon = styled('button', {
  padding: '$1',
  b: 'default',
  borderRadius: '$md',
  borderColor: '$white',
  '&:hover': {
    borderColor: '$twslate200',
  },
  '&:active': {
    backgroundColor: '$gray200',
    borderColor: '$twslate300',
  }
});

export const Pill = styled('span', {
  backgroundColor: '$gray100',
  color: '$twslate700',
  fontSize: '$xs',
  fontWeight: '$medium',
  py: '$1',
  px: '$2',
  borderRadius: '$full',
  borderWidth: '$base',
  borderColor: '$gray200'
});

export const avatar = css({
  objectFit: 'cover',
  transition: 'all .2s ease-in-out',
  borderColor: '#959ba7',
  variants: {
    type: {
      rounded: {
        borderRadius: '$md'
      },
      full: {
        borderRadius: '$full'
      }
    },
    withShadow: {
      true: {
        boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)'
      }
    },
    border: {
      1: {
        borderStyle: 'solid',
        borderWidth: '1px'
      },
      2: {
        borderStyle: 'solid',
        borderWidth: '2px'
      },
      3: {
        borderStyle: 'solid',
        borderWidth: '3px'
      },
    },
    size: {
      xs: {
        width: '$12',
        height: '$12'
      },
      sm: {
        width: '$16',
        height: '$16'
      },
      md: {
        width: '$24',
        height: '$24'
      },
      lg: {
        width: '$36',
        height: '$36'
      },
    }
  }
});

export const Avatar = styled('img', avatar, {
  defaultVariants: {
    size: 'xs',
    type: 'rounded',
  }
});

export const Button = styled('button', {
  backgroundColor: '$twslate600',
  borderRadius: '$full',
  fontSize: '$sm',
  border: '0',
  color: '$white',
  px: '$3',
  py: '$1'
});

export type CssAvatarVariants = Stitches.VariantProps<typeof avatar>;

export const card = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  wordWrap: 'break-word',
  backgroundColor: '#fff',
  backgroundClip: 'border-box',
  flex: '1 1 auto',
  padding: '1rem',
  marginBottom: '1rem',
  borderWidth: '1px',
  borderTopWidth: 'var(--cardBorderTopOverride, 1px)',
  borderRadius: '$lg',
  '@xl': {
    marginBottom: '2rem'
  }
});

export interface PersonaCardProps extends PersonaModel {
  theme?: string[];
};

export const PersonaCard = (props: PersonaCardProps) => {
  const {
    name = 'Software Developer',
    avatarImage  = '/profile-picture.jpeg',
    intro = "I'd love to change the world, but they won't give me the source code.",
    currentlyDoing = [ '🧳 open for work', '🛠 building personas', '👓 learning astro'],
    theme = []
  } = props;

  const actions = ['#hashtag', '#hashtag', '#hashtag', '#hashtag', '#hashtag'];

  return (
    <>
      <Div className="persona-card" css={{
        ...flex,
        flexDirection: 'column',
        backgroundColor: '$white',
        mb: `$4`,
        '@lg': {
          b: 'base',
          borderRadius: '$lg',
          width: '$72',
          margin: 'auto'
        }
      }}>
        <Div css={{
          maxWidth: '$lg',
          '@sm': {
            width: '$lg',
            margin: '0 auto',
          },
          '@lg': {
            maxWidth: '$xl',
            width: '$full'
          }
        }}>
          <Div css={{
            ...flex,
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '$4',
            padding: '$4',
            '@sm': {
              margin: '0 auto'
            },
            '@lg': {
              gap: '$0',
              padding: '$4'
            }
          }}>
            <Div as={'span'} css={{
              '@lg': {
                ...flex,
                mr: '$4'
              }
            }}>
              <Avatar size="xs" type="rounded" src={avatarImage} alt={`${name} Avatar`} />
            </Div>
            <Div css={{
              ...flex,
              flexDirection: 'column'
            }}>
              
              <Div css={{
                color: '$twslate900',
                fontWeight: '$medium'
              }}>
                Richard Blondet
              </Div>
              <Div css={{
                ...flex,
                alignItems: 'center',
                color: '$twslate500',
                fontWeight: '$medium'
              }}>
                <Div as={'span'} css={{
                  mr: '$2',
                  '@lg': {
                    pr: '$2',
                    mr: '$0'
                  },
                }}>
                  {name}
                </Div>
                <ButtonIcon>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </ButtonIcon>
              </Div>
            </Div>
          </Div>
        </Div>
        
        {/* <!-- Persona Details --> */}
        <Div css={{
          padding: '$4',
          '@sm': {
            maxWidth: '$lg',
            margin: '0 auto'
          }, 
          '@lg': {
            pt: '0'
          }
        }}>
          <p>{intro}</p>
          <p className={css({ mt: '$4' }).toString()}><strong>Currently: </strong>
            <ul className="list-unstyled">
              {Array.isArray(currentlyDoing) && currentlyDoing.map((now:string, index:number) => (
                <li key={index}><a href="#">{now}</a></li>
              ))}
            </ul>
          </p>
        </Div>
        {/* <!-- END Persona Details --> */}

        {/* <!-- Hashtags --> */}
        <Div css={{
          ...flex,
          flexWrap: 'nowrap',
          justifyContent: 'left',
          overflow: 'auto',
          gap: '$2',
          padding: '$4',
          by: 'base',
          '@sm': {
            flexWrap: 'wrap',
            textAlign: 'center',
            justifyContent: 'center',
          },
          '@lg': {
            borderBottomLeftRadius: '$md',
            borderBottomRightRadius: '$md'
          }
        }}>
          {actions.map((hashtag:string, index:number) => (
            <Pill key={index}>
              <a href="#">{hashtag}</a>
            </Pill>
          ))}
        </Div>
        {/* <!-- END Hashtags --> */}
      </Div>
    </>
  );
};

export interface PostCardProps extends PostModel {};

export const PostCard = (props: PostCardProps) => {
  const {
    title = "What is Lorem Ipsum? Where can I get some?",
    tags = ['Action', 'Another', 'Test'],
    excerpt = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima illo necessitatibus voluptatum...",
    slug = "",
    featuredImage = "",
    createdAt = "2023-03-23T05:13:22.695Z",
    isPinned = false,
  } = props;

  const PostLink = ({...props}: any) => <a href={`/p/${slug}`} target="_blank" {...props} />

  return (
    <>
      <Div className="post-card" css={{
        ...flex,
        flexDirection: 'column',
        marginBottom: '$4',
        backgroundColor: '$white',
        b: 'base',
        borderLeft: 'none',
        borderRight: 'none',
        '@sm': {
          b: 'base',
          borderRadius: '$lg',
        },
      }}>
          <Div className="post-heading" css={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '$4',
          }}>
            <Div className="post-actions" css={{
              ...flex,
              alignItems: 'center',
              gap: '$4',
            }}>
              {isPinned ? 
                <Div css={{
                  display: 'flex',
                  fontSize: '$xs',
                  alignItems: 'center',
                  color: '$gray900',
                  gap: '$2'
                }}>
                  <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.62129 1.13607C9.81656 0.940808 10.1331 0.940809 10.3284 1.13607L11.3891 2.19673L12.8033 3.61094L13.8639 4.6716C14.0592 4.86687 14.0592 5.18345 13.8639 5.37871C13.6687 5.57397 13.3521 5.57397 13.1568 5.37871L12.5038 4.7257L8.86727 9.57443L9.97485 10.682C10.1701 10.8773 10.1701 11.1939 9.97485 11.3891C9.77959 11.5844 9.463 11.5844 9.26774 11.3891L7.85353 9.97491L6.79287 8.91425L3.5225 12.1846C3.32724 12.3799 3.01065 12.3799 2.81539 12.1846C2.62013 11.9894 2.62013 11.6728 2.81539 11.4775L6.08576 8.20714L5.0251 7.14648L3.61089 5.73226C3.41563 5.537 3.41562 5.22042 3.61089 5.02516C3.80615 4.8299 4.12273 4.8299 4.31799 5.02516L5.42557 6.13274L10.2743 2.49619L9.62129 1.84318C9.42603 1.64792 9.42603 1.33133 9.62129 1.13607Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path><path d="M9.62129 1.13607C9.81656 0.940808 10.1331 0.940809 10.3284 1.13607L11.3891 2.19673L12.8033 3.61094L13.8639 4.6716C14.0592 4.86687 14.0592 5.18345 13.8639 5.37871C13.6687 5.57397 13.3521 5.57397 13.1568 5.37871L12.5038 4.7257L8.86727 9.57443L9.97485 10.682C10.1701 10.8773 10.1701 11.1939 9.97485 11.3891C9.77959 11.5844 9.463 11.5844 9.26774 11.3891L7.85353 9.97491L6.79287 8.91425L3.5225 12.1846C3.32724 12.3799 3.01065 12.3799 2.81539 12.1846C2.62013 11.9894 2.62013 11.6728 2.81539 11.4775L6.08576 8.20714L5.0251 7.14648L3.61089 5.73226C3.41563 5.537 3.41562 5.22042 3.61089 5.02516C3.80615 4.8299 4.12273 4.8299 4.31799 5.02516L5.42557 6.13274L10.2743 2.49619L9.62129 1.84318C9.42603 1.64792 9.42603 1.33133 9.62129 1.13607Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                  </span>
                  <span>Pinned</span>
                </Div>
              : null}
              {tags.map((tag, index) => (
                <Pill key={index}>
                  <a href="#" >{tag}</a>
                </Pill>
              ))}
            </Div>
            <Div css={{
              color: '$twslate500',
              py: '$1',
              fontFamily: '$mono',
              fontSize: '$xs'
            }}>
              {new Date(createdAt).toDateString()}
            </Div>
          </Div>
          {/* <!-- Cover image --> */}
          {featuredImage ? 
            <PostLink>
              <Div className="cover-img" css={{
                 marginBottom: '$4',
                 mx: '$4',
                 minHeight: '300px',
                 backgroundColor: '$blue600',
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                //  boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 15%)',
                 borderRadius: 'var(--radii-xl)',
                 border: 'solid 1px #e5e7eb',
                backgroundImage: `url(${featuredImage})`
              }} />
            </PostLink> : null}
          <Div className='post-content' css={{
            padding: '$4',
            paddingTop: '$0',
          }}>
            <PostLink>
              <Div as="h3" className="post-title" css={{
                  ...textStylesMap.h3,
                  mb: '$4',
                  '@sm': {
                    fontWeight: '$black',
                    fontSize: '$xl2',
                  },
                }}>
                {title}
              </Div>
            </PostLink>
            <Div as="p" css={{
              color: '$twslate600',
              textAlign: 'justify'
            }}>
              {excerpt}
            </Div>
          </Div>
      </Div>
    </>
  );
};

export const PostCardList = (props: { posts: PostCardProps[] }) => {
  const { posts } = props;
  return (
    <Container css={{
      '@sm': {
        // maxWidth: '$lg',
        maxWidthScreen: 'xs',
        margin: '0 auto'
      }}}>
        {posts.map((post, index) => <PostCard key={index} {...post} />)}
      </Container>
  )
};

export interface ProfileCardProps {
  personasList?: PersonaModel[];
  selectedPersona?: string;
  onPersonaItemClick?: (persona?: string) => void;
  path?: string;
};

export const smallIconStyle = css({ 
  width: '$4',
  height: '$4',
});

export const ProfileCard = (props: ProfileCardProps) => {
  const birthname = 'Richard O. Blondet';

  const { 
    personasList = [],
    selectedPersona = '',
    onPersonaItemClick = () => void 0,
    // path = 'as'
  } = props;

  const staticContent = [
    <>
      <span>
        <MapPinIcon className={smallIconStyle.toString()} />
      </span>
      <span>Santo Domingo</span>
    </>,
    <>
      <span>
        <CakeIcon className={smallIconStyle.toString()} />
      </span>
      <span>22 Feb</span>
    </>
  ];

  const personaListItems = personasList.map((persona) => (
    <div key={persona.slug} className="button-persona" 
      onClick={(e: SyntheticEvent) => {
        e.preventDefault(); onPersonaItemClick(persona.slug)
      }}>
      <Div as={'a'} 
        // href={`${path}/${persona.slug}`} // weird, it appears 'as/' twice
        css={{
          // button
          backgroundColor: '$white',
          borderRadius: '$lg',
          fontSize: '$xs',
          b: 'base',
          color: '$twslate600',
          px: '$3',
          py: '$1',
          // button
          ...flex,
          alignItems: 'center',
          gap: '$2',
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
          },
          borderColor: 'inherit',
          ...(persona.slug === selectedPersona ? {
            borderColor: '$blue800',
            fontWeight: '$semibold',
            cursor: 'initial',
            '&:hover': {
              textDecoration: 'none',
            },
          } : {})
      }}>
          <Div as="span" css={{
            width: '$2',
            height: '$2',
            borderRadius: '$full',
            backgroundColor: persona.slug === selectedPersona ? '$blue800' : '$twslate300',
            display: 'inline-block',
          }} />
        {persona.name}
      </Div>
    </div>
  ));

  const displayingPersona: PersonaModel | undefined = personasList.find(
    persona => persona.slug === selectedPersona
  );

  if (!displayingPersona) {
    return <Div>No selected Persona</Div>;
  }

  const {
    name,
    intro,
    coverImage,
    avatarImage,
  } = displayingPersona;

  return (
    <>
      <Div className="persona-card" css={{
        ...flex,
        flexDirection: 'column',
        backgroundColor: '$white',
        overflow: 'hidden',
        borderBottom: 'solid $twslate200',
        borderBottomWidth: '$base',
        mb: `$4`,
        '@lg': {
          b: 'base',
          borderRadius: '$lg',
          width: '$72',
          margin: 'auto',
          mb: '$4',
        }
      }}>
        <Div css={{
          ...flex,
          maxWidth: '$full',
          alignContent: 'center',
          backgroundImage: `url(${coverImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '$16',
        }} />
        <Div css={{
          maxWidth: '$lg',
          '@sm': {
            width: '$lg',
            margin: '0 auto',
          },
          '@lg': {
            maxWidth: '$xl',
            width: '$full'
          }
        }}>
          {/* Avatar and cta */}
          <Div css={{
            ...flex,
            justifyContent: 'space-between',
            alignItems: 'end',
            px: '$4',
            mt: '-2rem',
          }}>
            <Div css={{
              '@lg': {
                ...flex,
                mr: '$4'
              }
            }}>
              <Avatar 
                size="sm" 
                type="full" 
                src={avatarImage} 
                alt={`${name} Avatar`} 
                border={2}
                css={{
                  borderColor: '$twslate100',
                }}
              />
            </Div>
            <Div css={{
              ...flex,
              flexDirection: 'column'
            }}>{/* Button */}</Div>
          </Div>
          {/* Full Name */}
          <Div css={{
            ...flex,
            p: '$4',
            flexDirection: 'column',
          }}>
            <Div css={{
                color: '$twslate900',
                fontWeight: '$semibold'
              }}>
                {birthname}
            </Div>
            <Div css={{
                ...flex,
                flexWrap: 'wrap',
                color: '$twslate500',
                fontWeight: '$medium',
                fontSize: '$sm',
                alignItems: 'center',
                gap: '0 $2'
              }}>
                {staticContent.map((content, index) => (
                  <Div key={index} css={{ ...flex, alignItems: 'center', gap: '$1' }}>
                    {content}
                  </Div>
                ))}
              </Div>
              <Div css={{
              ...flex,
                flexWrap: 'wrap',
                paddingTop: '$4',
                gap: '0 $2',
                '@lg': {
                  gap: '$2'
                }
              }}>
                {personaListItems}
              </Div>
              <Div css={{ 
                paddingTop: '$4', 
                color: '$twslate600',
              }}>
                <p>{intro}</p>
              </Div>
            </Div>
          </Div>
          
      </Div> 
    </>
  );
};

interface EmptyPostsProps {
  message: string;
}
export const EmptyPosts = (props: EmptyPostsProps) => {
  const { message } = props;
  return (
    <Div css={{
      maxWidthScreen: 'xs',
      margin: '0 auto',
    }}>
      <Div css={{
        p: '$4',
        color: '$twslate400',
        minWidth: '$md',
        // b: 'base',
        // borderRadius: '$lg',
        // borderColor: '$twslate400',
        fontWeight: '$bold',
        textAlign: 'center',
      }}>
        {message}
      </Div>
    </Div>
  );
};

interface ErrorPageProps {
  code: string;
  message: string;
}
export const ErrorPage = (props: ErrorPageProps) => {
  const {
    code,
    message
  } = props;

  return (
    <Div css={{
      maxWidthScreen: 'md',
      margin: '0 auto',
    }}>
      <Div css={{
        ...flex,
        flexDirection: 'column',
        p: '$16',
        minWidth: '$sm',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
        <Div as="h1" css={{
          fontWeight: '$black',
          lineHeight: '$normal',
          fontSize: '$xl5',
          marginBottom: '$1'
        }}>
          {code}
        </Div>
        <Div as="p" css={{
          fontSize: '$xl',
          fontWeight: '$extralight',
          color: '$gray800'
        }}>
          {message}
        </Div>
      </Div>
    </Div>
  );
}