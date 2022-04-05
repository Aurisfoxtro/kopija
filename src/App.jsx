import Table from "./components/Table";
import RowList from "./components/RowList";
import CreateForm from "./components/CreateForm";
import Modal from "./components/Modal";
//
import Data from './data/data.json';
//
function App() {
  //
    // console.log(Data);
  //
  return (
    <div className="jumbotron text-center">
      <Table data={Data}>
        <RowList />
      </Table>
      <CreateForm />
      <Modal />
    </div>
  );
}

export default App;
