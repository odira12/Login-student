import axios from "axios"
import { toast } from "react-toastify";

const login =()=>{
    const handleSubmit = async (e) => {
        e.preventDefault();


        try{
            // send a POST request to the login endpoint with user credentials
            const response = await axios.post('http:/localhost:4000/api/reg/loginUser')
            if (response.status === 200){
                const{accessToken, refreshToken} =response.data;


                sessionStorage.setItem('accessToken', accessToken);
                sessionStorage.setItem('refreshToken', refreshToken);

                login(accessToken);
                Navigate(from, {replace:true})   // Redirect to the intendes route

            }else if (response.status === 401){

                const newAccessToken = await refreshToken();

                if (newAccessToken){
                    await handleSubmit(e);
                }else {
                    toast.error('invalid username/password');
                }
            }

            else{
                console.error('Authentication failed');
            }
        }catch(error){
            next (error)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="w-25 p-3 mx-auto">
                    <div className="form-group">
                        <label className="mb-1">Name</label>
                        <input type="text" className="form-control" name="name" value={data.name} onChange={handleChange}/><br/>
                    </div>
                    <div className="form-group">
                        <label className="mb-1">Email</label>
                        <input type="email" className="form-control" name="email" value={data.email} onChange={handleChange}/><br/>
                    </div>
                    <div className="form-group">
                        <label className="mb-1">Password</label>
                        <input type="password" className="form-control" name="password" value={data.password} onChange={handleChange}/><br/>
                    </div>
                    <div className="form-check mt-3 text-center">
                        <button type="submit" className="btn btn-primary justify-content-center">Register</button>
                        <ToastContainer/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegForm;
