import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const ScanListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;

  > div {
    padding: 8px;
  }

  > a {
    cursor: pointer;
    text-decoration: none;
    > button {
      width: 50px;
    }
  }
`

export const AddScanLink = styled(Link)`
  color: cornflowerblue;
  text-decoration: none;
  margin: 8px 8px 24px;
  display: block;
`

export const Header = styled.div`
  padding: 16px;
  font-weight: bold;
  cursor: pointer;
`
