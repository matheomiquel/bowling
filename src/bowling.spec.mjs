import { BowlingGame } from "./bowling.mjs";

describe('Bowling Game', () => {
  it('should return a score without spare or strike', () => {
    const Allthrows = [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const Allthrows2 = [9, 0, 9, 0, 4, 5, 0, 8, 0, 4, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0]
    
    const game = new BowlingGame(Allthrows);
    const game1 = new BowlingGame(Allthrows2);

    expect(game.getScore()).toStrictEqual(9);
    expect(game1.getScore()).toStrictEqual(42);
  });
  it('should return a score with spare', () => {
    const Allthrows = [5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    
    const game = new BowlingGame(Allthrows);

    expect(game.getScore()).toStrictEqual(20);
  });
  it('should return a score with strike', () => {
    const Allthrows = [10, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    
    const game = new BowlingGame(Allthrows);

    expect(game.getScore()).toStrictEqual(28);
  });
  it('should return a score with spare and strike', () => {
    const Allthrows = [5, 5, 5, 0, 10, 2, 2, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    
    const game = new BowlingGame(Allthrows);

    expect(game.getScore()).toStrictEqual(48);
  });
  it('should return a score with only strike', () => {
    const Allthrows = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10,10]
    
    const game = new BowlingGame(Allthrows);

    expect(game.getScore()).toStrictEqual(300);
  });
});