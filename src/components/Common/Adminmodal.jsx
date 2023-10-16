import React, { memo,useState } from "react";
import { Modal, ModalBody, ModalFooter ,ModalHeader} from "reactstrap";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { adminUser ,getadminUser} from "../../store/actions";

export default function AdminconfirmationModal (props) {
  const { isOpen, toggle } = props;
  const dispatch=useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const onSubmit = () => {
    dispatch(adminUser({firstName,lastName,checkbox}))
    dispatch(getadminUser());
      toggle()
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        centered
        size="lg"
        contentClassName="bg-white rounded-[20px] text-black mx-[25%] mt-[-40%] border border-[gray]"
      >
        <ModalHeader
          toggle={toggle}
          className="flex justify-between px-[20px] py-[20px] text-[3vh] font-bold"
          close={
            <button onClick={() => toggle()}>
              ×
            </button>
          }
        >
          <h1>Add Admin Data</h1>
        </ModalHeader>
        <Form>
          <ModalBody className="w-full h-auto bg-white px-[20px] py-[20px]">
          <Form.Field className="flex w-full my-[15px] h-[6vh]">
          <label className="items-center w-[20%] text-[gray]">First Name</label>
          <input
            placeholder="First Name"
            className="flex items-center justify-center border border-[gainsboro] rounded-[10px] h-[4vh] w-[70%] pl-[15px]"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field className="flex w-full my-[15px] h-[6vh]">
        <label className="items-center w-[20%] text-[gray]">Last Name</label>
          <input
            placeholder="Last Name"
            className="flex items-center justify-center border border-[gainsboro] rounded-[10px] h-[4vh] w-[70%] pl-[15px]"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            className="flex items-center justify-center"
            onChange={() => setCheckbox(!checkbox)}
          />
        </Form.Field>
          </ModalBody>

          <ModalFooter className="bg-[gainsboro] h-[8vh] flex items-center justify-end rounded-b-[20px] ">



          <Button onClick={() => toggle()} type="submit" className="m-[20px] text-[2vh] px-[20px] py-[5px] rounded-[10px]">
          Cancel
        </Button>
          <Button onClick={onSubmit} type="submit" className="m-[20px] text-[2vh] px-[20px] py-[5px] rounded-[10px] text-[white] bg-[blueviolet]">
          Submit
        </Button>
          </ModalFooter>
          </Form>
      </Modal>
    </>
  );
};



