import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Artists = () => {
  let { id } = useParams();
  const [artirst, setArtirst] = useState({});

  async function fecthArtist() {
    const response = await ArtistsService.show(id);
    setArtirst(response.data)
  }

  useEffect(() => {
    fecthArtist();
  },[])

  return (
    <Fragment>
    </Fragment>
  )
}

export default Artists;