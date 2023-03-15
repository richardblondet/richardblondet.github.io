import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/core';
import { 
  colors, 
  fonts, 
  fontSizes, 
  radii, 
  sizes, 
  space,
  zIndices,
  fontWeights,
  borderWidths,
  lineHeights,
} from './tokens';
// https://github.com/cristicretu/stitches-tailwind/blob/main/stitches.config.ts


export const screenWidths = {
  'xs': `480px`,
  'sm': `640px`,
  'md': `768px`,
  'lg': `1024px`,
  'xl': `1280px`,
  '2xl': `1536px`,
};

export const theme = {
  colors,
  space,
  sizes,
  fonts,
  fontSizes,
  radii,
  zIndices,
  fontWeights,
  borderWidths,
  lineHeights,
};

export const utils = {
  p: (value: string) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: (value: string) => ({
    paddingTop: value,
  }),
  pr: (value: string) => ({
    paddingRight: value,
  }),
  pb: (value: string) => ({
    paddingBottom: value,
  }),
  pl: (value: string) => ({
    paddingLeft: value,
  }),
  px: (value: string) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: string) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  m: (value: string) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: (value: string) => ({
    marginTop: value,
  }),
  mr: (value: string) => ({
    marginRight: value,
  }),
  mb: (value: string) => ({
    marginBottom: value,
  }),
  ml: (value: string) => ({
    marginLeft: value,
  }),
  mx: (value: string) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: string) => ({
    marginTop: value,
    marginBottom: value,
  }),
  linearGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
    backgroundImage: `linear-gradient(${value})`,
  }),
  // A property for applying width/height together
  size: (value: Stitches.ScaleValue<'sizes'>) => ({
    width: value,
    height: value,
  }),
  // An abbreviated property for border-radius
  br: (value: Stitches.ScaleValue<'radii'>) => ({
    borderRadius: value,
  }),
  // Max width screen utils
  maxWidthScreen: (value: keyof typeof screenWidths) => ({
    maxWidth: screenWidths[value]
  }),
  b: (value: keyof typeof borderWidths) => ({
    borderWidth: `$${value}`,
    borderColor: '$twgray200',
    borderStyle: 'solid'
  }),
  by: (value: keyof typeof borderWidths) => ({
    borderTopWidth: `$${value}`,
    borderBottomWidth: `$${value}`,
    borderColor: '$twgray200',
    borderStyle: 'solid'
  }),
  bx: (value: keyof typeof borderWidths) => ({
    borderLeftWidth: `$${value}`,
    borderRightWidth: `$${value}`,
    borderColor: '$twgray200',
    borderStyle: 'solid'
  }),
};

export const media = {
  'xs': `(min-width: ${screenWidths['xs']})`,
  'sm': `(min-width: ${screenWidths['sm']})`,
  'md': `(min-width: ${screenWidths['md']})`,
  'lg': `(min-width: ${screenWidths['lg']})`,
  'xl': `(min-width: ${screenWidths['xl']})`,
  '2xl': `(min-width: ${screenWidths['2xl']})`,
  'hover': `(hover: hover)`,
  'dark': `(prefers-color-scheme: dark)`,
  'light': `(prefers-color-scheme: light)`,
};

export const { 
  css, 
  getCssText, 
  styled, 
  globalCss 
} = createStitches({ theme, utils, media });

