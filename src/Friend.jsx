export default function Friend({found}){
    const {name, username, email} =found;
    return(
        <div className="box">
            <h3>Name: {name} </h3>
            <h4>Username: {username}</h4>
            <p>Email:{email} </p>
        </div>
    )
}