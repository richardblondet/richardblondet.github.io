import { css, getCssText } from "./theme";

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
  transition: 'all .2s ease-in-outall .2s ease-in-out',
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
    }
  }
});

export const card = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  wordWrap: 'break-word',
  backgroundColor: '#fff',
  backgroundClip: 'border-box',
  border: '1px solid rgba(0,0,0,.125)',
  borderRadius: '.75rem',
  overflow: 'hidden'
});

export const cardCoverImg = css({
  height: '50px',
  backgroundColor: '#0070f3'
});