import React from 'react';
import Router from './Router'
import styled from 'styled-components'
import SiteHeader from './Components/SiteHeader'

const AppContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`
const Content = styled.div`
  z-index: -1;
  padding-top: 70px;
  overflow: hidden;
`
function App() {
  return (
    <AppContainer>
      <SiteHeader/>
      <Content>
        <Router />
      </Content>
    </AppContainer>
  );
}

export default App;
