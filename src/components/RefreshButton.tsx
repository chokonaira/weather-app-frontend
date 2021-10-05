import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Refresh from '@mui/icons-material/Refresh';

const RefreshButton: React.FC = () => {

  return (
    <LoadingButton
      loading={false}
      loadingPosition="end"
      variant={'outlined'}
      endIcon={<Refresh />} >
      Refresh
    </LoadingButton>
  )
}
export default RefreshButton;