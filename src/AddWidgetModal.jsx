import React, { useState } from 'react';

function AddWidgetModal({ addWidget, closeModal }) {
  const [widgetName, setWidgetName] = useState('');
  const [widgetType, setWidgetType] = useState('doughnut');
  const [widgetData, setWidgetData] = useState({
    labels: ['Label 1', 'Label 2'],
    datasets: [
      {
        label: 'Sample Data',
        data: [10, 20],
        backgroundColor: ['#4e79a7', '#e15759'],
      },
    ],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addWidget({
      name: widgetName,
      type: widgetType,
      data: widgetData,
    });
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add Widget</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Widget Name</label>
            <input
              type="text"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Widget Type</label>
            <select
              value={widgetType}
              onChange={(e) => setWidgetType(e.target.value)}
            >
              <option value="doughnut">Doughnut</option>
              <option value="pie">Pie</option>
              <option value="bar">Bar</option>
            </select>
          </div>
          {/* Additional fields for widget data can be added here */}
          <button type="submit">Add Widget</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
        
      </div>
    </div>
  );
}

export default AddWidgetModal;
