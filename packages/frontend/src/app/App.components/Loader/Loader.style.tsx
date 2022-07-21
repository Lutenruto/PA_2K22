import styled from 'styled-components/macro'

export const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

export const LoaderWrapper = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
`

export const LoaderImg = styled.img`
  animation: spin 2s linear infinite;
  width: 100%;
`
