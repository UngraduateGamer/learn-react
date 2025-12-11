import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating(props) {
  return (
    <Stack spacing={1} className='relative'>
      <Rating name="half-rating-read" defaultValue={props.data?.rating} precision={0.5} readOnly  size='small'  /> 
      <span className=' absolute right-32 text-sm text-black opacity-50 -bottom-1 font-semibold'>({props.data?.reviews.length})</span>
    </Stack>
  );
}