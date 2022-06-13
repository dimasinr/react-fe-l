import { emphasize, styled } from '@mui/material/styles';
import { Breadcrumbs, Chip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });
  
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

export const BreadCumbs = () => {
  return (
    <div className='mt-3'>
      <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="/"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb 
        component="a" 
        href="#" 
        label="Categories"
        // deleteIcon={<ExpandMoreIcon />}
        // onDelete={handleClick}
        />
        <StyledBreadcrumb
          label="Eyelash"
        />
      </Breadcrumbs>
    </div>
    </div>
  )
}
