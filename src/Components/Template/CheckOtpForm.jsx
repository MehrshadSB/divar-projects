import React from "react";
import { checkOtp } from "src/Services/Auth";
import { setCookies } from "src/utils/Cookies";

function CheckOtpForm({ code, setCode, setStep, mobile }) {
  const submitHandler = async () => {
    event.preventDefault();
    if (code.length !== 5) return;

    const { response, error } = await checkOtp(
      mobile,
      code
    );

    if (response) setCookies(response.data);

    if (error) console.log(error.message);
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>ورود به حساب کاربری</h3>
      <span>
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
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;
