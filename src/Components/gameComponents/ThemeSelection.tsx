import React from "react";
import sloth from "../../images/themes/sloth/green-ninja.png";
import cat from "../../images/themes/cat/mexican-cat.jpg";
import duck from "../../images/themes/duck/watermelon-duck.jpg";
import george from "../../images/themes/george/happy-george.jpg";
import iceAge from "../../images/themes/ice-age/scrat.png";
import keanu from "../../images/themes/keanu/wicks-keanu.jpg";
import southPark from "../../images/themes/south-park/cartman.png";

interface ThemeSelectionProps {
  selectedTheme: string;
  setSelectedTheme: (theme: string) => void;
}

const ThemeSelection = ({
  setSelectedTheme,
  selectedTheme,
}: ThemeSelectionProps) => {
  const isThemeSelected = (theme: string) =>
    theme === selectedTheme ? "selected-theme" : "";

  const handleThemeSelected = (theme: string): void => setSelectedTheme(theme);

  const renderTheme = (theme: string, image: string) => (
    <img
      src={image}
      alt={theme}
      className={`${isThemeSelected(theme)} image-circle`}
      onClick={() => handleThemeSelected(theme)}
    />
  );

  return (
    <>
      {renderTheme("sloth", sloth)}
      {renderTheme("cat", cat)}
      {renderTheme("duck", duck)}
      {renderTheme("george", george)}
      {renderTheme("ice-age", iceAge)}
      {renderTheme("keanu", keanu)}
      {renderTheme("south-park", southPark)}
    </>
  );
};

export default ThemeSelection;
