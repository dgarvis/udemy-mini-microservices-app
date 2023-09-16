import React /*, { useState, useEffect }*/ from 'react';
//import axios from 'axios';

const CommentList = ({ /*postId*/ comments }) => {

    /*const [comments, setComments] = useState([]);

    const fetchData = async () => {
	const res = await axios.get(`http://box:4001/posts/${postId}/comments`);

	setComments(res.data);
    };

    useEffect(() => {
	fetchData();
    }, []);*/
    
    const renderedComments = comments.map(comment => {
	let content;

	if (comment.status === 'approved') {
	    content = comment.content;
	}
	if (comment.status === 'pending') {
	    content = 'this comment is awaiting moderations';
	}
	if (comment.status === 'rejected') {
	    content = 'this comment has been rejected';
	}
	return <li key={comment.id}>{content}</li>;
    });

    return <ul>
	       {renderedComments}
	   </ul>;
};

export default CommentList;
