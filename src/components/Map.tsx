export default function Map() {
  const lat = 49.60236;
  const lng = 17.2385233;
  
  return (
    <iframe
      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDM2JzA4LjUiTiAxN8KwMTQnMTguNyJF!5e0!3m2!1scs!2scz!4v1709400000000!5m2!1scs!2scz`}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Stowlt Olomouc - Tomkova 45/314"
    />
  );
}
