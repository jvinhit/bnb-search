export default function serialize(obj) {
  return (typeof obj === 'object'
    ? (Object.entries(obj).map((i) => [i[0], encodeURIComponent(i[1])].join('=')).join('&')) : '');
}
