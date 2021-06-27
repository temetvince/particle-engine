import "../css/jumbotron.css";

import * as React from "react";
import { ReactElement, useState } from "react";
import {
   Jumbotron,
   Button,
   Popover,
   PopoverHeader,
   PopoverBody,
} from "reactstrap";

const Example: React.FC = (): ReactElement => {
   const [popoverOpen, setPopoverOpen] = useState(false);

   const toggle = () => setPopoverOpen(!popoverOpen);

   return (
      <div>
         <Jumbotron>
            <h1 className="display-3">Welcome.</h1>
            <hr className="my-2" />
            <p className="lead">
               This is the future home of{" "}
               <span className="nameLine">
                  <span className="name">Coffee Grove</span>
                  <span>,</span>
               </span>{" "}
               a new coffee shop coming soon to the Northwest Missouri Area!
            </p>
            <hr className="my-2" />
            <p>
               <i>
                  Coffee is the world&apos;s 121st most traded product. When you
                  buy a cup of coffee, you are supporting the lives of millions
                  of people from around the globe.
               </i>
            </p>
            <p className="lead">
               <Button id="Popover1" color="primary" onClick={null}>
                  Learn More
               </Button>
               <Popover
                  placement="bottom"
                  isOpen={popoverOpen}
                  target="Popover1"
                  toggle={toggle}
               >
                  <PopoverHeader>Fact Check</PopoverHeader>
                  <PopoverBody>
                     The Observatory of Economic Complexity visualizes
                     international trade data,&nbsp;
                     <a href="https://oec.world/en/profile/hs92/coffee">
                        including coffee!
                     </a>
                  </PopoverBody>
               </Popover>{" "}
            </p>
         </Jumbotron>
      </div>
   );
};

export default Example;
