import React from 'react';
import styles from '../../global-styles/loading.module.scss';
import { DotLoader } from 'react-spinners'

const Loading = () =>{
    return(
        <div className={styles.loading}>
            <DotLoader color="#777777" />
        </div>
    )
}

export default Loading;