import React from "react";

function CheckBox() {
  return (
    <form>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="laundry" />
      <label for="vehicle1"> Do the laundry</label>
      <br />
      <input type="checkbox" id="vehicle2" name="vehicle2" value="chores" />
      <label for="vehicle2"> Do the chores</label>
      <br />
      <input type="checkbox" id="vehicle3" name="vehicle3" value="work" />
      <label for="vehicle3"> Do the work</label>
      <br />
    </form>
  );
}
export default CheckBox;
