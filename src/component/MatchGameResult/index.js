import './index.css'

const MatchGameResult = props => {
  const {score, updateProgressStatus} = props

  const updateGameStatus = () => {
    updateProgressStatus()
  }

  return (
    <div className="card-result">
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p>YOUR SCORE</p>
        <h1>{score}</h1>
        <button
          type="button"
          className="play-again-btn"
          onClick={updateGameStatus}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default MatchGameResult
