import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="form-box">
        <h1>Form Pembelian Buah</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="nama"><strong>Nama Pelanggan</strong></label>
            <input type="text" />
          </div>
          <div className="form-group">
            <strong>Daftar Item</strong>
            <div>
              <input type="checkbox" id="semangka" name="semangka" value="Bike" />
              <label htmlFor="semangka"> Semangka</label><br />
              <input type="checkbox" id="jeruk" name="jeruk" value="Car" />
              <label htmlFor="jeruk"> Jeruk</label><br />
              <input type="checkbox" id="nanas" name="nanas" value="Boat" />
              <label htmlFor="nanas"> Nanas</label><br />
              <input type="checkbox" id="salak" name="salak" value="Boat" />
              <label htmlFor="salak"> Salak</label><br />
              <input type="checkbox" id="anggut" name="anggut" value="Boat" />
              <label htmlFor="anggut"> Anggur</label><br />
            </div>
          </div>
          <button className="btn">Kirim</button>
        </form >
      </div >
    </div >
  );
}

export default App;
