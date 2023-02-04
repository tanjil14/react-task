import { useState } from "react";
import DetailsModal from "./problem2/DetailsModal";
import Modal from "./problem2/Modal";

const Problem2 = () => {
  const [modal, setModal] = useState(false);
  const [detailsModal,setDetailsModal]=useState(false)
  const[detailsModalData,setDetailsModalData]=useState({})
  const [modalData, setModalData] = useState({});
  const closeModal = () => setModal(false);
  const changeModal = (title) => {
    setModalData(title);
    return setModal(true);
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={() => changeModal("Modal A")}
            >
              All Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={() => changeModal("Modal B")}
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>
      {modal === true && (
        <Modal closeModal={closeModal} modalTitle={modalData} changeModal={changeModal} setDetailsModal={setDetailsModal} setDetailsModalData={setDetailsModalData}/>
      )}
      {detailsModal === true && (
        <DetailsModal  detailsModalData={detailsModalData} setDetailsModal={setDetailsModal}/>
      )}
    </>
  );
};

export default Problem2;
