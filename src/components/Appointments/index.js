import { Component } from "react";
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
    state = {title: '', date: '', isFilterActive: false, appointmentsList: []}

    onInputName = event => {
        const {title} = this.state
        this.setState({title:event.target.value})
    }

    onInputDate = event => {
        const {date} = this.state
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
          contactsList: [...prevState.appointmentsList, newData],
          name: '',
          mobileNo: '',
        }))
      }

    render() {
        const {appointmentsList,title,date} = this.state
        return (
            <div className="bg-container">
                <div className="card-container">
                    <div className="items-container">
                    <form className="form" onSubmit={this.onSubmitData}>
                        <h1 className="heading">Add Appointment</h1>
                        <label htmlFor="title" className="label-names">Name</label><br/>
                        <input type='text' className="input" id="title" value={title} onChange={this.onInputName}/><br/>
                        <label htmlFor="date" className="label-names" >Date</label><br/>
                        <input type='date' className="input" id="date" value={date} onChange={this.onInputDate}/><br/>
                        <button className="btn-style" type="submit">Add</button>
                    </form>
                    <img src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png " alt='appointment' className="pic"/>
                    </div>
                    <hr className="line"/>
                    {appointmentsList.map(eachAppointment => (
                        <AppointmentItem
                        AppointmentDetails={eachAppointment}
                        key={eachAppointment}
                        toggleIsFavorite={this.toggleIsFavorite}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default Appointments