import React from "react";
import carerStore from "../store/carer-store";
import { Carer }  from "../models/Carer";
import { actionsTypes }  from '../constants/actions-type';

class CarerForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: "",
      country: "",
      phone: "",
      email: ""
    };
  }

  onChangeText(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { id, value } = e.target;
    // console.log(id, value);
    this.setState(
      {
        [id]: value
      }
      //, () => console.log(this.state)
    );

    e.target.reportValidity();
  }

  getNewID(): string {
    return new Date().getTime().toString();
  }

  addNewCarer() {
    const newCarer: Carer = {
      id: this.getNewID(),
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      country: this.state.country
    };

    // Llama la funcion reductora del store de estado global (REDUX)
    carerStore.dispatch({
        type: actionsTypes.ADD_NEW_CARER,
        carer: newCarer
    }); 
    
    console.log("Adding new carer...");

    this.setState({
      name: "",
      country: "",
      phone: "",
      email: ""
    });
  }

  onSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    //console.log("sending data...");
    e.preventDefault();

    this.addNewCarer();
  }

  render(): JSX.Element {
    return (
      <form id="formAddCarer" onSubmit={e => this.onSubmitForm(e)}>
        <div className="card">
          <div className="card-content">
            <span className="card-title blue-text">Add New Carer</span>
            <div className="row">
              <div className="input-field blue-text">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="name"
                  onChange={e => this.onChangeText(e)}
                  value={this.state.name}
                  type="text"
                  className="validate"
                  required
                  autoFocus
                />
                <label className="active" htmlFor="name">
                  Name *
                </label>
                <span
                  className="helper-text"
                  data-error="Required"
                  data-success=""
                />
              </div>
              <div className="input-field blue-text">
                <i className="material-icons prefix">phone</i>
                <input
                  id="phone"
                  onChange={e => this.onChangeText(e)}
                  type="text"
                  className="validate"
                  required
                  pattern="[0-9]+"
                  value={this.state.phone}
                />
                <label htmlFor="phone">Telephone * </label>
                <span
                  className="helper-text"
                  data-error="Phone number invalid, only numbers!"
                />
              </div>
              <div className="input-field blue-text">
                <i className="material-icons prefix">email</i>
                <input
                  id="email"
                  onChange={e => this.onChangeText(e)}
                  type="email"
                  className="validate"
                  required
                  value={this.state.email}
                />
                <label htmlFor="email">E-mail *</label>
                <span className="helper-text" data-error="Format invalid!" />
              </div>
              <div className="input-field blue-text">
                <i className="material-icons prefix">assistant_photo</i>
                <input
                  id="country"
                  onChange={e => this.onChangeText(e)}
                  type="text"
                  className="validate"
                  required
                  value={this.state.country}
                />
                <label htmlFor="country">Country *</label>
                <span
                  className="helper-text"
                  data-error="Required"
                  data-success=""
                />
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              type="submit"
              className="waves-effect waves-light btn blue lighten-1"
            >
              <i className="material-icons right">add</i>Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default CarerForm;
