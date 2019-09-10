import React, { Component } from 'react'
import * as $ from 'jquery';
import axios  from 'axios'

export class SurgeryModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fellowFirstName: "",
            fellowLastName: "",
            fellowId: "",
            surgeonName: "",
            anesthesiologistName: "",
            beginTime: "",
            serviceType: "",
            cleaningTeam: "",
            roomNumber: ""
        }

        this.handelChange = this.handelChange.bind(this);
        this.addEmergencySurgery = this.addEmergencySurgery.bind(this);
    }

    handelChange(e) {
        //console.log("input is: ", e.target.value)
        this.setState({[e.target.id]: e.target.value})
    }

    addEmergencySurgery() {
        //let data = JSON.stringify(this.state);
        // alert("Details: " + data)
        //console.log("Emergemcy details: ", data)
        let data = this.state;
        let count = 0
        const tifOptions = Object.keys(data).map(key => {
            console.log("key", key)
            if (data[key] === "")
                count++;
        })
        if (count === 0) {
            window.$("#emergencyModal").modal('hide');
            this.setState({ 
                fellowFirstName: "",
                fellowLastName: "",
                fellowId: "",
                surgeonName: "",
                anesthesiologistName: "",
                beginTime: "",
                serviceType: "",
                cleaningTeam: "",
                roomNumber: ""
            })

        // axios.post('/user', data)
        //       .then(function (response) {
        //         console.log(response);
        //       })
        //       .catch(function (error) {
        //         console.log(error);
        //       });
        }
        else { //count > 0
            alert("Missing details")
            console.log("count ", count)
        }
        

    }


    render() {
        return (
            <div className="modal fade" id="emergencyModal" tabIndex="-1" role="dialog" data-backdrop="false" >
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ background: "whitesmoke" }}>

                        <div className="modal-header p-1 mkHeader">
                            <h6 className="modal-title p-1 pr-3 fc-gray font-weight-light">
                                Emergency Surgery Details
                            </h6>
                            <div className="row m-0 p-0 ">
                                <button type="button" className="close m-0 p-0 col-1" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>

                        <div className="modal-body ">
                            <form autoComplete="off">
                                <div className="row">
                                    <div className="col">
                                        <label style={{ marginRight: "10px" }}>Fellow first name:</label>
                                        <input type="text" id="fellowFirstName" className="form-control" value={this.state.fellowFirstName} onChange={this.handelChange} />
                                    </div>
                                    <div className="col">
                                        <label style={{ marginRight: "10px" }}>Fellow last name:</label>
                                        <input type="text" id="fellowLastName" className="form-control" value={this.state.fellowLastName} onChange={this.handelChange} />
                                    </div>
                                    <div className="col">
                                        <label style={{ marginRight: "60px" }}>Fellow id:</label>
                                        <input type="text" id="fellowId" className="form-control" value={this.state.fellowId} onChange={this.handelChange} />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <label style={{ marginRight: "100px" }}>Surgeon name:</label>
                                        <input type="text" id="surgeonName" className="form-control" value={this.state.surgeonName} onChange={this.handelChange} />
                                    </div>
                                    <div className="col">
                                        <label style={{ marginRight: "50px" }}>Anesthesiologist name:</label>
                                        <input type="text" id="anesthesiologistName" className="form-control" value={this.state.anesthesiologistName} onChange={this.handelChange} />
                                    </div>

                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <label style={{ marginRight: "130px" }}>Begin time:</label>
                                        <input type="time" id="beginTime" className="form-control" value={this.state.beginTime} onChange={this.handelChange} />
                                    </div>
                                    <div className="col">
                                        <label style={{ marginRight: "120px" }}>Service Type:</label>
                                        <input type="text" id="serviceType" className="form-control" value={this.state.serviceType} onChange={this.handelChange} />
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <label style={{ marginRight: "110px" }}>Cleaning team:</label>
                                        <input type="text" id="cleaningTeam" className="form-control" value={this.state.cleaningTeam} onChange={this.handelChange} />
                                    </div>
                                    <div className="col">
                                        <label style={{ marginRight: "110px" }}>Room number:</label>
                                        <input type="number" id="roomNumber" className="form-control" value={this.state.roomNumber} onChange={this.handelChange} />
                                    </div>

                                </div>
                            </form>
                        </div>

                        <div className="modal-footer" style={{ justifyContent: "space-between" }}>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.addEmergencySurgery}>Add</button>
                        </div>

                    </div>
                </div>
            </div>
        )
        
    }
}

export default SurgeryModal
