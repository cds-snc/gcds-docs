async function getLatestCdnVersion() {
  try {
    // Fetch package metadata
    const response = await fetch(
      'https://registry.npmjs.org/@cdssnc/gcds-components',
    );
    const data = await response.json();

    // Get latest version and release date
    const latestVersion = data['dist-tags'].latest;
    const versions = data.versions;
    const releaseDate = new Date(data.time[latestVersion]);

    // Format the release date to 'YYYY-MM-DD'
    const formattedReleaseDate = `${releaseDate.getFullYear()}-${String(releaseDate.getMonth() + 1).padStart(2, '0')}-${String(releaseDate.getDate()).padStart(2, '0')}`;

    return { version: latestVersion, releaseDate: formattedReleaseDate };
  } catch (error) {
    console.error('Error fetching latest version:', error);
    return { version: 'Unknown', releaseDate: 'Unknown' };
  }
}

module.exports = { getLatestCdnVersion };
