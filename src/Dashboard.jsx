


import React from 'react';
import { Doughnut, Pie, Bar } from 'react-chartjs-2';
import LineProgress from './LineProgress';
import 'chart.js/auto';

function Dashboard({ categories, removeWidget, openAddWidgetModal }) {
  return (
    <div className="dashboard">
      {categories.map((category, catIndex) => (
        <div key={catIndex} className="category">
          <div className="category-header">
            <h2>{category.name}</h2>
            <button onClick={() => openAddWidgetModal(category.name)}>+ Add Widget</button>
          </div>
          <div className="widgets">
            {category.widgets.map((widget, widgetIndex) => (
              <div key={widgetIndex} className="widget">
                <div className="widget-header">
                  <h3 style={{fontWeight:"bold"}}>{widget.name}</h3>
                  <button onClick={() => removeWidget(category.name, widgetIndex)}>✕</button>
                </div>
                {widget.type === 'doughnut' && <Doughnut data={widget.data} />}
                {widget.type === 'pie' && <Pie data={widget.data} />}
                {widget.type === 'bar' && <Bar data={widget.data} />}
                {widget.type === 'line' && <LineProgress data={widget} />}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
