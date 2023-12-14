import { Link } from "react-router-dom";
const Post = ({ post }) => {
    
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
    <div className="card-header bg-dark text-white">
        <Link to={`/posts/${post.id}`}>{post.FirstName}</Link>
    </div>
    <ul className="list-group list-group-flush bg-dark text-white">
        <li className="list-group-item bg-dark text-white">{ post.LastName}</li>
        <li className="list-group-item bg-dark text-white"><img src={post.Photo} alt="" className="img-fluid" /></li>
    </ul>
</div>
      );
}
 
export default Post;