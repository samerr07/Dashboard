


const dashboardData = {
  "categories": [
    {
      "name": "CSPM Executive Dashboard",
      "widgets": [
        {
          "name": "Cloud Accounts",
          "type": "doughnut",
          "data": {
            "labels": ["Connected", "Not Connected"],
            "datasets": [
              {
                "label": "Total",
                "data": [2, 2],
                "backgroundColor": ["#4e79a7", "#e15759"]
              }
            ]
          }
        },
        {
          "name": "Cloud Account Risk Assessment",
          "type": "pie",
          "data": {
            "labels": ["Failed", "Warning", "Not available", "Passed"],
            "datasets": [
              {
                "label": "Total",
                "data": [689, 681, 36, 7253],
                "backgroundColor": ["#e15759", "#ff9f40", "#f7f7f7", "#4caf50"]
              }
            ]
          }
        }
      ]
    },
    {
      "name": "CWPP Dashboard",
      "widgets": [
        {
          "name": "Top 5 Namespace Specific Alerts",
          "type": "bar",
          "data": {
            "labels": ["Namespace 1", "Namespace 2", "Namespace 3", "Namespace 4", "Namespace 5"],
            "datasets": [
              {
                "label": "Alerts",
                "data": [0, 0, 0, 0, 0],
                "backgroundColor": "#4e79a7"
              }
            ]
          }
        },
        {
          "name": "Workload Alerts",
          "type": "bar",
          "data": {
            "labels": ["Namespace 1", "Namespace 2", "Namespace 3", "Namespace 4", "Namespace 5"],
            "datasets": [
              {
                "label": "Alerts",
                "data": [0, 0, 0, 0, 0],
                "backgroundColor": "#4e79a7"
              }
            ]
          }
        }
      ]
    },
    {
      "name": "Registry Scan",
      
      "widgets": [
        {
          "id": "1",
          "type":"line",
          "title": "Image Risk Assessment",
          "totalVulnerabilities": 1470,
          "progressBars": [
            { "label": "Critical", "count": 2, "color": "red" },
            { "label": "High", "count": 150, "color": "orange" },
            { "label": "Medium", "count": 300, "color": "yellow" },
            { "label": "Low", "count": 1018, "color": "green" }
          ]
        },
        {
          "id": "2",
          "type":"line",
          "title": "Image Security Issues",
          "totalVulnerabilities": 47,
          "progressBars": [
            { "label": "Critical", "count": 2, "color": "red" },
            { "label": "High", "count": 15, "color": "orange" },
            { "label": "Medium", "count": 30, "color": "yellow" },
            { "label": "Low", "count": 10, "color": "green" }
          ]
        }
      ]
    }
  ]
}

export default dashboardData;