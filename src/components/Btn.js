import React from 'react'

function Btn(props) {
    const { className, onClick } = props

    return (
        <button
            onClick={ onClick }
            className={ "p-0.5 rounded-full bg-gradient-to-r from-[#72FF1C] to-[#00F0FF] via-[#5C24FF] " + className }
        >
            <div className='bg-black rounded-full px-10 py-3'>
                {props.children}
            </div>
        </button>
    )
}

export default Btn