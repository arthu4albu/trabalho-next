import "./style.css"

export default function Table({ autonomous }) {
  return (
    <table className="content-table">
      <thead>
        <tr>
          <th>Autônomo</th>
          <th>Nome</th>
          <th>Valor do Serviço</th>
          <th>Valor Contribuinte</th>
          <th>Valor Empresa</th>
          <th>Outras entidades</th>
          <th>Base IRRF</th>
        </tr>
      </thead>
      <tbody>
        {autonomous.map((auto) => {
          return (
            <tr key={auto.id}>
              <td>{auto.id}</td>
              <td>{auto.nome}</td>
              <td>{auto.serviceValue}</td>
              <td>{auto.taxpayerValue}</td>
              <td>{auto.companyValue}</td>
              <td>{auto.other}</td>
              <td>{auto.IRRFbase}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
