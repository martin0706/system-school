import {useEfect,useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

const OptionCourses = (props) => {

    return (
        <>
                  <option value={props.title}>{props.title}</option>
             <style jsx>
                {`
             

          `}
            </style>
        </>
    );
}

export default OptionCourses;