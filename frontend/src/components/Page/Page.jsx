
import styled from '@emotion/styled'
import React from 'react'


const PageStyled = styled.div`
    padding-top:1rem;
    padding-inline:.5rem;
    height: 100%;
`

const Page = ({ children, className }) => {
  return (
    <PageStyled className={className}>
      {children}
    </PageStyled>
  )
}

export default Page