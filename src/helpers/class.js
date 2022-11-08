
class User {
    constructor(idOfUser, email, password, firstname, lastname, imageProfil) {
        this.idOfUser = idOfUser;
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.imageProfil = imageProfil;
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