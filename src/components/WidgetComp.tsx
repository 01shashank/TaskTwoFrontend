import { List, ListItem, ListItemText, Divider, Button } from "@mui/material";
import "../assets/styles/WidgetStyle.scss";
import WidgetApi from "../apis/WidgetApi";
import { useEffect, useState } from "react";

interface WidgetProps {
  getData: Function;
}

const WidgetComp = (props: WidgetProps) => {
  const [wheatData, setWheatData] = useState([]);
  const [cerealsData, setCerealsData] = useState([]);
  const [pulsesData, setPulsesData] = useState([]);
  const [milkData, setMilkData] = useState([]);

  useEffect(() => {
    WidgetApi.getWheatData().then((res) => setWheatData(res.data));

    WidgetApi.getCerealsData().then((res) => setCerealsData(res.data));

    WidgetApi.getPulsesData().then((res) => setPulsesData(res.data));

    WidgetApi.getMilkData().then((res) => setMilkData(res.data));
  });

  return (
    <div className="widget-container">
      <h2 id="header-widget">Statistics</h2>
      <List>
        <ListItem id="list-items">
          <ListItemText id="list-item-text"  onClick={() => props.getData(wheatData)}>Wheat</ListItemText>
          <Button variant="text">
            Click to see the table
          </Button>
        </ListItem>
        <Divider variant="fullWidth" flexItem={true} />

        <ListItem id="list-items">
          <ListItemText id="list-item-text"  onClick={() => props.getData(cerealsData)}>Cereals</ListItemText>
          <Button variant="text">
            Click to see the table
          </Button>
        </ListItem>
        <Divider flexItem={true} />

        <ListItem id="list-items">
          <ListItemText id="list-item-text" onClick={() => props.getData(milkData)}>Milk</ListItemText>
          <Button variant="text">
            Click to see the table
          </Button>
        </ListItem>
        <Divider />

        <ListItem id="list-items">
          <ListItemText id="list-item-text" onClick={() => props.getData(pulsesData)}>Pulses</ListItemText>
          <Button variant="text">
            Click to see the table
          </Button>
        </ListItem>
      </List>
    </div>
  );
};

export default WidgetComp;
