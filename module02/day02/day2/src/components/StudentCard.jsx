import { Button } from "./Button";

// THIS IS RECEIVING PROPS
export const StudentCard = ({ money, student, addMoney }) => {
  return (
    <div>
      <h1>Student: {student}</h1>
      <h2>Money: {money}</h2>
      <Button addMoney={addMoney} />
    </div>
  );
};
