import React, { useState } from 'react';
import style from "../css/PersonPageStyle.module.css";


export default props => {
  const {onSubmitProp, handleChange} = props;

  return (
    <div>
      <div className={style.form_signin}>
        <form onSubmit={onSubmitProp}>
          <div class="mb-3">
            <label for="exampleInputFirstName" class="form-label">First Name</label>
            <input type="text" className={style.form_control} id="exampleInputFirstName" name="firstName" onChange={handleChange}/>
          </div>
          <div class="mb-3">
            <label for="exampleInputLastName" class="form-label">Last Name</label>
            <input type="text" className={style.form_control} id="exampleInputLastName" name="lastName" onChange={handleChange}/>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail" class="form-label">Email</label>
            <input type="text" className={style.form_control} id="exampleInputEmail" name="email" onChange={handleChange}/>
          </div>
          <div class="mb-3">
            <label for="exampleInputPhoneNumber" class="form-label">Phone Number</label>
            <input type="int" className={style.form_control} id="exampleInputPhoneNumber" name="phoneNumber" onChange={handleChange}/>
          </div>
          <button type="submit" class="btn btn-primary">Create a Customer</button>
        </form>
      </div>
    </div>
)
}
