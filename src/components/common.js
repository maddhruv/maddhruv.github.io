import styled, { css } from "styled-components"
import Image from "gatsby-image"

export const Avatar = styled(Image)`
  border-radius: 50%;
  margin-right: 8px;
`

export const Header = styled.h1`
  margin-bottom: 16px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 16px;
`
export const Container = styled.div`
  width: 100%;
  padding: 4vh 20vw 3vh 20vw;
  @media (max-width: 768px) {
    padding: 5vh 5vw 5vh 5vw;
  }
`
