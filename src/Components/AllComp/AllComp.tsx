import { BatteryIcon } from '@iconicicons/react';
import Button from './Buttons/Button';

export default function AllComp() {
  return (
    <>
      <div className="Heading">
        <h2 style={{ textDecoration: 'underline' }}>All Heading</h2>
        <div>
          <h1>This is Heading 1</h1>
          <h2>This is Heading 2</h2>
          <h3>This is Heading 3</h3>
          <h4>This is Heading 4</h4>
          <h5>This is Heading 5</h5>
          <h6>This is Heading 6</h6>
        </div>
      </div>
      <div className="icons">
        <BatteryIcon color="red" />
      </div>
      <div className="button">
        <Button />
      </div>
    </>
  );
}
