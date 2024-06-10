import { useNavigate } from "react-router-dom";

import { checkOtp } from "src/Services/Auth";
import { getProfile } from "src/Services/user";
import { setCookies } from "src/utils/Cookies";

import styles from "./checkOtpForm.module.css";
import { useQuery } from "@tanstack/react-query";

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const navigate = useNavigate();

  const { refetch } = useQuery(["profile"], getProfile);

  const submitHandler = async () => {
    event.preventDefault();
    if (code.length !== 5) return;

    const { response, error } = await checkOtp(
      mobile,
      code
    );

    if (response) {
      setCookies(response.data);
      navigate("/");
      refetch();
    }

    if (error) console.log(error.message);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h3>ورود به حساب کاربری</h3>
      <span className={styles.text}>
        کد ارسال شده به شماره «{mobile}» را وارد کنید.
      </span>{" "}
      <br />
      <label htmlFor="input">کد تایید را وارد کنید :</label>
      <input
        type="text"
        id="input"
        placeholder="کد را وارد کنید..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <div>
        <button type="submit">ورود</button>
        <button
          onClick={() => setStep(1)}
          className={styles.backButton}
        >
          تغییر شماره موبایل
        </button>
      </div>
    </form>
  );
}

export default CheckOtpForm;
