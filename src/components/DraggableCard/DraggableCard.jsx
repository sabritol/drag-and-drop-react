/* eslint-disable react/prop-types */
// import { AnimateSharedLayout, motion } from "framer-motion";

import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { useMotionValue } from "framer-motion";
import { Card, Media } from "./style";
// import data from "./db.json";

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
  const { label, move, index, position, setPosition, src, title } = props;
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
      <Media src={src} alt={title} />
      <span style={{ textAlign: "center" }}>{label}</span>
      <span style={{ textAlign: "center" }}>X : {offsets.left}</span>
      <span style={{ textAlign: "center" }}>Y : {offsets.top}</span>
    </Card>
  );
};

DraggableCard.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  move: PropTypes.func,
  index: PropTypes.number,
  setPosition: PropTypes.func,
  position: PropTypes.object,
  image: PropTypes.string,
  type: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
};

export default DraggableCard;
