// Components
import { Button } from '@/components/ui/button';
import IconTrash from '@/components/IconTrash/IconTrash';


interface NumberKeyboardProps {
  selectedNumber: number | null;
  onNumberClick: (number: number) => void;
  onClearClick: () => void;
}

export default function NumberKeyboard({ selectedNumber, onNumberClick, onClearClick }: NumberKeyboardProps) {
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
      <Button size="sm" variant="outline" className="text-red-500" onClick={onClearClick}>
        <IconTrash />
      </Button>
    </div>
  );
}
