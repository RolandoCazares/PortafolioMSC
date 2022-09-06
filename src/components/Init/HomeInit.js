import { Box, Stack, Heading, Image, Badge } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styles from './HomeInit.module.css';
import backgound from "../../assets/images/Background/cardbackground.svg";
import React, { Component } from "react";
import { height } from "@mui/system";


class Body extends Component {
  
  render() {
    return (
      <>
        <div className={styles.home}>
            <div className={styles.empujar}>

                <div id="child" className={styles.homeinit}
                style={{ 
                  backgroundImage: `url(${backgound})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom"
                  
                }}
              >
                
              </div>
              <div id="child" className={styles.homeinit}
                style={{ 
                  backgroundImage: `url(${backgound})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom"
                  
                }}
              >
                
              </div>
              <div id="child" className={styles.homeinit}
                style={{ 
                  backgroundImage: `url(${backgound})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom"
                  
                }}
              >
                
              </div>
            </div>
            
        </div>
      </>
    );
  }
}
export default Body;
