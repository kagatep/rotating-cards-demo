import React, { Component } from 'react';
import './App.css';

import Pane from './Pane';
import Employee from './Employee';
import { IMAGES } from './images'

const BASE_CLASS = 'Panes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pane1: {
        id: 1,
        name: 'Employee 1',
        image: IMAGES[0]
      },
      pane2:  {
        id: 2,
        name: 'Employee 2',
        image: IMAGES[1]
      },
      pane3:  {
        id: 3,
        name: 'Employee 3',
        image: IMAGES[2]
      },
      rotating: false,
      duplicate: null
    };

    this.handleRotate = this.handleRotate.bind(this);
    this.panesContainer = React.createRef();
  }

  handleRotate(newPerson) {
    const employeesArray = [this.state.pane1, this.state.pane2, this.state.pane3];
    window.scrollTo(0, 0);

    for (let i=0; i<employeesArray.length; i++) {
      if (newPerson.id === employeesArray[i].id) {
        this.setState({
          duplicate: newPerson.id
        });
        return;
      }
    }

    this.setState({
      rotating: true,
      duplicate: null,
    });

    const panesContainer = this.panesContainer.current;
    panesContainer.className = `${BASE_CLASS} ${BASE_CLASS}--rotating`;
    const prevPane1 = this.state.pane1;
    const prevPane2 = this.state.pane2;

    setTimeout(() => {
      panesContainer.className = `${BASE_CLASS} ${BASE_CLASS}--adding`;

      this.setState({
        pane1: newPerson,
        pane2: prevPane1,
        pane3: prevPane2
      });

      setTimeout(() => {
        panesContainer.className = `${BASE_CLASS} ${BASE_CLASS}--rotated`;

        this.setState({
          rotating: false
        });
      }, 250);
    }, 750);
  }


  render() {
    const { pane1, pane2, pane3, rotating, duplicate } = this.state;
    return (
      <div className="App">
        <div className="AboutUs">
          <div className="Panes" ref={this.panesContainer}>
            <Pane {...pane1} isDuplicate={duplicate === pane1.id} />
            <Pane {...pane2} isDuplicate={duplicate === pane2.id} />
            <Pane {...pane3} isDuplicate={duplicate === pane3.id} />
          </div>
        </div>
        <h3>Click on an employee below to learn more</h3>
        <div className="Employees">
        {[...Array(36)].map((e, i) => {
          const imageIndex = i > 3 ? i % 4 : i;
          return <Employee key={i} id={i + 1} onRotate={rotating ? () => undefined : this.handleRotate} name={`Employee ${i + 1}`} image={IMAGES[imageIndex]} />
        })}
        </div>
      </div>
    );
  }
}

export default App;
