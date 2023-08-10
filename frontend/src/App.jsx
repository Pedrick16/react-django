import { useEffect, useState } from "react";
import { fetchPosts } from "./services/apiService";
import NavbarComponents from "./components/NavbarComponents";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setisDisabled] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      const postData = await fetchPosts();
      setPosts(postData);
    };

    getPosts();
  }, []);

  const [person, setPerson] = useState([
    {
      id: 1,
      name: "Pedrick",
      age: 21,
      gender: "Male",
    },
    {
      id: 2,
      name: "Divinagracia",
      age: 23,
      gender: "Male",
    },
    {
      id: 3,
      name: "Antazo",
      age: 22,
      gender: "Male",
    },
  ]);

  const handleRemove = (personIndex) => {
    const filteredPerson = person.filter(
      (data, index) => index !== personIndex
    );
    setPerson(filteredPerson);

    if (filteredPerson.length === 0) {
      setIsChecked(false);
      setisDisabled(true);
    }
  };

  const handleShow = () => {
    setIsChecked(!isChecked);
  };

  const handleAddPerson = () => {
    setPerson([
      ...person,
      {
        id: 4,
        name: "Prince",
        age: 24,
        gender: "Male",
      },
    ]);
  };

  return (
    <div className="container-fluid bg-light vh-100 px-0">
      <NavbarComponents />

      {posts.length > 0 && (
        <>
          <h1 className="text-center pt-2">Todo-List</h1>

          <table className="table table-hover text-center mt-3 ">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Created</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.created}</td>
                  <td>
                    <button className="btn btn-success">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <label htmlFor="">Show</label>
      <input
        type="checkbox"
        onChange={handleShow}
        checked={isChecked}
        disabled={isDisabled}
      />

      {isChecked && person.length > 0 && (
        <>
          <button onClick={handleAddPerson}>Add</button>
          <table className="table  table-dark table-hover text-center  w-75 mt-2 ms-2">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {person.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.gender}</td>
                  <td>
                    <button className="btn btn-success me-3">Edit</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {isChecked == false && (
        <>
          <h1>Hiiii</h1>
        </>
      )}
    </div>
  );
}

export default App;
