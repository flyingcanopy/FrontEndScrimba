import React from "react";

function CheckBox() {
    let arr = ['laundry','chores','work']
    return (
    <form className="form-box" >
      <input type="checkbox" id="vehicle1" name="vehicle1" value="laundry" />
      <label for="vehicle1"> Do the {arr[0]}</label>
      <br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="work" />
      <label for="vehicle2"> Do the {arr[1]}</label>
      <br />
      <input type="checkbox" id="vehicle3" name="vehicle3" value="chores" />
      <label for="vehicle3"> Do the {arr[2]}</label>
      <br />
    </form>
  );
}
export default CheckBox;
