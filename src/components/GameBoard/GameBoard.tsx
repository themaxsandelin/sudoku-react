// Components
import NumberGroup from '../NumberGroup/NumberGroup';

// Types
import { GameState, SelectedSquare } from '@/types';

interface GameBoardProps {
  gameState: GameState;
  selectedSquare: SelectedSquare;
  onNumberClick: (numberIndex: number, groupIndex: number) => void;
}

export default function GameBoard({ gameState, selectedSquare, onNumberClick }: GameBoardProps) {
  function handleNumberClick(numberIndex: number, groupIndex: number) {
    onNumberClick(numberIndex, groupIndex);
  }

  return (
    <div className="flex flex-wrap w-full max-w-lg aspect-square border border-slate-900" style={{ borderWidth: '1.5px' }}>
      {gameState.map((numberGroup, index) => (
        <NumberGroup
          key={index}
          numberGroup={numberGroup}
          selectedGroupSquare={selectedSquare?.groupIndex === index ? selectedSquare.numberIndex : null}
          onNumberClick={(numberIndex: number) => handleNumberClick(numberIndex, index)}
        />
      ))}
    </div>
  );
}
