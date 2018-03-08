// @flow
import gray from 'gray-percentage'
import type { OptionsType } from 'Types'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const theme: OptionsType = {
  title: 'Wordpress Theme 2016',
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  scaleRatio: 4 / 2,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['500', '700'],
    },
    {
      name: 'Varela Round',
      styles: ['400', '400i', '700', '700i', '900', '900i'],
    },
  ],
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Varela Round', 'sans-serif'],
  bodyColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 500,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    blockquote: {
      //...scale(1 / 5),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,//rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    ul: {
      listStyle: 'disc',
    },
    [MOBILE_MEDIA_QUERY]: {
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
      lineHeight: 1.4,
    },
    h4: {
      letterSpacing: '0.140625em',
      textTransform: 'uppercase',
    },
    h6: {
      fontStyle: 'italic',
    },
    a: {
      boxShadow: '0 1px 0 0 currentColor',
      color: '#007acc',
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      boxShadow: 'none',
    },
    'mark,ins': {
      background: '#007acc',
      color: 'white',
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: 'none',
    },
  }),
}

export default theme