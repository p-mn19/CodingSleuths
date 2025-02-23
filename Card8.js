import menu from "./assets/menu_5.png"

export default function Card1() {
    return (
        <div className = "card8 card-design">
            <img img className="card-image" src={menu} alt=""></img>
            <h3 className="card-title">Frappchino</h3>
            <p>best served with : extra creme<br/>
                priced at : $4
            </p>
        </div>
    );
}