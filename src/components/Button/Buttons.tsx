import { Button } from '@material-ui/core';
import { FC } from 'react';
import { Btns } from '../../interfaces';

export const DefaultBtn: FC<Btns> = (props) => {
    const { label, onClick, ...others } = props
    return (
        <>
            <Button variant="contained" onClick={onClick} {...others}>{label}</Button>
        </>
    )
}