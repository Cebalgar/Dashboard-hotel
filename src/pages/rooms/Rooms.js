import update from 'immutability-helper';
import { useState,useCallback } from "react";
import { roomsData } from "../../data/roomsData";
import { Table, Tr, Th } from "../../styled/Table";
import { Container } from "../../styled/Containers";
import {  ButtonMenu } from "../../styled/Buttons";
import { ContainerMenu } from "../../styled/Containers";
import { ListRoomItem } from "../../components/ListRoomItem"

const Rooms = () => {

  const [rooms, setRooms] = useState(roomsData);
  const moveRoomListItem = useCallback((dragIndex, hoverIndex) => {
    setRooms((prevRooms) => update(prevRooms, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, prevRooms[dragIndex]],
      ],
    }));
  }, []);

  return (
    <>
      <ContainerMenu>
        <li>
          <ButtonMenu>All Rooms</ButtonMenu>
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
        <thead>
            <Tr>
              <Th>Photo</Th>
              <Th>Room ID</Th>
              <Th>Room Number</Th>
              <Th>Room Name</Th>
              <Th>Bed Type</Th>
              <Th>Facilities</Th>
              <Th>Rate</Th>
              <Th>Offer</Th>
              <Th>Status</Th>
              <Th></Th>
            </Tr>
            </thead>

            <tbody>
            { rooms.length > 0 &&
              rooms.map((room, index) => (
              <ListRoomItem
              key = {room.id} 
              index ={index} //props
              item = {room}
              number = {room.id}
              moveListItem = {moveRoomListItem}
             />
            ))}
            </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Rooms;
