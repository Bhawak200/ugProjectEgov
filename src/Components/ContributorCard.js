import axios from "axios"
import { useState, useEffect } from "react"


const ContributorCard = (props) => {

  const { data } = props;

  return (
    <div className="contributor-container">

      <tr className="contributor-tr">
        <td className="card__detail--profile">👦🏽</td>
        <td className="card__title">{data.username}</td>
        <td className="card__detail--coins">0</td>
        <td className="card__detail--earned">💰</td>
      </tr>


    </div>

  )
}

export default ContributorCard;