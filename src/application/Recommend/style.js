import styled from 'styled-components';
import style from '../../assets/global-style';

export const Content = styled.div`
  position: fixed;
  top: 90px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  .before {
    position: absolute;
    top: -400px;
    height: 400px;
    width: 100%;
    background: ${style["theme-color"]};
    z-index: -1;
  }
  .after {
    position: absolute;
    bottom: 0;
    height: 400px;
    width: 100%;
    background: white;
    z-index: -1;
  }
`
