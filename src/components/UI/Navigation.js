import React from 'react'
import { useRoutes, A } from 'hookrouter'
import CharacterPage from '../characters/Characterpage'
// import CharacterGrid from '../characters/CharacterGrid'
import EpisodePage from '../episodes/EpisodePage'

const Navigation = () => {

    const NavRoutes = {
        "/characters": () => <CharacterPage />,
        "/episodes": () => <EpisodePage />
    }
    
    // Hooks to Navigation Routes
    const routeResult = useRoutes(NavRoutes)

    return (
        <div>
            <nav className='nav-bar'>
                <ul className='nav-menu'>
                    <li className='nav-menu-item'>
                        <A href='/characters'>Characters</A>
                    </li>
                    <li className='nav-menu-item'>
                        <A href='/episodes'>Episodes</A>
                    </li>
                    <li className='nav-menu-item'>
                        <A href='/quotes'>Quotes</A>
                    </li>
                    <li className='nav-menu-item'>
                        <A href='/deaths'>Death Count</A>
                    </li>
                </ul>
            </nav>

            {routeResult}
        </div>
    )
}

export default Navigation
