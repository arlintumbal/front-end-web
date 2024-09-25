// Komponen Header
const Header = () => {
    return (
      <header className="header">
        <h1>Buat Header Menggunakan JSX</h1>
        <p>Tutorial JSX Sederhana</p>
      </header>
    );
  };


const Table = () => {
    return (
      <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>GENDER</th>
            <th>MAJOR</th>
            <th>WHATSAPP NO</th>
            <th>ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Arlin Tumbal</td>
          <td>Female</td>
          <td>Information System</td>
          <td>08xxxxx</td>
          <td>outsider</td>
          </tr>
          <tr><td>Freshy Rembet</td>
          <td>Female</td>
          <td>Information System</td>
          <td>08xxxxx</td>
          <td>Dormitory</td>
          </tr>
          <tr><td>Fiktor Lobbu</td>
          <td>Male</td>
          <td>Information System</td>
          <td>08xxxxx</td>
          <td>Outsider</td>
          </tr>
          <tr><td>Angelie Manueke</td>
          <td>Female</td>
          <td>Information System</td>
          <td>08xxxxx</td>
          <td>Outsider</td>
          </tr>
    
        </tbody>
      </table>
    );
  };


  const App = () => {
    return (
        <div>
            <Header/>
            <Table />
        </div>
    );
  };

  ReactDOM.render (<App />, document.getElementById('app'));