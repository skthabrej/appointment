import { Component } from "react";
import './index.css'

const starImg ='https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
const filledStarImg ='https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

class AppointmentItem extends Component {
    onChangeStar = () => {
        const {AppointmentDetails,toggleIsFavorite} = this.props
        const {id} = AppointmentDetails
        toggleIsFavorite(id)
    }
    render() {
        const {AppointmentDetails} = this.props
        const {title,date,starValue} = AppointmentDetails
        const starImgUrl = starValue ? filledStarImg : starImg
        return(
            <li className="list-container">
                <div className="appointment-card">
                    <div className="space-container">
                        <h1 className="list-heading">{title}</h1>
                        <button className="list-btn" onClick={this.onChangeStar}>
                            <img src={starImgUrl} alt="not-filled"/>
                        </button>
                    </div>
                    <p>{date}</p>
                </div>
            </li>
        )
    }
}
export default AppointmentItem