/* eslint-disable camelcase */
export default function openDataTransform({ count, results }) {
  const openDataItemsArray = results.map((item) => {
    const { title, score_dados, notes, usage, license,
      metadata_modified, resources, external_link } = item;
    const { format } = resources[0] ? resources[0] : '';
    const lastUpdated = new Date(metadata_modified).toLocaleDateString('pt-br');
    return {
      title,
      score_dados,
      description: notes,
      lastUpdated,
      owner: item?.organization?.title,
      usage,
      license,
      format,
      downloadLink: external_link,
    };
  });

  return {
    total: count,
    openDataItemsArray,
  };
}
