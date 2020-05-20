import React from 'react';
import styles from '../styles/modules/button.module.scss';

class Button extends React.Component {
  render(){
    return(
      <div className={styles.button}>
        Button text
      </div>
    )
  }
}

export default Button