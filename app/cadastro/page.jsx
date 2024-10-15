import Link from "next/link"
import "./style.css"

export default function Cadastro() {
  return (
    <>
      <div className="container">
        <img src="/images/foto.svg" alt="Imagem de perfil" />

        <form action="">
          <div className="input-area">
            <div className="user input">
              <label htmlFor="user">Usuário: </label>
              <input type="text" name="user" placeholder="Digite aqui..." />
            </div>

            <div className="password input">
              <label htmlFor="password">Senha: </label>
              <input
                type="password"
                name="password"
                placeholder="Digite aqui..."
              />

              <ul>
                <li>A senha deve conter entre 8 a 13 dígitos</li>
                <li>
                  A senha deve conter letras masc, letras mins, números e
                  símbolos
                </li>
              </ul>
            </div>

            <div className="identification-code input">
              <label htmlFor="user">Código de identificação: </label>
              <input type="text" name="user" placeholder="Digite aqui..." />
            </div>

            <div className="confirm-password input">
              <label htmlFor="user">Confirmar senha: </label>
              <input type="text" name="user" placeholder="Digite aqui..." />
            </div>
          </div>

          <div className="submit-button">
            <button type="submit">Cadastrar</button>
            <small>
              <Link href="/">Fazer login</Link>
            </small>
          </div>
        </form>
      </div>
    </>
  )
}
