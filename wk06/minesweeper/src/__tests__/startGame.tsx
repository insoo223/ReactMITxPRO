import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from '../App';
import { getCell, queryAllCells } from '../test-utils/cellQueries';
import { minesMockData } from '../test-utils/minesMockData';

beforeEach(() => render(<App />));

test('game starts upon clicking cell', () => {
  userEvent.click(getCell(minesMockData.beginner.firstClick));

  expect(queryAllCells({ isOpen: true }).length).toBeGreaterThan(0);
});
