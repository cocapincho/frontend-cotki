import React from 'react';

const Facebook = (props) => {
  const { height } = props;
  const style = {
    height,
  };
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 112.196 112.196'
      style={style}
    >
      <circle cx='56.098' cy='56.098' r='56.098' fill='#fff' />
      <path
        d='M70.201 58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34c0-5.964 2.833-15.303 15.301-15.303l11.234.047v12.51h-8.151c-1.337 0-3.217.668-3.217 3.513v7.585h11.334l-1.325 12.876z'
        fill='#333333'
      />
    </svg>
  );
};
export default Facebook;
