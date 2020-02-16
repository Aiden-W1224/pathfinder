import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Required Courses</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                "Class Name",
                "Semesters Available",
                "Prerequisites",
                "Prerequsites Met"
              ]}
              tableData={[
                ["CPSC457", "Fall/Winter/Spring", "CPSC331, CPSC359", "No"],
                ["CPSC413", "Fall/Winter/Spring", "CPSC331, CPSC313", "Yes"],
                ["CPSC359", "Fall/Winter/Spring", "CPSC355", "No"],
                ["CPSC355", "Fall/Winter/Spring", "CPSC233", "Yes"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Available Courses</h4>
            <p className={classes.cardCategoryWhite}>
              Classes you can take based on taken courses
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                "Class Name",
                "Semesters Available",
                "Prerequisites",
                "Prerequsites Met"
              ]}
              tableData={[
                ["CPSC513", "Fall/Winter/Spring", "CPS413", "No"],
                ["CPSC329", "Fall/Winter/Spring", "CPSC231", "Yes"],
                ["CPSC501", "Fall/Winter/Spring", "CPSC349 or 359", "No"],
                ["CPSC481", "Fall/Winter/Spring", "SENG300", "Yes"],
                ["CPSC471", "Fall/Winter/Spring", "CPSC331", "Yes"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
