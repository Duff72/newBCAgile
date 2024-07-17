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

<React.Fragment><Card>
  {posts.map((post, index) => (
    <><CardHeader
        avatar={
          <Avatar src="images/cat.jpeg">
            R
          </Avatar>
        }
        
        title=<h3>{post.id}</h3>
        subheader=<p>September 14, 2016</p>
      />
      <CardContent key={index}>
        <Typography variant="h5" component="div">
          <p>{post.post}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleEdit(index)}>Edit<EditIcon></EditIcon></Button>
        <Button onClick={() => handleDelete(index)}>Delete<DeleteForeverIcon></DeleteForeverIcon></Button>
      </CardActions>
    </>
  ))}
</Card></React.Fragment>






    // <Box
    //   component="form"
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     '& > :not(style)': { m: 1, width: '50ch' }
    //   }}
    //   noValidate
    //   autoComplete="off">
    //   <div>
    //     ${posts.map((post, index) => (
    //       <div key={index}>
    //         <h3>User ID: {post.id}</h3>
    //         <p>{post.post}</p>
    //         <Button onClick={() => handleEdit(index)}>Edit</Button>
    //         <Button onClick={() => handleDelete(index)}>Delete</Button>
    //       </div>
    //     ))}
    //   </div>
    // </Box>
  );
}

// /////////////////////////////////////////////





const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Word of the Day
//       </Typography>
//       <Typography variant="h5" component="div">
//         be{bull}nev{bull}o{bull}lent
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </React.Fragment>
// );

// export default function OutlinedCard() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }