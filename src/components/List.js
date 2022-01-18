import Item from "./Item";

function List(){
    return (
        <>
            <h1>My list of cars</h1>
            <ul>
                <Item marca="Ferrari" />
                <Item marca="Fiat" />
                <Item marca="Ford" />
            </ul>
        </>
    );
}

export default List;