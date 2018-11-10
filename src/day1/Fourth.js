import React from 'react';
import './Fourth.css';

class Fourth extends React.Component {

    constructor(props){
        super(props);

        const arr = [1, 2, 3, 4, 5];
        this.state = {"title" : "Koderoom", "dataList": arr};
    }


    componentDidMount() {
        setInterval(()=>{this.updateDataListState()}, 1000);
    }

    updateDataListState() {

        let newState = this.state.dataList.map((item)=>{
            return item + 1;
        });

        this.setState({"dataList" : newState});
    }


    render(){
        const elementList = this.state.dataList.map((ielem, index)=>
            <div key={index.toString()}>
                {ielem}
            </div>
        );

        return (
            <div className="full-screen make-center textify">
                {elementList}
            </div>
        );
    }
}

export default Fourth;