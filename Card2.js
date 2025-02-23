import menu from "./assets/menu_5.png"

export default function Card1() {
    return (
        <div className = "card2 card-design">
            <img img className="card-image" src={menu} alt=""></img>
            <h3 className="card-title">Cake</h3>
            <p>best cake for birthday<br/>
                priced at : $10
            </p>
        </div>
    );
}