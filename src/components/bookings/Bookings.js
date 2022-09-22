import React from 'react'
import { bookingData } from '../../data/bookingData'
import {Table,Tr, Th, Td} from '../../styled/Table'
import {Container} from '../../styled/Containers'
import { ButtonStatusBooking, ButtonViewNotes } from '../../styled/Buttons'
import { ContainerMenu } from '../../styled/Containers'
import { ButtonMenu } from '../../styled/Buttons'

const Bookings = (props) => {
  const bookings = bookingData;
  
  return (
    <>
     <ContainerMenu>
      <li><ButtonMenu>All Bookings</ButtonMenu></li>
      <li><ButtonMenu>Checking In</ButtonMenu></li>
      <li><ButtonMenu>Cheking Out</ButtonMenu></li>
      <li><ButtonMenu>In Progress</ButtonMenu></li>
     
    </ContainerMenu>
   
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
              <Td>
              <ButtonViewNotes>View Notes</ButtonViewNotes>
              </Td>
              <Td>{booking.room_type}</Td>
              <Td>
              <ButtonStatusBooking status={booking.status}>{booking.status}</ButtonStatusBooking></Td>
              </Tr>
          ))}   
        </tbody>
      </Table>
    </Container>
  </>
);
};
 


export default Bookings