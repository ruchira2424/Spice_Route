import React, { useState } from 'react';
import { Search, Clock, Star } from 'lucide-react';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const foodItems = [/* ...same food items... */];
  const categories = ['all', 'North Indian', 'Italian', 'Japanese', 'Chinese', 'South Indian'];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc', // Light blue-gray background
    },
    heroSection: {
      position: 'relative',
      height: '500px', // Increased height for more impact
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(17, 24, 39, 0.7)', // Darker, more sophisticated overlay
      backdropFilter: 'blur(4px)', // Subtle blur effect
    },
    heroContent: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    heroTitle: {
      fontSize: '56px',
      fontWeight: '800',
      color: 'white',
      marginBottom: '24px',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)',
      letterSpacing: '-0.02em'
    },
    heroSubtitle: {
      fontSize: '20px',
      color: '#e2e8f0',
      marginBottom: '32px',
      maxWidth: '800px',
      lineHeight: '1.6',
      fontWeight: '400'
    },
    searchContainer: {
      display: 'flex',
      gap: '16px',
      width: '100%',
      maxWidth: '700px'
    },
    searchInputWrapper: {
      position: 'relative',
      flex: 1
    },
    searchInput: {
      width: '100%',
      height: '40px', // Taller input
      paddingLeft: '48px',
      paddingRight: '16px',
      borderRadius: '12px',
      border: '2px solid rgba(255,255,255,0.1)',
      fontSize: '16px',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      transition: 'all 0.2s ease',
      outline: 'none',
    },
    searchButton: {
      height: '56px',
      padding: '0 32px',
      backgroundColor: '#6366f1', // Indigo primary color
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'all 0.2s ease',
      boxShadow: '0 2px 4px rgba(99, 102, 241, 0.2)',
      marginLeft:'60px',
    },
    mainContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '48px 20px'
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '24px',
      color: '#1e293b', // Slate-800
      letterSpacing: '-0.02em'
    },
    categoriesContainer: {
      display: 'flex',
      gap: '12px',
      overflowX: 'auto',
      paddingBottom: '16px',
      marginBottom: '48px'
    },
    categoryButton: (isSelected) => ({
      padding: '12px 24px',
      borderRadius: '12px',
      border: 'none',
      backgroundColor: isSelected ? '#6366f1' : '#fff',
      color: isSelected ? 'white' : '#64748b',
      cursor: 'pointer',
      fontSize: '15px',
      fontWeight: '500',
      transition: 'all 0.2s ease',
      whiteSpace: 'nowrap',
      boxShadow: isSelected 
        ? '0 4px 12px rgba(99, 102, 241, 0.2)' 
        : '0 2px 4px rgba(0, 0, 0, 0.05)',
    }),
    foodGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '24px'
    },
    foodCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease'
    },
    foodImage: {
      width: '100%',
      height: '220px',
      objectFit: 'cover'
    },
    foodContent: {
      padding: '20px'
    },
    foodName: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '8px',
      color: '#1e293b', // Slate-800
    },
    restaurantName: {
      fontSize: '15px',
      color: '#64748b', // Slate-500
      marginBottom: '16px'
    },
    foodMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 0'
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      backgroundColor: '#f0fdf4', // Green-50
      color: '#16a34a', // Green-600
      padding: '6px 12px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500'
    },
    deliveryTime: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      color: '#64748b', // Slate-500
      fontSize: '14px',
      fontWeight: '500'
    },
    price: {
      fontWeight: '600',
      color: '#1e293b', // Slate-800
      fontSize: '16px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay} />
        <div style={{
          ...styles.heroSection,
          backgroundImage: 'url("/api/placeholder/1200/400")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Savor the Extraordinary</h1>
            <p style={styles.heroSubtitle}>
              Discover culinary excellence with our handpicked selection of premium restaurants, 
              delivering exceptional dining experiences to your door
            </p>
            <div style={styles.searchContainer}>
              <div style={styles.searchInputWrapper}>
                <Search style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#94a3b8',
                  width: '24px',
                  height: '24px'
                }} />
                <input
                  type="text"
                  placeholder="Search for restaurants or cuisines"
                  style={styles.searchInput}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#6366f1';
                    e.target.style.boxShadow = '0 0 0 4px rgba(99, 102, 241, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              <button 
                style={styles.searchButton}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#4f46e5';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#6366f1';
                  e.target.style.transform = 'none';
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.mainContent}>
        <div>
          <h2 style={styles.sectionTitle}>Explore Categories</h2>
          <div style={styles.categoriesContainer}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={styles.categoryButton(selectedCategory === category)}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.backgroundColor = '#f8fafc';
                    e.target.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.backgroundColor = '#fff';
                    e.target.style.transform = 'none';
                  }
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 style={styles.sectionTitle}>Trending Now</h2>
          <div style={styles.foodGrid}>
            {foodItems
              .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
              .map(item => (
                <div 
                  key={item.id} 
                  style={styles.foodCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    style={styles.foodImage}
                  />
                  <div style={styles.foodContent}>
                    <h3 style={styles.foodName}>{item.name}</h3>
                    <p style={styles.restaurantName}>{item.restaurant}</p>
                    <div style={styles.foodMeta}>
                      <div style={styles.rating}>
                        <Star size={16} />
                        <span>{item.rating}</span>
                      </div>
                      <div style={styles.deliveryTime}>
                        <Clock size={16} />
                        <span>{item.deliveryTime}</span>
                      </div>
                      <div style={styles.price}>₹{item.price}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;