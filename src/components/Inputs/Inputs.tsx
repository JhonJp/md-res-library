import React, { FC, useState } from 'react';
import { TextField, withStyles, InputAdornment } from '@material-ui/core';
import { INT_AutoCompField, INT_InlineTextField } from '../../interfaces';
import { Autocomplete } from '@material-ui/lab';
import { Lock, User } from '../../assets/SVG';

const CustomTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 30,
        },
    },
})(TextField)

export const InlineTextField: FC<INT_InlineTextField> = (props) => {
    const { error, errorText, defaultValue, id, label, dense, labelled, password, ...others } = props
    const [focus, setFocus] = useState('#c0c0c0')

    const onFocus = () => {
        setFocus('#3f51b5')
    }
    const onBlur = () => {
        setFocus('#c0c0c0')
    }

    return (
        <>
            {
                labelled ?
                    <>
                        <TextField
                            error={error}
                            {...others}
                            id={id}
                            fullWidth
                            label={label}
                            defaultValue={defaultValue}
                            helperText={errorText}
                            variant="outlined"
                            margin={dense ? 'dense' : undefined}
                        />
                    </> : <>
                        <TextField
                            error={error}
                            id={id}
                            fullWidth
                            {...others}
                            placeholder={label}
                            defaultValue={defaultValue}
                            helperText={errorText}
                            variant="outlined"
                            onFocus={onFocus}
                            onBlur={onBlur}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        {
                                            password ? <Lock fill={focus} /> : <User fill={focus} />
                                        }
                                    </InputAdornment>
                                ),
                            }}
                            margin={dense ? 'dense' : undefined}
                        />
                    </>
            }

        </>
    )
}

export const RoundedTextField: FC<INT_InlineTextField> = (props) => {
    const { error, errorText, defaultValue, id, label, labelled, password } = props
    const [focus, setFocus] = useState('#c0c0c0')

    const onFocus = () => {
        setFocus('#3f51b5')
    }
    const onBlur = () => {
        setFocus('#c0c0c0')
    }
    return (
        <>
            {
                labelled ?
                    <>
                        <CustomTextField
                            error={error}
                            id={id}
                            fullWidth
                            label={label}
                            defaultValue={defaultValue}
                            helperText={errorText}
                            variant="outlined"
                        />
                    </> : <>
                        <CustomTextField
                            error={error}
                            id={id}
                            fullWidth
                            placeholder={label}
                            defaultValue={defaultValue}
                            helperText={errorText}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        {
                                            password ? <Lock fill={focus} /> : <User fill={focus} />
                                        }
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </>
            }

        </>
    )
}


export const AutoCompleteSearch: FC<INT_AutoCompField> = (props) => {
    const { options, id, label, dense } = props
    return (
        <>
            <Autocomplete
                freeSolo
                id={id}
                disableClearable
                autoSelect
                options={options.map((option) => option.label)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={label}
                        margin={dense ? 'dense' : 'normal'}
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}
            />
        </>
    )
}

