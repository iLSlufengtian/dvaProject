import React  from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

const IndexPage = ({count,dispatch}) => {
  
  return (
    
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      
      <div className={styles.button}>
        <button className={styles.button2} onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
      </div>
    </div>
  );
}

// IndexPage.propTypes = {
// };
function mapStateToProps(state) {
  console.log(state)
  return { count: state.count };
}
const HomePage = connect(mapStateToProps)(IndexPage);
export default HomePage;