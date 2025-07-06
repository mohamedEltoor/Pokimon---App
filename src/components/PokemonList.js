const PokemonList = ({pokemon}) => {
    return(
    <div className="pokemon-list">
    {pokemon.map((p) =>(
        <div key={p} className="pokemon-card"> {p} </div>
        ))
    }
    </div>
    );
}
export default PokemonList;
