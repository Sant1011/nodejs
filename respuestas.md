# Respuestas - Clase 11: Introducción y repaso de React

## Ejercicio 1: leer y predecir

1. **Qué dibuja:** una lista con tres elementos: "4.5 - Aprobado", "2.8 - Reprobado" y "3 - Aprobado". JavaScript muestra 3.0 como 3.
2. **Nota 3.0:** queda Aprobado porque la condición es valor >= 3.0 (mayor o igual).
3. **Advertencia:** "Each child in a list should have a unique key prop", porque el map crea componentes sin key. Se corrige con key={i} (o un id propio):
   notas.map((n, i) => <Nota key={i} valor={n} />)

## Ejercicio 2: errores encontrados

| Tipo | Error | Corrección |
|---|---|---|
| JSX | <input ...> sin cerrar | <input ... /> |
| Atributos | class="caja" | className="caja" |
| Estado | let nombre = '' | const [nombre, setNombre] = useState('')` |
| Eventos | onClick={guardar()} | onClick={guardar} |

### Versión corregida

```jsx
import { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');

  function guardar() {
    console.log('Guardando:', nombre);
  }

  return (
    <div className="caja">
      <input value={nombre} onChange={e => setNombre(e.target.value)} />
      <button onClick={guardar}>Guardar</button>
    </div>
  );
}

export default Formulario;
```

## Paso 4: errores provocados a propósito

1. key={1}: (escribir qué pasó y el mensaje de la consola)
2. class="caja": (mensaje exacto de la consola)
3. boton en minúscula: (qué pasó)
4. estudiantes.push(nuevo): (qué pasó en pantalla)
5. onClick={alHacerClic()}: (qué pasó al cargar)

## Ejercicio 3

El código está en src/App.jsx.