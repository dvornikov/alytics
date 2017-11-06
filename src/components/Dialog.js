import React, { Component } from 'react';

export default class Dialog extends Component {
  state = {
      visibility: this.props.visibility
  };

  render() {
    const { visibility, goals, dialog, onCancel } = this.props;
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
          <button type="button" className="btn btn-default" onClick={() => onCancel() }>Отменить</button>
        </div>
      </div>
    </div>
  }
}
