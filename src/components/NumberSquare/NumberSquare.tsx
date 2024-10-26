interface NumberSquareProps {
  number: number | null;
  selected: boolean;
  onClick: () => void;
}

export default function NumberSquare({ number, selected, onClick }: NumberSquareProps) {
  return (
    <button
      className="relative w-1/3 aspect-square border border-slate-900 bg-white flex items-center justify-center text-xl font-semibold text-slate-900 text-center hover:bg-slate-100 transition-colors"
      onClick={() => onClick()}
    >
      <span className={`absolute w-full h-full flex items-center justify-center border border-yellow-400 ${selected ? 'opacity-100' : 'opacity-0'} transition-opacity`} style={{ borderWidth: '3px' }} />
      {number}
    </button>
  );
}
