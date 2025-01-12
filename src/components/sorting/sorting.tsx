import classNames from 'classnames';
import { useState } from 'react';

type SortingProps<TOption extends string> = {
  sortingOptions: TOption[];
  activeOption: TOption;
  optionLabels: Record<TOption, string>;
  onOptionChanged: (option: TOption) => void;
};

export default function Sorting<TOption extends string>({
  sortingOptions,
  activeOption,
  optionLabels,
  onOptionChanged,
}: SortingProps<TOption>) {
  const [isOpened, setIsOpened] = useState(false);

  const arrowIconStyle = {
    transform: `translateY(-70%) ${isOpened ? '' : 'rotate(-90deg)'}`,
  };

  const handleOnOptionSelect = (option: TOption) => {
    setIsOpened(false);
    if (option === activeOption) {
      return;
    }

    onOptionChanged(option);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpened((prevState) => !prevState)}
      >
        {optionLabels[activeOption]}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
          style={arrowIconStyle}
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames(
          'places__options places__options--custom',
          isOpened && 'places__options--opened'
        )}
      >
        {sortingOptions.map((option) => (
          <li
            key={option}
            className={classNames(
              'places__option',
              option === activeOption && 'places__option--active'
            )}
            tabIndex={0}
            onClick={() => handleOnOptionSelect(option)}
          >
            {optionLabels[option]}
          </li>
        ))}
      </ul>
    </form>
  );
}
