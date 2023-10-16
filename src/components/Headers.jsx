import React, { useState } from "react";
import {FiSettings} from 'react-icons/fi';
import {BsEnvelope} from "react-icons/bs";
import {
  Navbar,
  NavbarBrand,
  Nav,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
// // import {isLogedout} from '../components/Headers';
import {AiOutlineLock} from "react-icons/ai"
import { RiNotificationLine,RiUserSharedLine,RiLogoutBoxLine } from "react-icons/ri";
import Modal from "./Common/Modal";

export default function Header2() {
  const navigate=useNavigate();
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const confirmationtoogle=()=>setConfirmationDropdownopen(!confirmationDropdownopen)
  const resettoogle=()=>{
    navigate('/password-reset');
  }
  const passwordtoogle=()=>{
    navigate('/profile-form');
  }
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [confirmationDropdownopen, setConfirmationDropdownopen] = useState(false);
  return (
    <Navbar className="overflow-hidden bg-white py-4 px-6 border border-[gainsboro] w-auto">
      <NavbarBrand className="flex items-start justify-start float-left">
        <input type="search" placeholder="Search..." className="bg-[#F2F4F4] h-10 pl-4"/><button className="bg-indigo-600 w-16 h-10 rounded-r-[5px] flex items-center justify-center text-white"><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg></button></NavbarBrand>
      <Nav className="ml-auto flex items-end justify-end float-right max-[500px]:block max-[500px]:float-left ">
        <FiSettings size={25} className="mr-6 mb-2 text-[#4d606e]"/> <a className="flex relative" href="#contact"><BsEnvelope size={25} className="mr-6 mb-2 text-[#4d606e]"/><span class="bg-pink-600 text-white  rounded-[50%] absolute text-[12px] px-[4px] mt-[-10px] ml-4">1</span> </a><a className="flex relative" href="#contact"> <RiNotificationLine size={25} className="mr-6 mb-2 text-[#4d606e]"/> <span class="bg-pink-600 text-white  rounded-[50%] absolute text-[12px] px-[4px] mt-[-10px] ml-3">3</span></a>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="bg-transparent flex items-center justify-center">
          <a className="flex relative" href="#contact">
            <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp' alt='Generic placeholder image' className="rounded-full w-12 h-12" />
            <span class="text-green-600 absolute ml-8 mt-6 text-2xl">●</span>
          </a>
          <a className="text-1 text-slate-700 ml-2" href="#contact">{JSON.parse(sessionStorage.getItem("loginInfo"))?.id}</a>
        </DropdownToggle>
        { dropdownOpen ? (<DropdownMenu>
          <DropdownItem
            className="flex items-center justify-center "
           
          >
            <div className="bg-white w-full border border-[gray] h-auto max-[500px]:h-[30vh] max-[500px]:ml-2vh">
              <div className="flex items-center justify-center w-full h-[15vh] max-[500px]:block max-[500px]:h-[25vh]  max-[500px]:ml-[1vh] max-[500px]:mb-[-5px]">
                <div className="h-[80px] w-[80px] rounded max-[500px]:ml-12">
                <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp' alt='Generic placeholder image' className="w-auto h-auto px-1 py-1 rounded-[50%]" />
                </div>
                <div  className="block w-[100px] h-auto">
              <a  href="#contact" className="text-2 font-bold">{JSON.parse(sessionStorage.getItem("loginInfo"))?.id}</a><br></br>
              <a href="#contact" className="mr-1 text-1 text-[#6D6A6D]">
                {/* {JSON.parse(sessionStorage.getItem("loginInfo"))?.email} */} 
                Frontend Developer
                </a>
                </div>
              </div>
              <hr className="text-[#6D6A6D]"/>
              <div className="w-full block ">
                <div className="w-full flex  text-[#6D6A6D]" onClick={passwordtoogle} > <span className=" mx-6 my-2"><RiUserSharedLine size={18}/></span><span className=" mx-6 my-2">Profile </span></div>
                <div  className="w-full flex text-[#6D6A6D]" onClick={resettoogle}>  <span className=" mx-6 my-2"><AiOutlineLock size={18}/></span><span className=" mx-6 my-2">Reset Password </span></div>
                <div  className="w-full flex text-[#6D6A6D]" onClick={() => {confirmationtoogle()}}>  <span className=" mx-6 my-2"><RiLogoutBoxLine size={18}/></span> <span className=" mx-6 my-2">Logut</span></div>

              </div>
            </div>
            {/* <div className="vertical-alignment">
              <span className="ml-4"> logout </span>
            </div>
          </DropdownItem>
          <DropdownItem
            className="profile-dropdown-item space-between "
            onClick={resettoogle}
          >
            <div className="vertical-alignment">
              <span className="ml-4" > Reset Password </span>
            </div> */}
          </DropdownItem>
        </DropdownMenu>) : "" }
      </Dropdown>
      {confirmationDropdownopen && (
            <Modal isOpen={confirmationDropdownopen}
            toggle={confirmationtoogle} />
          )}
          
      </Nav>
    </Navbar>
  );
}
