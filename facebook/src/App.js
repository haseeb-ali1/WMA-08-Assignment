import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have some CSS for styling

const FacebookPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10); // Initial number of posts to load

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts?limit=${limit}`);
        const data = await response.json();
        
        if (data && data.posts) {
          setPosts(data.posts);
        } else {
          throw new Error('Invalid data structure');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  const loadMorePosts = () => {
    setLimit(prev => prev + 5); // Load 5 more posts
  };

  if (loading && posts.length === 0) {
    return <div className="loading-spinner">Loading posts...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="facebook-posts-container">
      {/* Create Post Box (similar to Facebook) */}
      <div className="create-post-box">
        <div className="post-input">
          <img 
            src="https://randomuser.me/api/portraits/men/1.jpg" 
            alt="User" 
            className="user-avatar"
          />
          <input 
            type="text" 
            placeholder="What's on your mind?" 
            className="post-input-field"
          />
        </div>
        <div className="post-options">
          <button className="post-option">
            <i className="photo-icon"></i> Photo/Video
          </button>
          <button className="post-option">
            <i className="feeling-icon"></i> Feeling/Activity
          </button>
        </div>
      </div>

      {/* Posts List */}
      {posts.map(post => (
        <div key={post.id} className="post-card">
          {/* Post Header */}
          <div className="post-header">
            <img 
              src={`https://randomuser.me/api/portraits/${post.userId % 2 === 0 ? 'women' : 'men'}/${post.userId % 50}.jpg`}
              alt="User" 
              className="post-user-avatar"
            />
            <div className="post-user-info">
              <span className="post-username">User {post.userId}</span>
              <span className="post-time">2 hrs ago · <i className="privacy-icon"></i></span>
            </div>
          </div>

          {/* Post Content */}
          <div className="post-content">
            <p>{post.body}</p>
            {post.tags && post.tags.length > 0 && (
              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">#{tag}</span>
                ))}
              </div>
            )}
          </div>

          {/* Post Reactions */}
          <div className="post-reactions">
            <div className="reactions-count">
              <span>👍 42</span>
              <span>💬 12 comments</span>
              <span>↗️ 3 shares</span>
            </div>
          </div>

          {/* Post Actions */}
          <div className="post-actions">
            <button className="post-action">
              <i className="like-icon"></i> Like
            </button>
            <button className="post-action">
              <i className="comment-icon"></i> Comment
            </button>
            <button className="post-action">
              <i className="share-icon"></i> Share
            </button>
          </div>
        </div>
      ))}

      {/* Load More Button */}
      {posts.length > 0 && (
        <button className="load-more-btn" onClick={loadMorePosts}>
          Load More Posts
        </button>
      )}
    </div>
  );
};

export default FacebookPosts;