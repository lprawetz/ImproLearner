import React from 'react';
import Svg, { Rect } from 'react-native-svg';

type PianoKeyboardProps = {
  markedKeys: number[];
};

const PianoKeyboard: React.FC<PianoKeyboardProps> = ({ markedKeys }) => {
  const keyWidth = 25;
  const keyHeight = 100;
  const totalKeys = 14;

  const keyColor = (index: number) => {
    return markedKeys.includes(index) ? 'red' : 'white';
  };

  return (
    <Svg width={keyWidth * totalKeys} height={keyHeight}>
      {Array.from({ length: totalKeys }).map((_, index) => (
        <Rect
          key={index}
          x={index * keyWidth}
          y={0}
          width={keyWidth}
          height={keyHeight}
          fill={keyColor(index)}
          stroke="black"
        />
      ))}
    </Svg>
  );
};

export default PianoKeyboard;
