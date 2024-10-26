// Types
import { ActionHistory, GameState, ValidationResult } from '@/types';

const rows = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

const columns = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

export function validateGameState(gameState: GameState, actionHistory: ActionHistory): ValidationResult {
  if (actionHistory.length === 0) {
    // TODO: Verify that we actually don't have to validate the game state when there are no actions
    return {
      isValid: true
    };
  }

  const localState = [...gameState];
  const lastAction = actionHistory[actionHistory.length - 1];
  if (lastAction.type === 'add-number') {
    const number = lastAction.newValue;
    const group = [...localState[lastAction.square.groupIndex]];
    group.splice(lastAction.square.numberIndex, 1);
    if (group.includes(number)) {
      return {
        isValid: false,
        errorMessage: 'Number already exists in group',
      };
    }

    const foundGroupRow = rows.find((row) => row.includes(lastAction.square.groupIndex));
    const foundGroupColumn = columns.find((column) => column.includes(lastAction.square.groupIndex));
    const foundNumberRow = rows.find((row) => row.includes(lastAction.square.numberIndex));
    const foundNumberColumn = columns.find((column) => column.includes(lastAction.square.numberIndex));
    if (foundGroupRow && foundGroupColumn && foundNumberRow && foundNumberColumn) {
      const groupRow = [...foundGroupRow];
      const groupColumn = [...foundGroupColumn];
      const numberRow = [...foundNumberRow];
      const numberColumn = [...foundNumberColumn];

      groupRow.splice(groupRow.indexOf(lastAction.square.groupIndex), 1);
      groupColumn.splice(groupColumn.indexOf(lastAction.square.groupIndex), 1);

      console.log(groupRow, groupColumn, numberRow, numberColumn);
      
      for (const row of groupRow) {
        const rowGroup = [...localState[row]];
        for (const rowNumber of numberRow) {
          if (rowGroup[rowNumber] === number) {
            console.log('Found duplicate', row, rowNumber);
            return {
              isValid: false,
              errorMessage: 'Number already exists in the same row',
            };
          }
        }
      }

      for (const column of groupColumn) {
        const columnGroup = [...localState[column]];
        for (const columnNumber of numberColumn) {
          if (columnGroup[columnNumber] === number) {
            console.log('Found duplicate', column, columnNumber);
            return {
              isValid: false,
              errorMessage: 'Number already exists in the same column',
            };
          }
        }
      }
    }
    
  }

  return {
    isValid: true,
  };
}
