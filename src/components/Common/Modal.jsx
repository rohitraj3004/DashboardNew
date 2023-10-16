import React, { memo } from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { useNavigate } from "react-router";

export default function ConfirmationModal (props) {
  const { isOpen, toggle } = props;
  const navigate=useNavigate();
  const onSubmit = () => {
    sessionStorage.clear();
      navigate("/");
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        centered
        size="lg"
        contentClassName="bg-white rounded-[10px] text-black border-2 border-[gray] mt-[-60vh] mr-[35%] ml-[25%]"
      >
          <ModalBody className="flex items-center justify-center text-black border border-[gray]">
            <div className="flex items-center justify-center my-[60px] mx-[20px] text-black text-[22px] font-bold">
              Are you sure to logout.
            </div>
          </ModalBody>

          <ModalFooter className="bg-[gainsboro] h-[8vh] flex items-center justify-center rounded-b-[10px] max-[320px]:block max-[320px]:h-auto">
            <button type="submit" className="text-white bg-[cornflowerblue] py-[6px] px-[15px] text-[15px] font-bold max-[320px]:mx-4 max-[320px]:my-2" onClick={onSubmit}>
              ok
            </button>
            <button
              className="text-white bg-[#6f6f6f] px-[15px] pt-[3px] pb-[5px] text-[15px] ml-[15px] font-bold border-2 border-[#6f6f6f] max-[320px]:mx-4 max-[320px]:my-2"
              type="button"
              onClick={() => toggle()}
            >
              cancel
            </button>
          </ModalFooter>
      </Modal>
    </>
  );
};



