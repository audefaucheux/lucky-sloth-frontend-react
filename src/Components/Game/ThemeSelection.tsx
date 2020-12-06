import React from "react";
import imageCollection from "../../Helpers/ImageCollection";

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
      {renderTheme("sloth", imageCollection.sloth[1])}
      {renderTheme("cat", imageCollection.cat[1])}
      {renderTheme("duck", imageCollection.duck[1])}
      {renderTheme("george", imageCollection.george[1])}
      {renderTheme("ice-age", imageCollection["ice-age"][1])}
      {renderTheme("keanu", imageCollection.keanu[2])}
      {renderTheme("south-park", imageCollection["south-park"][1])}
    </>
  );
};

export default ThemeSelection;
