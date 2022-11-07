import React from "react";
import { userData } from "../../data/userData";
import { Table, Tr, Th, Td } from "../../styled/Table";
import { Container, ContainerMenu } from "../../styled/Containers";
import { ButtonStatusUser, ButtonMenu } from "../../styled/Buttons";

const Users = (props) => {
  const users = userData;

  return (
    <>
      <ContainerMenu>
        <li>
          <ButtonMenu>All Employee</ButtonMenu>
        </li>
        <li>
          <ButtonMenu>Active Employee</ButtonMenu>
        </li>
        <li>
          <ButtonMenu>Inactive Employee</ButtonMenu>
        </li>
      </ContainerMenu>

      <Container>
        <Table>
          <tbody>
            <Tr>
              <Th>User ID</Th>
              <Th>Photo</Th>
              <Th>Name</Th>
              <Th>Stard Date</Th>
              <Th>Job Desk</Th>
              <Th>Contact</Th>
              <Th>Status</Th>
            </Tr>
            {users.map((user) => (
              <Tr>
                <Td>{user.id}</Td>
                <Td> <img src={user.photo} alt="" /> </Td>
                <Td>{user.full_name}</Td>
                <Td>{user.starte_date}</Td>
                <Td>{user.work_description}</Td>
                <Td>{user.phone}</Td>
                <Td>
                  <ButtonStatusUser status={user.status}>
                    {user.status}
                  </ButtonStatusUser>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Users;
