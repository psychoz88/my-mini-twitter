import React from 'react';
import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        const {id} = item;
        return (
            <li className='list-group-item'>
                <PostListItem
                label={item.label}
                important={item.important}
                like={item.like}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)}
                />
            </li>
        )
    });

    return (
        <ListGroup className="app=list">
            {elements}
        </ListGroup>
    )
}
export default PostList;