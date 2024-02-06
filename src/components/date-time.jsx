
export function DateTime(){  
    var now = new Date();
    var weeks =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return(
        <div className="container-fluid">
            <div className="d-flex  justify-content-lg-between " >
                <span>{weeks[now.getDay()]}</span>
                <span>{now.getDate()} {months[now.getMonth()]} {now.getFullYear()}</span>
                <span>{now.toLocaleTimeString()}</span>               
            </div>
        </div>
    )
}
