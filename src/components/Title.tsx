import React from 'react';

type Props = {
  headline: string;
};

function Title(props: Props) {
  const { headline } = props;

  return <h2>{headline}</h2>;
}

export default Title;
