import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  color: #333;
  background-color: #efefef;
  margin: 15px;
  padding: 10px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 20px;
  cursor: grab;
`;
