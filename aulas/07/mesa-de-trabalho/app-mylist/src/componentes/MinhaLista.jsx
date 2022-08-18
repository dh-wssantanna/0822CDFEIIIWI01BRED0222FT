
// Passe as propriedades produto e preço para o componente...
function Produto() {

    return (
        <>
            <li>Nome do produto - R$ preço</li>
        </>
    )
}

export default function MinhaLista({ titulo, produtos }) {

    return (
        <article>
            <h1>{titulo}</h1>
            <section>
                <h2>Cinco primeiros produtos</h2>
                <ul>
                    {
                        // Mapeie os cinco primeiros produtos...
                        <Produto />
                    }
                </ul>
            </section>
            <section>
                <h2>Três produtos de maior preço</h2>
                <ul>
                    {
                        // Filter os três produtos de maior preço...
                        <Produto />
                    }
                </ul>
            </section>
            <section>
                <h2>O produto de id 4</h2>
                <ul>
                    {
                        // Busque o produto de Id 4...
                        <Produto />
                    }
                </ul>
            </section>
        </article>
    )
}