import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "body": {
      color: `#131516`,
    },

    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },

    "a": {
      color: pink,
    },

    "blockquote": {
      borderColor: turqouise,
    },
    
    "h2, h4, h6": {
      color: turqouise,
    },

    "h3, h5": {
      color: pink,
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
export const turqouise = `#1CBCBA`
export const pink = `#FF7C81`
