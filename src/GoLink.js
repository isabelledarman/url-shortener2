import React, {useEffect, useState} from 'react';
import { useParams, useNavigation, useNavigate } from 'react-router-dom';
import {db} from './firebase';

function GoLink(){

    const {code} = useParams();
    const history = useNavigate();
    const [url, setUrl] = useState('');

    useEffect(() => {
        let query = db.collection("urls").where("code", "==", code);
        query.onSnapshot((data) => {
            if (data.empty) {
                history("/");
            } else {
                let finalData = data.docs[0].data();
                setUrl(finalData.url);
            }
        });
    }, [code, history]);

    useEffect(() => {
        if (url !== '') {
            window.location.replace(url);
        }
    }, [url]);

    return(
        <div>
            
        </div>
    )
}

export default GoLink;