import React from 'react';
import './PersonalDetails.css';

const PersonalDetails = ({ data }) => {
  return (
    <div className="personal-details-container">
      <div className="personal-details">
        <h3>Personal Details</h3>
        <table>
          <tbody>
            <tr>
              <td>Register Number</td>
              <td>{data[ data.findIndex( data => data.id === 'student_id'  ) ]?.val || 'N/A'}</td>
            </tr>
            {/* <tr>
              <td>Aadhar Number</td>
              <td>{data[ data.findIndex( data => data.id === 'student_id'  ) ]?.val || 'N/A'}</td>
            </tr> */}
            <tr>
              <td>Name of the Student</td>
              <td>{data[ data.findIndex( data => data.id === 'first_name'  ) ]?.val || 'N/A'} {" "}{data[ data.findIndex( data => data.id === 'last_name'  ) ]?.val || 'N/A'}</td>
            </tr>
            <tr>
              <td>Degree / Programme</td>
              <td>{"BTECH"}</td>
            </tr>
            <tr>
              <td>Batch</td>
              <td>{data[ data.findIndex( data => data.id === 'year_in_engineering'  ) ]?.val || 'N/A'}</td>
            </tr>
            {/* <tr>
              <td>Section</td>
              <td>{data[ data.findIndex( data => data.id === 'student_id'  ) ]?.val || 'N/A'}</td>
            </tr> */}
            <tr>
              <td>DATE OF BIRTH</td>
              <td>{data[ data.findIndex( data => data.id === 'date_of_birth'  ) ]?.val || 'N/A'}</td>
            </tr>
            <tr>
              <td>Faculty Advisor</td>
              <td>{data[ data.findIndex( data => data.id === 'teacher'  ) ]?.val || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersonalDetails;
