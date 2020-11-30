import styled from 'styled-components'

const Title = styled.h1`
  // Overwrite the one set in sanitize.css
  margin: 16px 0px 0px 0px;
  font-size: 36px;
  font-weight: ${props => props.theme.main.fontWeights.black}
`

const Description = styled.div`
  margin-top: 8px;
  font-size: 12px;
`

const Section = styled.div`
  display: block;
`

const SectionHeader = styled.h2`
  margin: 16px 0px 0px 0px;
  font-size: 24px;
  font-weight: ${props => props.theme.main.fontWeights.black}
`

const SectionBody = styled.div`
  padding: 8px;
  display: flex;
`

export { Title, Description, Section, SectionHeader, SectionBody }
