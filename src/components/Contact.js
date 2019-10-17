import React from 'react'
import './Contact.css'

/*const Contact = ({avatar, name, online}) => {
    return (
       <div className="Contact">
       <img className="avatar" src={avatar} alt={name}/>
       <div className='contain'>
      <p className='name'>{name}</p>
      
      <div className='status'>
      <div className={online? 'status-online': 'status-offline'}></div>
      <p className='status-text'>
             {online? 'online': 'offline'}
      </p>
     
     </div>
     </div>
 </div>
 

    );
  }
*/
const Contact = ({avatar, name, online}) => {
return(
  <div className="Contact">
    <img className="avatar" src={avatar} alt={name}/>
    <div>
      <p className="name">{name}</p>
      <div className="status">
        <p className="status-text">
          <span className={online ? "status-online" : "status-offline"}></span>
          {online ? "online" : "offline"}
        </p>
      </div>
   </div>
</div>
);
}




export default Contact