import "./style.css"

export default function CadastroAutonomo() {
  return (
    <div className="container">
      <header className="sidebar">
        <div className="user-info">
          <img src="/images/foto.svg" alt="Imagem de perfil" />
          <p>Usuário: Miku</p>
          <p>Data: 13/10</p>
        </div>
        <ul className="menu">
          <li>Ponto</li>
          <li>Folha</li>
          <li>R.H.</li>
          <li>Fechar</li>
        </ul>
      </header>

      <main className="content">
        <header className="header">
          <h1>Sistema da prefeitura</h1>
          <h2>Cadastro de Autônomos</h2>
        </header>

        <form className="form">
          <div className="form-row">
            <div className="input-group">
              <label>Código</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Nome</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Data de admissão</label>
              <input type="date" />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Matrícula</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Nome Social</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Data de término</label>
              <input type="date" />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Nacionalidade</label>
              <div className="inline-input">
                <input type="text" />
                <button type="button" className="search-button">
                  🔍
                </button>
              </div>
            </div>
            <div className="input-group">
              <label>Estado Civil</label>
              <div className="inline-input">
                <input type="text" />
                <button type="button" className="search-button">
                  🔍
                </button>
              </div>
            </div>
            <div className="input-group">
              <label>Raça/Cor</label>
              <div className="inline-input">
                <input type="text" />
                <button type="button" className="search-button">
                  🔍
                </button>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Instrução</label>
              <div className="inline-input">
                <input type="text" />
                <button type="button" className="search-button">
                  🔍
                </button>
              </div>
            </div>
            <div className="input-group">
              <label>Sexo</label>
              <input type="text" />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Fornecedor</label>
              <div className="inline-input">
                <input type="text" />
                <button type="button" className="search-button">
                  🔍
                </button>
              </div>
            </div>
            <div className="input-group">
              <label>Fornecedor Patrional</label>
              <div className="inline-input">
                <input type="text" />
                <button type="button" className="search-button">
                  🔍
                </button>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="save-button">
              Gravar
            </button>
            <button type="button" className="cancel-button">
              Cancelar
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
