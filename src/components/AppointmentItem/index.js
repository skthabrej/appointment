import { Component } from "react";
import './index.css'

class AppointmentItem extends Component {
    render() {
        const {AppointmentDetails,toggleIsFavorite} = this.props
        const {title,date,id} = AppointmentDetails

        const onToggleButton = () => {
            toggleIsFavorite(id)
        }
        
        return(
            <li className="list-container">
                <div className="appointment-container">
                    <h1 className="list-heading">Appointments</h1>
                    <button className="list-button">started</button>
                    <div className="appointment-card">
                        <h1>{title}</h1>
                        <button><img src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png" alt="star" onClick={this.onToggleButton}/></button>
                        <p>{date}</p>
                    </div>
                </div>
            </li>
        )
    }
}
export default AppointmentItem