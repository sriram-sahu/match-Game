import './index.css'

const Navbar = props => {
  const {score, seconds} = props

  return (
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="logo"
      />
      <div className="sub-container">
        <p className="para">
          Score:<span className="span-ele">{score}</span>
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer"
        />
        <p className="span-ele">{seconds} secs</p>
      </div>
    </div>
  )
}

export default Navbar
