import { useNavigate } from "react-router-dom";

const Home = () => {
    const ejobIndia = useNavigate();
    return (
        <div className="container">
            <div className=" bg-success fs-1 text-center">Home Components</div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quaerat sapiente fugiat voluptatum natus laborum impedit dolore sit? Obcaecati minus non et ut illum quisquam unde deleniti repellat soluta nemo?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum in, similique dolor ipsam repellendus eius voluptates, dolores, blanditiis ex doloribus! Quis, tempora laborum veritatis nesciunt laboriosam magni aperiam. Distinctio.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facilis iste, suscipit vitae exercitationem ad dicta itaque consequuntur quia rem placeat ex debitis repellat quidem iure eius cum, praesentium nisi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo unde, saepe pariatur adipisci laudantium illo expedita totam maxime recusandae deserunt quia corporis perspiciatis amet iure. Explicabo vel iusto placeat quam.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magni non quaerat necessitatibus ullam sapiente consectetur unde quos, quidem commodi corporis vero adipisci, optio, obcaecati laborum quis veniam dolore ab?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae, ex molestias consectetur, sequi consequatur reiciendis natus illo ipsam temporibus cum accusantium sed, neque velit aliquid reprehenderit mollitia? Sequi, deleniti!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed labore hic ipsa aut, ad inventore animi sint reprehenderit incidunt accusamus cumque eligendi omnis ullam, earum deleniti corrupti perferendis praesentium odit?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est impedit, laborum libero amet neque dignissimos numquam! Et incidunt eaque eligendi, odit ad nihil numquam sed dicta facilis, sunt rem in.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nisi ducimus fugiat inventore minus sunt ipsa? Ab tempora quis sit autem consequuntur possimus sint sed corrupti, nihil odio omnis quas.
            </p>
            <button className="btn btn-danger" onClick={() => ejobIndia('/account')}>Acount</button>
            <button className="btn btn-danger" onClick={() => ejobIndia('/blog')}>Blog Page</button>
        </div>

    );
};


export default  Home;