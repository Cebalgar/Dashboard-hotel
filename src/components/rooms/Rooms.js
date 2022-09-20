

import { roomsData } from '../../data/roomsData'


const Rooms = () => {
 const rooms = roomsData;

const id= rooms.map((room)=>room.id);
const roomName = rooms.map((room)=>room.room_name);

  return (
    <>
  
    </>
  );
};



export default Rooms