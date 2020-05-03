import  React, { Fragment } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import 'app.scss';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App = () =>{
  return(
    <Fragment>
      <Button color="primary">Test the Bulma</Button>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;