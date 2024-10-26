// Components
import { Button } from '@/components/ui/button';

interface NumberKeyboardProps {
  selectedNumber: number | null;
  onNumberClick: (number: number) => void;
}

export default function NumberKeyboard({ selectedNumber, onNumberClick }: NumberKeyboardProps) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="flex flex-wrap gap-1">
      {numbers.map((number) => (
        <Button
          size="sm"
          variant={selectedNumber === number ? 'default' : 'outline'}
          key={number}
          onClick={() => onNumberClick(number)}
        >
          {number}
        </Button>
      ))}
    </div>
  );
}
