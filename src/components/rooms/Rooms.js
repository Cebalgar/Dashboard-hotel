
import React from 'react';
import { roomsData } from '../../data/roomsData'
import {Table,Tr, Th, Td} from '../../styled/Table'
import {Container} from '../../styled/Containers'

const Rooms = () => {
 const rooms = roomsData;



  return (
    <>
      <Container>
        <Table>
          <tbody>
            <Tr>
              <Th>Room ID</Th>
              <Th>Room Number</Th>
              <Th>Room Name</Th>
              <Th>Bed Type</Th>
              <Th>Facilities</Th>
              <Th>Rate</Th>
              <Th>Offer</Th>
              <Th>Status</Th>
            </Tr>
            {rooms.map((room) => (
                <Tr>
                <Td>{room.id}</Td>
                <Td>{room.room_number}</Td>
                <Td>{room.room_name}</Td>
                <Td>{room.room_type }</Td>
                <Td>{room.facilities}</Td>
                <Td>{room.price}</Td>
                <Td>{(room.price - (room.price * room.discount)/100).toFixed(2)}</Td>
                <Td>{room.status}</Td>
                </Tr>
            ))}   
          </tbody>
        </Table>
      </Container>
    </>
  );
};
   



export default Rooms