import React from 'react'

function Header( { setIsAdding}) {
    return (
        <header>
            <h1>Student Management software</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px'}}>
                <button onClick={()=>setIsAdding(true)}
                className='round-button'>Add student</button>

            </div>
        </header>
        
    )
}

export default Header