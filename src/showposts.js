// ShowPosts.js
import './App.css';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Typography from '@mui/material/Typography';
import './user.js';

let currentUser = function() {

};

export default function ShowPosts({ posts, editPost, deletePost }) {

  const handleEdit = (index) => {
    const updatedPost = prompt("Edit your post:", posts[index].post);
    if (updatedPost) {
      editPost(index, { ...posts[index], post: updatedPost });
    }
  };

  const handleDelete = (index) => {
    deletePost(index);
  };

  return (
    <React.Fragment>
      {posts.map((post, index) => (
        <Card key={index} sx={{ marginBottom: 2 }}>
          <CardHeader
            avatar={
              <Avatar src="images/cat.jpeg">
                R
              </Avatar>
            }
            title={<Typography variant="h6">{post.id}</Typography>}
            subheader={<Typography variant="body2">{new Date(post.dateCreated).toLocaleString()}</Typography>}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {post.post}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tags: {post.tags}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => handleEdit(index)}>
              Edit<EditIcon />
            </Button>
            <Button onClick={() => handleDelete(index)}>
              Delete<DeleteForeverIcon />
            </Button>
          </CardActions>
        </Card>
      ))}
    </React.Fragment>
  );
}
