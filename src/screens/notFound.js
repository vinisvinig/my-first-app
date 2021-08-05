import React from 'react';

import { Link } from 'react-router-dom'

const NotFoundScreen = () => {
    return(
        <div>
            <h3>Página não encontrada</h3>
            <Link to='/'>Voltar para listagem</Link>
        </div>
    )
}

export default NotFoundScreen;