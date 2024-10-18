import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

class Employee extends React.Component {
  
  render() {
    return <h2> my role is developer</h2>;
  }
}

class Manager  extends React.Component{
  render(){
    return(
      <div>
        <h1>hai</h1>
        <Employee />
      </div>
    );
  }
}
 
const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<Manager />);


export default Employee;
