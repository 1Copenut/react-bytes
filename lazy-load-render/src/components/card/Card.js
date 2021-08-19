import React from 'react';

const Card = (props) => {
  const { album, band, releaseDate, releaseDatetime, members } = props.data;
  const bandMembers = members.map((member) => (
    <>
      <dd>{member.name}</dd>
      <dt>{member.instrument}</dt>
    </>
  ));

  return (
    <li>
      <div>
        <h2>{album}</h2>
        <p>{band}</p>
        <time dateTime={releaseDatetime}>Release date: {releaseDate}</time>
        <dl>{bandMembers}</dl>
      </div>
    </li>
  );
};

export default Card;
