import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useCallback, useState } from 'react';

interface Props {
  onSort: (order: SortOptions) => void;
}

export enum SortOptions {
  MostLiked = 'mostLiked',
  SongNameAZ = 'songNameAZ',
}

const SortBy = ({ onSort }: Props) => {
  const [order, setOrder] = useState('mostLiked');
  const handleChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      onSort(event.target.value as SortOptions);
      setOrder(event.target.value);
    },
    [onSort],
  );

  return (
    <FormControl
      sx={{
        minWidth: 120,
        margin: 1,
      }}
    >
      <InputLabel>Sort</InputLabel>
      <Select value={order} label="order" onChange={handleChange}>
        <MenuItem value="mostLiked">Most liked</MenuItem>
        <MenuItem value="songNameAZ">Song name A-Z</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortBy;
