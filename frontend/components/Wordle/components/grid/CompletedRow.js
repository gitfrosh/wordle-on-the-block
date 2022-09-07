import { getGuessStatuses } from "../../lib/statuses";
import { Cell as MyCell } from "./Cell";
import { unicodeSplit } from "../../lib/words";

export const CompletedRow = ({ guess, isRevealing }) => {
  const statuses = getGuessStatuses(guess);
  const splitGuess = unicodeSplit(guess);

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <MyCell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
    </div>
  );
};
