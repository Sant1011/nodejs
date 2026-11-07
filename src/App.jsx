import { useState } from 'react';

function Boton({ children, alHacerClic }) {
  return <button onClick={alHacerClic}>{children}</button>;
}

// Regla del negocio: fuera de los componentes
function estaAprobado(nota) {
  return nota >= 3.0;
}

function FilaEstudiante({ estudiante }) {
  return (
    <tr>
      <td>{estudiante.nombre}</td>
      <td>{estudiante.nota}</td>
      <td>{estaAprobado(estudiante.nota) ? 'Aprobado' : 'Reprobado'}</td>
    </tr>
  );
}

function App() {
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: 'Ana', nota: 4.5 }
  ]);
  const [nombre, setNombre] = useState('');

  function agregar() {
    if (nombre.trim() === '') return;
    const nuevo = { id: Date.now(), nombre: nombre.trim(), nota: 3.2 };
    setEstudiantes([...estudiantes, nuevo]);
    setNombre('');
  }

  return (
    <>
      <h1>Notas</h1>

      <input
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        placeholder="Nombre del estudiante"
      />
      <Boton alHacerClic={agregar}>Agregar estudiante</Boton>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Nota</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map(e => (
            <FilaEstudiante key={e.id} estudiante={e} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;