// Components
import NumberSquare from '@/components/NumberSquare/NumberSquare';

interface NumberGroupProps {
  numberGroup: (number | null)[];
  selectedGroupSquare: number | null;
  onNumberClick: (index: number) => void;
}

export default function NumberGroup({ numberGroup, selectedGroupSquare, onNumberClick }: NumberGroupProps) {
  function handleNumberClick(index: number) {
    onNumberClick(index);
  }

  return (
    <div className="flex flex-wrap w-1/3 aspect-square border border-slate-900">
      {numberGroup.map((number, index) => (
        <NumberSquare key={index} number={number} selected={selectedGroupSquare === index} onClick={() => handleNumberClick(index)} />
      ))}
    </div>
  );
}
