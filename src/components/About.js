import React from 'react'


export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor:  props.mode === 'dark'?'rgb(36 74 104)':'white',
       
    }

    return (
        <div className="container" style={myStyle}>
            <h1 className="my-2" style={{color: props.mode === 'dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze your text 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae reprehenderit ex vel perferendis laudantium atque non quo. In soluta voluptatum voluptatem error nemo ducimus enim laudantium quisquam asperiores numquam.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae reprehenderit ex vel perferendis laudantium atque non quo. In soluta voluptatum voluptatem error nemo ducimus enim laudantium quisquam asperiores numquam.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae reprehenderit ex vel perferendis laudantium atque non quo. In soluta voluptatum voluptatem error nemo ducimus enim laudantium quisquam asperiores numquam.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div> */}
        </div>
    )
}
