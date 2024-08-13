import React from 'react'

const Btn = ({text="button",extraText=true,size="s",scrollTo=""}) => {
     
    const getSize =()=>{
        if(size==='s'){
            return {fontSize:"1.5rem",padding:"1.5rem 4.1rem"};
        }
        else if(size==='m'){
            return {fontSize:"1.7rem",padding:"1.7rem 4.6rem"};
        }
        else if(size==='l'){
            return {fontSize:"2.1rem",padding:"2rem 5.5rem"};
        }
    }

    const getPSize =()=>{
        if(size==='s'){
            return {fontSize:"1.2rem",padding:"1rem 0",color:"#fff"};
        }
        else if(size==='m'){
            return {fontSize:"1.3rem",padding:"1rem 0",color:"#fff"};
        }
        else if(size==='l'){
            return {fontSize:"1.9rem",padding:"1rem 0",color:"#fff"};
        }
    }
  return (
    <div className='btn-div'>
        <button className="btn-primary" onClick={scrollTo} style={getSize()}> {text} <i className="fa-solid fa-chevron-right"></i></button>
        {extraText?<p style={getPSize()}>Starting at just ₹30K/Month</p>:<></>}
    </div>
  )
}

export default Btn
