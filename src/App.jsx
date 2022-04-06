import Table from "./components/Table";
import RowList from "./components/RowList";
import CreateForm from "./components/CreateForm";
import Modal from "./components/Modal";
//
import Data from './data/data.json';
import { useState } from "react";
//
function App() {
  //
    // console.log(Data);
  //
  const [heroData, setHeroData] = useState(Data);
  console.log(heroData);

  // const heroLift = (hero)=>{
  //   setHeroData((prevData) =>[
  //     ...prevData,
  //     hero
  //   ])
  // }

  const heroLift = (hero)=>{
    const copyData = {...heroData}
      copyData.members.push(hero)
    setHeroData(copyData)
      
    //   (prevData) =>{[
    //   ...prevData.members,
    //   members.hero
    // ]})
  }

  console.log('Hero Data:', heroData);
  return (
    <div className="jumbotron text-center">
      <Table data={heroData}>
        <RowList data={heroData}/>
      </Table>
      <CreateForm
       liftHero = {heroLift}
       />
      <Modal />
    </div>
  );
}

export default App;
