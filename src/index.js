import React from 'react';
import { render } from 'react-dom';

import Wrapper from './Wrapper';
import Title from './Title';

// Render these styled components like normal react components.
// They will pass on all props and work
// like normal react components – except they're styled!
const App = () =>
  <Wrapper>
    <Title>Hello World, this is my first styled component!</Title>
  </Wrapper>;

render(<App />, document.getElementById('root'));
