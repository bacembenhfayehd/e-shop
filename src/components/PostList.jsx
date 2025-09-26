import axios from "axios";
import React, { useEffect, useState } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // loader
  const [error, setError] = useState(null); // gestion erreur

  useEffect(() => {
    //appel de l'api
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data); // mise a jour du remote state
        setLoading(false);
      })
      .catch((err) => {
        setError("erreur lors du chargement des posts");
        setLoading(false);
      });
  }, []); // il s'excute une seule fois lors de montage (mount) de composant PostList

  if(loading) return <p>chargement ...</p>
  if(error) return <p>{error}</p>
  return (
    <div>
      <h2>Liste des posts</h2>
      <ul>
        {posts.map((p) => (
            <li key={p.id}>
                <strong>{p.title}</strong>
                
            </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
