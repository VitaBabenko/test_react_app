import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{
        marginTop: '50',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
      wrapperClass="progress-bar-wrapper"
      borderColor="#471ca9"
      barColor="#ae7be3"
    />
  );
};
