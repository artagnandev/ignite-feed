import './styles/index.scss';

import { Header, Aside } from './layouts';

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="wrapper">
        <Aside />

        <main className="content">

        </main>
      </div>
    </div>
  );
}

export default App;
