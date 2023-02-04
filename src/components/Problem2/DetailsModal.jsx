const DetailsModal = ({ detailsModalData, setDetailsModal }) => {
  return (
    <div class="modal fade show" style={modalStyle}>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Details Modal</h5>
            <button
              type="button"
              class="btn-close"
              onClick={() => setDetailsModal(false)}
            ></button>
          </div>
          <div class="modal-body">
            <p>
              <strong>Id:</strong> {detailsModalData.id}
            </p>
            <p>
              <strong>Phone:</strong> {detailsModalData.phone}
            </p>
            <p>
              <strong>Country:</strong> {detailsModalData.country.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
const modalStyle = {
  display: "block",
  backgroundColor: "rgba(0,0,0,0.4)",
};
