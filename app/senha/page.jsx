import "./style.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Redefinição de senha</h1>

        <p>
          Digite seu e-mail cadastrado abaixo para que lhe enviemos uma nova
          senha.
        </p>

        <form action="">
          <input
            type="email"
            className="email"
            name="email"
            placeholder="Email"
          />

          <button type="submit">Redefinir Senha</button>
          <div>
            <span>Não possui conta? Realize o </span>
            <span className="link">
              <Link href="/cadastro">Cadastro.</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  )
}
