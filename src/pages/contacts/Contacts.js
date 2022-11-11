import React from "react";
import { contactData } from "../../data/contactData";
import { Table, Tr, Th, Td } from "../../styled/Table";
import { Container } from "../../styled/Containers";
import { Button } from "../../styled/Buttons";

const Contacts = (props) => {
  const contacts = contactData;

  return (
    <>
      <Container>
        <Table>
          <tbody>
            <Tr>
              <Th>Order ID</Th>
              <Th>Date</Th>
              <Th>Customer</Th>
              <Th>Comment</Th>
              <Th>Archive</Th>
            </Tr>
            {contacts.map((contact) => (
              <Tr key = {contact.id}>
                <Td>{contact.id}</Td>
                <Td>{contact.date}</Td>
                <Td>{contact.customer_name}</Td>
                <Td>{contact.comment}</Td>
                <Td>
                  <Button>Archive</Button>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Contacts;
