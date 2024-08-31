export const formatArtists = (artists) => {
    return artists.map(artist => artist.name).join(', ');
}; 