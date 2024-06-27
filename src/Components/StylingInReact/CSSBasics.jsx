import './CSSBasics.css';
import '../LifeCyleMethod/CSSTry.css';


const CSSBasics = () => {
    const navBar = {
        border: '1px solid black',
        padding: '5px',
        backgroundColor: 'skyblue',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '22px',
    }
    return (
        <>
           <header style={{
            backgroundColor: 'black',
            color: 'yellow',
            textAlign: 'center',
            fontSize: '25px',
           }}>
            <img src="https://images.squarespace-cdn.com/content/v1/5ede2122e582b96630a4a73e/1609375291581-S6HH2ND892X3RPTUNIJG/Rolex-logo+2021.jpg" alt=""
             style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%'
             }}/>
              <h1>Learning Css For react Page</h1>
              </header>         
              <nav style={navBar}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Course</a>
                <a href="">Contant</a>
                <a href="">Help</a>
              </nav>
              <main>
                <div className='fbox'>
                    <p className='para'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis possimus voluptates dolorum facilis aliquid corrupti esse, dicta, eum, repellat atque eaque harum voluptatum eos obcaecati ab fugit soluta dignissimos vel?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis possimus voluptates dolorum facilis aliquid corrupti esse, dicta, eum, repellat atque eaque harum voluptatum eos obcaecati ab fugit soluta dignissimos vel?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis possimus voluptates dolorum facilis aliquid corrupti esse, dicta, eum, repellat atque eaque harum voluptatum eos obcaecati ab fugit soluta dignissimos vel?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis possimus voluptates dolorum facilis aliquid corrupti esse, dicta, eum, repellat atque eaque harum voluptatum eos obcaecati ab fugit soluta dignissimos vel?
                        
                    </p>
                </div>
                <fieldset>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iure asperiores, mollitia laudantium dignissimos non nostrum in cumque ea dolorem nam, quo voluptate fugit dicta porro voluptas harum ullam nisi?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis libero corrupti earum nobis numquam quibusdam quisquam! Mollitia doloremque optio, consectetur dolores illum fugiat odit deleniti minus, nihil excepturi perferendis quos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iusto? Consectetur quasi laboriosam explicabo eos exercitationem. Ab consectetur fugiat dolorum. Est, similique minima ad dolorum magni ipsam perferendis recusandae eos?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae veniam, nemo qui quam modi vitae tempora accusantium! Cupiditate nobis, cumque rem enim perspiciatis, voluptas hic qui nemo culpa magnam tempore!

                </fieldset>
              </main>

              <div className='d-flex'>
              <div class="card" style={{width: '18rem',}}>
                <img src="https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">kolkata</a>
                </div>
                </div>
                <div class="card" style={{width: '18rem',}}>
                <img src="https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">kolkata</a>
                </div>
                </div>
                <div class="card" style={{width: '18rem',}}>
                <img src="https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">kolkata</a>
                </div>
                </div>
                <div class="card" style={{width: '18rem',}}>
                <img src="https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">kolkata</a>
                </div>
                </div>
              </div>
          
        </>
    );
};

export default CSSBasics;