import React from 'react';
//import { Link } from 'react-router-dom';
import './App.css';

const Contact = () => {

  return (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
  <main style={{ padding: '20px' }}>
    <section id="contact" style={{ margin: '40px 0' }}>
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" style={{ width: '300px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid #ddd' }} />
        <input type="email" placeholder="Email" style={{ width: '300px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid #ddd' }} />
        <textarea placeholder="Message" style={{ width: '300px', padding: '10px', margin: '10px auto', borderRadius: '5px', border: '1px solid #ddd' }} />
        <button type="submit" style={{ width: '315px', padding: '10px 20px', margin: '10px auto', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Send
        </button>
      </form>
    </section>
  </main>
  </div>
);
};
export default Contact;