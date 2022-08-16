
export default function App() {

	const usuarios = [
		{
			id: 1,
			nome: "Willian Sant Anna",
			idade: 31
		},
		{
			id: 2,
			nome: "Julia Tizuey",
			idade: 19
		},
		{
			id: 3,
			nome: "Jefferson Alan",
			idade: 25
		},
		{
			id: 4,
			nome: "Vinicius Marques",
			idade: 21
		},
	]

	return (
		<article>
			<h1>Mapeando valores</h1>
			<section>
				<h2>Mapear todos os valores</h2>
				<ul>
					{usuarios.map((usuarioAtual, indice) => <li>Indice {indice}: {usuarioAtual.nome} - {usuarioAtual.idade}</li>)}
				</ul>
			</section>
			<section>
				<h2>Filtrar dos os usuários com idade inferor a 25</h2>
				<ul>
					{usuarios.filter((usuarioAtual) => {
						if (usuarioAtual.idade < 25) {
							<li>Indice {indice}: {usuarioAtual.nome} - {usuarioAtual.idade}</li>
						}
					})}
				</ul>
			</section>
			<section>
				<h2>Retornar o usuário com maior idade</h2>
				<ul>
					{usuarios.find((usuarioAtual, indice, listaUsuarios) => {
						let idadeDoUsuarioAnterior = listaUsuarios[indice - 1].idade;
						/**
							idadeDoUsuarioAnterior.idade(null = 0) > usuarioAtual.idade(31) false
							idadeDoUsuarioAnteror.idade(31) > usuarioAtual.idade(19) true
							idadeDoUsuarioAnteror.idade(19) > usuarioAtual.idade(25) false
							idadeDoUsuarioAnteror.idade(25) > usuarioAtual.idade(21) true
						 */
						if (idadeDoUsuarioAnterior > usuarioAtual.idade) {
							<li>Indice {indice}: {usuarioAtual.nome} - {usuarioAtual.idade}</li>
						}
					})}
				</ul>
			</section>
		</article>
	)
}
