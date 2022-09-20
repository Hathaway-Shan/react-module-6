export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <img src={`https://flagcdn.com/${iso2.toLowerCase()}.svg`} width="30" />
      <div className="title">{name}</div>
    </div>
  );
}
