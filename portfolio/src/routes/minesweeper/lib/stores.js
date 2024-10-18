import { writable } from 'svelte/store';

export const timer = writable(0);
export const bombCount = writable(0);
export const flagCount = writable(0);
export const totalTiles = writable(0);
export const tilesPerRow = writable(0);
export const amountRemainingTiles = writable();
export const gameStarted = writable(false);
export const countNearbyBombs = writable(false);
export const markedTiles = writable([]);
export const difficultyLevel = writable('');

let neighboursIndexes = [];
let leftNeighboursIndexes = [];
let rightNeighboursIndexes = [];

let tilesInARow;
tilesPerRow.subscribe(value => {
  tilesInARow = value;
  neighboursIndexes = [(-1 * tilesInARow), tilesInARow];
  leftNeighboursIndexes = [(-1 * tilesInARow - 1), -1, (tilesInARow - 1)];
  rightNeighboursIndexes = [(tilesInARow + 1), 1, (-1 * tilesInARow + 1)];
});

export function neighbours(tileIndex) {
  let currentNeighbours = neighboursIndexes;
  if (tileIndex % tilesInARow !== 0) {
    currentNeighbours = currentNeighbours.concat(leftNeighboursIndexes);
  }
  if (tileIndex % tilesInARow !== tilesInARow - 1) {
    currentNeighbours = currentNeighbours.concat(rightNeighboursIndexes);
  }
  return currentNeighbours;
}