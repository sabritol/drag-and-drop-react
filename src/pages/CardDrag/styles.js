import styled from "styled-components";
import { motion } from "framer-motion";

// export const Card = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   text-transform: uppercase;
//   color: #333;
//   background-color: #efefef;
//   margin: 15px;
//   padding: 10px;
//   border-radius: 10px;
//   font-weight: 700;
//   font-size: 20px;
//   cursor: grab;
// `;

export const Grid = styled(motion.div)`
  display: grid;
  height: 100%;
  width: 900px;
  margin: 0 auto;

  align-items: flex-start;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  padding: 20px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Media = styled(motion.div)`
  img {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;
