import { css, getCssText } from './theme';
import type * as Stitches from '@stitches/core';

export default () => (
  <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
);

export const avatar = css({
  objectFit: 'cover',
  transition: 'all .2s ease-in-out',
  borderColor: '#959ba7',
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
