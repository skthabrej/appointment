import { Component } from "react";
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
    state = {title: '', date: '', isFilterActive: false, id:uuidv4(),appointmentsList: []}

    toggleIsFavorite = id => {
        this.setState(prevState => ({
            appointmentsList: prevState.appointmentsList.map(eachAppointment => {
            if (id === eachAppointment.id) {
              return {...eachAppointment, isFilterActive: !eachAppointment.isFilterActive}
            }
            return eachAppointment
          }),
        }))
      }

    onInputName = event => {
        this.setState({title:event.target.value})
    }

    onInputDate = event => {
        this.setState({date:event.target.value})
    }

    onSubmitData = event => {
        event.preventDefault()
        const {title, date} = this.state
        const newData = {
          title,
          date,
          isFilterActive: false,
        }
    
        this.setState(prevState => ({
            appointmentsList: [...prevState.appointmentsList, newData],
            title: '',
            date: '',
        }))
      }
      
    render() {
        const {appointmentsList,title,date,isFilterActive} = this.state
        const buttonColor = isFilterActive ? 'yellow-color' : null
        return (
            <div className="bg-container">
                <div className="card-container">
                    <div className="items-container">
                    <form className="form" onSubmit={this.onSubmitData}>
                        <h1 className="heading">Add Appointment</h1>
                        <label htmlFor="title" className="label-names">Name</label><br/>
                        <input type='text' className="input" id="title" value={title} onChange={this.onInputName}/><br/>
                        <label htmlFor="date" className="label-names" >Date</label><br/>
                        <input type='text' className="input" id="date" value={date} onChange={this.onInputDate}/><br/>
                        <button className="btn-style" type="submit">Add</button>
                    </form>
                    <img src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png " alt='appointment' className="pic"/>
                    </div>
                    <hr className="line"/>
                    <div className="appointment-container">
                        <h1 className="list-heading">Appointments</h1>
                        <button className="list-button">started</button>
                    </div>
                    {appointmentsList.map(eachAppointment => (
                        <AppointmentItem
                        AppointmentDetails={eachAppointment}
                        key={eachAppointment.id}
                        toggleIsFavorite={this.toggleIsFavorite}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default Appointments