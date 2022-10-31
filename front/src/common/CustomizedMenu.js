import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import useTheme from '@mui/material/styles/useTheme';
import ThemeSelect from '../common/ThemeSelect';
import { withPather } from 'react-pather'; 
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function CustomizedMenu({ pather, page, goTo }) {

  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '15px',
            paddingRight: '15px',
            color: 'white',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
            },
        }}
        onClick={handleClick}
      >
        <span
            style={{
                color: 'white',
                fontSize: '19px',
            }}
        >
            {page?.name}
        </span>
      </Box>
      <StyledMenu
        id="styled_menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        { !!page?.menuItems &&
            page.menuItems.map((menuItem, index) => {
                return (                
                <MenuItem onClick={() => {
                    if(!!menuItem?.handler){
                      // Handler
                      menuItem?.handler(pather, navigate);
                    } else {
                      // Route
                      goTo(menuItem); 
                    }
                    setAnchorEl(null);
                  }} disableRipple key={index} 
                    sx={{display: 'flex'}}>
                    {menuItem?.name}
                    <Box sx={{mt: 1, ml: 'auto'}}>
                        {menuItem?.icon}
                    </Box>
                </MenuItem>
            )
            })
        }
        <MenuItem>
          <ThemeSelect margins={{mt: .7, mb: .7}}/>
        </MenuItem> 
      </StyledMenu>
    </div>
  );
}

CustomizedMenu.propTypes = {
  pather: PropTypes.object.isRequired,
}

export default withPather()(CustomizedMenu);