/** 
 * TopSettings component
 * @file TopSettings.jsx
 * @brief TopSettings component
 * @version 1.0
 * @date 2022-12-09
 * @author Hoang Quoc Le
 */

import DropDown from "../DropDownCmpnt/DropDown";
import { Component } from "react";
import "./TopSettings.css"

class TopSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: this.getTopics("1"),
    };
    this.onChange = this.onChange.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.getTopics = this.getTopics.bind(this);
    this.categories = this.getCategories();
  }
  /**
   * Get categories array from data
   * @returns categories array
   * @memberof TopSettings
   *
   */
  getCategories() {
    let categories = null;
    if (this.props.data) {
      let cat = this.props.data["categories"];
      categories = cat.map((category) => {
        return { value: category.id, label: category.name };
      });
    }
    return categories;
  }
  /**
   * Get topics array from category number
   * @param {*} num - category number
   * @returns topics array
   */
  getTopics(num) {
    let topics = null;
    if (this.props.data) {
      let topicsArray = Object.values(this.props.data["categories"])[num - 1][
        "topicList"
      ];
      topics = topicsArray.map((topic) => {
        return { value: topic.id, label: topic.topic_title };
      });
    }
    return topics;
  }
  onChange(e) {
    this.props.categoryOnchange(e);
    this.setState({ topics: this.getTopics(e.target.value) });
  }
  render() {
    return (
      <div className="top-settings">
        <div>
          <p>Category</p>
          <DropDown options={this.categories} onChange={this.onChange} type="category"/>
        </div>
        <div>
          <p>Topic</p>
          <DropDown options={this.state.topics} onChange={this.props.topicOnchange} type="topic"/>
          </div>
      </div>
    );
  }
}
export default TopSettings;
