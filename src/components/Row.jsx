const Row = ({data}) => {
  // console.log(props.data);
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.age}</td>
      <td>{data.secretIdentity}</td>
      <td>{data.power}</td>
      <td>
        <button className="btn btn-light">Edit</button>
      </td>
      <td>
        <button className="btn btn-light">Delete</button>
      </td>
    </tr>
    );
};

export default Row;
