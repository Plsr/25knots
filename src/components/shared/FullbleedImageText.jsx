import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import SpacingInset from '../helpers/spacing/SpacingInset.jsx'

const FullbleedImageText = ({ htmlText, imageName }) => {
  /* eslint-disable */
  // eslint needs to be disabled because it doesn't recognize webpacks' require
  return (
    <SpacingInset size='l' >
      <div className={css(styles.flexContainer)}>
        { htmlText }
        { imageName &&
          <img className={css(styles.image)} src={require('../../images/' + imageName)} alt=""/>
        }
      </div>
    </SpacingInset>
  )
}

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image: {
    maxHeight: '80vh'
  }
})

export default FullbleedImageText
