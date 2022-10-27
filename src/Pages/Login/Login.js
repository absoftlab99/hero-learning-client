import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {signInUser, user, setUser, error, setError, gogolePopUp, githubPopUp} = useContext(AuthContext);
    
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";
    const navigate = useNavigate();

    const signInHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result =>{
            const user = result.user;
            setUser(user);
            navigate(from, { replace: true });
            setError('');
            console.log(user);
            console.log('login successfully');
            form.reset();
        })
        .catch(error =>{
            console.error(error);
            setError(error.message);
        })
    }

    const googleSingIn = (event) =>{
        event.preventDefault();
        gogolePopUp(provider)
        .then(result => {
            const user = result.user;
            navigate(from, { replace: true });
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    const githubSingIn = (event) =>{
        event.preventDefault();
        githubPopUp(gitProvider)
        .then(result => {
            const user = result.user;
            navigate(from, { replace: true });
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className="">
            <div className='w-25 d-none d-md-block mx-auto border border-success p-4 rounded mt-5 text-start'>
            <Form onSubmit={signInHandler}>
            <h5>Login Form</h5>
            <hr></hr>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className='border-success border-opacity-50' name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className='border-success border-opacity-50' name='password' type="password" placeholder="Password" />
            </Form.Group>
            {
                error ?
                <p className='alert alert-danger'>{error}</p> :
                ''
            }
            {
                !error && user ? <p className='alert alert-success'>Login Successfully</p> :
                ''
            }
            <Button className='w-100' variant="outline-success" type="submit">
                Login
            </Button><br></br>
        </Form>
        <div className='text-center'><small><Link to='/reset-password'>Forget Password</Link></small></div>
        <div className='text-center'><small>New to Hero Learning? <Link to='/register'>Create Account</Link></small></div>
        <ButtonGroup vertical className='w-100 mt-2'>
            <Button onClick={googleSingIn} variant="outline-danger" className='mb-2'><FaGoogle></FaGoogle> Login With Google</Button>
            <Button onClick={githubSingIn} variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
        </ButtonGroup>
        </div>

            <div className='w-75 d-sm-block d-md-none mx-auto border border-success p-4 rounded mt-5 text-start'>
            <Form onSubmit={signInHandler}>
            <h5>Login Form</h5>
            <hr></hr>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className='border-success border-opacity-50' name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className='border-success border-opacity-50' name='password' type="password" placeholder="Password" />
            </Form.Group>
            {
                error ?
                <p className='alert alert-danger'>{error}</p> :
                ''
            }
            {
                !error && user ? <p className='alert alert-success'>Login Successfully</p> :
                ''
            }
            <Button className='w-100' variant="outline-success" type="submit">
                Login
            </Button><br></br>
        </Form>
        <div className='text-center'><small><Link to='/reset-password'>Forget Password</Link></small></div>
        <div className='text-center'><small>New to Hero Learning? <Link to='/register'>Create Account</Link></small></div>
        <ButtonGroup vertical className='w-100 mt-2'>
            <Button onClick={googleSingIn} variant="outline-danger" className='mb-2'><FaGoogle></FaGoogle> Login With Google</Button>
            <Button onClick={githubSingIn} variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
        </ButtonGroup>
        </div>
        </div>
    );
};

export default Login;