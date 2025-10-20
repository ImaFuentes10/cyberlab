import pruebaPdf from '../assets/prueba.pdf'

function Pdf() {
  return (
    <div className="">
      <embed
        src={pruebaPdf}
        type="application/pdf"
        width="100%"
        height="1000"
        title="Embedded PDF Viewer"
      />
    </div>
  )
}

export default Pdf