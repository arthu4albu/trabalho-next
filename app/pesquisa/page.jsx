import Table from "@/src/components/Table/Table"
import "./style.css"

export default function Pesquisa() {
  let isSearching = false

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
          <Table />
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
