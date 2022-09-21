import React from 'react'
import { userData } from '../../data/userData'
import {Table,Tr, Th, Td} from '../../styled/Table'
import {Container} from '../../styled/Containers'


const Users = () => {
  const users= userData;


  return (
    <>
    <Container>
      <Table>
        <tbody>
          <Tr>
            <Th>User ID</Th>
            <Th>Name</Th>
            <Th>Stard Date</Th>
            <Th>Job Desk</Th>
            <Th>Schedule</Th>
            <Th>Contact</Th>
            <Th>Status</Th>
          </Tr>
          {users.map((user) => (
              <Tr>
              <Td>{user.id}</Td>
              <Td>{user.full_name}</Td>
              <Td>{user.starte_date}</Td>
              <Td>{user.work_description}</Td>
              <Td>{user.phone}</Td>
              <Td>{user.status}</Td>
             
              </Tr>
          ))}   
        </tbody>
      </Table>
    </Container>
  </>
);
};
 

export default Users