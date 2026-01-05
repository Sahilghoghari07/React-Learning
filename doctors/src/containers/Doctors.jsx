import Button from "../components/Button";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import doctorData from "../doctorData";

export default function Doctors() {
    return (
        <>
            <Header />
            <main>
                {/* doctors section */}
                <section>
                    <div className="container text-center py-1">
                        <h1 className="py-1">Doctors</h1>
                        <p className="text-muted py-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore sit, assumenda deleniti dicta atque consequatur, at tempore quis ullam autem consectetur cupiditate qui! Reiciendis porro, quae nobis dicta ut eos!</p>
                        <Button className="my-1" type="button" text="Visiting Doctors" />
                    </div>
                    <div className="container my-2">
                        <div className="row">
                            {
                                doctorData.map((doctor) => (
                                    <div className="col-6">
                                        <DoctorCard key={doctor.id} data={doctor} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}