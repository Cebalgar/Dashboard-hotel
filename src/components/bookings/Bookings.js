import React from 'react'
import { bookingData } from '../../data/bookingData'
import {Table,Tr, Th, Td} from '../../styled/Table'
import {Container} from '../../styled/Containers'

const Bookings = () => {
  const bookings = bookingData;
  
  return (
    <>
    <Container>
      <Table>
        <tbody>
          <Tr>
            <Th>Booking ID</Th>
            <Th>Guest</Th>
            <Th>Order Date</Th>
            <Th>Check In</Th>
            <Th>Check Out</Th>
            <Th>Special Request</Th>
            <Th>Room Type</Th>
            <Th>Status</Th>
          </Tr>
          {bookings.map((booking) => (
              <Tr>
              <Td>{booking.id}</Td>
              <Td>{booking.guest_name}</Td>
              <Td>{booking.order_date}</Td>
              <Td>{booking.check_in }</Td>
              <Td>{booking.check_out}</Td>
              <Td>{booking.request}</Td>
              <Td>{booking.room_type}</Td>
              <Td>{booking.status}</Td>
              </Tr>
          ))}   
        </tbody>
      </Table>
    </Container>
  </>
);
};
 


export default Bookings