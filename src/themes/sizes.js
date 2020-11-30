const columns = {
  'col-12': '100%'
}
for (let i = 0; i < 11; i++) {
  columns[`col-${i}`] = `${(i / 12 * 100)}%`;
}


const sizes = {
  borderRadius: '2px',
  header: {
    height: '6rem',
  },
  leftMenu: {
    height: '6rem',
    width: '24rem',
  },
  margins: {
    // TODO:
    sm: '10px',
  },
  paddings: {
    // TODO
    xs: '5px',
    sm: '10px',
    smd: '20px',
    md: '30px',
    lg: '40px',
  },
  fonts: {
    xs: '11px',
    sm: '12px',
    md: '13px',
    lg: '18px',
    xl: '24px',
  },
  width: {
    xs: '0',
    sm: '544px',
    md: '768px',
    lg: '1012px',
    xl: '1280px'
  },
  columns
};

export default sizes;
