import React, { useState, useEffect } from 'react';
import './App.css';
import FacebookNavbar from './components/Nav';

function App() {
  return (
    <div className="app">
      <FacebookNavbar />
      {/* Your other components */}
    </div>
  );
}
const SocialPost = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedComments, setExpandedComments] = useState({});
  const [loadmore, setLoadMore] = useState(3);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const postsResponse = await fetch('https://dummyjson.com/posts');
        if (!postsResponse.ok) throw new Error('Failed to fetch posts');
        const postsData = await postsResponse.json();
        const commentsResponse = await fetch('https://dummyjson.com/comments');
        if (!commentsResponse.ok) throw new Error('Failed to fetch comments');
        const commentsData = await commentsResponse.json();
        const enhancedPosts = postsData.posts.map(post => {
          const postComments = commentsData.comments
            .filter((_, index) => index % 5 === post.id % 5)
            .slice(0, Math.floor(Math.random() * 8) + 2); 
          return {
            ...post,
            likes: Math.floor(Math.random() * 500),
            views: Math.floor(Math.random() * 3000),
            comments: postComments,
            user: {
              name: `User${post.userId}`,
              avatar: `https://i.pravatar.cc/150?img=${post.userId}`
            }
          };
        });
        setPosts(enhancedPosts);
        setComments(commentsData.comments);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };
  const toggleComments = (postId) => {
    setExpandedComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };
  if (loading) return <div className="loading">Loading posts...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  return (
    <div className="app">
      <FacebookNavbar />
    <div className="social-feed">
      {posts.slice(0, loadmore).map(post => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <div className="user-info">
              <span className="user-name">{post.user.name}</span>
              <span className="post-time">2 hrs ago</span>
            </div>
          </div>
          <div className="post-content">
            <p>{post.body}</p>
            {post.tags && (
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">#{tag}</span>
                ))}
              </div>
            )}
          </div>
          <div className="post-stats">
            <div className="stat">
              <span>👍 {post.likes}</span>
            </div>
            <div className="stat">
              <span>👁️ {post.views} views</span>
            </div>
            <div className="stat">
              <span>💬 {post.comments.length} comments</span>
            </div>
          </div>
          <div className="post-actions">
            <button onClick={() => handleLike(post.id)}>Like</button>
            <button onClick={() => toggleComments(post.id)}>
              {expandedComments[post.id] ? 'Hide Comments' : 'Show Comments'}
            </button>
            <button>Share</button>
          </div>
          {expandedComments[post.id] && (
            <div className="comments-section">
              {post.comments.map(comment => (
                <div key={comment.id} className="comment">
                  <div className="comment-content">
                    <p className="comment-text">{comment.body}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <button
        className="load-more"
        onClick={() => setLoadMore(loadmore + 3)}
        style={{ display: 'flex', justifySelf: 'center', margin: '20px', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Load More
      </button>
    </div>
    </div>
  );
};

export default SocialPost;