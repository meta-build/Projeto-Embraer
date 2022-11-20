import ReactModal from 'react-modal';
import { Caminhos } from './app/routes';
import { Header } from './app/shared/components';

ReactModal.setAppElement('#root');

function App() {
  return (
    <>
    <Header />
    <Caminhos />
    </>
  );
}

export default App;
