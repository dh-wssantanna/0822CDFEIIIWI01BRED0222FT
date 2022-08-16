
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
					{usuarios.filter((usuarioAtual, indice) => {
						if (usuarioAtual.idade < 25) {
							<li key={indice}>Indice {indice}: {usuarioAtual.nome} - {usuarioAtual.idade}</li>
						}
					})}
				</ul>
			</section>
			<section>
				<h2>Retornar o usuário pela id 2</h2>
				<ul>
					{usuarios.find((usuarioAtual, indice) => {
						if (usuarioAtual.id == 2) {
							<li key={indice}>Indice {indice}: {usuarioAtual.nome} - {usuarioAtual.idade}</li>
						}
					})}
				</ul>
			</section>
		</article>
	)
}
