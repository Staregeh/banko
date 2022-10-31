import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeCodeMirrorTheme } from '../../slices/codeMirrorThemeSlice';
import { useSelector } from 'react-redux';
import codeMirrorThemes from '../../utils/CodeMirrorThemes';


function ThemeSelect({ margins }) {

    const [theme, setTheme] = useState(useSelector((state) => state.codeMirrorTheme.value));

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const new_theme = event.target.value;
        setTheme(new_theme);
        dispatch(changeCodeMirrorTheme(new_theme));
    };

    useEffect(() => {
        localStorage.setItem('code-mirror-theme', theme);
    }, [theme]);

    return (
        <Box sx={{ minWidth: 200 }}>
            <FormControl sx={{ minWidth: 200, ...margins }} size="small">
                <InputLabel id="code-mirror-theme-select-label">Code Theme</InputLabel>
                <Select
                    labelId="code-mirror-theme-select-label"
                    id="code-mirror-theme-select"
                    value={theme}
                    label="Code Theme"
                    onChange={handleChange}
                >
                { Object.keys(codeMirrorThemes).map((current_theme, index) => (
                    <MenuItem key={index} value={current_theme}>{current_theme}</MenuItem>
                ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default ThemeSelect;
