import axios from "axios";
import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import Spinner from "./Spinner";
import Table from "./Table";

const Modal = ({
  closeModal,
  modalTitle,
  changeModal,
  setDetailsModal,
  setDetailsModalData,
}) => {
  const [check, setCheck] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    if (!searchInput) {
      async function getUser() {
        try {
          const response = await axios.get(
            "https://contact.mediusware.com/api/contacts/"
          );
          setContacts(response.data.results);
        } catch (error) {
          console.error(error);
        }
      }
      getUser();
    }
    if (searchInput) {
      async function getUser() {
        try {
          const response = await axios.get(
            `https://contact.mediusware.com/api/country-contacts/${searchInput}/`
          );
          setContacts(response.data.results);
        } catch (error) {
          console.error(error);
        }
      }
      getUser();
    }
  }, [searchInput]);
  useEffect(() => {
    if (modalTitle === "Modal B") {
      let filterData = contacts.filter(
        (item) => item.country.name === "United States"
      );
      if (check) {
        setFilteredData(filterData.filter((item) => item.id % 2 === 0));
      } else {
        setFilteredData(filterData);
      }
    } else if (check) {
      setFilteredData(contacts.filter((item) => item.id % 2 === 0));
    } else {
      setFilteredData(contacts);
    }
  }, [contacts, modalTitle, check]);
  return (
    <div className="modal fade show" style={modalStyle}>
      <div className="modal-dialog modal-dialog-scrollable modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalTitle}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="d-flex p-2 justify-content-center">
                <button
                  type="button"
                  style={{ backgroundColor: "#46139f", color: "#fff" }}
                  className="btn mx-2"
                  onClick={() => changeModal("Modal A")}
                >
                  All Contacts
                </button>
                <button
                  type="button"
                  style={{ backgroundColor: "#ff7f50", color: "#fff" }}
                  className="btn mx-2"
                  onClick={() => changeModal("Modal B")}
                >
                  US Contacts
                </button>
                <button
                  type="button"
                  style={{ borderColor: "#46139f" }}
                  className="btn btn-white mx-2"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-8 mt-4 mb-0">
                <SearchBox
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                />
              </div>
            </div>
            <div className="row">
              <h5 className="text-center my-4">
                Contacts{" "}
                <span className="text-danger">{filteredData.length}</span>
              </h5>
              {Object.entries(filteredData).length ? (
                <Table
                  contacts={filteredData}
                  closeModal={closeModal}
                  setDetailsModal={setDetailsModal}
                  setDetailsModalData={setDetailsModalData}
                />
              ) : (
                <Spinner />
              )}
            </div>
          </div>
          <div className="modal-footer" style={{ justifyContent: "start" }}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                onClick={() => setCheck(!check)}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Only Even
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
const modalStyle = {
  display: "block",
  backgroundColor: "rgba(0,0,0,0.4)",
};
