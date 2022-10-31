import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import { SearchOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react'

import { styled } from '@mui/system'

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& label.Mui-focused': {
        color: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '1px solid',
            borderColor: theme.palette.primary.main,
            borderRadius: '15px',
        },
        '&:hover fieldset': {
            border: '2px solid',
            borderColor: theme.palette.primary.main,
            borderRadius: '15px',
        },
        '&.Mui-focused fieldset': {
            border: '2px solid',
            borderColor: theme.palette.primary.main,
        },
        fontSize: '18px',
    },
}))

function SearchInput({ modifyOption }) {
    const [text, setText] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            modifyOption({ text: text })
        }, 700)
        return () => clearTimeout(timer)
    }, [text])

    return (
        <StyledTextField
            fullWidth
            id="outlined-basic"
            label="Algorithm"
            variant="outlined"
            InputProps={{
                endAdornment: (
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                ),
            }}
            onChange={(e) => {
                setText(e.target.value)
            }}
            autoFocus
        />
    )
}

export default SearchInput
