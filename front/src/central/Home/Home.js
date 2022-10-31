import { useState } from 'react';
import '../../../styles/Home.css'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import FilterSection from './FilterSection'
import SearchInput from './SearchInput'
import AlgoResultSection from './AlgoResultSection'
import EmailSubscription from '../../common/EmailSubscription/EmailSubscription'

function Home(props) {

    const [selectedOptions, setSelectedOptions] = useState({
        tags: [],
        text: "",
    });

    function modifyOption(params){
        //
        // params = {
        //      'tags': 'tag_name' || 'text': 'new_text'  
        // }
        //
        // Note: Now works when params has only 1 property (tags || text)
        //
        
        let result = {}
        for (const optionType in params) {
            
            if (optionType === 'text'){
                setSelectedOptions((prevState, props) => {
                    return { 
                        ...prevState,
                        [optionType]: params[optionType].trim(),
                    }
                });
                return;
            }

            let value = params[optionType];
            let formattedValue = value.toLowerCase().replace(' ', '_');
            let newTypeOptions = selectedOptions[optionType];
            
            let _continue = false;
            for (const index in selectedOptions[optionType]){
                if(selectedOptions[optionType][index] === formattedValue){
                    
                    // Item is deleted from filters
                    if (optionType === 'tags') {
                        newTypeOptions.splice(index, 1); 
                        result[optionType] = newTypeOptions;
                    }

                    _continue = true;
                }
            }
            
            if (_continue) continue;

            // Item added to filter options 
            newTypeOptions.push(formattedValue);
            result[optionType] = newTypeOptions;
        }
        
        setSelectedOptions((prevState, props) => {
            return { 
                ...prevState,
                ...result,
            }
        });
    }
    
    function getKey(){
        let total = 0;
        for(const param in selectedOptions){
            if(Array.isArray(selectedOptions[param])){
                total += selectedOptions[param].length
            }
        }
        return total
    }

    return (
        <Box l={10} r={10}>
            <Grid
                container
                style={{ justifyContent: 'center', marginTop: '1%' }}
                spacing={2}
            >
                <Grid item xs={12} md={3}>
                    <FilterSection 
                        selected={selectedOptions} 
                        modifyOption={modifyOption}
                    />  
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <SearchInput modifyOption={modifyOption}/>
                        </Grid>
                        <Grid item xs={12}>
                            <AlgoResultSection key={getKey()} selected={selectedOptions}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <EmailSubscription/>
        </Box>
    )
}

export default Home
