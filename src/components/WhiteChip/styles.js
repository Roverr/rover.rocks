import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core';

const marginChip = styled(Chip)`
    margin-right: 12px;
`;

const styles = theme => ({
    root: {
      backgroundColor: 'white',
    },
  });

export const StyledChip = withStyles(styles)(marginChip);