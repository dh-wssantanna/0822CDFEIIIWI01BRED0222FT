import Item from './Item';

export default function Lista() {
    return (
        <section className="py-5">
            <h2 className="h5 mb-4">My tasks</h2>
            <ul className="list-group" data-todo-target="list">
                <Item />
            </ul>
        </section>
    )
}