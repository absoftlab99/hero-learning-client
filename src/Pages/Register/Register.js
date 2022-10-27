    import { useContext } from "react";
    import { ButtonGroup, Button } from "react-bootstrap";
    import Form from "react-bootstrap/Form";
    import { FaGoogle, FaGithub } from "react-icons/fa";
    import { Link } from "react-router-dom";
    import { AuthContext } from "../../contexts/UserContext";
    import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

    const Register = () => {
    const {
        createUser,
        user,
        setUser,
        error,
        setError,
        emailVerfy,
        gogolePopUp,
        githubPopUp,
        updtaeData
    } = useContext(AuthContext);

    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        createUser(email, password, name, photo)
        .then((result) => {
            const user = result.user;
            updtaeData(name, photo);
            setUser(user);
            setError("");
            console.log(user);
            form.reset();
            emailVerfy();
        })
        .catch((error) => {
            console.error(error);
            setError(error.message);
        });
    };
    const googleSingIn = (event) => {
        event.preventDefault();
        gogolePopUp(provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.error(error);
        });
    };
    const githubSingIn = (event) => {
        event.preventDefault();
        githubPopUp(gitProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        <div className="">
            <div className="w-50 d-none d-md-block mx-auto border border-success p-4 rounded text-start mt-5">
                <Form onSubmit={handleRegister}>
                <h5>Register Form</h5>
                <hr></hr>
                <div className="d-flex">
                    <Form.Group className="mb-3 w-50 me-2" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        className="border-success border-opacity-50"
                        name="name"
                        type="text"
                        placeholder="Enter full name"
                        required
                    />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50 ms-2" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control
                        className="border-success border-opacity-50"
                        name="photo"
                        type="text"
                        placeholder="photo"
                        required
                    />
                    </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    className="border-success border-opacity-50"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    className="border-success border-opacity-50"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    />
                </Form.Group>
                {error ? <p className="alert alert-danger">{error}</p> : ""}
                {!error && user ? (
                    <p className="alert alert-warning">
                    Check Your Email Inbox/Spam Folder for Verify Email
                    </p>
                ) : (
                    ""
                )}
                <Button variant="outline-success" type="submit">
                    Sign Up
                </Button>
                <br></br>
                </Form>

                <small>
                Already have an account? <Link to="/login">Please Login</Link>
                </small>
                <ButtonGroup vertical className="w-100 mt-2">
                <Button
                    onClick={googleSingIn}
                    variant="outline-danger"
                    className="mb-2"
                >
                    <FaGoogle></FaGoogle> Login With Google
                </Button>
                <Button onClick={githubSingIn} variant="outline-dark">
                    <FaGithub></FaGithub> Login With Github
                </Button>
                </ButtonGroup>
            </div>

            <div className="w-75 d-sm-block d-md-none mx-auto border border-success p-4 rounded text-start mt-5">
                <Form onSubmit={handleRegister}>
                <h5>Register Form</h5>
                <hr></hr>
                <div className="d-flex">
                    <Form.Group className="mb-3 w-50 me-2" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        className="border-success border-opacity-50"
                        name="name"
                        type="text"
                        placeholder="Enter full name"
                        required
                    />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50 ms-2" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control
                        className="border-success border-opacity-50"
                        name="photo"
                        type="text"
                        placeholder="photo"
                        required
                    />
                    </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    className="border-success border-opacity-50"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    className="border-success border-opacity-50"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    />
                </Form.Group>
                {error ? <p className="alert alert-danger">{error}</p> : ""}
                {!error && user ? (
                    <p className="alert alert-warning">
                    Check Your Email Inbox/Spam Folder for Verify Email
                    </p>
                ) : (
                    ""
                )}
                <Button variant="outline-success" type="submit">
                    Sign Up
                </Button>
                <br></br>
                </Form>

                <small>
                Already have an account? <Link to="/login">Please Login</Link>
                </small>
                <ButtonGroup vertical className="w-100 mt-2">
                <Button
                    onClick={googleSingIn}
                    variant="outline-danger"
                    className="mb-2"
                >
                    <FaGoogle></FaGoogle> Login With Google
                </Button>
                <Button onClick={githubSingIn} variant="outline-dark">
                    <FaGithub></FaGithub> Login With Github
                </Button>
                </ButtonGroup>
            </div>
        </div>
    );
    };

    export default Register;
