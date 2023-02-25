import { css, getCssText } from './theme';
import type * as Stitches from '@stitches/core';

export default () => (
  <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
);

export const button = css({
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

export const avatar = css({
  objectFit: 'cover',
  transition: 'all .2s ease-in-out',
  variants: {
    type: {
      rounded: {
        borderRadius: '$xl'
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
  border: '1px solid rgba(0,0,0,.125)',
  borderRadius: '0.85rem',
  flex: '1 1 auto',
  padding: '1rem',
  marginBottom: '1rem',
  borderTopWidth: 'var(--cardBorderTopOverride, 0px)',
});
/*
*/

export const cardCoverImg = css({
  height: '50px',
  backgroundColor: '#0070f3'
});