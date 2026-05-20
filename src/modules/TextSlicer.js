import Button from "@/components/Button/index.js";

export default function (str, length) {
  if (!str) return '';
  if (str.length <= length) return str;

  const spaceIndex = str.indexOf(' ', length);

  if (spaceIndex !== -1) {
    let sliced = str.slice(0, spaceIndex);
    sliced = sliced.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]+$/, '');
    return sliced + '...';
  }

  return str;
}