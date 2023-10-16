import ErrorBoundaries from "../components/Common/ErrorBoundaries";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { menu } from "../constants/index";
import { AiOutlineLayout } from "react-icons/ai";
import imaga from "../assest/img/images.jpeg";

function ProtectedLayout() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [collapse, setCollpase] = useState("");
  const handleTrigger = () => {
    setIsOpen(!isOpen);
  };
  const handleSubmenuTrigger = (id, eachdata) => {
    if (id === collapse) {
      setCollpase("");
    } else {
      setCollpase(id);
      navigate(eachdata.link);
    }
  };

  useEffect(() => {
    navigate("/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ErrorBoundaries>
      <div className="App">
        <div className="page">
          <div className={isOpen ? "content2" : "content"}>
            <Outlet />
          </div>

          <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
            <div className="trigger" onClick={handleTrigger}></div>
            {isOpen ? (
              <div className="sidebar-position2">
                <div className="colored4">
                  <div>
                    {" "}
                    <AiOutlineLayout />
                  </div>
                  <div className="another"> Dashboard </div>
                </div>
              </div>
            ) : null}

            {menu?.map((eachdata) => {
              return (
                <>
                  <div
                    className="sidebar-position"
                    onClick={() => handleSubmenuTrigger(eachdata.id, eachdata)}
                    onKeyUp={() => {}}
                    key={eachdata.id}
                  >
                    <div
                      className={
                        collapse?.includes(eachdata.id)
                          ? "colored2"
                          : "colored1"
                      }
                    >
                      {eachdata.icon}
                    </div>
                    <span
                      className={
                        collapse?.includes(eachdata.id)
                          ? "colored2"
                          : "colored1"
                      }
                    >
                      {eachdata.label}{" "}
                      {eachdata.sub ? (
                        <>
                          {collapse?.includes(eachdata.id) ? (
                            <IoIosArrowBack
                              size={18}
                              className="sidebar-position-icon colored2"
                            />
                          ) : (
                            <MdKeyboardArrowRight
                              size={18}
                              className="sidebar-position-icon colored1"
                            />
                          )}
                        </>
                      ) : null}
                    </span>
                  </div>
                  {/* {isOpen && collapse?.includes(eachdata.id) ? (
                    <>
                      {eachdata?.sub?.map((eachitem) => {
                        return (
                          <>
                            <div
                              className="sidebar-positions"
                              onClick={() =>
                                secondchangecolor(eachitem.id, eachitem)
                              }
                            >
                              <div
                                className={
                                  subcollapse?.includes(eachitem.id)
                                    ? "colored2 block"
                                    : "colored1 block"
                                }
                              >
                                {eachitem.label}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </>
                  ) : null} */}
                </>
              );
            })}

            {isOpen ? (
              <div className="sidebar-position3">
                <img src={imaga} alt="user" className="sidebarimg" />
                <div className="colored4">
                  <div className="another2">
                    <div className="another3"> Evano</div>
                    <div className="another3">Project Manager</div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </ErrorBoundaries>
  );
}

export default ProtectedLayout;
