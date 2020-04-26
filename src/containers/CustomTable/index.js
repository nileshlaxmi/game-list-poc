import React, { Component } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import RenderInput from "../Blocks/InputBox";
import searchIcon from "../../resources/icons/search-icon.svg";
import "./style.scss";

class CustomTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "",
      filteredData: [],
    };
  }

  globalSearch = (searchInput, originalData) => {
    const _filteredData = originalData.filter((data) => {
      return data["title"].toString().toLowerCase().includes(searchInput);
    });
    this.setState({
      filteredData: [..._filteredData],
    });
  };

  handleSearch = (value) => {
    const { data } = this.props;
    this.setState({ filter: value });
    this.globalSearch(value, data);
  };

  render() {
    const { data, columns } = this.props;
    const { filter, filteredData } = this.state;

    return (
      <>
        <div className="header">Games List</div>
        <div className="search-box">
          <RenderInput
            type="text"
            className=""
            placeholder="Search by Title"
            value={filter}
            onChange={this.handleSearch}
          />
          <img src={searchIcon} alt="Search Games" />
        </div>
        <ReactTable
          className="-striped -highlight"
          columns={columns}
          data={filter.trim().length === 0 ? data : filteredData}
          defaultPageSize={10}
          multiSort={false}
          bordered={true}
        />
      </>
    );
  }
}

export default CustomTable;
