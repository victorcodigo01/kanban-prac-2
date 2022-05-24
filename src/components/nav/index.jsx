import './style.css';

function Nav() {
    return ( 
    <div className="wrap-navigation">
        <div>
            <p className='bold'>Version 1.0</p>
            <p>Update</p>
        </div>
        <input className="input" type="text" placeholder="Filter tasks" />
    </div>
    )
}

export default Nav;