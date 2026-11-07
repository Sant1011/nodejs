const estilos = {
  primario: { background: 'transparent', color: '#fff', border: 'transparent' },
  peligro: { background: 'transparent', color: '#fff', border: '1px solid #6E1013' },
}

function Boton({
  children,
  alHacerClic,
  variante = 'primario',
  cargando = false,
}) {
  return (
    <button
      onClick={alHacerClic}
      disabled={cargando}
      style={{
        ...estilos[variante],
        padding: '10px 18px',
        borderRadius: '6px',
        cursor: cargando ? 'not-allowed' : 'pointer',
        opacity: cargando ? 0.6 : 1,
      }}
    >
      {cargando ? 'Cargando...' : children}
    </button>
  )
}

export default Boton
