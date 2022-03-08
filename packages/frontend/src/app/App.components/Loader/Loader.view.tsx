import * as React from 'react'

import { LoaderContainer, LoaderImg, LoaderWrapper } from './Loader.style'

interface LoaderProps {
  width?: string
}
export const Loader = ({ width = '230px' }: LoaderProps) => (
  <LoaderContainer>
    <LoaderWrapper width={width}>
      <LoaderImg src="/images/transaction-loader.png" alt="" />
    </LoaderWrapper>
  </LoaderContainer>
)

Loader.propTypes = {}

Loader.defaultProps = {}
