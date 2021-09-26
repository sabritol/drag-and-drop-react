import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useRef } from "react";
import { clamp } from "@popmotion/popcorn";
import move from "array-move";
import { useMotionValue } from "framer-motion";
import { Card, Grid } from "./styles";

/**
 * @description
 * This Components represents a Dragagle Card
 * Renders a <CardDrag/> component
 * @param {string} label - name of card.
 * @param {number} move - function to move card.
 * @param {number} index - index of items
 * @param {number} position - position of card
 * @param {number} setPosition - function to set position of card
 * @returns {JSX.Element}
 */

// Spring configs
const onTop = { zIndex: 1 };
const flat = {
  zIndex: 0,
  transition: { delay: 0.3 },
};

const DraggableCard = (props) => {
  const { label, move, index, position, setPosition } = props;
  const [isDragging, setIsDragging] = useState(false);
  const itemRef = useRef(null);
  const dragOriginX = useMotionValue(0);
  const dragOriginY = useMotionValue(0);

  useEffect(() => {
    const updatePosition = () => {
      setPosition(index, {
        height: itemRef.current.offsetHeight,
        width: itemRef.current.offsetWidth,
        top: itemRef.current.offsetTop,
        left: itemRef.current.offsetLeft,
      });
    };

    window.addEventListener("resize", updatePosition);

    updatePosition();
    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [index, setPosition]);

  // Current position
  const offsets = {
    // eslint-disable-next-line react/prop-types
    top: position && position.top ? position.top : "Not set",
    // eslint-disable-next-line react/prop-types
    left: position && position.left ? position.left : "Not set",
  };

  return (
    <Card
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      dragOriginX={dragOriginX}
      dragOriginY={dragOriginY}
      drag={true}
      dragElastic={1}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onDrag={(e, { point }) => move(index, point)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.12 }}
      animate={isDragging ? onTop : flat}
      initial={false}
      ref={itemRef}
      positionTransition={({ delta }) => {
        if (isDragging) {
          dragOriginY.set(dragOriginY.get() + delta.y);
          dragOriginX.set(dragOriginX.get() + delta.x);
        }

        return !isDragging;
      }}
    >
      <span style={{ textAlign: "center" }}>{label}</span>
      <span style={{ textAlign: "center" }}>X : {offsets.left}</span>
      <span style={{ textAlign: "center" }}>Y : {offsets.top}</span>
    </Card>
  );
};

// Create a DragableCard component

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
          />
        );
      })}
    </Grid>
  );
};

DraggableCard.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  move: PropTypes.func,
  index: PropTypes.number,
  setPosition: PropTypes.func,
  position: PropTypes.object,
};

export default CardDrag;
