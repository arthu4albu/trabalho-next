import Table from "@/src/components/Table/Table"
import "./style.css"

export default function Pesquisa() {
  let isSearching = true

  const autonomous = [
    {
      id: "00001",
      nome: "Arthur Lourenço",
      serviceValue: "R$ 120,00",
      taxpayerValue: "R$ 350,00",
      companyValue: "R$ 1200,00",
      other: "Outra coisa",
      IRRFbase: "Não sei",
    },
    {
      id: "00002",
      nome: "Clara Rafaele",
      serviceValue: "R$ 150,00",
      taxpayerValue: "R$ 400,00",
      companyValue: "R$ 1300,00",
      other: "Instituição XYZ",
      IRRFbase: "R$ 200,00",
    },
    {
      id: "00003",
      nome: "José Silva",
      serviceValue: "R$ 250,00",
      taxpayerValue: "R$ 500,00",
      companyValue: "R$ 1500,00",
      other: "Fundação ABC",
      IRRFbase: "R$ 300,00",
    },
    {
      id: "00004",
      nome: "Maria Oliveira",
      serviceValue: "R$ 180,00",
      taxpayerValue: "R$ 450,00",
      companyValue: "R$ 1400,00",
      other: "Outra coisa",
      IRRFbase: "R$ 250,00",
    },
    {
      id: "00005",
      nome: "Lucas Costa",
      serviceValue: "R$ 200,00",
      taxpayerValue: "R$ 380,00",
      companyValue: "R$ 1300,00",
      other: "Entidade DEF",
      IRRFbase: "R$ 150,00",
    },
    {
      id: "00006",
      nome: "Ana Paula",
      serviceValue: "R$ 300,00",
      taxpayerValue: "R$ 600,00",
      companyValue: "R$ 1600,00",
      other: "Instituição XYZ",
      IRRFbase: "R$ 400,00",
    },
    {
      id: "00007",
      nome: "Renato Souza",
      serviceValue: "R$ 220,00",
      taxpayerValue: "R$ 520,00",
      companyValue: "R$ 1550,00",
      other: "Fundação ABC",
      IRRFbase: "R$ 350,00",
    },
    {
      id: "00008",
      nome: "Paula Ribeiro",
      serviceValue: "R$ 170,00",
      taxpayerValue: "R$ 380,00",
      companyValue: "R$ 1400,00",
      other: "Outra coisa",
      IRRFbase: "R$ 220,00",
    },
    {
      id: "00009",
      nome: "Fernando Costa",
      serviceValue: "R$ 240,00",
      taxpayerValue: "R$ 460,00",
      companyValue: "R$ 1450,00",
      other: "Entidade DEF",
      IRRFbase: "R$ 300,00",
    },
    {
      id: "00010",
      nome: "Juliana Marques",
      serviceValue: "R$ 210,00",
      taxpayerValue: "R$ 440,00",
      companyValue: "R$ 1350,00",
      other: "Instituição XYZ",
      IRRFbase: "R$ 250,00",
    },
    {
      id: "00011",
      nome: "Carlos Alberto",
      serviceValue: "R$ 130,00",
      taxpayerValue: "R$ 370,00",
      companyValue: "R$ 1250,00",
      other: "Fundação ABC",
      IRRFbase: "R$ 180,00",
    },
    {
      id: "00012",
      nome: "Bruna Silva",
      serviceValue: "R$ 160,00",
      taxpayerValue: "R$ 390,00",
      companyValue: "R$ 1300,00",
      other: "Outra coisa",
      IRRFbase: "R$ 220,00",
    },
    {
      id: "00013",
      nome: "Eduardo Lima",
      serviceValue: "R$ 270,00",
      taxpayerValue: "R$ 530,00",
      companyValue: "R$ 1550,00",
      other: "Entidade DEF",
      IRRFbase: "R$ 300,00",
    },
    {
      id: "00014",
      nome: "Gabriela Pires",
      serviceValue: "R$ 190,00",
      taxpayerValue: "R$ 410,00",
      companyValue: "R$ 1370,00",
      other: "Instituição XYZ",
      IRRFbase: "R$ 240,00",
    },
    {
      id: "00015",
      nome: "Felipe Nascimento",
      serviceValue: "R$ 230,00",
      taxpayerValue: "R$ 470,00",
      companyValue: "R$ 1500,00",
      other: "Fundação ABC",
      IRRFbase: "R$ 320,00",
    },
    {
      id: "00016",
      nome: "Rita Oliveira",
      serviceValue: "R$ 160,00",
      taxpayerValue: "R$ 380,00",
      companyValue: "R$ 1250,00",
      other: "Outra coisa",
      IRRFbase: "R$ 210,00",
    },
  ]

  return (
    <div className="container">
      <aside>
        <header>
          <img src="images/foto.svg" alt="Foto de perfil" />
          <div>
            <span>Usuário: Miku</span>
            <span>Data: 13/10/2024</span>
          </div>

          <button type="button"></button>
        </header>

        <div className="access-menu">
          <p className="menu">Menu de Acesso</p>
          <div>
            <button className="add">Adicione um novo documento</button>
            <ul>
              <li>
                <img src="images/relogio.svg" alt="Ícone do Ponto" /> Ponto
              </li>
              <li>
                <img src="images/folha.svg" alt="Ícone da folha" /> Folha
              </li>
              <li>
                <img src="images/rh.svg" alt="Ícone do R.H." /> R.H.
              </li>
              <li>
                <img src="images/fechar.svg" alt="Ícone de fechar" /> Fechar
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div className="main">
        <header>
          <h1>Sistema de Pesquisa</h1>
          <div className="carta red-circle">
            <img className="mail" src="images/carta.svg" alt="Carta" />
          </div>
        </header>
        <main>
          <p>Pesquise o documento:</p>
          <input type="text" placeholder="Digite aqui..." />
        </main>

        {isSearching ? (
          <Table autonomous={autonomous} />
        ) : (
          <div className="organizer">
            <p>Organizar por:</p>
            <ul className="classes">
              <li>
                <button>Autônomo</button>
              </li>
              <li>
                <button>Nome</button>
              </li>
              <li>
                <button>13º Salário</button>
              </li>
              <li>
                <button>Salário Base</button>
              </li>
            </ul>

            <ul className="period">
              <li>
                <button>Ano</button>
              </li>
              <li>
                <button>Mês</button>
              </li>
            </ul>

            <div className="confirm">
              <button>Aplicar</button>
              <button>Limpar</button>
            </div>
          </div>
        )}
      </div>

      <div className="black-space">
        <div className="modal">
          <header>
            <button type="button">
              <img src="/images/close-mark.svg" alt="" />
            </button>
          </header>
          <h2>SAIR DESSA PÁGINA?</h2>
          <p>AS ALTERAÇÕES NESSA PÁGINA, PODEM NÃO ESTAR SALVAS</p>
          <div>
            <div>
              <input type="checkbox" name="warn-again" id="warn-again" />
              <label htmlFor="warn-again">NÃO ME AVISAR NOVAMENTE</label>
            </div>
            <button>SAIR</button>
          </div>
        </div>
      </div>
    </div>
  )
}
