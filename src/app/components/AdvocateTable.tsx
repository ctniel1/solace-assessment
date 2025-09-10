import React from 'react';
import { Advocate } from '../models/advocate';
import styles from './AdvocateTable.module.css';

type AdvocateTableProps = {
  filteredAdvocates: Advocate[];
}

const AdvocateTable: React.FC<AdvocateTableProps> = ({filteredAdvocates}) => {
  return (
    <table className={styles.advocateTable}>
        <thead className={styles.tableHeader}>
          <tr className={styles.headerRow}>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {filteredAdvocates.map((advocate) => {
            return (
              <tr className={styles.tableRow} key={advocate.phoneNumber}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((s) => (
                    <div key={s}>{s}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
};

export default AdvocateTable;