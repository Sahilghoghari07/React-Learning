import { useNavigate } from "react-router-dom";

export default function DoctorCard({ data }) {
    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(`/doctors/${data.id}`)}>
            <div className="d-flex">
                <div className="card-img">
                    <img src={data.image} alt="Doctor" />
                </div>
                <div className="card-body">
                    <h2>{data.name}</h2>
                    <h3>{data.post}</h3>
                    <p className="text-muted">{data.speciality}</p>
                </div>
            </div>
        </div>
    );
}