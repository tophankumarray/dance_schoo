import React from 'react'

const EditBranch = () => {
  return (
    <div>
      <h2>UPDATE BRANCH</h2>
      <div>
        <label htmlFor="branchaddress">BRANCH ADDRESS: </label>
        <input
          type="text"
          placeholder="Enter Address"
          name="branchaddress"
          id="branchaddress"
        />
        <br />
        <br />
        <label htmlFor="branchid">BRANCH ID: </label>
        <input
          type="text"
          placeholder="Enter Desc"
          name="branchid"
          id="branchid"
        />
        <br />
        <br />
        <label htmlFor="branchcity">BRANCH CITY: </label>
        <input
          type="text"
          placeholder="Enter email id"
          name="branchcity"
          id="branchcity"
        />
        <br />
        <br />
        <label htmlFor="branchnumber">BRANCH PHONE NO: </label>
        <input
          type="text"
          placeholder="Enter Number"
          name="branchnumber"
          id="branchnumber"
        />
        <br />
        <br />
        <label htmlFor="branchpincode">BRANCH PINCODE</label>
        <input
          type="text"
          placeholder="Enter Number"
          name="branchpincode"
          id="branchpincode"
        />
        <button type="submit" onClick={handleSubmit}>
          Update
        </button>
      </div>
    </div>
  );
}

export default EditBranch