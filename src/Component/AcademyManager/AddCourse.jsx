import React from 'react'

const AddCourse = () => {
  return (
    <div>
      <h2>Add Course</h2>
      <div>
        <label htmlFor="branchaddress">COURSE NAME: </label>
        <input
          type="text"
          placeholder="Enter Address"
          name="branchaddress"
          id="branchaddress"
        />
        <br />
        <br />
        <label htmlFor="branchid">DURATION : </label>
        <input
          type="text"
          placeholder="Enter Desc"
          name="branchid"
          id="branchid"
        />
        <br />
        <br />
        <label htmlFor="branchcity">FEES : </label>
        <input
          type="text"
          placeholder="Enter email id"
          name="branchcity"
          id="branchcity"
        />
        <br />
        <br />
        <button type="submit">
          Register
        </button>
      </div>
    </div>
  );
}

export default AddCourse