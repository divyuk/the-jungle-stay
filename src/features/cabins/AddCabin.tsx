import Button from "../../ui/Button";
import CreateCabinForm from "../../features/cabins/CreateCabinForm";
import Modal from "../../ui/Modal";

// function AddCabin() {
//   const [isOpenModal, setisOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setisOpenModal((show) => !show)}>
//         Add New Cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setisOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setisOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>

        {/* <Modal.Open opens="table">
        <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window> */}
      </Modal>
    </div>
  );
}

export default AddCabin;
