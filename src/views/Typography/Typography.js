import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function TypographyPage() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <h1 className={classes.cardTitleWhite}>Reviews for CPSC418</h1>
      </CardHeader>
      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>Student 1:</div>
          <h2>This Should NOT Be a CPSC Class!</h2>
          <p>I did not think I was signing up for MATH271 Part 2. I've been having to put together linear algebra, statistics, and calculus for every assignment. For every one coding question there's easily 5 math ones!!</p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Student 2:</div>
          <h2>THIS CLASS IS TOO HARD</h2>
          <p>READ THE TITLE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Student 3:</div>
          <h2>Haha It's Not Even That Bad Guys</h2>
          <p>I took this class in second year and it was honestly pretty manageable. Just make sure you do some studying every night and you'll be fine. 9 hours was the magic number for me.</p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>[REDACTED]</div>
          <h2>[REDACTED]</h2>
          <p>Message removed by a moderator.</p>
        </div>
        
      </CardBody>
    </Card>
  );
}
