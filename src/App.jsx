import React, { useState } from 'react';
import Dashboard from './Dashboard';
import "./index.css"
import dashboardData from './data';
import AddWidgetModal from './AddWidgetModal';

function App() {
  const [data, setData] = useState(dashboardData);
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const addWidget = (widget) => {
    const newData = { ...data };
    const category = newData.categories.find(cat => cat.name === currentCategory);

    if (category) {
      category.widgets.push(widget);
      setData(newData);
    }
  };

  const removeWidget = (categoryName, widgetIndex) => {
    const newData = { ...data };
    const category = newData.categories.find(cat => cat.name === categoryName);

    if (category) {
      category.widgets.splice(widgetIndex, 1);
      setData(newData);
    }
  };

  const openAddWidgetModal = (categoryName) => {
    setCurrentCategory(categoryName);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Dashboard
        categories={data.categories}
        removeWidget={removeWidget}
        openAddWidgetModal={openAddWidgetModal}
      />
      {showModal && (
        <AddWidgetModal
          addWidget={addWidget}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;


