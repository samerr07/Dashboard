import React from 'react';


const LineProgress = ({data}) => {
    console.log(data)
        const totalVulnerabilities = data.totalVulnerabilities;

  return (
    <div className="widget-container">
      <h2 className="widget-title">{data.title}</h2>
      <p className="widget-total">Total Vulnerabilities: {totalVulnerabilities}</p>
      <div className="progress-bars">
        {data.progressBars.map((bar, index) => (
          <div key={index} className="progress-bar-container">
            <div className="progress-labels">
              <span className="label">{bar.label}</span>
              <span className="count">{bar.count}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  backgroundColor: bar.color,
                  width: `${(bar.count / totalVulnerabilities) * 100}%`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
   
};

export default LineProgress;
