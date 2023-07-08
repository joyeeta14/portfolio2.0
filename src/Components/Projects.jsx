import acoustica from "../../src/pdf/acoustica.png"
import funstore from "../../src/pdf/funstore.png"
import chefhub from "../../src/pdf/chefhub.png"
const Projects = () => {
    return (
        <div id="Projects">
            <h1 className="text-center text-violet-500 font-bold text-5xl">My Projects</h1>
            <div className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between mx-20" >
                {/* card 1 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="text-center text-2xl text-bold">
                            ACOUSTICA
                        </h2>
                        <p>Its a guitar class selling website that have student, instructor and admin dashboards and it is well authenticated with firebase with email password and also google login is activated.For the design I used tailwind CSS and DaisyUI.</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline">Client Side Code</div>
                            <div className="badge badge-outline">Server Side Code</div>
                            <div className="badge badge-outline">Live Link</div>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                <div className="mt-5">
                    <img src={acoustica} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 mt-10 lg:grid-cols-2 justify-between mx-20" >
                {/* card 1 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="text-center text-2xl text-bold">
                            Fun Store
                        </h2>
                        <p>Its a toy selling website .It is well authenticated with firebase with email password and also google login is activated.For the design I used tailwind CSS and DaisyUI.</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline">Client Side Code</div>
                            <div className="badge badge-outline">Server Side Code</div>
                            <div className="badge badge-outline">Live Link</div>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                <div className="mt-5">
                    <img src={funstore} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 mt-10 lg:grid-cols-2 justify-between mx-20" >
                {/* card 1 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="text-center text-2xl text-bold">
                            Chef Hub
                        </h2>
                        <p>Its a thai cuisine recipe website.it is well authenticated with firebase with email password and also google login is activated.For the design I used tailwind CSS and DaisyUI.</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline">Client Side Code</div>
                            <div className="badge badge-outline">Server Side Code</div>
                            <div className="badge badge-outline">Live Link</div>
                        </div>
                    </div>
                </div>
                {/* card 1 */}
                <div className="mt-5">
                    <img src={chefhub} alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Projects;