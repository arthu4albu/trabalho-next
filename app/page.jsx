import "./style.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="container">
        <img src="/images/foto.png" alt="Imagem de perfil" />

        <form action="">
          <div className="user">
            <label htmlFor="user">Usuário: </label>
            <input type="text" name="user" placeholder="Digite aqui..." />
          </div>

          <div className="password">
            <label htmlFor="password">Senha: </label>
            <input
              type="password"
              name="password"
              placeholder="Digite aqui..."
            />
            <small>
              <Link href="/senha">Esqueceu a senha.</Link>
            </small>
          </div>

          <button type="submit">Entrar</button>
          <small>
            <Link href="/cadastro">Cadastre-se</Link>
          </small>
        </form>
      </div>
    </>
  )
}
