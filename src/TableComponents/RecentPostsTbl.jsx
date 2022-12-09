import { useState } from "react";

const RecentPostsTbl = function  (props){
    let posts = props.posts;
    posts.sort((a, b) =>{return b.date.localeCompare(a.date);});
    const[color, setColor] = useState('red');
    return(
        <div class="recentPostContain">
        <table name="recentPostTbl">
          <thead>Recent Posts</thead>
          <tbody>
            <tr id="recentPostsHeader">
              <th>autor</th>
              <th>date</th>
              <th>rate</th>
            </tr>
            {posts.map((post) => 
              <tr className="dataRows">
                <td>{post.author}</td>
                <td>{post.date}</td>
                <td>{post.rate}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
}


export default RecentPostsTbl;