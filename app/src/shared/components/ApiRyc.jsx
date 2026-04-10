import React, { useEffect, useState } from 'react';

const ApiRyc = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${pages}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [pages]);

  const styles = {
    wrapper: {
      backgroundColor: '#272b33', // Fondo oscuro tipo oficial
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      padding: '40px 20px',
      color: '#f5f5f5',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    title: {
      fontSize: '3rem',
      margin: '0',
      color: '#00b5cc', // Azul característico
      textShadow: '2px 2px #97ce4c', // Verde característico
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '50px',
    },
    btnNav: (disabled) => ({
      backgroundColor: disabled ? '#3c3e44' : '#97ce4c',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '50px',
      fontWeight: '900',
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: disabled ? '#666' : '#272b33',
      transition: 'transform 0.2s, background-color 0.2s',
      textTransform: 'uppercase',
      fontSize: '0.9rem',
    }),
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1300px',
      margin: '0 auto',
    },
    card: {
      backgroundColor: '#3c3e44',
      borderRadius: '12px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
      transition: 'transform 0.3s ease',
    },
    img: {
      width: '100%',
      height: '280px',
      objectFit: 'cover',
      filter: 'grayscale(15%)',
    },
    cardContent: {
      padding: '15px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    charName: {
      margin: '0',
      fontSize: '1.5rem',
      fontWeight: '900',
      color: '#fff',
    },
    statusText: {
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontWeight: '500',
    },
    dot: (status) => ({
      height: '10px',
      width: '10px',
      backgroundColor: status === 'Alive' ? '#55cc44' : status === 'Dead' ? '#d63d2e' : '#9e9e9e',
      borderRadius: '50%',
    }),
    section: {
      marginTop: '10px',
    },
    label: {
      color: '#9e9e9e',
      fontSize: '0.9rem',
      fontWeight: '500',
      margin: '0',
    },
    location: {
      fontSize: '1.1rem',
      margin: '5px 0 0 0',
      color: '#f5f5f5',
    }
  };

  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <h1 style={styles.title}>The Rick and Morty API</h1>
      </header>

      <div style={styles.pagination}>
        <button 
          style={styles.btnNav(pages === 1)} 
          onClick={() => setPages(p => Math.max(1, p - 1))}
          disabled={pages === 1}
        >
          Anterior
        </button>
        
        <span style={{fontWeight: 'bold', fontSize: '1.1rem'}}>
          Página <span style={{color: '#97ce4c'}}>{pages}</span> de {info.pages || 0}
        </span>

        <button 
          style={styles.btnNav(pages === info.pages)} 
          onClick={() => setPages(p => p + 1)}
          disabled={pages === info.pages}
        >
          Siguiente
        </button>
      </div>

      <div style={styles.grid}>
        {characters.map((char) => (
          <div 
            key={char.id} 
            style={styles.card}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <img src={char.image} alt={char.name} style={styles.img} />
            <div style={styles.cardContent}>
              <h2 style={styles.charName}>{char.name}</h2>
              
              <div style={styles.statusText}>
                <span style={styles.dot(char.status)}></span>
                {char.status} - {char.species}
              </div>
              
              <div style={styles.section}>
                <p style={styles.label}>Última ubicación conocida:</p>
                <p style={styles.location}>{char.location.name}</p>
              </div>

              <div style={styles.section}>
                <p style={styles.label}>Género:</p>
                <p style={styles.location}>{char.gender}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiRyc;