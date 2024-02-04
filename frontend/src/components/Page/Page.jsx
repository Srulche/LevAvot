
import styled from '@emotion/styled'
import React from 'react'


const PageStyled = styled.div`
    padding-top:1rem;
    padding-inline:.5rem;
`

const Page = ({children}) => {
  return (
    <PageStyled>
        {children}
    </PageStyled>
  )
}

export default Page