
function NoResults(){
    return (
        <div style={{
            width: '100%', 
            height: '200px', 
            display: 'flex',  
            alignItems: 'center',  
            justifyContent: 'center'}}
        >
            <div>
                <h1>Oops</h1>  
                <p>There are no results found.</p>
            </div>
        </div>
    );
}

export default NoResults;