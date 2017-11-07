import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ColumnResizer from 'column-resizer';

function isVisible(visibility, section, id) {
  if (visibility[section] && !id) {
    let count = 3;
    for (var field in visibility[section]) {
      if (visibility[section].hasOwnProperty(field)) {
        if (!visibility[section][field]) count--;
      }
    }

    return count || false;
  }

  if (visibility[section] && typeof visibility[section][id] !== "undefined") {
    return visibility[section][id];
  }

  return true;
}

function colSpan(visibility, section) {
  let count = 3;
  for (var field in visibility[section]) {
    if (visibility[section].hasOwnProperty(field)) {
      if (!visibility[section][field]) count--;
    }
  }

  return count || null;
}

export default class Campaigns extends Component {
  componentDidMount() {
    this.enableResize();
  }

  componentWillUnmount() {
    this.disableResize();
  }

  componentDidUpdate() {
    this.enableResize();
  }

  componentWillUpdate() {
    this.disableResize();
  }

  enableResize() {
      const options = {
        resizeMode: 'overflow',
        liveDrag: true,
        draggingClass: "rangeDrag",
        gripInnerHtml: "<div class='rangeGrip'></div>"
      };
      if (!this.resizer) {
          this.resizer = new ColumnResizer(
              ReactDOM.findDOMNode(this).querySelector('#alytics'), options);
      } else {
          this.resizer.reset(options);
      }
  }

  disableResize() {
      if (this.resizer) {
          this.resizer.reset({ disable: true });
      }
  }

  render() {
    const { campaigns, goals, visibility, onHeadClick } = this.props;
    return <div className="scrollable"><table className="table table-bordered table-hover table-striped" id="alytics">
        <thead>
          <tr onClick={() => onHeadClick()}>
            <th rowSpan="2">КАМПАНИИ</th>
            <th rowSpan="2">Статус</th>
            {isVisible(visibility, 'content-stat', 'shows') && <th rowSpan="2">Показы</th>}
            {isVisible(visibility, 'content-stat', 'clicks') && <th rowSpan="2">Клики</th>}
            {isVisible(visibility, 'content-stat', 'ctr') && <th rowSpan="2">CTR</th>}
            {isVisible(visibility, 'content-stat', 'cpc') && <th rowSpan="2">CPC</th>}
            {isVisible(visibility, 'content-stat', 'cost') && <th rowSpan="2">Затраты</th>}
            {
              goals.map(goal => {
                let content = isVisible(visibility, `goal-${goal.goal_id}`) && <th key={goal.goal_id} colSpan={colSpan(visibility, `goal-${goal.goal_id}`)}>{goal.name}</th>;
                return content;
              })
            }
          </tr>
          <tr onClick={() => onHeadClick()}>
            {
              goals.map(goal => {
                let t = [];
                t.push(isVisible(visibility, `goal-${goal.goal_id}`, 'cpa') && <th key={`goal-${goal.goal_id}-spa`}>CPA</th>);
                t.push(isVisible(visibility, `goal-${goal.goal_id}`, 'cr') && <th key={`goal-${goal.goal_id}-cr`}>CR</th>);
                t.push(isVisible(visibility, `goal-${goal.goal_id}`, 'count') && <th key={`goal-${goal.goal_id}-count`}>количество</th>);

                return t;
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            campaigns.map((campaign) => (
              <tr key={campaign.value}>
                <td>{campaign.value}</td>
                <td></td>
                {isVisible(visibility, 'content-stat', 'shows') && <td>{campaign.costs.shows}</td>}
                {isVisible(visibility, 'content-stat', 'clicks') && <td>{campaign.costs.clicks}</td>}
                {isVisible(visibility, 'content-stat', 'ctr') && <td>{campaign.costs.ctr}</td>}
                {isVisible(visibility, 'content-stat', 'cpc') && <td>{campaign.costs.cpc}</td>}
                {isVisible(visibility, 'content-stat', 'cost') && <td>{campaign.costs.cost}</td>}
                {
                  campaign.goals.map((goal, index) => {
                    let t = [];
                    t.push(isVisible(visibility, `goal-${goals[index].goal_id}`, 'cpa') && <td key={`goal-${goal.goal_id}-spa`}>{goal.cpa}</td>);
                    t.push(isVisible(visibility, `goal-${goals[index].goal_id}`, 'cr') && <td key={`goal-${goal.goal_id}-cr`}>{goal.cr}</td>);
                    t.push(isVisible(visibility, `goal-${goals[index].goal_id}`, 'count') &&<td key={`goal-${goal.goal_id}-count`}>{goal.count}</td>);

                    return t;
                  })
                }
              </tr>
            ))
          }
        </tbody>
    </table></div>
  }
}
