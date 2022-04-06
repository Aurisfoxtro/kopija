import Row from "./Row";

const RowList = ({data}) => {
  return (
    <>
      {(data.members) && data.members.map ((member, i) => <Row key={i} data ={member} />)}
    </>
  );
};

export default RowList;
