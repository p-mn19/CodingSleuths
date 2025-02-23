import menu from "./assets/menu_4.png"

export default function Card() {
    return (
        <div className = "card1 card-design">
            <img className="card-image" src={menu} alt=""></img>
            <h3 className="card-title">Sandwich</h3>
            <p> veggie sandwich <br/>
                priced at : $5
            </p>
            <button><img className="add-to-cart" src="" alt=""></img></button>
            <button><img className="remove-to-cart" src="" alt=""></img></button>
        </div>
    );
}
