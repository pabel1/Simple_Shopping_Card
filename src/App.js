
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './Components/Layout/Layout';
import {DataContextProvider} from './Components/Context/Context';



function App() {

  return (
    <DataContextProvider>
      <Layout></Layout>
    </DataContextProvider>
  );
}

export default App;
