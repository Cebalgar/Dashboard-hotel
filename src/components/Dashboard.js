import React from "react";
import { Container } from "../styled/Containers";
import { KpisContainer, KpisNumber, KpisBox } from "../styled/Kpis";
import { BiBed } from "@react-icons/all-files/bi/BiBed";
import { AiOutlineCalendar } from "@react-icons/all-files/ai/AiOutlineCalendar";
import { BsBoxArrowInRight } from "@react-icons/all-files/bs/BsBoxArrowInRight";
import { BsBoxArrowInLeft } from "@react-icons/all-files/bs/BsBoxArrowInLeft";

const Dashboard = () => {
  return (
    <>
      <Container>
        <KpisBox>
          <KpisContainer>
            <BiBed className="icon" />
            <KpisNumber>
              8,461 <span>New Booking</span>
            </KpisNumber>
          </KpisContainer>

          <KpisContainer>
            <AiOutlineCalendar className="icon" />
            <KpisNumber>
              963 <span>Scheduled Room</span>
            </KpisNumber>
          </KpisContainer>

          <KpisContainer>
            <BsBoxArrowInRight className="icon" />
            <KpisNumber>
              516<span>Check In</span>
            </KpisNumber>
          </KpisContainer>

          <KpisContainer>
            <BsBoxArrowInLeft className="icon" />
            <KpisNumber>
              516<span>Check Out</span>
            </KpisNumber>
          </KpisContainer>
        </KpisBox>
      </Container>
    </>
  );
};

export default Dashboard;
