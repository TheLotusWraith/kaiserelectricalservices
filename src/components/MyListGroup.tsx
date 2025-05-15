// import { Fragment, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

type Props = {
  items: string[];
  heading?: string;
  onSelectItem?: (item: string) => void;
}


function MyListGroup(props: Props) {
  //  const [selectedIndex, setSelectedIndex] = useState(-1);

  /*
    if (props.items.length === 0)
      return (
        <>
          <h1>{props.heading}</h1>
          {props.items.length === 0 && <p>No item found</p>}
          <p>No item found</p>
          </>
      );
    */

      return (
        <ListGroup>
          {props.items.map(item =>
            <ListGroup.Item>
              {item}
              </ ListGroup.Item>
            )}
          </ListGroup>
      );
  }




export default MyListGroup;
