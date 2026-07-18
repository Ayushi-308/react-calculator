import { useEffect} from "react";

function Profile() {
    useEffect(()=>{
       getAccess();
    },[]);
    const refreshAccessToken = ()=>{
        return fetch ('https://dummyjson.com/auth/refresh',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                refreshToken : localStorage.getItem("refreshToken"),
                expiresInMins: 30,
            }),
            credentials: 'include'
        })
        .then(res=>res.json())
        .then(data=>{
            localStorage.setItem("accessToken", data.accessToken);
            return data.accessToken;
        })
        
    }
    const getAccess = ()=>{
        const token=localStorage.getItem("accessToken") ;        
        fetch('https://dummyjson.com/auth/me',{
            method: 'GET',
            headers: {
           Authorization: `Bearer ${token}` },
           credentials:'include'
        })
        .then(res=>{
            if(res.status == 401){
               refreshAccessToken()
               .then(newToken => {
                    return fetch("https://dummyjson.com/auth/me", {
                        method: "GET",
                        headers: {
                             Authorization: `Bearer ${newToken}`
                        },
                        credentials: "include"
                    });
                });
            }
            return res;                   
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log("access");
        });
    };
    return(
        <div className="p-40">
            hello
        </div>
    );
}
export default Profile;