import React, { Component } from "react";
import { toast } from "react-toastify";
import { getGameDataService } from "../../services/games.service";
import CustomTable from "../CustomTable";
import PerfectScrollbar from "react-perfect-scrollbar";
import { columns } from "../../constants";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData: [],
    };
  }

  componentDidMount() {
    this.getGameData();
  }

  getGameData = () => {
    const { gameData } = this.state;

    getGameDataService()
      .then((response) => {
        if (response) {
          this.setState({
            gameData: [...gameData, ...response],
          });
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  render() {
    const { dataToBeFiltered, gameData } = this.state;
    return (
      <PerfectScrollbar>
        <CustomTable data={gameData} columns={columns}/>
      </PerfectScrollbar>
    );
  }
}

export default Dashboard;
