import React from 'react'


function PokeComp(props) {

    const { pokemon } = props

    return (
        <div>
            <div className='flex flex-row p-auto m-auto'>
                <div className=" text-black p-5">

                    <p
                        className='text-xl font-bold'
                    >{pokemon.name}</p>

                    <img
                        src={pokemon.sprites.front_default}
                        style={{ width: 300, height: 300, objectFit: 'cover' }}
                        className='m-auto'
                    />

                </div>
            </div>
        </div>
    )
}

export default PokeComp