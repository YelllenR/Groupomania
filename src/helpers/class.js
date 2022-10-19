const uuid = require('uuid');

class User {
    userId = new uuid.v4();
    constructor(userId, email, password, firstName, lastName, profilImage) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profilImage = profilImage;
    }
}

class Posts {
    constructor(postId, userId, post, dateOfPost, reactions, modificationDatePost) {
        this.postId = postId;
        User.userId = userId;
        this.post = post;
        this.dateOfPost = dateOfPost;
        this.reactions = reactions;
        this.modificationDatePost = modificationDatePost;
    }
}

class Comments {
    constructor(commentId, postId, userId, comments, modificationDateComment, creationDateComment) {
        this.commentId = commentId; 
        Posts.postId = postId; 
        User.userId = userId; 
        this.comments = comments; 
        this.modificationDateComment = modificationDateComment; 
        this.creationDateComment = creationDateComment;
    }
}

export default{
    User, 
    Posts, 
    Comments
};