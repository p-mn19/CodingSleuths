import menu from "./assets/menu_8.png"

export default function Card1() {
    return (
        <div className = "card3 card-design">
            <img img className="card-image" src={menu} alt=""></img>
            <h3 className="card-title">RAMEN</h3>
            <p>veg and non-veg options available<br/>
                priced at : $6-$7
            </p>
        </div>
    );
}