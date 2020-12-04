import sizes from './sizes';
import colors from './colors';
import fontWeights from './fontWeights';

const theme = {
  main: {
    colors,
    fontWeights,
    sizes,
  },
};

/**
 * This is probably easier, maybe colour
 * could output this
 * */
const pumadur = () => ({
  main: {
    ...theme.main,
    colors: {
      ...theme.main.colors,
      product: {
        default: '#0099CC'
      }
    }
  }
})

const pumathane = () => ({
  main: {
    ...theme.main,
    colors: {
      ...theme.main.colors,
      product: {
        default: '#66CC33'
      }
    }
  }
})

const pumaflow = () => ({
  main: {
    ...theme.main,
    colors: {
      ...theme.main.colors,
      product: {
        default: '#FF3333'
      }
    }
  }
})

export default theme;
export { pumadur, pumaflow, pumathane }
