import React from 'react'
function isVisible(visibility, section, id) {
  return true;
}

export default ({ campaigns, goals, visibility, onHeadClick }) => (
  <table className="table table-bordered table-hover table-striped">
      <thead>
        <tr onClick={() => onHeadClick()}>
          <th rowSpan="2">КАМПАНИИ</th>
          <th rowSpan="2">Статус</th>
          {isVisible(visibility, 'content-stat', 'shows') && <th rowSpan="2">Показы</th>}
          {isVisible(visibility, 'content-stat', 'clicks') && <th rowSpan="2">Клики</th>}
          {isVisible(visibility, 'content-stat', 'ctr') && <th rowSpan="2">CTR</th>}
          {isVisible(visibility, 'content-stat', 'cpc') && <th rowSpan="2">CPC</th>}
          {isVisible(visibility, 'content-stat', 'costs') && <th rowSpan="2">Затраты</th>}
          {
            goals.map(goal => isVisible(visibility, `goal-${goal.goal_id}`) && <th colSpan="3">{goal.name}</th>)
          }
        </tr>
        <tr onClick={() => onHeadClick()}>
          {
            goals.map(goal => {
              let t = [];
              t.push(isVisible(visibility, `goal-${goal.goal_id}`, 'cpa') && <th>CPA</th>);
              t.push(isVisible(visibility, `goal-${goal.goal_id}`, 'cr') &&<th>CR</th>);
              t.push(isVisible(visibility, `goal-${goal.goal_id}`, 'count') &&<th>количество</th>);

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
                campaign.goals.map(goal => {
                  let t = [];
                  t.push(isVisible(visibility, `goal-${goal.goal_id}`, 'cpa') && <td>{goal.cpa}</td>);
                  t.push(isVisible(visibility, `goal-${goal.goal_id}`, 'cr') && <td>{goal.cr}</td>);
                  t.push(isVisible(visibility, `goal-${goal.goal_id}`, 'count') &&<td>{goal.count}</td>);

                  return t;
                })
              }
            </tr>
          ))
        }
      </tbody>
  </table>
)
