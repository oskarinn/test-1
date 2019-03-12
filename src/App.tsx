import React, { Component } from 'react';
import './App.css';
import Navigation  from './components/Navitation';
import { Carer } from './models/Carer';
import CarerForm from './components/CarerForm';
import CarerList from './components/CarerList';
import initList from './data/carer-list.json';
import { IAppState } from './constants/app-state';
// import carerStore from './store/carer-store';
// import { actionsTypes } from './constants/actions-type';

class App extends Component<any, IAppState> {

  constructor(props: any) {
    super(props);

    this.state = {
      carers : initList
    };
    
    // this.addNewCarer = this.addNewCarer.bind(this);

    /* initList.map((item) => {
      carerStore.dispatch(
        {
          type: actionsTypes.ADD_NEW_CARER,
          carer: item
        }
      );
      console.log("loading data: ", item);
    }); */

    /* carerStore.subscribe(() => {
      this.setState(
          {
            carers: carerStore.getState().carers
          }
      )
      console.log("subscribe to data refresh...");
    }); */
  }

  /* addNewCarer(carer: Carer) {
    this.setState(
      {
        carers: [...this.state.carers, carer]
      }
      //, () => console.log(this.state)
    );
  } */

  render() {
    return (
      <div className="">
        <header className="">
          <Navigation title="Care Your Pet"></Navigation>
        </header>

        <div className="row">
          <div className="col s12 m6">
            <CarerForm />
          </div>

          <div className="col s12 m6">
            <CarerList carersInit={this.state.carers} />  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
