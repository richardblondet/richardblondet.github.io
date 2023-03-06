import { css, getCssText, styled, globalCss } from './theme';
import type * as Stitches from '@stitches/core';
import globalStyles from './globalStyles';


const applyAlobalStyle = globalCss(globalStyles);

export default () => {
  applyAlobalStyle(); 

  return (
    <style id="stylesheet" data-generator="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  );
}
export const flex = {
  display: 'flex'
};

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

export interface PersonaCardProps {
  name?: string;
  avatarImage?: string;
  description?: string;
  actions?: string[];
  now?: string[];
  theme?: string[];
}

export const PersonaCard = (props: PersonaCardProps) => {
  const {
    name = 'Software Developer',
    avatarImage  = '/profile-picture.jpeg',
    description = "I'd love to change the world, but they won't give me the source code.",
    actions = ['#hashtag', '#hashtag', '#hashtag', '#hashtag', '#hashtag'],
    now = [ '🧳 open for work', '🛠 building personas', '👓 learning astro'],
    theme = []
  } = props;
  return (
    <>
      <Div id="persona-card" css={{
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
              <img className={avatar({
                size: 'xs', 
                type: 'rounded',
              })} src={avatarImage} alt={`${name} Avatar`} />
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
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
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
          <p>{description}</p>
          <p className={css({ mt: '$4' }).toString()}><strong>Currently: </strong>
            <ul className="list-unstyled">
              {now.map((now) => (
                <li><a href="#">{now}</a></li>
              ))}
            </ul>
          </p>
        </Div>
        {/* <!-- END Persona Details --> */}

        {/* <!-- Hashtags --> */}
        <Div css={{
          ...flex,
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '$2',
          padding: '$4',
          by: 'base',
          '@sm': {
            textAlign: 'center',
          },
          '@lg': {
            borderBottomLeftRadius: '$md',
            borderBottomRightRadius: '$md'
          }
        }}>
          {/* <span className="inline-block mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
              <a href="#" className="action-link ">{hashtag}</a>
            </span> */}
          {actions.map((hashtag) => (
            <Pill>
              <a href="#">{hashtag}</a>
            </Pill>
          ))}
        </Div>
        {/* <!-- END Hashtags --> */}
      </Div>
    </>
  );
}

export interface PostCardProps {
  title?: string;
  tags?: string[];
  excerpt?: string;
  coverImage?: string;
  actions?: string;
  date?: string;
}

export const PostCard = (props: PostCardProps) => {
  const {
    title = "What is Lorem Ipsum? Where can I get some?",
    tags = ['Action', 'Another', 'Test'],
    excerpt = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima illo necessitatibus voluptatum...",
    coverImage = "",
    actions = ['coded', 'documented', 'reviewed', 'launched', 'been-recruited'],
    date = new Date().toDateString(),
  } = props;
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
        '@md': {
          b: 'base',
          borderRadius: '$lg',
        },
      }}>
          <Div className="post-heading" css={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '$4',
          }}>
            <Div className="post-action" css={{
              ...flex,
              alignItems: 'center',
              gap: '$4',
            }}>
              {tags.map(tag => (
                <Pill>
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
              {date}
            </Div>
          </Div>
          {/* <!-- Cover image --> */}
          {coverImage ? 
            <a href="#">
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
                backgroundImage: `url(${coverImage})`
              }} />
            </a> : null}
          <Div className='post-content' css={{
            padding: '$4',
            paddingTop: '$0',
          }}>
            <a href="#!">
              <Div as="h3" className="post-title" css={{
                fontSize: '$xl',
                fontWeight: '$bold',
                textDecoration: 'none',
                fontFamily: '$sans',
                lineHeight: '1.25',
                mb: '$4',
                '@sm': {
                  fontWeight: '$black',
                  fontSize: '$xl2',
                },
              }}>
                {title}
              </Div>
            </a>
            <p className="post-excerpt">
              {excerpt}
            </p>
          </Div>
      </Div>

    </>
  );
}
