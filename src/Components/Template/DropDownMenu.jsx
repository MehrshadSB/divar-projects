import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
} from "react-icons/ai";

import { useState } from "react";

import { Link } from "react-router-dom";
import { deleteAllCookies } from "src/utils/Cookies";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "src/Services/user";
import toast from "react-hot-toast";

import styles from "./dropDownMenu.module.css";

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const { refetch, data, error } = useQuery(
    ["profile"],
    getProfile
  );
  
  // console.log({ data, error });
  const signoutHandler = () => {
    deleteAllCookies();
    refetch();

    setIsOpen((prev) => !prev);
    if (data) {
      toast.success("شما با موفقیت خارج شدید .");
    } else {
      toast.error("اول وارد شوید");
    }
  };

  const isOpenHandler = () => {
    if (!data) {
      setIsOpen(false);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className="bg-white-400 relative flex space-x-2 w-[120px] h-[40px] items-center shadow-md rounded-lg">
      {!isOpen ? (
        <div>
          <AiOutlineCaretDown className="mr-3" />
        </div>
      ) : (
        <div>
          <AiOutlineCaretUp className="mr-3" />
        </div>
      )}
      <button
        onClick={isOpenHandler}
        className=" w-full h-full items-center font-bold text-base  tracking-wider text-black"
      >
        {data ? (
          "دیوار من"
        ) : (
          <Link to="/auth">وارد شوید</Link>
        )}
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <div className="shadow-md">
            <Link to="/dashboard">
              <h3
                className="block"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                آگهی های من
              </h3>
            </Link>
          </div>
          <div className="shadow-md">
            <Link to="/dashboard">
              <h3
                className="block"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                ثبت آگهی جدید
              </h3>
            </Link>
          </div>
          {data ? (
            <div className="shadow-md">
              <h3
                className="block"
                onClick={signoutHandler}
              >
                خروج
              </h3>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
