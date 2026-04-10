import React, { useEffect, useState } from 'react';
import axios from "axios";

const ApiRyc_Axios = () => {
    const [characters, setCharacters] = useState([]);
    const [pages, setPages] = useState(1);
    const [info, setInfo] = useState({});
    const [query, setQuery] = useState("");

    useEffect(() => {
        const source = axios.CancelToken.source();
        const getCharacters = async () => {
            try {
                const response = await axios.get(
                    "https://rickandmortyapi.com/api/character/",
                    {
                        params: { page: pages, name: query },
                        cancelToken: source.token
                    }
                );
                setCharacters(response.data.results);
                setInfo(response.data.info);
            } catch (error) {
                if (axios.isCancel(error)) return;
                if (error.response?.status === 404) {
                    setCharacters([]);
                    setInfo({ pages: 0 });
                }
            }
        };
        getCharacters();
        return () => source.cancel();
    }, [pages, query]);

    const colors = {
        goldGradient: "linear-gradient(135deg, #d4af37 0%, #fcf6ba 45%, #b89552 100%)",
        goldSolid: "#b89552",
        dark: "#1a1a1a",
        bg: "#fdfdfb", 
        // Colores VIBRANTES
        alive: "#00ff88", // Verde neón elegante
        dead: "#ff3e3e",  // Rojo eléctrico
        unknown: "#888ea8"
    };

    const styles = {
        container: {
            padding: "60px 20px",
            textAlign: "center",
            minHeight: "100vh",
            backgroundColor: colors.bg,
            color: colors.dark,
            fontFamily: "'Poppins', sans-serif",
        },
        title: {
            fontSize: "2.5rem",
            fontWeight: "800",
            marginBottom: "10px",
            background: colors.goldGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "6px",
            textTransform: "uppercase",
            filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.1))"
        },
        searchContainer: {
            maxWidth: "350px",
            margin: "0 auto 60px auto",
        },
        searchInput: {
            width: "100%",
            padding: "15px 25px",
            backgroundColor: "#fff",
            border: `1px solid ${colors.goldSolid}40`,
            borderRadius: "50px",
            color: colors.dark,
            fontSize: "1rem",
            outline: "none",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(184, 149, 82, 0.15)",
            transition: "all 0.3s ease",
        },
        pagination: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "25px",
            marginBottom: "60px"
        },
        btnPagination: (disabled) => ({
            background: disabled ? "#f0f0f0" : colors.goldGradient,
            border: "none",
            padding: "10px 25px",
            borderRadius: "50px",
            cursor: disabled ? "not-allowed" : "pointer",
            color: disabled ? "#aaa" : "#1a1a1a",
            fontSize: "0.75rem",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "1px",
            boxShadow: disabled ? "none" : "0 5px 15px rgba(184, 149, 82, 0.4)",
            transition: "0.3s"
        }),
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", // Tarjetas pequeñas
            gap: "30px",
            maxWidth: "1100px",
            margin: "0 auto"
        },
        card: {
            backgroundColor: "#fff",
            borderRadius: "25px",
            padding: "20px 15px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
            transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            cursor: "pointer",
            position: "relative",
            border: `1px solid ${colors.goldSolid}15`,
            animation: "bubbleFloat 5s ease-in-out infinite",
        },
        imageContainer: {
            width: "110px",
            height: "110px",
            margin: "0 auto 15px auto",
            borderRadius: "50%",
            overflow: "hidden",
            border: `3px solid #fff`,
            boxShadow: `0 8px 20px rgba(184, 149, 82, 0.2)`,
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        name: {
            fontSize: "0.9rem",
            color: colors.dark,
            margin: "0 0 10px 0",
            fontWeight: "700",
        },
        statusIndicator: (color) => ({
            fontSize: "0.65rem",
            fontWeight: "800",
            color: color,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            textShadow: `0 0 10px ${color}50` // Efecto neón
        })
    };

    return (
        <div style={styles.container}>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap');

                @keyframes bubbleFloat {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-12px) scale(1.02); }
                }

                .card-pop:hover {
                    transform: translateY(-20px) scale(1.1) rotate(2deg) !important;
                    box-shadow: 0 25px 50px rgba(184, 149, 82, 0.25) !important;
                    z-index: 10;
                }

                .card-pop:hover img {
                    transform: scale(1.1);
                }

                .luxury-input:focus {
                    box-shadow: 0 10px 30px rgba(184, 149, 82, 0.3);
                    transform: scale(1.05);
                    border-color: ${colors.goldSolid};
                }
                `}
            </style>

            <h1 style={styles.title}>Rick & Morty</h1>
            
            <div style={styles.searchContainer}>
                <input
                    className="luxury-input"
                    type="text"
                    placeholder="Search the multiverse..."
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setPages(1); }}
                    style={styles.searchInput}
                />
            </div>

            <div style={styles.pagination}>
                <button
                    disabled={pages === 1}
                    onClick={() => setPages(p => p - 1)}
                    style={styles.btnPagination(pages === 1)}
                >
                    ←
                </button>

                <span style={{ fontSize: "0.8rem", color: colors.goldSolid, fontWeight: "800", letterSpacing: "2px" }}>
                    {pages} / {info.pages || 0}
                </span>

                <button
                    disabled={pages >= info.pages}
                    onClick={() => setPages(p => p + 1)}
                    style={styles.btnPagination(pages >= info.pages)}
                >
                    →
                </button>
            </div>

            <div style={styles.grid}>
                {characters.map((char, index) => {
                    const statusColor = 
                        char.status === "Alive" ? colors.alive : 
                        char.status === "Dead" ? colors.dead : colors.unknown;

                    return (
                        <div 
                            key={char.id} 
                            className="card-pop"
                            style={{
                                ...styles.card,
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            <div style={styles.imageContainer}>
                                <img src={char.image} alt={char.name} style={styles.image} />
                            </div>
                            <h3 style={styles.name}>{char.name}</h3>
                            <div style={styles.statusIndicator(statusColor)}>
                                <span style={{ 
                                    width: "6px", 
                                    height: "6px", 
                                    borderRadius: "50%", 
                                    backgroundColor: statusColor,
                                    boxShadow: `0 0 8px ${statusColor}`
                                }}></span>
                                {char.status}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ApiRyc_Axios;