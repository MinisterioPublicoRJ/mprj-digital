/* eslint-disable camelcase */
export default function openDataTransform({ count, results }) {
  const openDataItemsArray = results.map((item) => {
    const { title, score, notes, usage, license, metadata_modified, external_link } = item;
    const lastUpdated = new Date(metadata_modified).toLocaleDateString('pt-br');
    return {
      title,
      score,
      description: notes,
      lastUpdated,
      owner: item?.organization?.title,
      usage,
      license,
      downloadLink: external_link,
    };
  });

  return {
    total: count,
    openDataItemsArray,
  };
}
