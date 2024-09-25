import logo from './logo.svg';
import './App.css';

function App() {
    const tableStyle = {
      borderCollapse: 'collapse',
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto', 
    };
  
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: 0,
    };
  
    return (
      <div style={containerStyle}>
        <div>
          <h1>Student Profile</h1>
          <table style={tableStyle} border="1" cellSpacing="0" cellPadding="7">
            <tbody>
              <tr>
                <td><b>Nama</b></td>
                <td>Tumbal, Arlin Maythree</td>
              </tr>
              <tr>
                <td><b>Fakultas</b></td>
                <td>Ilmu Komputer</td>
              </tr>
              <tr>
                <td><b>Jurusan</b></td>
                <td>Sistem Informasi</td>
              </tr>
              <tr>
                <td><b>Alamat</b></td>
                <td>Airmadidi Atas</td>
              </tr>
              <tr>
                <td><b>NIM</b></td>
                <td>105012210024</td>
              </tr>
              <tr>
                <td><b>Email</b></td>
                <td>s22210229@student.unklab.ac.id</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default App;
