// Dependencies
import { useState } from 'react';

// Components
import GameBoard from '@/components/GameBoard/GameBoard';
import NumberKeyboard from '@/components/NumberKeyboard/NumberKeyboard';

// Types
import { GameState, SelectedSquare } from '@/types';

const EMPTY_GAME_STATE: GameState = [
  [
    null, null, null,
    null, null, null,
    null, null, null
  ],
  [
    null, null, null,
    null, null, null,
    null, null, null
  ],
  [
    null, null, null,
    null, null, null,
    null, null, null
  ],
  [
    null, null, null,
    null, null, null,
    null, null, null
  ],
  [
    null, null, null,
    null, null, null,
    null, null, null
  ],
  [
    null, null, null,
    null, null, null,
    null, null, null
  ],
];

function App() {
  const [selectedSquare, setSelectedSquare] = useState<SelectedSquare>(null);
  const [selectedNumberKey, setSelectedNumberKey] = useState<number | null>(null);
  const [gameState, setGameState] = useState<GameState>(EMPTY_GAME_STATE);

  function handleNumberClick(numberIndex: number, groupIndex: number) {
    if (selectedSquare?.numberIndex === numberIndex && selectedSquare?.groupIndex === groupIndex) {
      setSelectedSquare(null);
    } else {
      setSelectedSquare({ numberIndex, groupIndex });
    }
  }


  function handleNumberKeyClick(number: number) {
    if (selectedNumberKey === number) {
      setSelectedNumberKey(null);
    } else {
      setSelectedNumberKey(number);
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen px-4">
      <GameBoard gameState={gameState} onNumberClick={handleNumberClick} selectedSquare={selectedSquare} />
      <NumberKeyboard selectedNumber={selectedNumberKey} onNumberClick={handleNumberKeyClick} />
    </div>
  );
}

export default App;
