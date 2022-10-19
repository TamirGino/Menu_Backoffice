import React, { useRef} from "react";
import "./Menu.css";
import EditMenu from "./EditMenu";
import HTMLFlipBook from "react-pageflip";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

function Menu(props) {

  const newMenuDrinks = props.drinksMenu;
  const newMenuFood = props.foodMenu;
  const book = useRef();

  const handleClick = () => {
    book.current.pageFlip().flipNext();
  };



  

  return (
    <>
      <HTMLFlipBook
        className="book"
        width={330}
        height={700}
        useMouseEvents={false}
        ref={book}
        flippingTime={3000}
        usePortrait={false}
        showCover={true}
      >
        <div className="cover" style={{ backgroundColor: "white" }}>
          <div className="circle"></div>
          <h1>GOURMET RESTAURANT</h1>
          <br></br>
          <hr></hr> 
          <br></br>
          <h3 onClick={handleClick}>
            VIEW THE MENU{" "}
            <div className="arrow-iconn">
              <ArrowRightAltIcon />
            </div>
          </h3>
        </div>
        
        <div className="cover" style={{ backgroundColor: "white" }}>
          <h2>FOOD</h2>
          <hr></hr>
           <br></br> <br></br>
          <div className="overflow">
          <div className="accordion">
            {newMenuFood.map((item, index) => (
              <div key={index}>
                <Accordion>
                  <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      color: 'text.primary',
                      left: '25%',
                    }}
                  >
                   <Typography>{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails >
                    <Typography > 
                      {item.content.map((c, i) => (
                        <div key={i}>
                          <EditMenu  name={c.name} price={c.price}  />
                        </div>
                      ))}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <br></br>
              </div>
            ))}
          </div>
          </div>
        </div>

        <div className="cover" style={{ backgroundColor: "white" }}>
          <h2>DRINKS</h2>
          <hr></hr> 
          <br></br> <br></br>
          <div className="overflow">
          <div className="accordion">
            {newMenuDrinks.map((item, index) => (
              <div key={index}>
                <Accordion>
                  <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      
                      left: '25%',
                    }}
                  >
                    <Typography >{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {item.content.map((c, i) => (
                        <div key={i}>
                          <EditMenu name={c.name} price={c.price} />
                        </div>
                      ))}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <br></br>
              </div>
            ))}
          </div>
          </div>
        </div>
      </HTMLFlipBook>
    </>
  );
}

export default Menu;
