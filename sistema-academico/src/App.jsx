import { useState } from 'react'
import Boton from './components/Boton';
import FilaEstudiante from './feature/FilaEstudiante'

function App() {
  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: 'Ana', nota: 4.5 },
    { id: 2, nombre: 'Luis', nota: 2.8 },
  ])
  const [nombre, setNombre] = useState('')
  const [nota, setNota] = useState('')

  const agregar = () => {
    if (nombre.trim() === '' || nota === '') return

    const nuevo = { id: Date.now(), nombre, nota: Number(nota) }
    setEstudiantes([...estudiantes, nuevo])
    setNombre('')
    setNota('')
  }

  return (
    <div>
      <h1>Estudiantes</h1>

      <input
        placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
      />
      <input
        type="number"
        step="0.1"
        min="0"
        max="5"
        placeholder="Nota"
        value={nota}
        onChange={e => setNota(e.target.value)}
      />
      <Boton alHacerClic={agregar} variante="primario">Guardar</Boton>
      <Boton variante="peligro" alHacerClic={() => setEstudiantes([])}>Eliminar</Boton>

      <table></table>

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
    </div>
  )
}

export default App