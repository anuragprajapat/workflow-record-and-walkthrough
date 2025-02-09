import React from 'react';
import styles from './ListItem.module.css';
import {
    Button
} from 'react-bootstrap';

export const ListItem = (props)=> {
    return (
        <div className={styles.container}>
            {/* Task Name */}
            <div className={styles.TaskNameContainer}>
                <i className="fa fa-arrow-right" style={{paddingTop: 3, paddingRight: 4}}></i>
                <span style={{textAlign: 'left'}}>{props.item.taskName}</span>
            </div>

            {/* Actions Container */}
            <div id="action-container" className={styles.actionsContainer}>
                <Button variant="success" className={styles.ButtonContainer} style={{marginRight: 3}} size="sm" onClick={()=> props.handleTaskPlay(props.item.taskId)}> 
                    <i className="fa fa-play" style={{fontSize:'12px'}}></i>
                </Button>
                <Button variant="danger" className={styles.ButtonContainer} size="sm" onClick={props.handleDeleteTask}>
                    <i className="fa fa-trash" style={{fontSize:'13px'}}></i>
                </Button>
            </div>

            <hr/>
        </div>
    )
}