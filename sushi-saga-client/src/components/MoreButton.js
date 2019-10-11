import React, { Fragment } from 'react'

const MoreButton = (props) => {
    return (
    <Fragment>
      <button onClick={props.handleOtherButtonClick}>
              Left sushi!
      </button>
      <button onClick={props.handleMoreButtonClick}>
              Right sushi!
      </button>
    </Fragment>
    )
}

export default MoreButton