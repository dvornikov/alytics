import React, { Component } from 'react';

export default class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
        visibility: {}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  isVisible(section, id) {
    let inProps = this.props.visibility.data[section] && typeof this.props.visibility.data[section][id] !== "undefined";
    let inState = this.state.visibility[section] && typeof this.state.visibility[section][id] !== "undefined";

    if (inState)
      return this.state.visibility[section][id]
    else if (inProps)
      return this.props.visibility.data[section][id]
    else
      return true
  }

  handleChange(checked, section, id) {
    this.setState((prevState, props) => {
      let existenSection = Object.assign({}, this.props.visibility.data[section], prevState.visibility[section]);
      let visibility = Object.assign({}, props.visibility.data, prevState.visibility, {
        [section]: {
            ...existenSection,
            [id]: checked
        }
      });

      return { visibility };
    });
  }

  render() {
    const { visibility, goals, dialog, onCancel, onUpdate } = this.props;
    const fields = [
      {
        id: "shows",
        label: "Показы"
      },
      {
        id: "clicks",
        label: "Клики"
      },
      {
        id: "ctr",
        label: "CTR"
      },
      {
        id: "cpc",
        label: "CPC"
      },
      {
        id: "cost",
        label: "Затраты"
      },
    ];

    return(dialog || null) && <div className="modal-dialog modal-sm dialog">
      <div className="modal-content">
        <div className="modal-body">
          <ul className="dialog__list">
            {
              fields.map((item) => <li key={item.id}><label className="dialog__label">
                <input
                  checked={this.isVisible(`content-stat`, item.id)}
                  type="checkbox" onChange={(e) => this.handleChange(e.target.checked, 'content-stat', item.id) } />&nbsp;{item.label}</label></li>)
            }
            {
              goals.map((goal) => {
                return [
                  { id: "cpa", label: "CPA"},
                  { id: "cr", label: "CR %"},
                  { id: "count", label: "Кол-во"}].map((item) => <li key={item.id}>
                    <label className="dialog__label">
                      <input
                        checked={this.isVisible(`goal-${goal.goal_id}`, item.id)}
                        type="checkbox" onChange={(e) => this.handleChange(e.target.checked, `goal-${goal.goal_id}`, item.id) } />&nbsp;{ goal.name }: {item.label}</label></li>);
              })
            }
          </ul>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={(e) => { e.preventDefault(); onUpdate(this.state.visibility); }}>{visibility.loading && <img src="spinner.gif" height="25" />}OK</button>
          <button type="button" className="btn btn-default" onClick={(e) => { e.preventDefault(); onCancel() }}>Отменить</button>
        </div>
      </div>
    </div>
  }
}
