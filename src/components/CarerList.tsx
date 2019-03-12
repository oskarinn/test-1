import React from 'react';
import { Carer } from '../models/Carer';
import carerStore from '../store/carer-store';

interface ICarerListProps {
    carersInit?: Carer[]
}

class CarerList extends React.Component<ICarerListProps, any> {
    constructor(props: ICarerListProps) {
        super(props);

        this.state = {
            carers: props.carersInit? props.carersInit : []
        };

        carerStore.subscribe(() => {
            this.setState(
                {
                    carers: carerStore.getState().carers
                }
            );
            console.log("refresh from store...");
        });
    }

    render(): JSX.Element {
        const List =  this.state.carers.map( (carer: Carer, i: number) => {
            return (
                <a href={'mailto:' + carer.email} className="collection-item" key={carer.id}>
                    <div className="row">
                        <div className="col s8">
                            <span className="blue-text">
                                {carer.name}
                            </span>
                            <span className="black-text">
                                <p>{carer.email}</p>
                            </span>
                        </div>
                        <div className="col s4">
                            <span className="black-text"><p>{carer.country}</p></span>
                            <span className="black-text"><p>{carer.phone}</p></span>
                        </div>
                    </div>
                </a>
            )
        });

        return (
            <div className="card">
                <div className="card-content">
                  <span className="card-title blue-text">{ 'Carer List - ' + this.state.carers.length }</span>
                  <div className="collection">
                    {List}
                  </div>
                </div>
              </div>
        );
    } 
}

export default CarerList;