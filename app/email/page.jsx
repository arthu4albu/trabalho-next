import "./style.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>E-mail enviado!</h1>

        <p>
          Enviamos um e-mail com uma nova senha de acesso para
          xxxxyyy@gmail.com, verifique sua caixa de entrada e lixeira caso
          necessário.
        </p>
        <div className="button">
          <Link href="/">Retornar para tela Inicial</Link>
        </div>

        <div className="link-area">
          <span>Não possui conta? Realize o </span>
          <span className="link">
            <Link href="/cadastro">Cadastro.</Link>
          </span>
        </div>
      </div>
    </>
  )
}
