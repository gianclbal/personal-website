import React, { useState, useEffect } from 'react';

/*
 * A single menu item
 * I deconstruct props to provide more readable code, allowing
 * any future coders to see exactly what props are expected
 */
export const MenuItem = ({ itemName, active }) => {
  /*
   * Store our anchorTarget in state
   * We do not set it here, preferring to wait for after the component
   * is mounted to avoid any errors
   */
  const [anchorTarget, setAnchorTarget] = useState('');

  console.log(anchorTarget);
  /*
   * When the component mounts and/or updates, set our AnchorTarget based
   * on the itemName
   */
  useEffect(() => {
    setAnchorTarget(document.getElementById(itemName));
  }, [itemName]);

  /*
   * Where all the magic happens -- scrollIntoView on click
   */
  const handleClick = event => {
    event.preventDefault();
    const headerOffset = 90;
    const scrolledY = window.scrollY;
    const elementPosition = anchorTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth'});

    if (scrolledY) {
      window.scroll(0, scrolledY - headerOffset)
    }

  };

  /*
   * Return the MenuItem as JSX
   * Remember to set your ariaLabel for accessability!
   */
  return (
    <li>
      <a href={`#${itemName}`}
         onClick={handleClick}
         className={active}
         ariaLabel={`Scroll to ${itemName}`}>
        {itemName}
      </a>
    </li>
  );
};