import { useParams } from "react-router-dom";
import doctorData from "../doctorData";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DoctorDetails() {
    const { id } = useParams();

    let data = doctorData.find((d) => d.id === id);

    return (
        <>
            <Header />
            <main>
                {/* doctor section */}
                <section>
                    <div className="container text-center py-1">
                        <h1>Doctor details</h1>
                    </div>
                    <div className="container my-2">
                        <div className="d-flex">
                            <div className="card-img">
                                <img src={data.image} alt="Doctor" />
                            </div>
                            <div className="card-body">
                                <h2>Hello i'm Dr. {data.name}</h2>
                                <h3>{data.post}</h3>
                                <p>{data.speciality}</p>
                                <p className="text-muted">{data.info}</p>
                                <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ipsum velit vel at commodi, hic enim recusandae soluta et expedita! Modi, culpa, eaque, eligendi omnis suscipit velit pariatur sequi excepturi sed architecto necessitatibus alias maiores?</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  doctor skills section */}
                <section>
                    <div className="container my-2">
                        <h2>I Have Explained about Myseelf A bit</h2>
                        <p className="text-muted my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus expedita laboriosam maiores modi. Velit ipsum animi sequi fugit placeat dicta est asperiores! Sed debitis repellendus quidem tempora, nostrum nesciunt provident nulla, accusantium nobis repellat saepe!</p>
                        <div className="row">
                            <div className="col-6">
                                <p className="text-muted"><i class="fa-solid fa-check"></i> Cancer Services</p>
                                <p className="text-muted"><i class="fa-solid fa-check"></i> Dental Services</p>
                                <p className="text-muted"><i class="fa-solid fa-check"></i> Kidney Stone Center</p>
                                <p className="text-muted"><i class="fa-solid fa-check"></i> Pediatric Liver Transplant</p>
                            </div>
                            <div className="col-6">
                                <p className="text-muted"><i class="fa-solid fa-check"></i> Liver Transplant</p>
                                <p className="text-muted"><i class="fa-solid fa-check"></i> Heart Transplant</p>
                                <p className="text-muted"><i class="fa-solid fa-check"></i> Pancreas Transplant</p>
                                <p className="text-muted"><i class="fa-solid fa-check"></i> Kidney Cancer</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}