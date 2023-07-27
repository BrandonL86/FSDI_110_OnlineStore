import "./home.css";

import {Link} from 'react-router-dom';

function Home() {

    return (
    <div className="home page">
            <div className="container-fluid">
                <div className="text">
                    <h1 className="summer-mode">Summer Mode: <strong>Activated</strong> </h1>
                     <p>Sit back, relax, and check out our hot new arrivals.</p>
                    <Link className='btn btn-primary' id="catalogbtn" to="/catalog">Check our catalog </Link>
                </div>
                <img className="landing-photo" alt="kitchen plants" src="/images/pexels-diva-plavalaguna-5710426.jpg "></img>
            </div>
                <br />
                <h1>Shop By Collection</h1> <br />
            <div className="image-container">

            <div className="image-cat">
                <Link to="/catalog"><img style={{ width: '300px', height: '400px' }} src="https://cdn.sanity.io/images/y346iw48/production/1dd326f722ac9e574a5c00719feed7c85470450a-1200x1553.jpg?auto=format" alt="holding plant"></img></Link>
                <h4>All Plants and Flowers</h4>
                </div>

                <div className="image-cat">
                <img style={{ width: '300px', height: '400px' }} src="https://cdn.sanity.io/images/y346iw48/production/091c60ec9dcce8501445b560a7bdc279079d04b9-640x828.webp?auto=format" className="rounded mx-auto d-block" alt="dog in kitchen"></img>
                <h4>Pet-Friendly Plants</h4>
                </div>

                <div className="image-cat">
                <img style={{ width: '300px', height: '400px' }} src="https://cdn.sanity.io/images/y346iw48/production/40b39f12c035eed5156c748905780399a6840d5c-640x828.webp?auto=format" className="rounded mx-auto d-block" alt="low light plants"></img>
                <h4>Low-Light</h4>
                </div>

                <div className="image-cat">
                <img style={{ width: '300px', height: '400px' }} src="https://cdn.sanity.io/images/y346iw48/production/6eafb73d363b72b31bdfba5fe33bfe8a1e0dc0a9-640x828.webp?auto=format" className="rounded mx-auto d-block" alt="flowers"></img>
                <h4>Flowers</h4>
                </div>

                <div className="image-cat">
                <img style={{ width: '300px', height: '400px' }} src="https://cdn.sanity.io/images/y346iw48/production/13f9350ddd653338697f3acaa955c35dbd530289-1200x1553.webp?auto=format" className="rounded mx-auto d-block" alt="large plants"></img>
                <h4>Large-Plants</h4>
                </div>
            </div>

            <div className="container-fluid-plant-match">
                    <div className="plant-text">
                        <h1 className="quiz">Find Your Plant Match </h1>
                        <p>Share a little bit about yourself and we’ll help find your perfect plant.</p>
                        <br />
                        <p> &#127807;Answer three quick questions</p>
                        <p> &#127807;Get matched with your perfect plant</p> <br />
                        <button type="button" id="quizbtn" className="btn btn-success">Take Quiz</button>
                    </div>
                    <img style={{ width: '50%', height: '20%' }} src="https://cdn.sanity.io/images/y346iw48/production/8930b752d090834855b620b40733ea3c5b929537-800x1035.jpg?w=1000&auto=format" alt="recycle plant"></img>
                </div>

        <div className="sill-container flex flex-col gap-10">
            <div className="flex-items">
                <img
                src="https://cdn.sanity.io/images/y346iw48/production/84d07688abdf55602905c8913388363009426f11-60x60.svg?auto=format" alt="smiley face"></img>
                <br />
                <h3>Free Standard Shipping</h3>
                <p>
                Enjoy free standard shipping on all plants and planters. Orders are
                shipped via UPS carbon neutral shipping, keeping our carbon footprint
                as small as possible.
                </p>
            </div>
        
        
            <div className="flex-items">
                <img
                src="https://cdn.sanity.io/images/y346iw48/production/e0882a8e72689c1ef1c0898469b09ad6e4e574a6-59x54.svg?auto=format" alt="floating plant"/>
                <br />
                <h3>
                    30-Day Customer Happiness Guarantee
                </h3>
                <p>
                Our team preps, prunes, &amp; carefully packs every order—meaning lots
                of care goes into every step. If your plant arrives damaged or
                unhealthy, we replace it for free.
                </p>
            </div>
            
            <div className="flex-items">
                    <img
                    src="https://cdn.sanity.io/images/y346iw48/production/39a25eee4d0f740bf6169d2dc6f7c8ced0387721-60x60.svg?auto=format" alt="hall of plants"/>
                    <br />

                    <h3>Local Stores</h3>
                    <p>
                    Want hands-on plant expertise IRL? Stop by one of our stores in NYC,
                    Bethesda, Chicago, or San Francisco to explore more plants, planters,
                    &amp; care accessories.
                    </p>
            </div>
        </div>
  </div>
    );
}


export default Home;