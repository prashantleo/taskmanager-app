import { Avatar,ListItemAvatar } from '@material-ui/core'
import React from 'react';
import {List ,ListItemText,} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import './Todo.css';
import db from '../src/firebase'
import {Button} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';




function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                       
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.text.todo} secondary="Dummy Deadline" />
                </ListItem>    
                <DeleteForeverIcon onClick={event=>{
                    db.collection('todos').doc(props.text.id).delete()}}/>       
        </List>
    )
}

export default Todo
