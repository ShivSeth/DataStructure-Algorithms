export function commonCharacters(strings: string[]) {
  const alphabetsSetArray = [...new Set(strings[0])];
  const result = alphabetsSetArray.filter((alphabets) =>
    strings.slice(1).every((s) => s.includes(alphabets))
  );
  return result;
}

// Do not edit the line below.
commonCharacters(['abc', 'bcd', 'cbaccd']);
