import React from "react";

function CheckBox() {
  let arr = ["laundry", "chores", "work"];
  // jsx takes styles object .. Inline
  // dont give it a string.. 
  let formStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "orange",
    color: "whitesmoke",
    marginBottom: 15,
    textAlign: "center",
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <form style={formStyle}>
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
