import * as React from 'react';
import { useNavigate  } from 'react-router-dom';

export default function DefaultRedirect() {
    const navigate = useNavigate ();

    React.useEffect(() => {
        navigate('/home');
    });

    return null;
}
