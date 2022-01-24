const Info = () => {

    const hide = () => {
        document.getElementsByClassName('infopage')[0].style.display = "none";
    }

    return ( 
        <div className="infopage">
            <div className="blur"></div>
            <div className="instructions">
                    <h1 className="_heading">How to use?</h1>
                    <ol>
                        <li>Choose a Traversal</li>
                        <li>Create barriers by clicking on grid cells.</li>
                        <li>Click on "DONE CREATING BARRIERS".</li>
                        <li>Choose a starting point and ending point.</li>
                    </ol> 
                    <div className="close-btn-container">
                        <button className="close-btn" onClick={hide}>CLOSE</button>
                    </div>
                    
            </div>
        </div>
     );
}
 
export default Info;