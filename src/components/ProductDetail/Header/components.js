import styled from 'styled-components'

const colorForTag = (tag, theme) => {
  switch (tag) {
        case 'Pumadur': return theme.main.colors.border.blue
        case 'Pumathane': return theme.main.colors.border.green
        case 'Pumaflow': return theme.main.colors.border.red
        default: return theme.main.colors.border.gray
      }
}

const Title = styled.h1`
  // Overwrite the one set in sanitize.css
  margin: 16px 0px 0px 0px;
  font-size: ${props => props.theme.main.typography.headers.h0};
  border-left: 8px solid ${props => colorForTag(props.tag, props.theme)};
  padding-left: ${props => props.theme.main.sizes.spacing['space-2']};
  font-weight: ${props => props.theme.main.typography.fontWeights.black};
  color: ${props => props.theme.main.colors.text.gray};
  
  // If no tags set this to the top
  div > &:first-child {
    margin: ${props => props.theme.main.sizes.spacing['space-0']};
  }
`

const Description = styled.div`
  margin-top: ${props => props.theme.main.sizes.spacing['space-2']};
  // font-size: 12px;
  color: ${props => props.theme.main.colors.text.gray};
`

export { Title, Description }
