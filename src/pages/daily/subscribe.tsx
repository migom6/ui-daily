import styled from "styled-components";
import Image from "next/image";
import tick from "../../../public/tick.svg";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const [selected, setSelected] = useState<"option-1" | "option-2" | "">("");
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  useEffect(() => {
    setDimensions({
      height: ref?.current?.offsetHeight ?? 0,
      width: ref?.current?.offsetWidth ?? 0,
    });
  }, []);
  return (
    <Body>
      <Glass style={{ height: dimensions.height, width: dimensions.width }} />
      <Container ref={ref}>
        <Title>Subscribe to PRO Account</Title>
        <Select>
          <Option
            onClick={() => setSelected("option-1")}
            selected={selected === "option-1"}
          >
            <span className="title">Billed Anually</span>
            <div className="container">
              <div className="tick">
                <Image alt="tick" src={tick} />
              </div>
              <div className="price">$26</div>
              <div className="duration">/ month</div>
            </div>
          </Option>
          <Option
            onClick={() => setSelected("option-2")}
            selected={selected === "option-2"}
          >
            <span className="title">Billed Monthly</span>
            <div className="container">
              <div className="tick">
                <Image alt="tick" src={tick} />
              </div>
              <div className="price">$7</div>
              <div className="duration">/ month</div>
            </div>
          </Option>
        </Select>
        <Checkout>Continue to checkout</Checkout>
      </Container>
    </Body>
  );
};

const Body = styled.div`
  height: 100vh;
  background: #d6d8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Glass = styled.div`
  background: #ffffff;
  opacity: 0.7;
  border-radius: 25px;
  position: absolute;
`;

const Container = styled.div`
  padding: 60px 120px;
  background: #ffffff;
  opacity: 0.8;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-15px) scaleX(1.04) scaleY(1.02);
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #000000;
  margin-bottom: 80px;
`;

const Select = styled.div`
  display: flex;
  gap: 50px;
`;

const Option = styled.div<{ selected?: boolean }>`
  cursor: pointer;
  padding: 30px 40px;
  background: #f7f7ff;
  transition: border 0.2s;
  border: ${({ selected }) =>
    selected ? "2px solid #9665ff" : "2px solid #D9D2FF"};
  border-radius: 15px;
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #000000;
  }
  .container {
    margin-top: 30px;
    display: flex;
    align-items: center;
  }
  .tick {
    background: white;
    overflow: hidden;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 19px;
    img {
      transition: opacity 0.2s;
      opacity: ${({ selected }) => (selected ? 1 : 0)};
    }
  }
  .price {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    color: #000000;
  }
  .duration {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #000000;
    margin-top: 10px;
  }
`;

const Checkout = styled.button`
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  color: #f07300;
  background: #ffffff;
  border: 1px solid #ffaf65;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 30px 40px;
  margin-top: 60px;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #f07300;
    color: white;
  }
`;

export default Index;
