import Button from "../../ui/Button";
import CreateCabinForm from "../../features/cabins/CreateCabinForm";
import { useState } from "react";
import Modal from "../../ui/Modal";
function AddCabin() {
  const [isOpenModal, setisOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setisOpenModal((show) => !show)}>
        Add New Cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setisOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setisOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
