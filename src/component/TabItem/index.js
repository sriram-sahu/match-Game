import './index.css'

const TabItem = props => {
  const {tabItem, isActiveTab, updateActiveTab} = props
  const {tabId, displayText} = tabItem

  const onClickUpdate = () => {
    updateActiveTab(tabId)
  }

  const isActive = isActiveTab ? 'active-tab' : ''

  return (
    <li>
      <button
        type="button"
        onClick={onClickUpdate}
        className={`tab-btn ${isActive}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
