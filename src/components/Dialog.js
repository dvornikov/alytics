import React, { Component } from 'react';

export default class Dialog extends Component {
  state = {
      visible: true,
      visibility: this.props.visibility
  };

  render() {
    const { visible } = this.state;
    const { visibility, goals } = this.props;
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

    return(visible || null) && <div className="modal-dialog dialog">
      <div className="modal-content">
        <div className="modal-body">
          <ul className="dialog dialog__list">
            {
              fields.map((item) => <li><input type="checkbox" />&nbsp;{item.label}</li>)
            }
            {
              goals.map((goal) => {
                return [
                  { id: "cpa", label: "CPA"},
                  { id: "cr", label: "CR %"},
                  { id: "count", label: "Кол-во"}].map((item) => <li><input type="checkbox" />&nbsp;{ goal.name }: {item.label}</li>);
              })
            }
          </ul>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">OK</button>
          <button type="button" className="btn btn-default" onClick={() => this.setState({ visible: false })}>Отменить</button>
        </div>
      </div>
    </div>
  }
}
