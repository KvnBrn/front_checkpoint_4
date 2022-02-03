import axios from "axios"
import { useState } from "react"

export const Admin = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState("");
    // const [category, setCategory] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && image && description && rate ) {
            await axios
            .post("http://localhost:8000/", {
                name: name,
                image: image,
                description: description,
                rate: rate,
                // cat_name: category,
            })
            .then(({ data }) => {
                if (data.error) setError(data.error);
                else {
                  setError("");
                  setName("");
                  setImage("");
                  setDescription("");
                  setRate();
                //   setCategory("");
                }
            });
            window.location.href = "/";
        } else setError("Tous les champs sont requis");
    };

    return (
        <div className="container text-white">
            <div className="row text-center p-5">
                <h2 className="text-center mb-3">Ajouter un jeu</h2>
                <form className="col-lg-6 col-md-6 col-xs-12 mx-auto" onSubmit={handleSubmit}>
                    {error && <p className="alert alert-danger">{error}</p>}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Titre</label>
                        <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Image</label>
                        <input type="text" name="email" id="email" onChange={(e) => setImage(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rate" className="form-label">Note</label>
                        <input type="text" name="rate" id="rate" onChange={(e) => setRate(e.target.value)} />
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="category" className="form-label">Catégorie</label>
                        <input type="text" name="category" id="category" onChange={(e) => setCategory(e.target.value)} />
                    </div> */}
                    <button type="submit" className="button-65 m-auto">Créer</button>
                </form>
            </div>
        </div>
    )
}
