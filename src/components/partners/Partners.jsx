import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPartnertComponentData } from '../../api/api';

import { partnersOuter, partnersItemList, partnersItemCard } from './Partners.module.css';
import { Loading, Error } from '..';

export default function Partners() {
  const [partnersData, setPartnersData] = useState();
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  async function onMount() {
    try {
      const { total, partnersMiniatureArray } = await getPartnertComponentData();
      setPartnersData(partnersMiniatureArray);
    } catch (e) {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    onMount();
  }, []);

  return (
    <>
      {(loading && !failed) && (
        <Loading />
      )}
      {(failed) && (
        <Error />
      )}
      {(!loading && !failed) && (
        <section className={partnersOuter} id="parceiros">
          <h1>Parceiros</h1>
          <p>Setores parceiros diretamente ligados na iniciativa MPRJ Digital.</p>
          <div className={partnersItemList}>
            {partnersData && partnersData.map(({ id, name, imageSrc, hasPage }) => {
              if (hasPage) {
                return (
                  <Link key={id} to={`/parceiro/${name}/sobre`}>
                    <img src={imageSrc} alt={name} className={partnersItemCard} />
                  </Link>
                );
              }
              return <img key={id} src={imageSrc} alt={name} className={partnersItemCard} />;
            })}
          </div>
        </section>
      )}
    </>
  );
}
