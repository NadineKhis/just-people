import React from "react";
import Accordion from "react-bootstrap/Accordion";

interface AccordionProps {
  count: number;
}

export const AccordionComponent: React.FC<AccordionProps> = (props) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Button>
          {props.count - 9}-{props.count}
        </Accordion.Button>
        <Accordion.Collapse eventKey="0">
          <>{props.children}</>
        </Accordion.Collapse>
      </Accordion.Item>
    </Accordion>
  );
};
