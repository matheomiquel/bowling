export class BowlingGame {
  constructor(throws) {
    let previousThrows = 0;
    let firstThrow = true;
    this.throws = throws.reduce((previous, current, index) => {
      if (firstThrow) {
        if (current !== 10) {
          firstThrow = false;
          previousThrows = current
          return previous + current
        }
        if (!!throws[index + 2]) {
          return previous + current + throws[index + 1] + throws[index + 2]
        } else if (!!throws[index + 1]) {
          return previous + current + throws[index + 1]
        } else {
          return previous + current
        }
      } else {
        firstThrow = true;
        if (previousThrows + current === 10) {
          previousThrows = 0;
          return previous + current + throws[index + 1]
        } else {
          previousThrows = 0;
          return previous + current
        }
      }
    }, 0);
  }

  getScore() {
    return this.throws;
  }
}