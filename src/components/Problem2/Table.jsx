const Table = ({
  contacts,
  closeModal,
  setDetailsModal,
  setDetailsModalData,
}) => {
  const handleClick = (data) => {
    closeModal(true);
    setDetailsModal(true);
    setDetailsModalData(data);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Phone</th>
          <th scope="col">Country</th>
          <th scope="col">View</th>
        </tr>
      </thead>
      <tbody>
        {contacts &&
          contacts.map((contact, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{contact.phone}</td>
              <td>{contact.country.name}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleClick(contact)}
                >
                  More..
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
