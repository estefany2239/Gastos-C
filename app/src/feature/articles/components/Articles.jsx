import React, { useEffect, useState } from 'react';

export const Articles = () => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?limit=8')
      .then(res => res.json())
      .then(data => setImagenes(data));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {imagenes.map(img => (
        <div className="col" key={img.id}>
          <div className="card h-100 border-0 shadow-sm" style={{ borderRight: '5px solid #e92dab', borderRadius: '0' }}>
            <div className="card-body d-flex align-items-center bg-white">
              <img 
                src={img.download_url} 
                className="rounded-circle border border-2" 
                style={{ width: '80px', height: '80px', objectFit: 'cover', borderColor: '#e92dab' }} 
              />
              <div className="ms-3">
                <h6 className="mb-0 fw-bold" style={{ fontSize: '0.9rem' }}>Autor: {img.author}</h6>
                <a href={img.url} target="_blank" className="small text-decoration-none" style={{ color: '#e92dab' }}>Ver original</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};