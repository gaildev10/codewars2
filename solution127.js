//Likes vs Dislikes

const likeOrDislike = buttons => 
  buttons.reduce((p,c) => c == p ? Nothing : c,Nothing)
