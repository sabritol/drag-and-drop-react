// import PropTypes from "prop-types";
import { useState, useCallback, useRef } from "react";
import { clamp } from "@popmotion/popcorn";
// import { motion } from "framer-motion";
import move from "array-move";
// import { useMotionValue } from "framer-motion";
import { Grid } from "./styles";
// import cats from "../../components/DraggableCard/db";
import DraggableCard from "../../components/DraggableCard/DraggableCard";

const CardDrag = () => {
  const [cards, setCards] = useState(["🐱", "😹", "😻", "😾", "🙀"]);

  const constraintsRef = useRef(null);
  const [positions, updatePositions] = useState([]);

  // retrieving the current position
  const setPosition = useCallback((i, offset) => {
    updatePositions((p) => {
      const _p = p.slice();
      _p[i] = offset;
      return _p;
    });
  }, []);

  const findIndex = (i, dragOffset, positions) => {
    let target = i;
    // get the current box
    const current = positions[i];

    // calculate current position
    const currentLeft = current.left + dragOffset.x;
    const currentTop = current.top + dragOffset.y;

    // calculate current center
    const currentCenter = {
      X: currentLeft + current.width / 2,
      Y: currentTop + current.height / 2,
    };

    // find a candidate when the center of the current is in a target hot zone
    target = positions.findIndex((item, j) => {
      if (i === j) return false;
      let isInX = false;
      let isInY = false;

      // check if center is in X range
      if (
        currentCenter.X > item.left &&
        currentCenter.X < item.left + item.width
      )
        isInX = true;
      // check if center is in Y range
      if (
        currentCenter.Y > item.top &&
        currentCenter.Y < item.top + item.height
      )
        isInY = true;

      return isInX && isInY;
    });

    return clamp(0, positions.length, target === -1 ? i : target);
  };

  const moveItem = (i, dragOffset) => {
    const targetIndex = findIndex(i, dragOffset, positions);
    if (targetIndex !== i) setCards(move(cards, i, targetIndex));
  };

  return (
    <Grid ref={constraintsRef}>
      {cards.map((_, i) => {
        return (
          <DraggableCard
            key={_}
            label={_}
            move={moveItem}
            index={i}
            setPosition={setPosition}
            position={positions[i]}
          >
            {/* {cats.map((image, id) => (
              <motion.img src={image.src} alt={image.title} key={id} />
            ))} */}
          </DraggableCard>
        );
      })}
    </Grid>
  );
};

export default CardDrag;
