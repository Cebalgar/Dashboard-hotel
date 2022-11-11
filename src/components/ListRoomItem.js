import React, { useRef } from "react";
import { useDrag, useDrop} from "react-dnd";
import { ButtonStatusRoom } from "../styled/Buttons";
import {Td, Tr} from "../styled/Table";

export const ListRoomItem = ({item, index,moveListItem}) => {
  const [{ isDragging }, drag] = useDrag(()=> ({
    type: "item",
    item: {index},
    collect: (monitor) => ({
      isDragging:!!monitor.isDragging(),
    })
  }))
 
  const [spec, drop] = useDrop({
    accept: "item",
    hover: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;

      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveListItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  const dragDrop = drag(drop(ref));

  const opacity = isDragging ? { opacity: "0" } : { opacity: "1" };
  
    

    return (
        <Tr key={item.id} ref={dragDrop} style={opacity}>
         <Td><img src ={item.photo} alt= ""/></Td>
                <Td>{item.id}</Td>
                <Td>{item.room_number}</Td>
                <Td>{item.room_name}</Td>
                <Td>{item.room_type}</Td>
                <Td>{item.facilities}</Td>
                <Td>{item.price}</Td>
                <Td>
                  {(item.price - (item.price * item.discount) / 100).toFixed(2)}
                </Td>
                <Td>
                  <ButtonStatusRoom status={item.status}>
                    {item.status}
                  </ButtonStatusRoom>
                </Td>
                

        </Tr>
    )
}