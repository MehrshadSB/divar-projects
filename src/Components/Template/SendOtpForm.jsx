import React from "react";
import { sendOtp } from "src/Services/Auth";

import styles from "./sendOtpForm.module.css";

function SendOtpForm({ setStep, mobile, setMobile }) {
  const submitHandler = async (event) => {
    event.preventDefault();

    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);

    if (response) setStep(2);
    if (error) console.log(error.response.data.mesasge);
    console.log({ response, error });
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار، لطفا شماره تماس خود
        را وارد کنید . کد برای شما ارسال می شود.
      </span>
      <label htmlFor="input">
        شماره تماس خود را وارد کنید
      </label>
      <input
        type="text"
        id="input"
        placeholder="شماره خود را وارد کنید"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;
