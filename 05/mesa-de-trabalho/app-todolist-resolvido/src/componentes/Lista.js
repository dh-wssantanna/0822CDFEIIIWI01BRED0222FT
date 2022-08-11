import Item from './Item';

export default function Lista({ titulo, itens }) {
    return (
        <section className="py-5">
            {
                /* 
                Opção 1
                    titulo ?? "My tasks"
                Opção 2
                    if( titulo == null || titulo == underfined ) { titulo = "My tasks" }
                */
            }
            <h2 className="h5 mb-4">{titulo ?? "My tasks"}</h2>
            <ul className="list-group" data-todo-target="list">
                <Item item={itens[0]} />
                <Item item={itens[1]} />
                <Item item={itens[2]} />
            </ul>
        </section>
    )
}