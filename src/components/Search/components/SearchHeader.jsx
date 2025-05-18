import SearchInput from './SearchInput';
import ArrowBackButton from './ArrowBackButton';

export default function SearchHeader( { handleToggleView } ) {
  return (
    <div className="search-input-wrapper loading">
      <ArrowBackButton handleToggleView={handleToggleView} />
      <SearchInput />
    </div>
  );
}
